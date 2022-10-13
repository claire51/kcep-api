import {TypeOrmModuleOptions} from '@nestjs/typeorm';
const defaultOptions: TypeOrmModuleOptions = {
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

export const Options: TypeOrmModuleOptions[] = [
    {
        ...defaultOptions,
        database: 'KUSER',
        sid: 'KCEP',
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
        host: 'copkdnas-c5-scan.co-opbank.co.ke',
        port: 1562,
        username: 'KCEPPORTAL',
        password: 'Z2JdTtJHzJnwtT5sA1tO#',
        database: 'KCEPPORTAL',
        sid: 'CMSTEST',
        entities: ['dist/farmers/**/*.entity.js'],
    },
];
