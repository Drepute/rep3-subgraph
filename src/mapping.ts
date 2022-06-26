import { ProxyDeployed } from "../generated/Manager/Manager";
import {
  Claim,
  Issue,
  REP3Token,
  ApproverAdded,
} from "../generated/templates/REP3Token/REP3Token";
import {
  AssociationBadges,
  Dao,
  MembershipNFT,
  Approver,
} from "../generated/schema";
import { REP3Token as REP3TokenTemplate } from "../generated/templates";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleProxyDeployed(event: ProxyDeployed): void {
  let dao = Dao.load(event.params.contractAddress);
  if (!dao) {
    dao = new Dao(event.params.contractAddress);
    dao.txHash = event.transaction.hash;
    dao.name = "";
    dao.totalSupply = 0;
  }
  REP3TokenTemplate.create(event.params.contractAddress);
  dao.save();
}

export function handleApproverAdded(event: ApproverAdded): void {
  let approver = Approver.load(event.params.approver);
  let proxyDao = Dao.load(event.address);
  if (proxyDao) {
    if (proxyDao.name === "") {
      const proxyContract = REP3Token.bind(event.address);
      proxyDao.name = proxyContract.name();
      proxyDao.symbol = proxyContract.symbol();
    }
  }
  if (approver) {
    let dao = approver.dao;
    dao.push(event.address);
    approver.save();
  } else {
    approver = new Approver(event.params.approver);
    let dao = approver.dao;
    dao.push(event.address);
    approver.dao = dao;
    approver.save();
  }
}

export function handleClaim(event: Claim): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(event.transaction.hash);
    if (!membershipNft) {
      const proxyContract = REP3Token.bind(event.address);
      membershipNft = new MembershipNFT(event.transaction.hash);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
      let totalSupply = dao.totalSupply;
      dao.totalSupply = totalSupply + 1;
      membershipNft.save();
    }
  }
}

export function handleIssue(event: Issue): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let associationBadges = AssociationBadges.load(event.transaction.hash);
    if (!associationBadges) {
      associationBadges = new AssociationBadges(event.transaction.hash);
      associationBadges.contractAddress = event.address;
      associationBadges.type = event.params._type;
      let totalSupply = dao.totalSupply;
      dao.totalSupply = totalSupply + 1;
    }
  }
}
