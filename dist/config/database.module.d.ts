import { DynamicModule } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class DatabaseConfigModule {
    static register(options?: {
        name: string;
    }): DynamicModule;
    static getOptions(name?: string): TypeOrmModuleOptions;
}
