"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const program_wallets_entity_1 = require("../entity/program-wallets.entity");
const izad_pan_map_entity_1 = require("../entity/izad-pan-map.entity");
const customers_entity_1 = require("../entity/customers.entity");
const services_constants_1 = require("../../config/services_constants");
const date_fns_1 = require("date-fns");
const otp_entity_1 = require("../../cp/enity/otp.entity");
const Request = require('request');
const parser = require('xml2json');
let FarmerService = class FarmerService {
    constructor(customersRepository, otpRepository, programWalletsRepository, izadPanMapRepository) {
        this.customersRepository = customersRepository;
        this.otpRepository = otpRepository;
        this.programWalletsRepository = programWalletsRepository;
        this.izadPanMapRepository = izadPanMapRepository;
    }
    getFarmerWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            const programWallets = yield this.programWalletsRepository.find({
                walletReferenceCode: typeorm_2.In(['B1000000031010', 'B2000000031010', 'B3000000031010']), program: 'KCEP'
            });
            return programWallets;
        });
    }
    validateFarmer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const farmer = yield this.customersRepository.findOne({
                    idNumber: customerId, program: 'KCEP',
                });
                if (!farmer) {
                    throw new common_1.BadRequestException('Farmer does not exist');
                }
                if (farmer && !farmer.phoneNumber) {
                    throw new common_1.BadRequestException('Farmer does not have a valid phone number');
                }
                return farmer;
            }
            catch (e) {
                throw new common_1.BadRequestException(e);
            }
        });
    }
    getFarmerProducts(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productsXml = yield this.findProducts(payload);
                const status = productsXml['SOAP-ENV:Envelope']['SOAP-ENV:Header']['ns:HeaderReply']['ns:StatusMessages']['ns:StatusMessage'];
                const statusData = yield this.generateStatus(status);
                if (statusData.code !== '0000') {
                    throw new common_1.BadRequestException(statusData.description);
                }
                const productxmls = productsXml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns0:DataOutput']['ns1:getValidationOutput']['ns1:Product'];
                const products = yield this.generateProductData(productxmls);
                return products;
            }
            catch (e) {
                throw new common_1.BadRequestException(e);
            }
        });
    }
    processOrder(payload, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const farmer = yield this.customersRepository.findOne({
                    where: { idNumber: payload.nationalId },
                });
                if (!farmer) {
                    throw new common_1.BadRequestException('Farmer does not exist');
                }
                const notificationResponse = yield this.postNotification(payload);
                const status = notificationResponse['SOAP-ENV:Envelope']['SOAP-ENV:Header']['ns:HeaderReply']['ns:StatusMessages']['ns:StatusMessage'];
                const statusData = yield this.generateStatus(status);
                if (statusData.code !== '0000') {
                    throw new common_1.BadRequestException(statusData.description);
                }
                const currentpdate = new Date();
                const otpDate = date_fns_1.format(currentpdate, "dd/MM/yyyy");
                const otpTime = date_fns_1.format(currentpdate, "hh:mm a");
                const rtpsRef = this.uuid(6);
                const Message = services_constants_1.configCredentials.sucessSMS.replace('<account_name>', farmer.firstName)
                    .replace('<total>', this.formatMoney(payload.transactionalAmount))
                    .replace('<dealer_account_name>', user.username)
                    .replace('<Date>', otpDate + ' ' + otpTime)
                    .replace('<rtps_ref>', rtpsRef.substr(0, 8));
                yield this.sendSMSSoap({
                    message: Message,
                    phone: farmer.phoneNumber,
                });
                return {
                    processed: true,
                    message: statusData.description,
                    messageCode: statusData.code,
                    rtps_ref: rtpsRef.substr(0, 8)
                };
            }
            catch (e) {
                throw new common_1.BadRequestException(e);
            }
        });
    }
    getFarmerCardNumber(customerId, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cards = yield this.izadPanMapRepository.query("with asd as (select d.person_code, a.card, pan, to_char(expiry1,'YYMM')expiry1, decode (a.cond_set, '000','A0000000031010',    'FER','B1000000031010',    'POS','B2000000031010',    'SEE','B3000000031010',    'LAN','B4000000031010',    'INS','B5000000031010') AID,c.account_no, c.card_acct, a.rec_date, a.cl_acct_key, a.combi_id, a.status1,a.renew,  a.client_id,    a.card_num,a.card_name,   a.chip_app_id , b.APP_NAME , d.CMPG_NAME \"COUNTY\", d.CO_POSITON \"SUB_COUNTY\",AVAIL_AMT/100 \"Balance_on_Card\" from izd_cards a\n" +
                    "join IZD_CHIP_APPs b on a.chip_app_id=b.app_id\n" +
                    "--join izd_slip c on a.card=c.card\n" +
                    "join izd_cl_acct c on a.cl_acct_key=c.tab_key\n" +
                    "join izd_clients d on a.client_id=d.client\n" +
                    "join izd_accounts e on e.account_no=c.account_no\n" +
                    "join izd_pan_map f on f.card=a.card\n" +
                    "join izd_acc_param g on g.account_no=e.account_no\n" +
                    "where a.bank_c='01' and a.groupc='08'\n" +
                    "and c.bank_c='01' and c.groupc='08'\n" +
                    "AND PERSON_CODE IN  (:id)\n" +
                    "AND STATUS1=0\n" +
                    "and substr (a.card_num,1,1)='6'\n" +
                    ") select * from asd where AID=:id ", [customerId, wallet]);
                return cards;
            }
            catch (e) {
                throw new common_1.BadRequestException(e);
            }
        });
    }
    findProducts(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const auth = 'Basic ' + new Buffer(services_constants_1.configCredentials.kcep_username + ":" + services_constants_1.configCredentials.kcep_password).toString("base64");
                const url = services_constants_1.configCredentials.product_url;
                const xml = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:soap=\"urn://co-opbank.co.ke/SharedResources/Schemas/SOAMessages/SoapHeader\" xmlns:dat=\"urn://co-opbank.co.ke/Banking/Common/Service/CommonWallet/GetValidation/1.0/DataIO\" xmlns:com=\"urn://co-opbank.co.ke/Banking/Common/DataModel/CommonWallet/getValidation/1.0/CommonWallet.getValidation\">\n" +
                    "   <soapenv:Header>\n" +
                    "      <soap:HeaderRequest>\n" +
                    "         <soap:MessageID>234335</soap:MessageID>\n" +
                    "         <soap:Credentials>\n" +
                    "            <soap:SystemCode>013</soap:SystemCode>\n" +
                    "         </soap:Credentials>\n" +
                    "      </soap:HeaderRequest>\n" +
                    "   </soapenv:Header>\n" +
                    "   <soapenv:Body>\n" +
                    "      <dat:DataInput>\n" +
                    "         <com:getValidationInput>\n" +
                    "            <com:OperationParameters>\n" +
                    `               <com:WalletReferenceCode>${data.walletReferenceCode}</com:WalletReferenceCode>\n` +
                    `               <com:WalletAccountNumber>${data.walletAccountNumber}</com:WalletAccountNumber>\n` +
                    "               <com:AgentCode>POS</com:AgentCode>\n" +
                    `               <com:MerchantCode>${data.merchantCode}</com:MerchantCode>\n` +
                    "            </com:OperationParameters>\n" +
                    "         </com:getValidationInput>\n" +
                    "      </dat:DataInput>\n" +
                    "   </soapenv:Body>\n" +
                    "</soapenv:Envelope>";
                Request.post({
                    headers: {
                        'Content-Type': 'text/xml',
                        'Authorization': auth,
                        'SOAPAction': '"/co-opbank.co.ke/Banking/Common/Service/CommonWallet/GetValidation/1.0"',
                    },
                    url,
                    body: xml,
                }, (error, response, body) => {
                    if (error) {
                        const json = parser.toJson(body);
                        reject(JSON.parse(json));
                    }
                    else {
                        const json = parser.toJson(body);
                        resolve(JSON.parse(json));
                    }
                });
            });
        });
    }
    postNotification(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const date = new Date();
                const currenttime = date_fns_1.format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                const auth = 'Basic ' + new Buffer(services_constants_1.configCredentials.kcep_username + ":" + services_constants_1.configCredentials.kcep_password).toString("base64");
                let productxmls = "";
                const tranactionreference = yield this.generateOtp(12);
                for (const product of data.products) {
                    const dataString = "<com:Product>\n" +
                        `<com:ProductServiceCode>${product.serviceCode}</com:ProductServiceCode>\n` +
                        `<com:RegionRefCode>${product.regionRefCode}</com:RegionRefCode>\n` +
                        `<com:RegionPrice>${product.regionPrice}</com:RegionPrice>\n` +
                        `<com:TransactionPrice>${product.transactionPrice}</com:TransactionPrice>\n` +
                        `<com:TransactionQuantity>${product.transactionQuantity}</com:TransactionQuantity>\n` +
                        "</com:Product>\n";
                    productxmls = productxmls + dataString;
                }
                const url = services_constants_1.configCredentials.postTransactionUrl;
                const xml = "<soapenv:Envelope xmlns:com=\"urn://co-opbank.co.ke/Banking/Common/DataModel/CommonWallet/postNotification/1.0/CommonWallet.postNotification\" xmlns:dat=\"urn://co-opbank.co.ke/Banking/Common/Service/CommonWallet/PostNotification/1.0/DataIO\" xmlns:soap=\"urn://co-opbank.co.ke/SharedResources/Schemas/SOAMessages/SoapHeader\" xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">\n" +
                    "<soapenv:Header>\n" +
                    "<soap:HeaderRequest>\n" +
                    `<soap:MessageID>${this.uuid(16)}</soap:MessageID>\n` +
                    "<soap:Credentials>\n" +
                    "<soap:SystemCode>013</soap:SystemCode>\n" +
                    "</soap:Credentials>\n" +
                    "</soap:HeaderRequest>\n" +
                    "</soapenv:Header>\n" +
                    "<soapenv:Body>\n" +
                    "<dat:DataInput>\n" +
                    "<com:postNotificationInput>\n" +
                    "<com:OperationParameters>\n" +
                    `<com:WalletReferenceCode>${data.walletReferenceCode}</com:WalletReferenceCode>\n` +
                    `<com:WalletAccountNumber>${data.walletAccountNumber}</com:WalletAccountNumber>\n` +
                    `<com:MerchantCode>${data.merchantCode}</com:MerchantCode>\n` +
                    `<com:TransactionAmountTotal>${data.transactionalAmount}</com:TransactionAmountTotal>\n` +
                    `<com:TransactionReferenceNumber>${tranactionreference}</com:TransactionReferenceNumber>\n` +
                    `<com:TransactionDate>${currenttime} </com:TransactionDate>\n` +
                    "</com:OperationParameters>\n" +
                    `${productxmls}` +
                    "</com:postNotificationInput>\n" +
                    "</dat:DataInput>\n" +
                    "</soapenv:Body>\n" +
                    "</soapenv:Envelope>";
                Request.post({
                    headers: {
                        'Content-Type': 'text/xml',
                        'Authorization': auth,
                        'SOAPAction': '"/co-opbank.co.ke/Banking/Common/Service/CommonWallet/PostNotification/1.0"',
                    },
                    url,
                    body: xml,
                }, (error, response, body) => {
                    if (error) {
                        const json = parser.toJson(body);
                        reject(JSON.parse(json));
                    }
                    else {
                        const json = parser.toJson(body);
                        resolve(JSON.parse(json));
                    }
                });
            }));
        });
    }
    uuid(n) {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(n);
        });
    }
    generateStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: status['ns:MessageType'],
                applicationId: status['ns:ApplicationID'],
                code: status['ns:MessageCode'],
                description: status['ns:MessageDescription'],
            };
        });
    }
    generateProductData(summary) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataArray = new Array();
            let data;
            try {
                yield summary.forEach((product) => __awaiter(this, void 0, void 0, function* () {
                    data = {
                        serviceCode: product['ns1:ProductServiceCode'],
                        walletRefCode: product['ns1:WalletRefCode'],
                        regionRefCode: product['ns1:RegionRefCode'],
                        serviceName: product['ns1:ProductServiceName'],
                        unitPrice: product['ns1:UnitPrice'],
                        regionPrice: product['ns1:RegionPrice'],
                        quantity: product['ns1:Quantity'],
                        priceRequired: product['ns1:PriceRequired'],
                    };
                    dataArray.push(data);
                }));
            }
            catch (e) {
                return dataArray;
            }
            return dataArray;
        });
    }
    sendOtp({ nationalId, products }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.customersRepository.findOne({
                where: { idNumber: nationalId },
            });
            if (!user) {
                throw new common_1.BadRequestException('Farmer does not exist');
            }
            try {
                const otp = '' + (yield this.generateOtp(4));
                const otpExpirydate = new Date();
                const currentTime = new Date();
                currentTime.setHours(currentTime.getHours() + 3);
                otpExpirydate.setHours(otpExpirydate.getHours() + 3);
                otpExpirydate.setMinutes(otpExpirydate.getMinutes() + 5);
                const otpDate = date_fns_1.format(currentTime, "dd/MM/yyyy");
                const otpTime = date_fns_1.format(currentTime, "hh:mm a");
                const u = {
                    Otp: otp,
                    OtpExpired: 0,
                    OtpExpiredTime: otpExpirydate,
                    OtpUtilized: 0,
                    AutoGenerationTime: currentTime,
                    TerminalID: nationalId,
                };
                let Message = services_constants_1.configCredentials.otpSMS.replace('<account_name>', user.firstName)
                    .replace(' <otp_code>', otp)
                    .replace('<Date>', otpDate + ' ' + otpTime);
                const productDetails = yield this.getProductSMS(products);
                Message += productDetails;
                yield this.sendSMSSoap({
                    message: Message,
                    phone: user.phoneNumber,
                });
                yield this.otpRepository.save(u);
            }
            catch (e) {
                common_1.Logger.log('Agrodealer OTP Generation Error' + e.getMessage, 'OTP');
                throw new common_1.BadRequestException('Exception ' + e);
            }
        });
    }
    generateOtp(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
        });
    }
    getProductSMS(items) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalAmount = 0;
            let productmessage = "";
            for (const item of items) {
                totalAmount += item.transactionPrice;
                productmessage += `${item.serviceCode} quantity ${item.transactionQuantity} ksh ${item.transactionPrice} \n`;
            }
            productmessage += `Total: ksh ${this.formatMoney(totalAmount)}`;
            return productmessage;
        });
    }
    sendSMSSoap(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const auth = 'Basic ' + new Buffer(services_constants_1.configCredentials.username + ":" + services_constants_1.configCredentials.password).toString("base64");
            const currenttime = date_fns_1.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
            const uuid = this.uuid(16);
            const smsurl = services_constants_1.configCredentials.sms_url;
            const xml = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:mes=\"urn://co-opbank.co.ke/CommonServices/Data/Message/MessageHeader\" xmlns:com=\"urn://co-opbank.co.ke/CommonServices/Data/Common\" xmlns:ns=\"urn://co-opbank.co.ke/Banking/Common/SMS/1.0\">\n" +
                "   <soapenv:Header>\n" +
                "      <mes:RequestHeader>\n" +
                `         <com:CreationTimestamp>${currenttime}</com:CreationTimestamp>\n` +
                `         <com:CorrelationID>${uuid}</com:CorrelationID>\n` +
                "         <mes:FaultTO>?</mes:FaultTO>\n" +
                `          <mes:MessageID>${uuid}</mes:MessageID>\n` +
                "         <mes:ReplyTO>?</mes:ReplyTO>\n" +
                "         <mes:Credentials>\n" +
                "            <mes:SystemCode>?</mes:SystemCode>\n" +
                "            <mes:Username>?</mes:Username>\n" +
                "            <mes:Password>?</mes:Password>\n" +
                "            <mes:Realm>?</mes:Realm>\n" +
                "         </mes:Credentials>\n" +
                "      </mes:RequestHeader>\n" +
                "   </soapenv:Header>\n" +
                "   <soapenv:Body>\n" +
                "      <ns:SMSRequest>\n" +
                "         <ns:SMSBody>\n" +
                `            <messageID>${uuid}</messageID>\n` +
                `           <message>${data.message}</message>\n` +
                `          <MSISDN>${data.phone}</MSISDN>\n` +
                "            <Credentials>\n" +
                "               <username>digitalbankingapiuser</username>\n" +
                "               <password>Digit@L2018</password>\n" +
                "               <encryped>1</encryped>\n" +
                "               <clientID>267</clientID>\n" +
                "            </Credentials>\n" +
                "         </ns:SMSBody>\n" +
                "      </ns:SMSRequest>\n" +
                "   </soapenv:Body>\n" +
                "</soapenv:Envelope>";
            Request.post({
                headers: {
                    'Content-Type': 'text/xml',
                    'Authorization': auth,
                    'SOAPAction': '"SendSMS"',
                },
                url: smsurl,
                body: xml,
            }, (error, response, body) => {
                if (error) {
                    common_1.Logger.log('Error Sending SMS', ' ' + JSON.stringify(error));
                }
                else {
                    common_1.Logger.log(`SMS  Sent to ${data.phone} `, '>>>>>>>>');
                }
            });
        });
    }
    formatMoney(value) {
        if (value == 0 || value == 0.0 || value == 0.00) {
            return '0.00';
        }
        else {
            const formamoney = value ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0.00;
            return formamoney;
        }
    }
};
FarmerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(customers_entity_1.CustomersEntity)),
    __param(1, typeorm_1.InjectRepository(otp_entity_1.Otp)),
    __param(2, typeorm_1.InjectRepository(program_wallets_entity_1.ProgramWalletsEntity)),
    __param(3, typeorm_1.InjectRepository(izad_pan_map_entity_1.IzadPanMapEntity, 'KCEPPORTAL')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FarmerService);
exports.FarmerService = FarmerService;
//# sourceMappingURL=farmer.service.js.map