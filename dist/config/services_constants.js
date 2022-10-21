"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configCredentials = exports.baseUrls = void 0;
exports.baseUrls = {
    base_url: "http://172.16.204.171:28222",
    kcep_base_url: "http://192.168.0.180",
};
exports.configCredentials = {
    sms_url: `${exports.baseUrls.base_url}/Common/SMS/Send/1.0`,
    product_url: `${exports.baseUrls.kcep_base_url}/BusinessDomains/000_COMMON/Services/CommonWallet/1.0/getValidation/ServiceStarter`,
    postTransactionUrl: `${exports.baseUrls.kcep_base_url}/BusinessDomains/000_COMMON/Services/CommonWallet/1.0/postNotification/ServiceStarter`,
    otpSMS: `Dear <account_name> your KCEP verification code is  <otp_code> for transaction at <Date>.\n`,
    sucessSMS: `Dear <account_name> your KCEP inputs purchase of Ksh <total> from  <dealer_account_name> on  <Date> has been processed. Reference No. <rtps_ref>`,
    username: "omni",
    password: "OmniPr0d",
    kcep_username: "mwallet",
    kcep_password: "mwallet123",
};
//# sourceMappingURL=services_constants.js.map