import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { appConstants } from 'src/constants';
import { Cart } from 'src/entity/cart.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart]),
    JwtModule.register({
      secret: appConstants.jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
