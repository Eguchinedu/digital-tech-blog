'use client'

import { BlogPost } from "@/app/types/blogTypes";
import Image from "next/image";
import React, { useState } from "react";
import dateFormat, { masks } from "dateformat";

import { useRouter } from "next/navigation";

const PostCardList = ({ props }: { props: BlogPost }) => {
  

    const router = useRouter()

  return (
    <div className="border-b-2 py-6 flex flex-col gap-3">
   
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex-shrink-0 overflow-hidden">
            <Image
              src={props.blogUserImg}
              alt={props.blogTitle}
              className="h-full w-full object-contain rounded-full"
              height={30}
              width={30}
            />
          </div>

          <div className="flex  gap-3 items-center">
            <h4 className="font-semibold text-gray-500 ">{props.blogUser}</h4>
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <p>{dateFormat(props.blogDate, "mmm d, yyyy")}</p>
          </div>
        </div>
       
      </div>
      <div className="flex justify-between items-start ">
        <div className="max-w-[700px]">
          <h3 className="text-3xl font-bold my-3">{props.blogTitle}</h3>

          <p className="text-sm text-gray-400 my-2">{props.blogDescription}</p>
        </div>
        {props.blogImg ? (
          <div className="flex-shrink-0 overflow-hidden">
            <Image
              src={props.blogImg}
              alt={props.blogTitle}
              className="h-full w-full object-contain rounded-md"
              height={180}
              width={180}
            />
          </div>
        ) : null}
      </div>
      <div className="flex justify-between items-center">
        {/* <ul className="grid grid-cols-4 *:rounded-full *:border *:px-2 gap-2 *:py-2 *:border-white *:text-sm *:bg-gray-200 whitespace-nowrap text-center *:font-semibold *w-fit *:cursor-pointer">
          {props.blogTags.length > 0 &&
            props.blogTags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul> */}
        <button className="rounded-full border px-2 py-2 border-white text-sm bg-gray-200 whitespace-nowrap flex items-center justify-center font-semibold w-fit " onClick={()=> router.push(`/home/${props.blogId}`)}>Read More</button>
      </div>
    </div>
  );
};

export default PostCardList;
