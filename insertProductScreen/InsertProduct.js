window.onload = function () {
  getSessionAndPlotScreen();
};

const inserProduct = (event) => {
  event.preventDefault();
  console.log(document.getElementById('imgProduct').src);
  //pegando os valures digitados e montando JSON
  let nome = document.getElementById('name').value;
  let descicao = document.getElementById('description').value;
  let valor = document.getElementById('value').value;
  let imagem = document.getElementById('imgProduct').src;
  let JSONProduct = {
    nome: nome,
    descricao: descicao,
    valor: valor,
    imagem: imagem,
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

const selectImageProduct = () => {
  const Input = document.getElementById('myFile');
  const reader = new FileReader();

  reader.readAsDataURL(Input.files[0]);

  reader.onload = function () {
    document.getElementById('imgProduct').src = reader.result;
  };
};

const getSessionAndPlotScreen = () => {
  //Carregar carrinho session
  let carrinhoArray = JSON.parse(
    sessionStorage.getItem('carrinhoArray') || '[]'
  );
  let element = document.getElementById('carCount');
  element.innerHTML = carrinhoArray.length;
};
