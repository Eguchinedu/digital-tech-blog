"use client";

import { PageLayout } from "@/app/Wrappers/PageLayout";
import React, { useState } from "react";
import user from "../../../../../public/img/default-applicant.png";
import Image from "next/image";
import dateFormat, { masks } from "dateformat";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import DeleteModal from "@/app/components/modals/DeleteModal";
import EditModal from "@/app/components/modals/EditModal";
import author from "../../../../../public/img/author.png";
import chef from "../../../../../public/img/chef.jpeg";
import { BlogPost } from "@/app/types/blogTypes";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCaretBackSharp } from "react-icons/io5";

const CurrentPost = () => {
  const router = useRouter();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenDelete = () => {
    setOpenDeleteModal((prev) => !prev);
  };
  const handleEditDelete = () => {
    setOpenEditModal((prev) => !prev);
  };
  const [currentBlog, setCurrentBlog] = useState<BlogPost>({
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
  });
  return (
    <PageLayout>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        blogId={currentBlog.blogId}
      />
      <EditModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        blogPost={currentBlog}
      />
      <div className="max-w-[1100px] m-auto h-full pt-10 pb-10">
        <div className="md:p-20 px-6 py-10">
          <div className="flex justify-between items-center gap-3">
            <button
              className="bg-transparent border flex items-center gap-2  px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
              onClick={() => router.back()}
            >
              <IoCaretBackSharp fontSize={25} />
              <span className="hidden md:block">Back</span>
            </button>
            <div className="flex gap-3 items-center">
              <button
                className="bg-transparent border flex items-center gap-2  px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
                onClick={handleEditDelete}
              >
                <HiOutlinePencilSquare fontSize={25} />
                <span className="hidden md:block">Edit</span>
              </button>
              <button
                className="bg-transparent border flex items-center gap-2  px-4 py-2 rounded-md text-red-400 hover:bg-gray-300"
                onClick={handleOpenDelete}
              >
                <RiDeleteBin6Line fontSize={25} className="text-red-400" />
                <span className="hidden md:block">Delete</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 border-b-2 py-7">
            <div>
              <h3 className="text-3xl font-bold my-3">
                {currentBlog.blogTitle}
              </h3>
            </div>
            <div className="flex  gap-2">
              <div className="flex-shrink-0">
                <Image
                  src={currentBlog.blogUserImg}
                  alt="user"
                  className="h-10 w-10 rounded-full"
                  height={10}
                  width={10}
                />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold text-gray-500 ">
                  {" "}
                  {currentBlog.blogUser}
                </h4>

                <p className="text-gray-500 text-sm">
                  {dateFormat(currentBlog.blogDate, "mmm d, yyyy")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex-shrink-0 py-10">
              {currentBlog.blogImg ? (
                <Image
                  src={currentBlog.blogImg}
                  alt="user"
                  className="h-full w-full"
                  height={50}
                  width={300}
                  priority
                />
              ) : (
                <></>
              )}
            </div>
            <div className="py-5 px-2">
              <p className="text-gray-600 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus ad ipsa mollitia odit, architecto itaque, harum
                reiciendis, deleniti maiores dolorem enim quo? Ex facilis quae
                esse nulla, cupiditate nostrum a debitis laudantium at tenetur
                ea. Accusantium, voluptas, minus commodi facere sint id
                provident nesciunt quam, beatae delectus hic architecto quod
                debitis. Quos fugit optio eos ab et veniam, nobis iusto saepe
                deleniti. Quas pariatur numquam repellat debitis, molestiae,
                iste, porro officia necessitatibus consequatur consequuntur eos
                quis tempore veniam illum adipisci? Distinctio doloremque eos
                laboriosam? Aliquid provident consequuntur assumenda iusto
                soluta corrupti recusandae. Fugit commodi nemo beatae expedita
                dolores aperiam quasi vel consequatur assumenda voluptates
                aliquam perferendis, asperiores ipsa recusandae odio enim.
                Impedit repellendus reiciendis tempore repudiandae ad nesciunt.
                Temporibus minima quibusdam architecto aut, sequi aperiam
                ratione tempora neque corporis in dolores quod deserunt dolorem
                repellendus fugit maiores unde vitae tenetur illum doloremque,
                ipsum atque corrupti, ducimus eum. Esse tempore recusandae iure
                repellendus laborum inventore assumenda adipisci at. Nesciunt
                perspiciatis atque vitae et temporibus laboriosam consequatur
                expedita tempora debitis vel! Dolor ducimus fugiat dicta quas
                inventore sapiente expedita rerum repellendus atque accusantium!
                Eum qui aut beatae velit repellendus ad quae, fuga nihil
                consectetur saepe quam ut, aspernatur maiores impedit tempore
                sit, delectus fugit quibusdam molestiae perferendis minima a
                quod! Praesentium reprehenderit et esse! Neque harum, eos dicta,
                tempora veritatis quos eaque dolore cum, obcaecati illo
                quibusdam laudantium animi iure quidem? Doloribus dolorem vitae
                voluptates accusantium. Laboriosam atque iure deleniti soluta
                eius ea, cupiditate, harum autem ut error labore. Quis quo
                veritatis adipisci vel accusantium dolorem, obcaecati unde ut
                in? Repellendus, ipsa, minus nam fugiat dolore at adipisci
                aperiam ea reiciendis laboriosam voluptates autem quis. Vitae
                quae tenetur incidunt dicta praesentium necessitatibus neque
                ipsa tempore impedit voluptates omnis assumenda magnam illum
                voluptatum blanditiis quod modi ab minima vero amet, ea illo!
                Ipsa temporibus odit aspernatur ab rerum quia a cumque, incidunt
                laudantium architecto ullam deleniti assumenda possimus maxime
                natus officiis repellat necessitatibus minus perferendis porro,
                recusandae nemo, minima tempora praesentium. Tenetur fugiat
                explicabo sapiente sit repudiandae quam magni, natus officia
                dolores optio aliquid consequuntur qui cumque fugit, doloremque,
                quidem aut soluta vitae eligendi assumenda excepturi. Aperiam
                officia atque laboriosam explicabo ab ad quam laborum sunt
                soluta, possimus at reiciendis esse error qui assumenda porro
                deserunt molestias culpa, enim voluptatem vel sit dolorem
                obcaecati? Eos, omnis architecto nulla, quidem iusto quibusdam
                quisquam iste sit dolorum, quos culpa placeat temporibus odio
                optio earum nobis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CurrentPost;
