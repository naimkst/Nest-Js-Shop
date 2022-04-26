import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  create(createUserDto: CreateUserDto) {
    return this.databaseService.user.create({ 
      data: {
        ...createUserDto
      }
    });
  }

  findOneByEmail( email: string){
    return this.databaseService.user.findUnique({ where: { email } });
  }

  findAll() {
    return this.databaseService.user.findMany();
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.user.update({ data: updateUserDto, where: { id } });
  }

  remove(id: number) {
    return this.databaseService.user.delete({ where: { id } });
  }
}
