'use client'
import { PageLayout } from "@/app/Wrappers/PageLayout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";


export default function AddPost() {
    const router = useRouter()
  return (
    <PageLayout>
      <div className="max-w-[1200px] m-auto h-full">
        <div className="md:p-20 px-6 py-20">
          <form className="">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-3xl font-semibold leading-7 text-gray-900">
                  Post a Blog
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Share your Thoughts with the world.
                </p>

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
                  <div className="sm:col-span-4">
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
                          placeholder="e.g How to..."
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Blog Content
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={10}
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
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => router.push("/home")}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
