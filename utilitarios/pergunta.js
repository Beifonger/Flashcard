const rl = require("./rl.js")

function perguntar(texto) {
    return new Promise((resolve) => {
      rl.question(texto, (resposta) => {
        resolve(resposta);
      });
    });
  }

  module.exports = perguntar;