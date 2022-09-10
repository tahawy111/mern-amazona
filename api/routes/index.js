import cart from "./cart.js";
import seed from "./seed.js";
import product from "./product.js";
import user from "./user.js";
import order from "./order.js";

export default function (app) {
  app.use("/api/cart", cart);
  app.use("/api/seed", seed);
  app.use("/api/product", product);
  app.use("/api/user", user);
  app.use("/api/orders", order);
}
