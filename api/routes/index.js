import cart from "./cart.js";
import seed from "./seed.js";
import product from "./product.js";

export default function (app) {
  app.use("/api/cart", cart);
  app.use("/api/seed", seed);
  app.use("/api/product", product);
}
