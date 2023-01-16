import { Connection, FindOperator, FindOperatorType } from 'typeorm';
declare class FindOperatorWithExtras<T> extends FindOperator<T> {
    constructor(type: FindOperatorType | 'ilike', value: FindOperator<T> | T, useParameter?: boolean, multipleParameters?: boolean);
    toSql(connection: Connection, aliasPath: string, parameters: string[]): string;
}
export declare function ILike<T>(value: T | FindOperator<T>): FindOperatorWithExtras<T>;
export {};
