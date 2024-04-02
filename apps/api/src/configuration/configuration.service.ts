import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'environment';

@Injectable()
export class ConfigurationService {
    constructor(private configService: ConfigService<ConfigType>) { }

    public Get(key: keyof ConfigType) {
        return this.configService.get(key);
    }
}
