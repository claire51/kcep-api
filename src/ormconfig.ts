import {TypeOrmModuleOptions} from '@nestjs/typeorm';
const defaultOptions: TypeOrmModuleOptions = {
    type: 'oracle',
    host: process.env.KCEP_ORACLE_HOST,
    port: process.env.KCEP_ORACLE_PORT as any,
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

export const Options: TypeOrmModuleOptions[] = [
    {
        ...defaultOptions,
        database: process.env.KCEP_DB,
        sid: process.env.KCEP_ORACLE_SID,
        synchronize: false,
        dropSchema: false,
        migrationsRun: false,
        migrationsTableName: 'migrations',
        migrations: ['dist/cp/migrations/**/*.js'],
        entities: ['dist/cp/**/*.entity.js', 'dist/farmers/**/*.entity.js'],
        subscribers: ['dist/cp/**/*.subscriber.js'],
        cli: {
            migrationsDir: 'src/cp/migrations',
            subscribersDir: 'src',
        },
    },

    {
        name: 'KCEPPORTAL',
        ...defaultOptions,
        host: process.env.KCEP_CMS_HOST,
        port: process.env.KCEP_CMS_PORT as any,
        username: process.env.KCEP_CMS_USER,
        password: process.env.KCEP_CMS_PASSWORD,
        database: process.env.KCEP_CMS_DB,
        sid: process.env.KCEP_CMS_SID,
        entities: ['dist/farmers/**/*.entity.js'],
    },
];
