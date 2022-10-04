"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILike = void 0;
const typeorm_1 = require("typeorm");
class FindOperatorWithExtras extends typeorm_1.FindOperator {
    constructor(type, value, useParameter, multipleParameters) {
        super(type, value, useParameter, multipleParameters);
    }
    toSql(connection, aliasPath, parameters) {
        if (this._type === 'ilike') {
            return `Lower(${aliasPath}) Like Lower(${parameters[0]})`;
        }
        return super.toSql(connection, aliasPath, parameters);
    }
}
function ILike(value) {
    return new FindOperatorWithExtras('ilike', value);
}
exports.ILike = ILike;
//# sourceMappingURL=case.js.map