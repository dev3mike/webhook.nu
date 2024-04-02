import { Controller, Get, Param } from '@nestjs/common';
import { ConfigurationService } from 'src/configuration/configuration.service';

@Controller('webhook')
export class WebhookController {

    constructor(private readonly configurationService: ConfigurationService) { }

    @Get(':webhookId')
    public handleGetRequest(@Param('webhookId') webhookId: string) {
        return { name: "hello" }
    }
}
