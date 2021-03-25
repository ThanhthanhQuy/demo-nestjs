import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      name: 'Quy',
      uid : '18283874858',
      address : 'HN',
      password: '1234',

    },
    {
      name: 'Thanh',
      password: '12345',

    },
  ];
  findUser(name : string)  {
    return this.users.find(user => user.name === name)
  }
}
