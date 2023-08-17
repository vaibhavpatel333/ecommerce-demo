export const appConstants = {
  port: 3100,
  jwtSecret: 'secretKey'
}
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);