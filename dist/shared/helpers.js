"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullURL = exports.editFileName = exports.XLCSVFileFilter = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
require('dotenv').config;
exports.XLCSVFileFilter = (req, file, cb) => {
    if (file.mimetype !== 'text/csv' &&
        file.mimetype !== 'application/vnd.ms-excel' &&
        file.mimetype !==
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        req.fileValidationError = 'Only Excel and CSV Files allowed';
        return cb(new common_1.UnprocessableEntityException('Invalid File type'), false);
    }
    cb(null, true);
};
exports.editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path_1.extname(file.originalname);
    callback(null, `${new Date().getTime()}-${name}${fileExtName}`);
};
exports.getFullURL = function (path) {
    return `${process.env.PORTAL_URL}/${path}`;
};
//# sourceMappingURL=helpers.js.map