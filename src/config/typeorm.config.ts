import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin1234',
  database: 'nestjsfirst',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
