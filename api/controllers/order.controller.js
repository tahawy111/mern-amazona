import Order from "../models/Order.js";

export const create = async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    user: req.user._id,
  });
  const order = await newOrder.save();
  return res.status(201).json({ message: "New Order Created", order });
};
export const getById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    return res.status(200).json({ order });
  } catch (error) {
    return res.status(400).json({
      error: "Order not found",
    });
  }
};
