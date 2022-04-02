window.onload = function () {
  let carrinhoArray = JSON.parse(
    sessionStorage.getItem('carrinhoArray') || '[]'
  );
  let element = document.getElementById('carCount');
  element.innerHTML = carrinhoArray.length;
};

const onSearchProduct = async (url) => {
  let data;
  await fetch(url)
    .then((response) => response.json())
    .then((result) => {
      data = result.rows;
    })
    .catch((error) => alert('Servidor fora do ar - ' + error));

  return data;
};

const createListProductHTML = async () => {
  //montar url
  let searchText = document.getElementById('searchText').value;
  let url;
  if (searchText === '') {
    url = 'http://localhost:3000/products';
  } else {
    url = `http://localhost:3000/productSearch/${searchText}`;
  }

  //Pegar elemento onde será inserida a lista
  let agroupCardProduct = document.getElementById('agroup-card-product');
  let productHTML = '';
  let products = await onSearchProduct(url);

  //Montar a lista de produtos
  products.forEach((product) => {
    console.log(product);
    productHTML =
      productHTML +
      `<div class="card-product ">
      <div><img  class="image-card-product" src="${product.imagem}"></div>
      <div class="name-card-product ">${product.nome}</div>
      <div class="descricao-card-product ">${product.descricao}</div>
      <div class="value-card-product">$${product.valor}</div>
      <div><button class="button-search" onclick=addToCar(${JSON.stringify(
        product
      )})>Adicionar ao carrinho</button></div>
    </div>`;
  });
  if (productHTML === '') {
    agroupCardProduct.innerHTML =
      '<div>Não foi encontrado nenhum produto!</div>';
  } else {
    agroupCardProduct.innerHTML = productHTML;
  }
};

const addToCar = (productJSON) => {
  //Pega a sessão atual
  let carrinhoArray = JSON.parse(
    sessionStorage.getItem('carrinhoArray') || '[]'
  );
  console.log(carrinhoArray);
  carrinhoArray.push(productJSON);
  sessionStorage.setItem('carrinhoArray', JSON.stringify(carrinhoArray));

  let element = document.getElementById('carCount');
  element.innerHTML = carrinhoArray.length;
};
