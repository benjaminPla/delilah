import { ordersServer } from "../../server/orders.js";
import { usersServer } from "../../server/user.js";

const ordersControllers = {
  findAll: async (req, res) => {
    res.send(await ordersServer.findAll());
  },
  findOne: async (req, res) => {
    const data = req.body.id || req.params.orderId;
    let find = await ordersServer.findOne(data);
    find == "" ? res.send("order not found") : res.send(find);
  },
  post: async (req, res) => {
    ordersServer.post(req.body);
    res.send("posted order");
  },
  delete: async (req, res) => {
    const data = req.body.id || req.params.orderId;
    let find = await ordersServer.findOne(data);
    find == ""
      ? res.send("order not found")
      : (ordersServer.delete(data), res.send(`deleted order ${data}`));
  },
  put: async (req, res) => {
    let find = await ordersServer.findOne(req.body.id);
    find == ""
      ? res.send("order not found")
      : (ordersServer.put(req.body), res.send(`updated order ${req.body.id}`));
  },
};

export { ordersControllers };
