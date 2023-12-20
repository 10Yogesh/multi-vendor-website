import { createAsyncThunk } from "@reduxjs/toolkit";
import lwpAxios from "../../config/axiosConfig";
import { AxiosError } from "axios";

interface LoginData {
  name?: string;
  email: string;
  password: string;
  address?: string;
  zipCode?: string;
  phoneNumber?: string;
  rememberMe?: boolean;
}

export const shopLoginAsync = createAsyncThunk(
  "shop/login",
  async (LoginData: LoginData) => {
    try {
      const response = await lwpAxios.post("/shop/login", LoginData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {  
      if (error instanceof AxiosError) {  
        throw new Error("Login failed: " + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);

export const shopAutoLoginAsync = createAsyncThunk(
  "shop/login",
  async (LoginData: LoginData) => {
    try {
      const response = await lwpAxios.post("/shop/login", LoginData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {  
      if (error instanceof AxiosError) {  
        throw new Error("Login failed: " + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);

export const createShopAsync = createAsyncThunk(
  "shop/create",
  async (LoginData: LoginData) => {
    try {
      const response = await lwpAxios.post("/shop/create", LoginData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Create failed: " + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);

export const activateShopAsync = createAsyncThunk(
  "shop/active",
  async (token: string) => {
    try {
      const response = await lwpAxios.post(`/shop/activation, ${token}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Login failed: " + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);


