"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("./role.guard");
const auth_guard_1 = require("./auth.guard");
const apply_decorators_1 = require("../shared/apply.decorators");
function Auth(...roles) {
    if (!roles) {
        return common_1.UseGuards(auth_guard_1.AuthGuard);
    }
    return apply_decorators_1.applyDecorators(common_1.SetMetadata('roles', roles), common_1.UseGuards(auth_guard_1.AuthGuard, role_guard_1.RolesGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map