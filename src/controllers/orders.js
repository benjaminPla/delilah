import { ordersServer } from "../../server/orders.js";
import { usersServer } from "../../server/user.js";

const ordersControllers = {
  findAll: async (req, res) => {
    res.send(await ordersServer.findAll());
  },
  findOne: async (req, res) => {
    const orderId = req.body.id || req.params.orderId;
    let find = await ordersServer.findOne(orderId);
    res.send(find);
  },
  post: (req, res) => {
    ordersServer.post(req.body);
    res.send("posted order");
  },
  delete: (req, res) => {
    const data = req.body.id || req.params.orderId;
    ordersServer.delete(data);
    res.send(`deleted order ${data}`);
  },
  put: (req, res) => {
    ordersServer.put(req.body);
    res.send(`updated order ${req.body.id}`);
  },
};

export { ordersControllers };
