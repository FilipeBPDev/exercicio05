const http = require('http');
const axios = require('axios');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');

    if (response.status === 200) {
      const apiChuck = response.data.value;
      
      console.log(`Piada do Chuck Norris: ${apiChuck}`);
      
      const responseData = {
        apiChuck
      };
      res.end(JSON.stringify(responseData));
    } else {
      console.error('Erro ao requisitar a API do Chuck Norris');
      res.end('Erro ao requisitar a API do Chuck Norris');
    }
  } catch (error) {
    console.error('Erro ao requisitar a API do Chuck Norris:', error);
    res.end('Erro ao requisitar a API do Chuck Norris');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});