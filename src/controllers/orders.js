import { ordersServer } from "../../server/orders.js";

const ordersControllers = {
  findAll: async (req, res) => {
    res.send(await ordersServer.findAll());
  },
};

export { ordersControllers };
