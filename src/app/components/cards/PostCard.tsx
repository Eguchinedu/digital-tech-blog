'use client'

import { BlogPost } from "@/app/types/blogTypes";
import Image from "next/image";
import React, { useState } from "react";
import dateFormat, { masks } from "dateformat";
import { CiChat1, CiHeart } from "react-icons/ci";
import { MdEdit, MdOutlineBookmarkAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../modals/DeleteModal";
import EditModal from "../modals/EditModal";

const PostCard = ({ props }: { props: BlogPost }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleOpenDelete = () => {
      setOpenDeleteModal(prev => !prev)
    }
    const handleEditDelete = () => {
      setOpenEditModal(prev => !prev)
    }

  return (
    <div className="border-b-2 py-6 flex flex-col gap-3 cursor-pointer">
      <DeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} blogId={props.blogId}/>
      <EditModal open={openEditModal} setOpen={setOpenEditModal} blogPost={props} />
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex-shrink-0">
            <Image
              src={props.blogUserImg}
              alt={props.blogTitle}
              className="h-10 w-10 rounded-full"
              height={10}
              width={10}
            />
          </div>

          <div className="flex  gap-3 items-center">
            <h4 className="font-semibold text-gray-500 ">{props.blogUser}</h4>
            <div className="w-1 h-1 rounded-full bg-black"></div>
            <p>{dateFormat(props.blogDate, "mmm d, yyyy")}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 *:text-gray-400 *:flex *:items-center  *:text-lg">
          <span onClick={handleEditDelete}>
            <MdEdit fontSize={25} className="text-gray-400" />
          </span>
          <span onClick={handleOpenDelete}>
            <RiDeleteBin6Line fontSize={25} className="text-red-400" />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start ">
        <div className="max-w-[700px]">
          <h3 className="text-3xl font-bold my-3">{props.blogTitle}</h3>

          <p className="text-sm text-gray-400 my-2">{props.blogDescription}</p>
        </div>
        {props.blogImg ? (
          <div className="">
            <Image
              src={props.blogImg}
              alt={props.blogTitle}
              className="h-40 w-60 rounded-md"
              height={40}
              width={60}
            />
          </div>
        ) : null}
      </div>
      <div className="flex justify-between items-center">
        <ul className="grid grid-cols-4 *:rounded-full *:border *:px-2 gap-2 *:py-2 *:border-white *:text-sm *:bg-gray-200 whitespace-nowrap text-center *:font-semibold *w-fit *:cursor-pointer">
          {props.blogTags.length > 0 &&
            props.blogTags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
        <div className="flex items-center *:text-gray-400 *:flex *:items-center gap-3 *:text-lg">
          <span>
            33.3k
            <CiHeart fontSize={30} className="text-gray-400" />
          </span>
          <span>
            20k
            <CiChat1 fontSize={30} />
          </span>
          <span>
            33.3k
            <MdOutlineBookmarkAdd fontSize={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
