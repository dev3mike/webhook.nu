Welcome to `webhook.nu`, the open-source **webhook proxy service** designed to simplify your development and testing workflows. 
Whether you're working with Stripe, Discord, Slack, or any service that uses webhooks, `webhook.nu` provides you with unique URLs to capture and inspect webhook requests. 

Not only can you monitor the payloads you receive, but you can also **redirect them** to other URLs, including localhost, facilitating seamless integration and testing of your applications.

    This project is under development

## Features

- **Unique URL Generation**: Create unique endpoints to receive webhooks from any service.
- **Payload Inspection**: View detailed information about the requests you receive, including headers, body, and query parameters.
- **Request Redirection**: Forward received webhooks to other URLs, enabling easy testing of remote and local environments.
- **Localhost Support**: Test webhooks locally by redirecting to localhost URLs, bypassing the need for tunneling services.
- **User-Friendly Dashboard**: Manage your webhooks with ease through a simple and intuitive web interface.

## Tech Stack

`webhook.nu` is built with a robust tech stack designed for performance and scalability:

- **Backend**: NestJS, Prisma, Supabase
- **Frontend**: React
- **Environment Validation**: Zod
- **Monorepo Management**: Turborepo

## License
`webhook.nu` is available under the MIT License.
