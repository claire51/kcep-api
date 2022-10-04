module.exports = {
    type: 'oracle',
    host: '172.16.207.190',
    port: 1521,
    username: 'KUSER',
    password: 'nxZwFhKuyxn_nxyuKhFwZ',
    database: 'KUSER',
    sid: 'KCEP',
    synchronize: false,
    dropSchema: false,
    migrationsRun: false,
    entities: ['dist/cp/**/*.entity.js'],
};
