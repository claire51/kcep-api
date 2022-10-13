"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const defaultOptions = {
    type: 'oracle',
    host: '172.16.207.190',
    port: 1521,
    username: 'KUSER',
    password: 'nxZwFhKuyxn_nxyuKhFwZ',
    database: 'KUSER',
    sid: 'KCEP',
    synchronize: false,
    dropSchema: false,
    logging: process.env.NODE_ENV === 'development' ? true : false,
    migrationsRun: false,
    migrations: null,
    cli: null,
};
exports.Options = [
    Object.assign(Object.assign({}, defaultOptions), { database: 'KUSER', sid: 'KCEP', synchronize: false, dropSchema: false, migrationsRun: false, migrationsTableName: 'migrations', migrations: ['dist/cp/migrations/**/*.js'], entities: ['dist/cp/**/*.entity.js'], subscribers: ['dist/cp/**/*.subscriber.js'], cli: {
            migrationsDir: 'src/cp/migrations',
            subscribersDir: 'src',
        } }),
];
//# sourceMappingURL=ormconfig.js.map