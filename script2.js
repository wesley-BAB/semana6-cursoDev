function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve('Número par');
    } else {
      reject('Número ímpar');
    }
  });
}

// Exemplo de uso com número qualquer:
const numeroTestado = 7;

verificarNumero(numeroTestado)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log(`Número passado: ${numeroTestado}`);
  });
