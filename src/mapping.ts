import { ProxyDeployed } from "../generated/Manager/Manager";
import {
  Claim,
  Issue,
  REP3Token,
  ApproverAdded,
  Upgrade,
  MembershipTokenChange,
  ApproverRemoved,
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
    proxyDao.save();
  }
}

export function handleApproveRemoved(event: ApproverRemoved): void {
  let proxyDao = Dao.load(event.address);
  if (proxyDao) {
    let approvers = proxyDao.approver;
    const index = approvers.indexOf(event.params.approver);
    approvers.splice(index, 1);
    proxyDao.approver = approvers;
    proxyDao.save();
  }
}

export function handleClaim(event: Claim): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(
      `${event.transaction.hash.toHexString()}${event.params.tokenId}`
    );
    let nftHashes = dao.NFTHashes;
    nftHashes.push(event.transaction.hash);
    dao.NFTHashes = nftHashes;
    dao.save();
    if (!membershipNft) {
      const proxyContract = REP3Token.bind(event.address);
      membershipNft = new MembershipNFT(
        `${event.transaction.hash.toHexString()}${event.params.tokenId}`
      );
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
      membershipNft.time = event.block.timestamp;
      membershipNft.txHash = event.transaction.hash;
      let totalSupply = dao.totalSupply;
      dao.totalSupply = totalSupply + 1;
      membershipNft.save();
    }
  }
}

export function handleUpgrade(event: Upgrade): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(
      `${event.transaction.hash.toHexString()}${event.params.tokenId}`
    );
    if (!membershipNft) {
      membershipNft = new MembershipNFT(
        `${event.transaction.hash.toHexString()}${event.params.tokenId}`
      );
      const proxyContract = REP3Token.bind(event.address);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.time = event.block.timestamp;
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
      membershipNft.txHash = event.transaction.hash;
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

export function handleMembershipTokenChange(
  event: MembershipTokenChange
): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(
      `${event.transaction.hash.toHexString()}${event.params.tokenId}`
    );
    if (!membershipNft) {
      membershipNft = new MembershipNFT(
        `${event.transaction.hash.toHexString()}${event.params.tokenId}`
      );
      const proxyContract = REP3Token.bind(event.address);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.level = event.params.level.toString();
      membershipNft.category = event.params.category.toString();
      membershipNft.claimer = proxyContract.ownerOf(event.params.tokenId);
      membershipNft.time = event.block.timestamp;
      membershipNft.metadataUri = proxyContract.tokenURI(event.params.tokenId);
      membershipNft.txHash = event.transaction.hash;
    }
    membershipNft.save();
  }
}

// import { Deposit, Withdraw } from "../generated/ERC1967Proxy/ERC1967Proxy";
// import { BigInt } from "@graphprotocol/graph-ts";
// import { User } from "../generated/schema";

// export function handleDeposit(event: Deposit): void {
//   let user = User.load(event.params.user);
//   if (!user) {
//     user = new User(event.params.user);
//     user.amount = event.params.amount;
//     let pids: string[] = [];
//     pids.push(event.params.pid.toString());
//     user.pid = pids;
//     user.startTime = event.block.timestamp;
//     user.save();
//   } else {
//     if (!user.pid.includes(event.params.pid.toString())) {
//       let pids = user.pid;
//       pids.push(event.params.pid.toString());
//       user.pid = pids;
//     }
//     user.amount = user.amount.plus(user.amount);
//     user.save();
//   }
// }

// export function handleWithdraw(event: Withdraw): void {
//   let user = User.load(event.params.user);
//   if (user) {
//     if (!user.pid.includes(event.params.pid.toString())) {
//       let pids = user.pid;
//       pids.push(event.params.pid.toString());
//       user.pid = pids;
//     }
//     user.amount = user.amount.minus(user.amount);
//     const currentBalance = user.amount;
//     // if (currentBalance.toString() === "0") {
//     user.endTime = event.block.timestamp;
//     // }
//     user.save();
//   }
// }
