import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../../entity/location.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { appConstants } from 'src/constants';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/guards/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    JwtModule.register({
      secret: appConstants.jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
