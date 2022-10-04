"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatabaseConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
let DatabaseConfigModule = DatabaseConfigModule_1 = class DatabaseConfigModule {
    static register(options) {
        const imp = typeorm_1.TypeOrmModule.forRoot(DatabaseConfigModule_1.getOptions(options ? options.name : null));
        return {
            module: DatabaseConfigModule_1,
            imports: [imp],
            exports: [imp],
        };
    }
    static getOptions(name) {
        if (!name) {
            return ormconfig_1.Options[0];
        }
        return ormconfig_1.Options.find(op => op.name == name) || null;
    }
};
DatabaseConfigModule = DatabaseConfigModule_1 = __decorate([
    common_1.Module({})
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;
//# sourceMappingURL=database.module.js.map