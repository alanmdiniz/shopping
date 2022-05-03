import moment from "moment";
import { v4 as uuid } from "uuid";
import { CreateOrder } from "./OrderService";

export const OrderCreateAsync = async (dispatch, userId, email, cartProducts) => {
  let newOrderId = uuid();
  await dispatch(
    CreateOrder({
      id: newOrderId,
      date: moment(),
      userId: userId,
      email: email,
      products: cartProducts,
    })
  );
};
