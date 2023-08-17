import {
    Controller,
    Post,
    Body,
    UseGuards,
    Request,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/jwt-auth.guard';
import { TransactionService } from './transaction.service';
import { CreateTransactiontDto } from './dto/createTransaction.dto';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @UseGuards(AuthGuard)
    @Post()
    create(@Request() req, @Body() createTransactiontDto: CreateTransactiontDto) {
        return this.transactionService.create(req.user, createTransactiontDto);
    }
}