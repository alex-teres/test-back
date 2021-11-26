import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/model/users.entity';
import { Note } from 'src/modules/notes/model/notes.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'test',
        database: 'postgres',
      });
      sequelize.addModels([Note, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
