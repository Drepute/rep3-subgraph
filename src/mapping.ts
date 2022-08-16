import { ProxyDeployed } from "../generated/Manager/Manager";
import {
  Claim,
  Issue,
  REP3Token,
  ApproverAdded,
  Upgrade,
} from "../generated/templates/REP3Token/REP3Token";
import { AssociationBadge, Dao, MembershipNFT } from "../generated/schema";
import { REP3Token as REP3TokenTemplate } from "../generated/templates";

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
  let proxyDao = Dao.load(event.address);

  if (proxyDao) {
    let approvers = proxyDao.approver;
    approvers.push(event.params.approver);
    proxyDao.approver = approvers;
    proxyDao.save;
  }
}

export function handleClaim(event: Claim): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(event.transaction.hash);
    let nftHashes = dao.NFTHashes;
    nftHashes.push(event.transaction.hash);
    dao.NFTHashes = nftHashes;
    dao.save();
    if (!membershipNft) {
      const proxyContract = REP3Token.bind(event.address);
      membershipNft = new MembershipNFT(event.transaction.hash);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
      membershipNft.time = event.block.timestamp;
      let totalSupply = dao.totalSupply;
      dao.totalSupply = totalSupply + 1;
      membershipNft.save();
    }
  }
}

export function handleUpgrade(event: Upgrade): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(event.transaction.hash);
    if (!membershipNft) {
      membershipNft = new MembershipNFT(event.transaction.hash);
      const proxyContract = REP3Token.bind(event.address);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.time = event.block.timestamp;
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
    }
    membershipNft.save();
  }
}

export function handleIssue(event: Issue): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let associationBadges = AssociationBadge.load(
      `${event.transaction.hash.toHexString()}${event.params.tokenId}`
    );
    if (!associationBadges) {
      const proxyContract = REP3Token.bind(event.address);
      associationBadges = new AssociationBadge(
        `${event.transaction.hash.toHexString()}${event.params.tokenId}`
      );
      associationBadges.contractAddress = event.address;
      associationBadges.membershipId = event.params.memberTokenId;
      associationBadges.tokenID = event.params.tokenId;
      associationBadges.type = event.params._type;
      let totalSupply = dao.totalSupply;
      dao.totalSupply = totalSupply + 1;
      associationBadges.metadatUri = proxyContract.tokenURI(
        event.params.tokenId
      );
      associationBadges.txHash = event.transaction.hash;
      associationBadges.claimer = proxyContract.ownerOf(event.params.tokenId);
      associationBadges.save();
      dao.save();
    }
  }
}
