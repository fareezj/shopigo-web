import axios from "axios";
import { AddCartReq } from "../types/AddCartReq";

export const addCart = async (reqBody: AddCartReq) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/cart/add-cart`,
      reqBody
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
