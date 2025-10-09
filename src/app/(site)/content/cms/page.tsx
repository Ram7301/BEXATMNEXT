"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const Hero: React.FC = () => {


  const searchParams = useSearchParams();

  const contentID = searchParams.get("contentID");
  const contentTextID = searchParams.get("contentTextID");
  const contentType = searchParams.get("contentType");
  const router = useRouter();

  const [preview, setPreview] = useState("");
  const [text, setText] = useState("")
  const [image, setImage] = useState<File | null>(null);
  const [pages, setPages] = useState<any>({ lables: [] });

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };

  // Handle hero image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setText(`/images/${file.name}`);
    }
  };


  const loadPages = async () => {
    try {
      const res = await fetch(`https://bexatm.com/ContentManageSys.php?contentId=${contentID}`);
      if (!res.ok) throw new Error("Failed to fetch pages");
      const data = await res.json();
      console.log(data, '----------');

      setPages(data);
      if (data) {
        if (contentType == "T") {
          setText(data[`${contentTextID}`])
        }
        if (contentType == "I") {
          // setText(data[`${contentTextID}`])
          setPreview(`https://bexatm.com${data[`${contentTextID}`]}`);
        }
      }
    } catch (err) {
      console.error("Error loading pages:", err);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  const savePages = async () => {
    await fetch(`https://bexatm.com/ContentManageSysV1.php?contentId=${contentID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cmsTextID: contentTextID, cmsText: text }),
    });
    if (contentType == 'I') {

      uploadImage();
    }
    alert("Pages saved!");
  };

  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("filePath", "/images/");
    await fetch("https://bexatm.com/ImageUpload.php", { method: "POST", body: formData });
  };

  return (
    <section className="!py-0 relative">
      {pages && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-3xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Content Manage</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                savePages();
              }}
            >
              {contentType == "T" ? (
                <Fragment>
                  <label className="block mb-2 text-sm font-medium">Caption</label>
                  <textarea
                    name="title"
                    value={text || ""}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                    rows={4} // adjust the height
                  />
                </Fragment>
              ) : false}



              {contentType == "I" ? <Fragment>
                {/* Hero Image */}
                <label className="block mb-2 text-sm font-medium">Image</label>
                {preview && (
                  <div className="mb-4">
                    <Image src={preview} alt="Preview" width={200} height={150} unoptimized />
                  </div>
                )}


                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
              </Fragment> : false}
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                Save
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-black dark:hover:text-white text-3xl"
              onClick={() => router.back()}
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
