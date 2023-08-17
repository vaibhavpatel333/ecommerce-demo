import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { Location } from 'src/entity/location.entity';
import { Product } from 'src/entity/product.entity';

export class CreateTransactiontDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  totalAmount: number;

  @IsNotEmpty()
  paymentMethod: string;

  @IsNotEmpty()
  address: string;

}
