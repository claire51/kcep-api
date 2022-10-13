"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configCredentials = exports.baseUrls = void 0;
exports.baseUrls = {
    base_url: "http://172.16.204.171:28222",
};
exports.configCredentials = {
    account_transaction_alert_url: `${exports.baseUrls.base_url}/Account/AccountTransaction/configureAlerts/1.0`,
    account_detail_byNationalID_url: `${exports.baseUrls.base_url}/Customer/DetailsByNationalID/1.0`,
    account_mandate_url: `${exports.baseUrls.base_url}/Account/AccountMandate/get/1.0`,
    Base_Mwallet_url: "https://172.16.20.39:8080",
    sms_url: `${exports.baseUrls.base_url}/Common/SMS/Send/1.0`,
    postingLimit: 1000000.00,
    apiUser: "OMNI",
    apiPassword: "password",
    username: "omni",
    password: "OmniPr0d",
    JWT_SECRET: "A437CF74BED95A3B3B6A477D5F814",
};
//# sourceMappingURL=services_constants.js.map