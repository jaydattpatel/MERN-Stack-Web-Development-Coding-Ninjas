import CartModel from "./cart.model.js";

export default class CartController {
  add(req, res) {
    const { productID, quantity } = req.query;
    const userID = req.userID;
    CartModel.add(productID, userID, quantity);
    res.status(201).send("Cart is updated");
  }

  get(req, res) {
    const userID = req.userID;
    const items = CartModel.get(userID);
    return res.status(200).send(items);
  }

  delete(req, res) {
    const userID = req.userID;
    const cartID = req.params.id;
    const error = CartModel.delete(cartID, userID);
    if (error) {
      return res.status(404).send(error);
    }
    return res.status(200).send("Cart item is removed");
  }
}
