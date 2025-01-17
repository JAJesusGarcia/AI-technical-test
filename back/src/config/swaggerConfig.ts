import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI-TECHNICAL-TEST',
      version: '1.0.0',
      description: 'API documentation for the AI-TECHNICAL-TEST backend',
    },
  },
  apis: ['./src/routes/*.ts'], // Ajusta el path si es necesario
};
