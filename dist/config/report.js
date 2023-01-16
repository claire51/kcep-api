"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiry = exports.reportopt = void 0;
exports.reportopt = {
    path: "/app/lib/jasperreports-5.6.0",
    reports: {
        Eloan_Due: {
            jasper: "/app/report/eloan_due.jasper",
            conn: "in_memory_json",
        },
        Eloan_WriteAction_Based: {
            jasper: "/app/report/eloan_writeAction.jasper",
            conn: "in_memory_json",
        },
        User_Based: {
            jasper: "/app/report/user_detail.jasper",
            conn: "in_memory_json",
        },
        Loan_Restructure_Based: {
            jasper: "/app/report/loan_restructured.jasper",
            conn: "in_memory_json",
        },
        Loan_Statement_Based: {
            jasper: "/app/report/loan_statement.jasper",
            conn: "in_memory_json",
        },
        Mwallet_Statement_Based: {
            jasper: "/app/report/mwallet_statement.jasper",
            conn: "in_memory_json",
        },
    },
};
exports.expiry = {
    duration: 3600,
};
//# sourceMappingURL=report.js.map