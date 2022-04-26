import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor( private userService: UsersService){
  }

  async validateUser( email: string, password: string){
    const user = await this.userService.findOneByEmail(email);
    if( user.password !== password) return false;
    return user;
  }
  registerUser( createUserDto: CreateUserDto){}
}
