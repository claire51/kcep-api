"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const common_1 = require("@nestjs/common");
exports.UserAuth = common_1.createParamDecorator((data, req) => {
    return data ? req.user[data] : req.user;
});
//# sourceMappingURL=user.decorator.js.map