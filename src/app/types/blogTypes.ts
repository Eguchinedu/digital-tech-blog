import { StaticImageData } from "next/image";

export type User = {
  firstName: string;
  lastName: string;
  profileUrl: string | StaticImageData;
};

export type BlogPost = {
  id?: string;
  title: string;
  content: string;
  coverImgUrl: string | StaticImageData;
  createdAt? : string;
  user?: User;
};
export type BlogPostUpdate = {
  id: string;
  title: string;
  content: string;
  coverImgUrl: string | StaticImageData;
  createdAt? : string;
  user?: User;
};



export type AuthPayload =  {
  email: string;
  accessToken: string;
}

export type UserAuth = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profileUrl: string | StaticImageData;
};
