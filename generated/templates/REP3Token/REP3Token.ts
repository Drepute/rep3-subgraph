// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ApproverAdded extends ethereum.Event {
  get params(): ApproverAdded__Params {
    return new ApproverAdded__Params(this);
  }
}

export class ApproverAdded__Params {
  _event: ApproverAdded;

  constructor(event: ApproverAdded) {
    this._event = event;
  }

  get approver(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ApproverRemoved extends ethereum.Event {
  get params(): ApproverRemoved__Params {
    return new ApproverRemoved__Params(this);
  }
}

export class ApproverRemoved__Params {
  _event: ApproverRemoved;

  constructor(event: ApproverRemoved) {
    this._event = event;
  }

  get approver(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get level(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get category(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Issue extends ethereum.Event {
  get params(): Issue__Params {
    return new Issue__Params(this);
  }
}

export class Issue__Params {
  _event: Issue;

  constructor(event: Issue) {
    this._event = event;
  }

  get _type(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NameChange extends ethereum.Event {
  get params(): NameChange__Params {
    return new NameChange__Params(this);
  }
}

export class NameChange__Params {
  _event: NameChange;

  constructor(event: NameChange) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Revoke extends ethereum.Event {
  get params(): Revoke__Params {
    return new Revoke__Params(this);
  }
}

export class Revoke__Params {
  _event: Revoke;

  constructor(event: Revoke) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class REP3Token extends ethereum.SmartContract {
  static bind(address: Address): REP3Token {
    return new REP3Token("REP3Token", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _stringToArray(uriString: string): Array<string> {
    let result = super.call(
      "_stringToArray",
      "_stringToArray(string):(string[])",
      [ethereum.Value.fromString(uriString)]
    );

    return result[0].toStringArray();
  }

  try__stringToArray(uriString: string): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "_stringToArray",
      "_stringToArray(string):(string[])",
      [ethereum.Value.fromString(uriString)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getChainID(): BigInt {
    let result = super.call("getChainID", "getChainID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getChainID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getChainID", "getChainID():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getName(): string {
    let result = super.call("getName", "getName():(string)", []);

    return result[0].toString();
  }

  try_getName(): ethereum.CallResult<string> {
    let result = super.tryCall("getName", "getName():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getType(tokenId: BigInt): i32 {
    let result = super.call("getType", "getType(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toI32();
  }

  try_getType(tokenId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("getType", "getType(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprover(approver: Address): boolean {
    let result = super.call("isApprover", "isApprover(address):(bool)", [
      ethereum.Value.fromAddress(approver)
    ]);

    return result[0].toBoolean();
  }

  try_isApprover(approver: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isApprover", "isApprover(address):(bool)", [
      ethereum.Value.fromAddress(approver)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddApproverCall extends ethereum.Call {
  get inputs(): AddApproverCall__Inputs {
    return new AddApproverCall__Inputs(this);
  }

  get outputs(): AddApproverCall__Outputs {
    return new AddApproverCall__Outputs(this);
  }
}

export class AddApproverCall__Inputs {
  _call: AddApproverCall;

  constructor(call: AddApproverCall) {
    this._call = call;
  }

  get approver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddApproverCall__Outputs {
  _call: AddApproverCall;

  constructor(call: AddApproverCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BatchIssueBadgeCall extends ethereum.Call {
  get inputs(): BatchIssueBadgeCall__Inputs {
    return new BatchIssueBadgeCall__Inputs(this);
  }

  get outputs(): BatchIssueBadgeCall__Outputs {
    return new BatchIssueBadgeCall__Outputs(this);
  }
}

export class BatchIssueBadgeCall__Inputs {
  _call: BatchIssueBadgeCall;

  constructor(call: BatchIssueBadgeCall) {
    this._call = call;
  }

  get memberTokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get type_(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }

  get data(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get tokenUri(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class BatchIssueBadgeCall__Outputs {
  _call: BatchIssueBadgeCall;

  constructor(call: BatchIssueBadgeCall) {
    this._call = call;
  }
}

export class ClaimMembershipCall extends ethereum.Call {
  get inputs(): ClaimMembershipCall__Inputs {
    return new ClaimMembershipCall__Inputs(this);
  }

  get outputs(): ClaimMembershipCall__Outputs {
    return new ClaimMembershipCall__Outputs(this);
  }
}

export class ClaimMembershipCall__Inputs {
  _call: ClaimMembershipCall;

  constructor(call: ClaimMembershipCall) {
    this._call = call;
  }

  get voucher(): ClaimMembershipCallVoucherStruct {
    return changetype<ClaimMembershipCallVoucherStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get approvedIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimMembershipCall__Outputs {
  _call: ClaimMembershipCall;

  constructor(call: ClaimMembershipCall) {
    this._call = call;
  }
}

export class ClaimMembershipCallVoucherStruct extends ethereum.Tuple {
  get levelCategory(): Array<i32> {
    return this[0].toI32Array();
  }

  get end(): Array<i32> {
    return this[1].toI32Array();
  }

  get to(): Array<Address> {
    return this[2].toAddressArray();
  }

  get tokenUris(): string {
    return this[3].toString();
  }

  get signature(): Bytes {
    return this[4].toBytes();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _approvers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get trustedForwarder_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class IssueBadgeCall extends ethereum.Call {
  get inputs(): IssueBadgeCall__Inputs {
    return new IssueBadgeCall__Inputs(this);
  }

  get outputs(): IssueBadgeCall__Outputs {
    return new IssueBadgeCall__Outputs(this);
  }
}

export class IssueBadgeCall__Inputs {
  _call: IssueBadgeCall;

  constructor(call: IssueBadgeCall) {
    this._call = call;
  }

  get memberTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get type_(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get data(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tokenUri(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class IssueBadgeCall__Outputs {
  _call: IssueBadgeCall;

  constructor(call: IssueBadgeCall) {
    this._call = call;
  }
}

export class NameSetterCall extends ethereum.Call {
  get inputs(): NameSetterCall__Inputs {
    return new NameSetterCall__Inputs(this);
  }

  get outputs(): NameSetterCall__Outputs {
    return new NameSetterCall__Outputs(this);
  }
}

export class NameSetterCall__Inputs {
  _call: NameSetterCall;

  constructor(call: NameSetterCall) {
    this._call = call;
  }
}

export class NameSetterCall__Outputs {
  _call: NameSetterCall;

  constructor(call: NameSetterCall) {
    this._call = call;
  }
}

export class RemoveApproverCall extends ethereum.Call {
  get inputs(): RemoveApproverCall__Inputs {
    return new RemoveApproverCall__Inputs(this);
  }

  get outputs(): RemoveApproverCall__Outputs {
    return new RemoveApproverCall__Outputs(this);
  }
}

export class RemoveApproverCall__Inputs {
  _call: RemoveApproverCall;

  constructor(call: RemoveApproverCall) {
    this._call = call;
  }

  get approver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveApproverCall__Outputs {
  _call: RemoveApproverCall;

  constructor(call: RemoveApproverCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SoulTransferCall extends ethereum.Call {
  get inputs(): SoulTransferCall__Inputs {
    return new SoulTransferCall__Inputs(this);
  }

  get outputs(): SoulTransferCall__Outputs {
    return new SoulTransferCall__Outputs(this);
  }
}

export class SoulTransferCall__Inputs {
  _call: SoulTransferCall;

  constructor(call: SoulTransferCall) {
    this._call = call;
  }

  get voucher(): SoulTransferCallVoucherStruct {
    return changetype<SoulTransferCallVoucherStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SoulTransferCall__Outputs {
  _call: SoulTransferCall;

  constructor(call: SoulTransferCall) {
    this._call = call;
  }
}

export class SoulTransferCallVoucherStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get to(): Address {
    return this[1].toAddress();
  }

  get signature(): Bytes {
    return this[2].toBytes();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateMembershipCall extends ethereum.Call {
  get inputs(): UpdateMembershipCall__Inputs {
    return new UpdateMembershipCall__Inputs(this);
  }

  get outputs(): UpdateMembershipCall__Outputs {
    return new UpdateMembershipCall__Outputs(this);
  }
}

export class UpdateMembershipCall__Inputs {
  _call: UpdateMembershipCall;

  constructor(call: UpdateMembershipCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get levelCategory(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get tokenUri(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UpdateMembershipCall__Outputs {
  _call: UpdateMembershipCall;

  constructor(call: UpdateMembershipCall) {
    this._call = call;
  }
}
