"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const defaultOptions = {
    type: 'oracle',
    host: process.env.KCEP_ORACLE_HOST,
    port: process.env.KCEP_ORACLE_PORT,
    username: process.env.KCEP_ORACLE_USER,
    password: process.env.KCEP_ORACLE_PASSWORD,
    database: process.env.KCEP_DB,
    sid: process.env.KCEP_ORACLE_SID,
    synchronize: false,
    dropSchema: false,
    logging: process.env.NODE_ENV === 'development' ? true : false,
    migrationsRun: false,
    migrations: null,
    cli: null,
};
exports.Options = [
    Object.assign(Object.assign({}, defaultOptions), { database: process.env.KCEP_DB, sid: process.env.KCEP_ORACLE_SID, synchronize: false, dropSchema: false, migrationsRun: false, migrationsTableName: 'migrations', migrations: ['dist/cp/migrations/**/*.js'], entities: ['dist/cp/**/*.entity.js', 'dist/farmers/**/*.entity.js'], subscribers: ['dist/cp/**/*.subscriber.js'], cli: {
            migrationsDir: 'src/cp/migrations',
            subscribersDir: 'src',
        } }),
    Object.assign(Object.assign({ name: 'KCEPPORTAL' }, defaultOptions), { host: process.env.KCEP_CMS_HOST, port: process.env.KCEP_CMS_PORT, username: process.env.KCEP_CMS_USER, password: process.env.KCEP_CMS_PASSWORD, database: process.env.KCEP_CMS_DB, sid: process.env.KCEP_CMS_SID, entities: ['dist/farmers/**/*.entity.js'] }),
];
//# sourceMappingURL=ormconfig.js.map