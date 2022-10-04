import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Options } from '../ormconfig';

@Module({})
export class DatabaseConfigModule {
  static register(options?: { name: string }): DynamicModule {
    const imp = TypeOrmModule.forRoot(
      DatabaseConfigModule.getOptions(options ? options.name : null),
    );
    return {
      module: DatabaseConfigModule,
      imports: [imp],
      exports: [imp],
    };
  }
  static getOptions(name?: string): TypeOrmModuleOptions {
    if (!name) {
      return Options[0];
    }

    return Options.find(op => op.name == name) || null;
  }
}
