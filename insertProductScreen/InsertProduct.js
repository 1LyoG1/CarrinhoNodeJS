const inserProduct = (event) => {
  event.preventDefault();
  //pegando os valures digitados e montando JSON
  let nome = document.getElementById('name').value;
  let descicao = document.getElementById('description').value;
  let valor = document.getElementById('value').value;
  let JSONProduct = {
    nome: nome,
    descricao: descicao,
    valor: valor,
  };

  //Fazendo post para salvar o produto no banco
  postProduct(JSONProduct);
};

const postProduct = (JSONProduct) => {
  fetch('http://localhost:3000/createProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(JSONProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Produto inserido com sucesso!');
    })
    .catch((error) => {
      alert('Ocorreu um erro ao tentar inserir o produto!!');
    });
};
