import axios from "axios";

const baseURL =
  import.meta.env.VITE_BASE_URL;

export const saveContactForm =
  async(formData) => {

    try {

      const response =
        await axios.post(
          `${baseURL}/save/contact`,
          formData
        );

      return response.data;

    }
    catch(error){

      console.error(error);

      throw error;

    }
};

export const getMessages =
  async() => {

    try {

      const response =
        await axios.get(
          `${baseURL}/messages`
        );

      return response.data;

    }
    catch(error){

      console.error(error);

      throw error;

    }

};

export const saveProduct =
  async(productData) => {

    const response =
      await axios.post(
        `${baseURL}/save/product`,
        productData
      );

    return response.data;

};

export const getProducts =
  async() => {

    const response =
      await axios.get(
        `${baseURL}/products`
      );

    return response.data;

};

export const deleteProduct =
  async(id) => {

    const response =
      await axios.delete(
        `${baseURL}/product/${id}`
      );

    return response.data;

};

export const updateProduct =
  async(id, productData) => {

    const response =
      await axios.put(
        `${baseURL}/product/${id}`,
        productData
      );

    return response.data;

};