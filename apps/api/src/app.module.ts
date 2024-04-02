import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { WebhookModule } from 'src/webhook/webhook.module';

@Module({
  imports: [
    ConfigurationModule,
    WebhookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
