"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDecorators = void 0;
function applyDecorators(...decorators) {
    return (target, propertyKey, descriptor) => {
        for (const decorator of decorators) {
            if (target instanceof Function) {
                decorator(target);
                continue;
            }
            decorator(target, propertyKey, descriptor);
        }
    };
}
exports.applyDecorators = applyDecorators;
//# sourceMappingURL=apply.decorators.js.map