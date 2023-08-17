import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { appConstants } from 'src/constants';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from 'src/entity/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    JwtModule.register({
      secret: appConstants.jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
