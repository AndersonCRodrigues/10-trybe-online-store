export async function getCategories() {
  // Implemente aqui
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (categoryId) {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  }

  if (query) {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  }
}

export async function getProductById(id) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

// commit inicial
