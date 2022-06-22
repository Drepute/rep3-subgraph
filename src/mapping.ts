import { ProxyDeployed } from "../generated/Manager/Manager";
import { Claim, Issue } from "../generated/templates/REP3Token/REP3Token";
import { AssociationBadges, Dao, MembershipNFT } from "../generated/schema";
import { REP3Token as REP3TokenTemplate } from "../generated/templates";

export function handleProxyDeployed(event: ProxyDeployed): void {
  let dao = Dao.load(event.params.contractAddress);
  if (!dao) {
    dao = new Dao(event.params.contractAddress);
    dao.txHash = event.transaction.hash;
  }
  REP3TokenTemplate.create(event.params.contractAddress);
  dao.save();
}

export function handleClaim(event: Claim): void {
  let dao = Dao.load(event.address);
  if (dao) {
    let membershipNft = MembershipNFT.load(event.transaction.hash);
    if (!membershipNft) {
      membershipNft = new MembershipNFT(event.transaction.hash);
      membershipNft.tokenID = event.params.tokenId;
      membershipNft.contractAddress = event.address;
      membershipNft.save();
    }
  }
}

export function handleIssue(event: Issue): void {
  let associationBadges = AssociationBadges.load(event.transaction.hash);
  if (!associationBadges) {
    associationBadges = new AssociationBadges(event.transaction.hash);
    associationBadges.contractAddress = event.address;
    associationBadges.type = event.params._type;
  }
}
