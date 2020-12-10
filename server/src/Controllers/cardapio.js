module.exports = app => {
  app.get('/', (req, res) => res.send('Servidor rodando legal'))

  app.post('/', (req, res) => res.send('fazendo post'))
}