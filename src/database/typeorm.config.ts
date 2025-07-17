import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('POSTGRES_HOST', 'localhost'),
      port: this.config.get<number>('POSTGRES_PORT', 5432),
      username: this.config.get<string>('POSTGRES_USERNAME', 'admin'),
      password: this.config.get<string>('POSTGRES_PASSWORD', 'admin'),
      database: this.config.get<string>('POSTGRES_DATABASE', 'university'),
      entities: [__dirname + './entities/*.entity{.ts,.js}'],
      migrations: [__dirname + './migrations/*{.ts,.js}'],
      synchronize: false, // Set to false in production
    };
  }
}