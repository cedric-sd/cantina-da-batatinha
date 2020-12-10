const customExpress = require('./src/config/customExpress');
const connection = require('./src/infra/connection');
const Tabelas = require('./src/infra/tabelas');

connection.connect(erro => {
  if(erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso");

    Tabelas.init(connection);
    //não inicia o servidor se o banco der erro
    const app = customExpress();
    
    app.listen(3000, () => console.log('servidor na porta 3000'));    
  }
})