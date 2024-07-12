"use client";

import { BlogPost } from "@/app/types/blogTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import dateFormat from "dateformat";
import { truncateString } from "@/app/helpers/truncate";

const PostCardGrid = ({ props }: { props: BlogPost }) => {
  const router = useRouter();

  return (
    <div className="rounded-md h-[370px]  flex flex-col bg-gray-100 ">
      {props?.coverImgUrl ? (
        <div className="flex-shrink-0 overflow-hidden h-[100px]">
          <Image
            src={props.coverImgUrl}
            alt="cover image"
            className="h-full w-full object-cover rounded-t-md"
            height={50}
            width={200}
          />
        </div>
      ) : null}
      <div className="py-2 px-3 flex flex-col flex-grow">
        <h3 className="text-xl font-bold my-3 text-gray-500">{props.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-3 items-center">
            {props.user?.profileUrl && (
              <div className="flex-shrink-0 overflow-hidden h-[20px] w-[20px]">
                <Image
                  src={props.user.profileUrl}
                  alt={props.user.firstName}
                  className="h-full w-full object-cover rounded-full"
                  height={10}
                  width={10}
                />
              </div>
            )}

            <div className="flex flex-col items-start">
              <h4 className="font-bold text-[10px] text-gray-500 capitalize">
                {props.user?.firstName} {props?.user?.lastName}
              </h4>
              <p className="text-gray-500 text-xs">
                {dateFormat(props?.createdAt, "mmm d, yyyy")}
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 flex-grow mb-2">
          {truncateString(props?.content, 70)}
          {props?.content?.length > 50 && (
            <span className="text-gray-500 cursor-pointer font-bold">....</span>
          )}
        </p>
        <div className="mt-auto">
          <button
            className="w-full border rounded-md border-gray-500 py-3"
            onClick={() => router.push(`/home/${props.id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCardGrid;
