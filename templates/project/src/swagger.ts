import environment from "./environment";

import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: environment.appName + ' API documentation',
        version: environment.version,
        description: '',
        license: {
            name: '',
            url: '',
        },
        contact: {
            name: '',
            url: '',
        }
    },
    servers: [
        {
            url: 'http://localhost:' + environment.port,
            description: 'Development server',
        }
    ]
};

const options = {
  swaggerDefinition,
  apis: ['./**/*.ts']
};

export default swaggerJSDoc(options);