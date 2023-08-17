import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  address: string;

  @IsOptional()
  city: string;

  @IsOptional()
  state: string;

  @IsOptional()
  country: string;

  @IsOptional()
  @Length(1, 20)
  postalCode: string;

  userId: number
}
