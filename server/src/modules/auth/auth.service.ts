import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    return await this.usersService.validateUser(email);
  }

  async login(user: any) {
    const userData = await this.usersService.validateUser(user.email);
    if (!userData) {
      throw new BadRequestException({ message: 'Invalid credentail' })
    }
    if (!await bcrypt.compare(user.password, userData.password)) {
      throw new BadRequestException({ message: 'Invalid credentail' });
    }
    const payload = { id: userData.id, email: userData.email, name: userData.name };
    return {
      access_token: this.jwtService.sign(payload),
      userId: userData.id,
      email: userData.email,
      name: userData.name
    };
  }

}
