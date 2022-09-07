import cart from "./cart.js";

export default function (app) {
  app.use("/api/cart", cart);
}
