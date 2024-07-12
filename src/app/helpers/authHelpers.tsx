import { toast } from "react-toastify";
import { $api } from "../services";
import { UserAuth } from "../types/blogTypes";
import { AppDispatch } from "../store/store";
import { setUserAccessToken, setUserEmail } from "../store/slices/AuthSlice";

export const login = async (data: UserAuth, dispatch: AppDispatch) => {
  try {
    const response = await $api.post("/auth/login", data);

    if ($api.isSuccessful(response)) {
      toast.success("Logged in successfully");
      dispatch(setUserAccessToken(response?.data?.accessToken))
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while logging in.");
  }
};
export const registerUser = async (data: UserAuth, dispatch: AppDispatch) => {
  try {
    const response = await $api.post("/auth/register", data);

    if ($api.isSuccessful(response)) {
      toast.success("Registration Successful");
      dispatch(setUserEmail(data.email))
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while Creating your account.");
  }
};
