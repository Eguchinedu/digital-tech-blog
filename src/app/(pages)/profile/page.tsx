"use client";
import { PageLayout } from "@/app/Wrappers/PageLayout";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import author from "../../../../public/img/author.png";
import chef from "../../../../public/img/chef.jpeg";

import PostCard from "@/app/components/cards/PostCard";
import { BlogPost } from "@/app/types/blogTypes";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Profile = () => {
  const [search, setSearch] = useState<string>("");

  const [blogList, setBlogList] = useState<BlogPost[]>([
    {
      blogId: "1",
      blogTitle:
        "8 Psychological-Based Design Hacks That will make you a better UX Designer",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["UX design", "Design"],
      blogUser: "John Doe",
      blogUserImg: author,
      blogUserId: "024",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
    {
      blogId: "2",
      blogTitle:
        "10 ways to improve your code base and maximize your performance",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["Development", "Design"],
      blogUser: "John Doe",
      blogUserImg: author,
      blogUserId: "023",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
  ]);
  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] m-auto h-full">
          <div className=" py-11  flex  flex-col ">
            <div className="flex  items-center justify-start gap-10 my-3">
              <div className="flex-shrink-0">
                <Image
                  src={author}
                  alt="current user"
                  className="h-180 w-180 rounded-full"
                  height={180}
                  width={180}
                />
              </div>
              <div className="flex-1 grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                <div className="col-span-1 p-6 bg-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-base font-bold text-grey500 -tracking-[0.32px]">
                      Total Blog Posts
                    </h4>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex gap-2">
                      <p className="text-[36px] text-netrual1100 font-bold leading-[40px]">
                        10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-5xl font-semibold text-gray-600">John Doe</h3>
              {/* <button className="bg-gray-500 text-white px-5 py-2 rounded "> Add Post</button> */}
            </div>
          </div>
          <div className="py-5 h-full">
            <div className="border-b-2 py-4 flex justify-between items-center">
              <h3 className="text-xl text-gray-500 font-medium ">Your Posts</h3>
            </div>
            <div className="p-4">
              {blogList.length > 0 ? (
                <>
                  {" "}
                  {blogList.map((blog: BlogPost) => (
                    <PostCard key={blog.blogId} props={blog} />
                  ))}
                </>
              ) : (
                <div className="flex items-center flex-col justify-center py-32 bg-gray-200 rounded ">
                  <div>
                    <img
                      alt="image"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-28 w-auto"
                    />
                  </div>
                  <p className="text-lg text-gray-400 font-semibold">
                    No Posts Available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
