import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environments } from 'environment';

@Module({
  imports: [ConfigModule.forRoot({
    load: [environments],
    isGlobal: true,
    cache: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
