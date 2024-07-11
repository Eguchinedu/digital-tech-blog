"use client";

import { BlogPost } from "@/app/types/blogTypes";
import { PageLayout } from "@/app/Wrappers/PageLayout";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import author from "../../../../public/img/author.png";
import chef from "../../../../public/img/chef.jpeg";

import PostCard from "@/app/components/cards/PostCard";
import Pagination from "@/app/components/navigation/pagination";
import { useRouter } from "next/navigation";

const PostPage = () => {
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
      blogUser: "Michael Doe",
      blogUserImg: author,
      blogUserId: "023",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
    {
      blogId: "3",
      blogTitle:
        "3 Psychological-Based Marketing Strategy Hacksyou need to know",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["Marketing"],
      blogUser: "Jane Doe",
      blogUserImg: author,
      blogUserId: "025",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
    {
      blogId: "4",
      blogTitle: "10 best ways to improve your code",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["Marketing"],
      blogUser: "Jane Foster",
      blogUserImg: author,
      blogUserId: "025",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
    {
      blogId: "5",
      blogTitle: "Ui/Ux  beginner tooltips every novice designer should know",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["Design", "Ux design"],
      blogUser: "Martha Smith",
      blogUserImg: author,
      blogUserId: "025",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
    {
      blogId: "6",
      blogTitle: "New ways to implement redux store",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium facilis sint consequatur eos maxime iusto quod delectus pariatur voluptatem temporibus fugit error perspiciatis corrupti suscipit obcaecati sunt, cupiditate sed. Ipsum, accusamus sunt quam ipsam assumenda ipsa quis fugiat mollitia veniam. Perspiciatis quisquam optio veniam mollitia, porro excepturi sed officia facilis accusantium saepe exercitationem, minima similique reprehenderit.",
      blogTags: ["Development"],
      blogUser: "Prof scott",
      blogUserImg: author,
      blogUserId: "025",
      blogDate: "2024-06-10T11:51:57.607Z",
      blogImg: chef,
    },
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogList.slice(indexOfFirstPost, indexOfLastPost);

   const router = useRouter();

   const handleNext = () => {
    
     const length = blogList.length;
     const count = length - 1;
     if (currentPage < count) {
       setCurrentPage(currentPage + 1);
       router.push(`/posts/${currentPage + 1}`);
     } else {
       setCurrentPage(1);
     }
   };

   const handlePrevious = () => {
    

     if (currentPage > 0) {
       setCurrentPage((prev) => prev - 1);
       router.push(`/posts/${currentPage - 1}`);
     } else {
       setCurrentPage(0);
     }
   };



  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="max-w-[1200px] m-auto h-full">
          <div className=" py-9  flex justify-center items-center">
            <div className="flex items-center justify-center gap-10">
              <div>
                <div className="bg-white border w-[500px] min-w-[full]  flex items-center gap-2.5 px-4 h-[56px] rounded-full">
                  <div>
                    <IoIosSearch fontSize={25} color="#ccc" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search blog Post"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent w-full text-base placeholder:text-dkgrey outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 font-bold">
                <span>Topics:</span>
                <ul className="grid grid-cols-4 *:rounded-full *:border *:px-2 gap-2 *:py-2 *:border-white *:bg-gray-200 whitespace-nowrap text-center *w-fit *:cursor-pointer">
                  <li>Design</li>
                  <li>Development</li>
                  <li>Ux Design</li>
                  <li>Marketing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-3 h-full">
            <div className="border-b-2 py-4">
              <h3 className="text-xl text-gray-500 font-medium">All Posts</h3>
            </div>
            <div className="p-4">
              {currentPosts.length > 0 ? (
                <>
                  {" "}
                  {currentPosts.map((blog: BlogPost) => (
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
            <div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={blogList.length}
                paginate={paginate}
                currentPage={currentPage}
                indexOfFirstPost={indexOfFirstPost}
                indexOfLastPost={indexOfLastPost}
                handleNext={handleNext}
                handlePrev={handlePrevious}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostPage;
