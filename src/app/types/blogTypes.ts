import { StaticImageData } from "next/image";

export type BlogPost = {
  blogId: string;
  blogTitle: string;
  blogDescription: string;
  blogTags: string[];
  blogUser: string;
  blogUserImg: string | StaticImageData;
  blogUserId: string;
  blogImg?: string | StaticImageData;
  blogDate: string;
};