"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { BlogFormData, BlogPost } from "@/app/types/blogTypes";


type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  blogPost: BlogPost;
};

export default function EditModal({ open, setOpen, blogPost}: ModalProps) {

    const [editForm, setEditForm] = useState<BlogFormData>({
        coverPhoto: blogPost.blogImg || '',
        blogTitle: blogPost.blogTitle || '',
        blogContent : blogPost.blogDescription || '',
        blogTags : blogPost.blogTags || '',
    })

      const handleInputChange = (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        const { id, value } = e.target;
        setEditForm({ ...editForm, [id]: value });
      };
    
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg p-5 bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form className="">
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-3xl font-semibold leading-7 text-gray-900">
                    Edit Blog
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cover photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            aria-hidden="true"
                            className="mx-auto h-12 w-12 text-gray-300"
                          />

                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="blogTitle"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Blog Title
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            id="blogTitle"
                            name="blogTitle"
                            type="text"
                            value={editForm.blogTitle}
                            onChange={handleInputChange}
                            placeholder="e.g How to..."
                            autoComplete="username"
                            className="block flex-1 h-15 border-0 bg-transparent py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Tags/Topics
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Ui/Ux</option>
                          <option>Design</option>
                          <option>Development</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="blogContent"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Blog Content
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="blogContent"
                          name="blogContent"
                          value={editForm.blogContent}
                          onChange={handleInputChange}
                          rows={5}
                          className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  Post
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
