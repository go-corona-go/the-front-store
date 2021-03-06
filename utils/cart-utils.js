const LS_KEY = "wtfo_cart";

export const addToCart = (product) => {
  const currentData = localStorage.getItem(LS_KEY);
  let isNewProduct = true;
  if (currentData) {
    const updatedCart = JSON.parse(currentData).map((existingProduct) => {
      if(product.id === existingProduct.id) {
        existingProduct.item_units += product.item_units;
        isNewProduct = false;
      }
      return existingProduct;
    });
    if(isNewProduct) updatedCart.push(product);
    localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
  } else {
    const updatedCart = [];
    updatedCart.push(product);
    localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
  }
};

export const getCartDetails = () => {
  const currentData = localStorage.getItem(LS_KEY);
  return currentData ? JSON.parse(currentData) : [];
};

export const removeItem = (id) => {
  const currentData = localStorage.getItem(LS_KEY);
  if (!currentData) return;
  const updatedCart = JSON.parse(currentData).filter(
    (product) => product.id !== id
  );
  localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
};

export const modifyQty = (id, item_units) => {
  const currentData = localStorage.getItem(LS_KEY);
  if (!currentData) return;
  const updatedCart = JSON.parse(currentData).map((product) => {
    if (product.id === id) {
      product.item_units = item_units;
    }
    return product;
  });
  localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
};
