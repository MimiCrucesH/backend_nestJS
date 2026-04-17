import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.email, body.password);
  }
  @Get('users')
  getAll(){
    return this.userService.findAll()
  }
}
