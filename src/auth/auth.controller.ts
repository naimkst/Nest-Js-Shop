import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Me } from 'src/guards/current-user-guard.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard.guard';
import { LocalAuthGuard } from 'src/guards/local-auth-guard.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor( private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.sign(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Me() me) {
    return me;
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto){
    return this.authService.registerUser(createUserDto);
  }

}
