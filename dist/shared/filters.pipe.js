"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const filters_dto_1 = require("./filters.dto");
let FiltersPipe = class FiltersPipe {
    transform(value, metadata) {
        if (metadata.type === 'query') {
            return class_transformer_1.plainToClass(filters_dto_1.FilterDTO, value);
        }
        return value;
    }
};
FiltersPipe = __decorate([
    common_1.Injectable()
], FiltersPipe);
exports.FiltersPipe = FiltersPipe;
//# sourceMappingURL=filters.pipe.js.map