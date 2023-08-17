import {
    Controller,
    Post,
    Body,
    UseGuards,
    Request,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/jwt-auth.guard';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/createCart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @UseGuards(AuthGuard)
    @Post()
    create(@Request() req, @Body() createCartDto: CreateCartDto) {
        return this.cartService.create(req.user, createCartDto);
    }
    
} 