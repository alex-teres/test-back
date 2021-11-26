import { Inject, Injectable } from '@nestjs/common';
import { User } from './model/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }
}
