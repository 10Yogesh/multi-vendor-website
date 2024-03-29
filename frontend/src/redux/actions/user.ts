import { createAsyncThunk } from "@reduxjs/toolkit";
import ykAxios from "../../config/axiosConfig";
import { AxiosError } from "axios";

interface LoginData {
  name?: string;
  email: string;
  phoneNumber?: string;
  password: string;
  rememberMe?: boolean;
}

export const loginAsync = createAsyncThunk(
  "user/login",
  async (loginData: LoginData) => {
    try {
      const response = await ykAxios.post("/user/login", loginData, {
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

export const autoLoginAsync = createAsyncThunk("user/autoLogin", async () => {
  try {
    const response = await ykAxios.get("/user", {
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
});

export const createUserAsync = createAsyncThunk(
  "user/create",
  async (loginData: LoginData) => {
    try {
      const response = await ykAxios.post("/user/create", loginData, {
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

export const activateUserAsync = createAsyncThunk(
  "user/active",
  async (token: string) => {
    try {
      const response = await ykAxios.get(`/user/activation/${token}`);
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
