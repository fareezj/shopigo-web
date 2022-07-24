import axios from "axios";

export const fetchLandingInventory = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/inventory/get-product"
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
    //    throw new Error(error);
  }
};
