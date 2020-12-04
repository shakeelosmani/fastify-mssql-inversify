export class Account {
  accountId: number;
  pendingBalance: number;
  customerId: number;
  staus: string;
  constructor(json: any) {
    this.accountId = json.ACCOUNT_ID;
    this.pendingBalance = json.PENDING_BALANCE;
    this.customerId = json.CUST_ID;
    this.staus = json.STATUS;
  }
}
