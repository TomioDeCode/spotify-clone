import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  signup(
    @Body()
    UserDTO: CreateUserDTO,
  ): Promise<User> {
    return this.userService.create(UserDTO);
  }
}
