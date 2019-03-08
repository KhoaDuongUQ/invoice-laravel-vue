/*
    Defines the API route we are using.
*/
var api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'https://invoice-laravel-vue.dev';
        break;
    case 'production':
        api_url = '';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}