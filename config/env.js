export default {
  environment: process.env.NODE_ENV || 'development',
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.PORT || process.env.HTTP_PORT || '3000',
  },
}
