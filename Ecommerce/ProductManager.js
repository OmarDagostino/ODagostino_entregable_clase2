// *************************************************************************************************
// creación de la clase ProductManager

class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1; 
    }
  
  // creación del método addProduct 
  
    addProduct(
      title, 
      description,
      price,
      thumbnail,
      code,
      stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
      const isCodeRepeated = this.products.some(product => product.code === code);
      if (isCodeRepeated) {
        console.error(`El código "${code}" ya existe en otro producto.`);
        return;
      }
      const newProduct = {
        id: this.nextProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
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
          console.log(product,"Se encontro mediante busqueda por id")
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
  
  
  
  productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
  
  productManager.getProducts()
  
  // intento de agregar el mismo producto por segunda vez
  
  
  productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
  
  
  // pruebas del metodo getProductById 
  
  let productIdToFind = 1;
  let productById = productManager.getProductById(productIdToFind); 
  
  
  productIdToFind = 2; 
  productById = productManager.getProductById(productIdToFind)
  