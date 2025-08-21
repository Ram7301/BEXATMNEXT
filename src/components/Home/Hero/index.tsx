"use client";

import { useEffect, useState } from "react";
import { useContentManage } from "@/app/context/ContentManageContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
   const router = useRouter();
  const [showEditor, setShowEditor] = useState(false);
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState<File | null>(null)

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPages((prev) => ({ ...prev, [name]: value }));
  };
  

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file));
      // Store only the file name, not the full path
      setPages((prev) => ({ ...prev, image: `/images/hero/${file.name}`}));
    }
  };




  const [pages, setPages] = useState<any>({});

  const loadPages = async () => {
    try {
      const res = await fetch("/api/content-manage?contentId=C001");
      if (!res.ok) throw new Error("Failed to fetch pages");
      const data = await res.json();
      console.log(data,"333333333333333333");    
      setPages(data);
      setPreview(data.image)
    } catch (err) {
      console.error("Error loading pages:", err);
    }
  };
  useEffect(() => {
    loadPages();
  }, []);

 
  const savePages = async () => {
    await fetch('/api/content-manage?contentId=C001', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pages)
    })
    uploadImage()
    alert('Pages saved!')
  }

    const uploadImage = async () => {
    if (!image) return
    const formData = new FormData()
    formData.append('file', image)
    formData.append('filePath', "/images/hero/")
    // formData.append('fileName', "/images/hero/")
    const res = await fetch('/api/uploads', { method: 'POST', body: formData })
    const data = await res.json()
    setPreview(data?.filePath)
  }


  return (
    <section className="!py-0 relative">
      {/* Main Hero Content */}
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-dark text-center md:text-start z-10">
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6">
              {pages?.title}
            </h1>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
              >
                {pages?.Button1}
              </Link>
            </div>
          </div>
          <div className="hidden md:block absolute top-18 -right-15">
           {pages?.image && <Image
              src={pages?.image || null}
              alt="heroImg"
              width={882}
              height={816}
              unoptimized
            />}
          </div>
        </div>

        {/* Bottom feature icons */}
        <div className="md:absolute bottom-0 md:right-0 xl:-right-1 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[95px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            { pages && pages?.lables?.map((item, i) => (
              <div key={i} className="flex flex-col sm:items-center gap-2">
                <Image
                  src={item.src || null}
                  alt={item.label}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />
                <Image
                  src={item.src || null}
                  alt={item.label}
                  width={35}
                  height={35}
                  className="hidden dark:block"
                  unoptimized
                />
                <p className="text-sm sm:text-base font-normal text-inherit">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Button moved to bottom-right */}
      <button
       onClick={() => router.push("/content/hero")} 
        // onClick={loadPages}
        className="absolute bottom-5 right-5 z-50 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-opacity-80 transition"
        title="Edit Hero Section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
          />
        </svg>
      </button>

      {/* Hero Edit Modal */}
      {showEditor && (
        <div className="fixed inset-0  bg-opacity-60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-3xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Hero Section</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                savePages();
              }}
            >
              <label className="block mb-2 text-sm font-medium">
                Hero Title
              </label>
              <input
                type="text"
                name="title"
                value={pages.title}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />

              <label className="block mb-2 text-sm font-medium">
                Button Text
              </label>
              <input
                type="text"
                name="Button1"
                value={pages.Button1}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />

              <label className="block mb-2 text-sm font-medium">
                Hero Image
              </label>
              {preview && (
                <div className="mb-4">
                  <Image
                    src={preview}
                    alt="Preview"
                    width={200}
                    height={150}
                    unoptimized
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />

              <label className="block mb-2 text-sm font-medium">
                Labels (comma separated)
              </label>
              <input
                type="text"
                name="labels"
                value={pages?.lables.map(v => v.label).join(",") }
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />

              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                Save
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-black dark:hover:text-white text-3xl"
              onClick={() => setShowEditor(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
