export const saveCart = (obj) => {
  if (localStorage.ShoppingCart) {
    let listaCarrinho = JSON.parse(localStorage.getItem('ShoppingCart'));
    const verifica = listaCarrinho.some((item) => item.title === obj.title);

    if (verifica) {
      const getItem = listaCarrinho.find((item) => item.title === obj.title);
      getItem.quantidade += 1;

      let allItems = listaCarrinho.filter((item) => item.title !== obj.title);
      allItems = [...allItems, getItem];
      localStorage.setItem('ShoppingCart', JSON.stringify(allItems));
    } else {
      const item = {
        title: obj.title,
        price: obj.price,
        quantidade: 1,
      };

      listaCarrinho = [...listaCarrinho, item];
      localStorage.setItem('ShoppingCart', JSON.stringify(listaCarrinho));
    }
  } else {
    const item = {
      title: obj.title,
      price: obj.price,
      quantidade: 1,
    };

    const listaCarrinho = [item];
    localStorage.setItem('ShoppingCart', JSON.stringify(listaCarrinho));
  }
};

export const removeCart = (obj) => {
  const listaCarrinho = JSON.parse(localStorage.getItem('ShoppingCart'));
  const filtro = listaCarrinho.find((item) => item.name === obj.name);
  filtro.quantidade -= 1;

  if (filtro.quantidade === 0) {
    filtro.quantidade = 1;
    let remove = listaCarrinho.filter((item) => item.title !== obj.title);
    remove = [...remove, filtro];
    localStorage.setItem('ShoppingCart', JSON.stringify(remove));
  } else {
    let remove = listaCarrinho.filter((item) => item.title !== obj.title);
    remove = [...remove, filtro];
    localStorage.setItem('ShoppingCart', JSON.stringify(remove));
  }
};

export const deleteItem = (obj) => {
  const listaCarrinho = JSON.parse(localStorage.getItem('ShoppingCart'));
  const remove = listaCarrinho.filter((item) => item.title !== obj.title);
  localStorage.setItem('ShoppingCart', JSON.stringify(remove));
};

export const loadCart = () => {
  if (localStorage.ShoppingCart) {
    const listaCarrinho = JSON.parse(localStorage.getItem('ShoppingCart'));
    return listaCarrinho;
  }
  return [];
};

export const addComents = (id, obj) => {
  if (localStorage[id]) {
    let coments = JSON.parse(localStorage.getItem([id]));
    coments = [...coments, obj];
    localStorage.setItem([id], JSON.stringify(coments));
  } else {
    const coments = [obj];
    localStorage.setItem([id], JSON.stringify(coments));
  }
};

export const loadComents = (id) => {
  if (localStorage[id]) {
    const coments = JSON.parse(localStorage.getItem([id]));
    return coments;
  }
  return [];
};
