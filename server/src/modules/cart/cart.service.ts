import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../../entity/location.entity';
import { Cart } from 'src/entity/cart.entity';
import { CreateCartDto } from './dto/createCart.dto';
import GetProductById from '../product/query/GetProductById';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly cartRepository: Repository<Cart>,
    ) { }

    async create(user, createCartDto: CreateCartDto): Promise<Cart> {
        const exsitingProduct = await this.cartRepository.findOne({productId: createCartDto.product.id})
        if (exsitingProduct) {
            throw new BadRequestException("Product already exist in cart")
        }
        const cart = new Cart();
        cart.addedAt = new Date();
        cart.product = createCartDto.product;
        cart.userId = user.id;
        cart.quantity = createCartDto.quantity;
        return await this.cartRepository.save(cart);
    }

}