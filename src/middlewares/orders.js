import { ordersServer } from "../../server/orders.js";

const ordersMiddlewares = {
  orderNotFound: async (req, res, next) => {
    const orderId = req.body.id || req.params.orderId;
    let find = await ordersServer.findOne(orderId);
    find == "" ? res.send("order not found") : next();
  },
  missingId: (req, res, next) => {
    const orderId = req.body.id || req.params.orderId;
    !orderId ? res.send("missing 'id' field") : next();
  },
  missingUserId: (req, res, next) => {
    !req.body.user_id ? res.send("missing 'user_id' field") : next();
  },
  missingProductId: (req, res, next) => {
    !req.body.product_id ? res.send("missing 'product_id' field") : next();
  },
};

export { ordersMiddlewares };
