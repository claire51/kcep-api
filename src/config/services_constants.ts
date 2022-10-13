export const baseUrls = {
    base_url: "http://172.16.204.171:28222",
    kcep_base_url: "http://192.168.0.180",
};

export const configCredentials = {
    sms_url: `${baseUrls.base_url}/Common/SMS/Send/1.0`,
    product_url: `${baseUrls.kcep_base_url}/BusinessDomains/000_COMMON/Services/CommonWallet/1.0/getValidation/ServiceStarter`,
    postTransactionUrl: `${baseUrls.kcep_base_url}/BusinessDomains/000_COMMON/Services/CommonWallet/1.0/postNotification/ServiceStarter`,
    username: "omni",
    password: "OmniPr0d",
    kcep_username: "mwallet",
    kcep_password: "mwallet123",
    JWT_SECRET: "A437CF74BED95A3B3B6A477D5F814",
    // password: "omni123",
};
