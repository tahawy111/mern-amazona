import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    _id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    totalQuantity: {
      required: true,
      type: Number,
    },
    totalPrice: {
      required: true,
      type: Number,
    },
    cartItems: {
      required: true,
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("cart", cartSchema);
