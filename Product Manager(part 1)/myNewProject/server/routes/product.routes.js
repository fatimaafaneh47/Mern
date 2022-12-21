const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products", ProductController.getAllproducts);
  app.get("/api/products/:id", ProductController.getproduct);
  app.put("/api/products/:id", ProductController.updateProduct);
  app.delete('/api/products/:id',ProductController.deleteProduct);
};
