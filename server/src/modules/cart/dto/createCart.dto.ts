import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { Product } from 'src/entity/product.entity';

export class CreateCartDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  product: Product;
}
