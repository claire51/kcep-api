"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConnectionOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.RedisConnectionOptions = {
    transport: microservices_1.Transport.REDIS,
    options: {
        url: `redis://redis:6379`,
    },
};
//# sourceMappingURL=rmq.config.js.map