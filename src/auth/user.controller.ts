import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('user')
export class UserController {
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req) {
    return req.user;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Get('admin-only')
    adminData() {
    return { message: 'Datos secretos solo para ADMIN' };
    }
}
