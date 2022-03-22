window.onload = function () {
  getSessionAndPlotScreen();
};

const carRemove = (index) => {
  //Consulto o array atual
  let carrinhoArray = JSON.parse(
    sessionStorage.getItem('carrinhoArray') || '[]'
  );

  alert('Removido!');

  //Removo o index desejado e seto na session
  carrinhoArray.splice(index, 1);
  sessionStorage.setItem('carrinhoArray', JSON.stringify(carrinhoArray));

  //Chamo novamente a action para montar a tela
  getSessionAndPlotScreen();
};

const getSessionAndPlotScreen = () => {
  //Carregar carrinho session
  let carrinhoArray = JSON.parse(
    sessionStorage.getItem('carrinhoArray') || '[]'
  );
  let element = document.getElementById('carCount');
  element.innerHTML = carrinhoArray.length;

  //plotar na tela
  let divCar = document.getElementById('car-item');
  let divTotal = document.getElementById('car-total');
  let listCar = '';
  let totalCar = 0;
  let index = 0;
  carrinhoArray.forEach((element) => {
    totalCar += element.valor;
    listCar += `
      <div>
      <img class="image-card-product"src="https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg"/>
      </div>
      <div class="name-card-product ">${element.nome}</div>
      <div class="descricao-card-product">${element.descricao}</div>
      <div>1</div>
      <div class="value-card-product">$${element.valor}</div>
      <div class="button-icon" onclick=carRemove(${index})><i class="fa fa-trash" aria-hidden="true"></i></div>`;
    index += 1;
  });
  divCar.innerHTML = listCar;
  divTotal.innerHTML = `<span>$${totalCar}<span>`;
};
