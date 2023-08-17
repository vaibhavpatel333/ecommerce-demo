import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from 'src/entity/transaction.entity';
import { CreateTransactiontDto } from './dto/createTransaction.dto';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,
    ) { }

    async create(user, createTransactiontDto: CreateTransactiontDto): Promise<Transaction> {
        const transaction = new Transaction();
        transaction.paymentMethod = createTransactiontDto.paymentMethod;
        transaction.product = createTransactiontDto.product;
        transaction.quantity = createTransactiontDto.quantity;
        transaction.totalAmount = createTransactiontDto.totalAmount;
        transaction.address = createTransactiontDto.address;
        transaction.userId = user.id;
        return await this.transactionRepository.save(transaction);
    }
}