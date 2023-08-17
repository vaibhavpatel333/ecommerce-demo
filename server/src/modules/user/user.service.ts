import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from '../../entity/user.entity';

@Injectable()
export class UserService {
  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    user.mobileNumber = userRegister.mobileNumber;
    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ where: { email } });
  }

  async getUserById(id: number): Promise<User | undefined> {
    return User.findOne({ where: { id } });
  }

  async validateUser(email: string) {
    const user = User.findOne({ where: { email } });
    if (!user) {
      console.log('[UsersService] validateUser: found user', user)
      throw new BadRequestException({message: 'Invalid credentail'})
    }
    return user
  }
}
