import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from '../dist/environments';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService<ConfigType>) { }

  getHello(): string {
    return this.configService.get('HOST');
  }
}
