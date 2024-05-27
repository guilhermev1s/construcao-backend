const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Api-Empresas',
    description: 'Api de gerenciamneto de projetos para uma empresa'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./routes/autenticacao.routes.js', './routes/routes.js'];

swaggerAutogen(outputFile, routes, doc);