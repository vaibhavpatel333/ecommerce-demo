import BaseQuery from "src/common/query/BaseQuery";
import { Product } from "src/entity/product.entity";
import { Connection, SelectQueryBuilder } from "typeorm";

export default class GetProductById extends BaseQuery <Product> {
  constructor(private readonly productId: number) {
    super()
  }
  query(connection: Connection): SelectQueryBuilder<Product> {
    const query = connection
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.id = :productId", { productId: this.productId });
    return query;
  }
}