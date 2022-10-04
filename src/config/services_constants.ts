export const baseUrls = {
    // base_url: "http://172.16.204.136:9222",
    // base_url: "http://192.168.0.180",
    base_url: "http://172.16.204.171:28222",
    // base_url_PROD: "http://172.16.204.171:28222",
};

export const configCredentials = {
    account_transaction_alert_url: `${baseUrls.base_url}/Account/AccountTransaction/configureAlerts/1.0`,
    account_detail_byNationalID_url: `${baseUrls.base_url}/Customer/DetailsByNationalID/1.0`,
    // loan_payoff_url: "http://172.16.19.81:8080/coop_eloans-0.1.1/api/1.0/loan_payoff/pay",
    account_mandate_url: `${baseUrls.base_url}/Account/AccountMandate/get/1.0`,
    // Base_Mwallet_url: "http://172.16.20.55:7091",
    // Base_Mwallet_url: "https://172.16.211.21:8080",
    Base_Mwallet_url: "https://172.16.20.39:8080",
    sms_url: `${baseUrls.base_url}/Common/SMS/Send/1.0`,
    // Base_Mwallet_url_UAT: "http://172.16.20.52:7091",
    postingLimit: 1000000.00,
    apiUser: "OMNI",
    apiPassword: "password",
    username: "omni",
    password: "OmniPr0d",
    JWT_SECRET: "A437CF74BED95A3B3B6A477D5F814",
    // password: "omni123",
};
