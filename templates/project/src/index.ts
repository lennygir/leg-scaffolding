import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import environment from './environment';
import path from 'path';

import swaggerSpec from './swagger';
import swaggerUi from 'swagger-ui-express';

useContainer(Container);

const app = createExpressServer({
  controllers: [path.join(__dirname, '/controllers/**/*.ts')],
  middlewares: [path.join(__dirname, '/middlewares/**/*.ts')],
  interceptors: [path.join(__dirname, '/interceptors/**/*.ts')]
});

app.use(environment.documentationPath, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(environment.port);