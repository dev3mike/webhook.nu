import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environments } from 'environment';
import { ConfigurationService } from 'src/configuration/configuration.service';

@Global()
@Module({
    imports: [ConfigModule.forRoot({
        load: [environments],
        cache: true
    })],
    controllers: [],
    providers: [ConfigurationService],
    exports: [ConfigurationService]
})
export class ConfigurationModule { }
