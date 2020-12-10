class Tabelas {
  init(connection) {
    this.connection = connection;

    this.createMenu();
  }

  createMenu() {
    const sql = 'CREATE TABLE Menu (id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'
    this.connection.query(sql, (erro) => {
      if(erro) {
        console.log(erro);
      } else {
        console.log('tabela chamada')
      }
    })
  }
}

module.exports = new Tabelas;