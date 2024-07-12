import { useDispatch } from "react-redux";
import { $api } from "../services";
import { BlogPost } from "../types/blogTypes";
import { toast } from "react-toastify";
import { setAllPost } from "../store/slices/PostSlice";
import { AppDispatch } from "../store/store";

export const addPost = async (data: BlogPost) => {
  try {
    const response = await $api.post("/posts", data);

    if ($api.isSuccessful(response)) {
      toast.success("Post Created Successfully");
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while creating the post.");
  }
};

export const getAllPosts = async (dispatch: AppDispatch) => {
  try {
    const response = await $api.fetch("/posts");

    if ($api.isSuccessful(response)) {
      dispatch(setAllPost(response?.data));
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while fetching the posts.");
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await $api.fetch(`/posts/${id}`);

    if ($api.isSuccessful(response)) {
      return response;
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while fetching the post.");
  }
};

export const updatePostById = async (id: string, data: BlogPost) => {
  try {
    const response = await $api.update(`/posts/${id}`, data);

    if ($api.isSuccessful(response)) {
           toast.success("Post updated successfully");

    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while updating the post.");
  }
};

export const deletePostById = async (id: string) => {
  try {
    const response = await $api.delete(`/posts/${id}`);

    if ($api.isSuccessful(response)) {
      toast.success("Post deleted successfully");
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the post.");
  }
};
