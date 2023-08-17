import { Connection, SelectQueryBuilder } from "typeorm";

export default abstract class BaseQuery<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  query(connection: Connection): SelectQueryBuilder<T> {
    throw new Error("BaseQuery query method not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rawQuery(connection: Connection): Promise<T> {
    throw new Error("BaseQuery query method not implemented.");
  }
}
