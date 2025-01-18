import { Given, Then, When } from "@cucumber/cucumber";
import { accounts } from "../../src/config";
import { AccountBalanceQuery, AccountId, Client, PrivateKey } from "@hashgraph/sdk";
import assert from "node:assert";

const client = Client.forTestnet()

Given(/^A Hedera account with more than (\d+) hbar$/, async function (expectedBalance: number) {
  const account = accounts[0]
  const MY_ACCOUNT_ID = AccountId.fromString(account.id);
  const MY_PRIVATE_KEY = PrivateKey.fromStringED25519(account.privateKey);
  client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);

//Create the query request
  const query = new AccountBalanceQuery().setAccountId(MY_ACCOUNT_ID);
  const balance = await query.execute(client)
  assert.ok(balance.hbars.toBigNumber().toNumber() > expectedBalance)

});

When(/^I create a token named Test Token \(HTT\)$/, async function () {

});

Then(/^The token has the name "([^"]*)"$/, async function (r) {

});

Then(/^The token has the symbol "([^"]*)"$/, async function (_s) {

});

Then(/^The token has (\d+) decimals$/, async function (_t) {

});

Then(/^The token is owned by the account$/, async function () {

});

Then(/^An attempt to mint (\d+) additional tokens succeeds$/, async function (_b) {

});
When(/^I create a fixed supply token named Test Token \(HTT\) with (\d+) tokens$/, async function (a) {

});
Then(/^The total supply of the token is (\d+)$/, async function (x) {

});
Then(/^An attempt to mint tokens fails$/, async function () {

});
Given(/^A first hedera account with more than (\d+) hbar$/, async function (_u) {

});
Given(/^A second Hedera account$/, async function () {

});
Given(/^A token named Test Token \(HTT\) with (\d+) tokens$/, async function (_y) {

});
Given(/^The first account holds (\d+) HTT tokens$/, async function (_i) {

});
Given(/^The second account holds (\d+) HTT tokens$/, async function (_j) {

});
When(/^The first account creates a transaction to transfer (\d+) HTT tokens to the second account$/, async function (_x) {

});
When(/^The first account submits the transaction$/, async function () {

});
When(/^The second account creates a transaction to transfer (\d+) HTT tokens to the first account$/, async function (_m1) {

});
Then(/^The first account has paid for the transaction fee$/, async function () {

});
Given(/^A first hedera account with more than (\d+) hbar and (\d+) HTT tokens$/, async function (_e,_f) {

});
Given(/^A second Hedera account with (\d+) hbar and (\d+) HTT tokens$/, async function (_l,_n) {

});
Given(/^A third Hedera account with (\d+) hbar and (\d+) HTT tokens$/, async function (_y,_yo) {

});
Given(/^A fourth Hedera account with (\d+) hbar and (\d+) HTT tokens$/, async function (_u,_ui) {

});
When(/^A transaction is created to transfer (\d+) HTT tokens out of the first and second account and (\d+) HTT tokens into the third account and (\d+) HTT tokens into the fourth account$/, async function (_k,_K,_B) {

});
Then(/^The third account holds (\d+) HTT tokens$/, async function (_q) {

});
Then(/^The fourth account holds (\d+) HTT tokens$/, async function (_w) {

});
