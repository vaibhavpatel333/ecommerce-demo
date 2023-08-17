import { Entity, PrimaryGeneratedColumn, Column, OneToMany,OneToOne } from 'typeorm';
import { Cart } from './cart.entity';
import { Transaction } from './transaction.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'integer' })
  beforePrice: number;

  @Column({ type: 'varchar' })
  imageUrl: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'date' })
  released: Date;

  @Column({ type: 'integer' })
  review: number;

  @Column({ type: 'integer' })
  shippingCharge: number;

  @Column({ type: 'boolean' })
  isAvailable: boolean;

  @OneToMany(() => Cart, cart => cart.product)
  cart: Cart[]; 

  @OneToOne(() => Transaction, transaction => transaction.product)
  transaction: Transaction;
}
