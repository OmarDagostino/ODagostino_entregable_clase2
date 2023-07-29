// *************************************************************************************************
// creación de la clase ProductManager

class ProductManager {
  constructor() {
    this.products = [];
    this.nextProductId = 1; 
  }

// creación del método addProduct 

  addProduct(productData) {
    if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }
    const isCodeRepeated = this.products.some(product => product.code === productData.code);
    if (isCodeRepeated) {
      console.error(`El código "${productData.code}" ya existe en otro producto.`);
      return;
    }
    const newProduct = {
      id: this.nextProductId,
      title: productData.title,
      description: productData.description,
      price: productData.price,
      thumbnail: productData.thumbnail,
      code: productData.code,
      stock: productData.stock
    };

    this.products.push(newProduct);
    this.nextProductId++; 
    console.log("Producto agregado correctamente:", newProduct);
  }
    
// creación del método getProducts


  getProducts() { 
    console.log(this.products);
    return this.products;
  }
   
// creación del método getProductById 


  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      console.error(`La ID "${id}" no pudo ser encontrada`);
    }
  }
}
// Fin la creación de la clase ProductManager 
// ********************************************************************************************


// creación de la instancia productManager de la clase ProductManager

const productManager = new ProductManager();

productManager.getProducts()

// agregado del producto de prueba 


productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "sin imagen",
  code: "abc123",
  stock: 25
});

productManager.getProducts()

// intento de agregar el mismo producto por segunda vez


productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 25
  });

// pruebas del metodo getProductById 

let productIdToFind = 1;
let productById = productManager.getProductById(productIdToFind); 

productIdToFind = 2; 
productById = productManager.getProductById(productIdToFind)
