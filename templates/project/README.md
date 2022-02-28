# rest-api-node-template
## Commands
```npm run build```     --> Build the API

```npm run start```     --> Start the nodemon server

```npm run test```      --> Run all the tests (linting + unit tests)

```npm run test-fix```  --> Run all the tests (linting + unit tests) and try to fix the linting that don't pass
## API Architecture
| Functionality     | Status                | Help |
|-------------------|-----------------------|------|
| Controller usage  | :white_check_mark:    | [Routing controllers Annotations](https://github.com/typestack/routing-controllers) & [TypeDI service injection](https://github.com/typestack/typedi) |
| Middleware usage  | :white_check_mark:    | [Routing controllers Annotations](https://github.com/typestack/routing-controllers) & [TypeDI service injection](https://github.com/typestack/typedi) |
| Interceptor usage | :white_check_mark:    | [Routing controllers Annotations](https://github.com/typestack/routing-controllers) & [TypeDI service injection](https://github.com/typestack/typedi) |
| Repository usage  | :white_check_mark:    | Simple classes with [TypeDI service injection](https://github.com/typestack/typedi) |

## Quality
| Functionality     | Status                | Help                                          | Command                   |
|-------------------|-----------------------|-----------------------------------------------|---------------------------|
| Unit testing      | :white_check_mark:    | [Jest unit tests](https://jestjs.io/fr/)      | ```npm run test(-fix)```  |
| Syntax checker    | :white_check_mark:    | [TSlint](https://palantir.github.io/tslint/)  | ```npm run test(-fix)```  |
| Data typing       | :white_check_mark:    | [Typescript](https://www.typescriptlang.org/) |                           |
| API Documentation | :white_check_mark:    | [Swagger](https://swagger.io/)                | Default path : ```/docs```|