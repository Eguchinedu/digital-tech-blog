'use client'

import { BlogPost } from "@/app/types/blogTypes";
import Image from "next/image";
import React, { useState } from "react";
import dateFormat, { masks } from "dateformat";

import { useRouter } from "next/navigation";
import { truncateString } from "@/app/helpers/truncate";

const PostCardList = ({ props }: { props: BlogPost }) => {
  

    const router = useRouter()

  return (
    <div className="border-b-2 py-6 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {props?.user && (
            <div className="flex-shrink-0 overflow-hidden">
              <Image
                src={props.user.profileUrl}
                alt={props.user.firstName}
                className="h-full w-full object-contain rounded-full"
                height={30}
                width={30}
              />
            </div>
          )}

          <div className="flex  gap-3 items-center">
            <h4 className="font-semibold text-gray-500 capitalize ">{props?.user?.firstName} {props?.user?.lastName}</h4>
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <p>{dateFormat(props?.createdAt, "mmm d, yyyy")}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start ">
        <div className="max-w-[700px]">
          <h3 className=" text-lg md:text-3xl font-bold my-3">
            {props?.title}
          </h3>

          <p className="text-sm text-gray-400 my-2 hidden md:block">
            {" "}
            {truncateString(props?.content, 300)}
            {props?.content?.length > 50 && (
              <span className="text-black  cursor-pointer font-bold">....</span>
            )}
          </p>
        </div>
        {props.coverImgUrl ? (
          <div className="flex-shrink-0 overflow-hidden hidden md:block">
            <Image
              src={props.coverImgUrl}
              alt='coverImg'
              className="h-full w-full object-contain rounded-md"
              height={180}
              width={180}
            />
          </div>
        ) : null}
      </div>
      <div className="flex justify-between items-center">
        <button
          className="rounded-full border px-2 py-2 border-white text-sm bg-gray-200 whitespace-nowrap flex items-center justify-center font-semibold w-fit "
          onClick={() => router.push(`/home/${props.id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default PostCardList;
