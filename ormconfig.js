module.exports = {
    type: 'oracle',
    host: process.env.KCEP_ORACLE_HOST,
    port: process.env.KCEP_ORACLE_PORT,
    username: process.env.KCEP_ORACLE_USER,
    password: process.env.KCEP_ORACLE_PASSWORD,
    database: process.env.KCEP_DB,
    sid: process.env.KCEP_ORACLE_SID,
    synchronize: false,
    dropSchema: false,
    migrationsRun: false,
    entities: ['dist/cp/**/*.entity.js'],
};
