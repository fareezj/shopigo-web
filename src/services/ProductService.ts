import axios from "axios";

export const fetchProduct = async (productId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/inventory/get-product/${productId}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
