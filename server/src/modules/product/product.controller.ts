import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../entity/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    const bookData = await this.productService.getById(id);
    const response = {
      title: bookData.title,
      author: bookData.author,
      price: bookData.price,
      beforePrice: bookData.beforePrice,
      imageUrl: bookData.imageUrl,
      description: bookData.description,
      released: bookData.released,
      review: bookData.review,
      shippingCharge: bookData.shippingCharge,
      isAvailable: bookData.isAvailable

    }
    return bookData;

  }
}
