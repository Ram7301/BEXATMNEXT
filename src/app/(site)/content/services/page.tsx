"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Categories: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({ lables: [] });
  console.log('fea----------', features);
  const [image, setImag] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  console.log('image',preview);
  

  // Load categories
  const loadFeatures = async () => {
    try {
      const res = await fetch("https://bexatm.com/ContentManageSys.php?contentId=C002");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setFeatures(data);
          //  setPreview(`https://bexatm.com${data.image}`);
    } catch (err) {
      console.error("Error loading categories:", err);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFeatures((prev: any) =>
      prev.map((f: any, i: number) => (i === index ? { ...f, [name]: value } : f))
    );
  };


  // Handle image change
  const handleImageChange = async(e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    console.log(file,'------------------');
    
    if (file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filePath", "/images/categories/");
    await fetch("https://bexatm.com/ImageUpload.php", { method: "POST", body: formData });
      setFeatures((prev: any) =>
        prev.map((f: any, i: number) =>
          i === index ? { ...f, image: `/images/categories/${file.name}`,preview:URL.createObjectURL(file) } : f
        )
      );
    }
  };

  // Save categories
  const saveFeatures = async () => {
    await fetch("https://bexatm.com/ContentManageSys.php?contentId=C002", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(features),
    });
    uploadImage();
    alert("Categories updated!");
  };

  // Upload image
  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("filePath", "/images/categories/");
    await fetch("/api/uploads", { method: "POST", body: formData });
  };

  if (!features.length) return null;

  return (
    <section className="!py-0 relative">
      {features && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Categories Section</h2>


            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveFeatures();
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="mb-8 border-b pb-6">
                  <label className="block mb-2 text-sm font-medium">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={feature.title}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={feature.description}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />



                  <label className="block mb-2 text-sm font-medium">
                    Detail
                  </label>
                  <textarea
                    name="detail"
                    value={feature.detail}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded h-30"
                  />

                  {feature.isBullet && <React.Fragment>
                  <label className="block mb-2 text-sm font-medium">
                    Bullets 1
                  </label>
                  <div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name1}
                      name="name1"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description1}
                      name="description1"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>

                  <label className="block mb-2 text-sm font-medium">
                    Bullets 2
                  </label>
                  <div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name2}
                      name="name2"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description2}
                      name="description2"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>
                  <label className="block mb-2 text-sm font-medium">
                    Bullets 3
                  </label>
                  <div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name3}
                      name="name3"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description3}
                      name="description3"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>

                    <label className="block mb-2 text-sm font-medium">
                    Bullets 4
                  </label>
                  <div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name4}
                      name="name4"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description4}
                      name="description4"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>

                   {feature.name5 &&<label className="block mb-2 text-sm font-medium">
                    Bullets 5
                  </label>}
                  {feature.name5 &&<div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name5}
                      name="name5"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description5}
                      name="description5"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>}

                   {feature.name6 && <label className="block mb-2 text-sm font-medium">
                    Bullets 6
                  </label>}
                  {feature.name6 &&<div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name6}
                      name="name6"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description6}
                      name="description6"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>}

                   {feature.name7 && <label className="block mb-2 text-sm font-medium">
                    Bullets 7
                  </label>}
                 {feature.name7 && <div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name7}
                      name="name7"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description7}
                      name="description7"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>}

                   {feature.name8 && <label className="block mb-2 text-sm font-medium">
                    Bullets 8
                  </label>}
                  {feature.name8 &&<div className="flex items-center gap-4 mb-2 border p-2 rounded">

                    {/* Name Text */}
                    <input
                      type="text"
                      value={feature.name8}
                      name="name8"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                    {/* Description Text */}
                    <input
                      type="text"
                      value={feature.description8}
                      name="description8"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>}
                  </React.Fragment>}



                  <label className="block mb-2 text-sm font-medium">
                    Image
                  </label>
                  {/* {preview && ( */}
                    <div className="mb-4">
                      <Image
                        src={feature.preview || `https://bexatm.com${feature.image}`}
                        alt="Preview"
                        width={200}
                        height={150}
                        unoptimized
                      />
                    </div>
                  {/* )} */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="mb-4"
                  />
                </div>
              ))}

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

export default Categories;
