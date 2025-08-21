"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [pages, setPages] = useState<any>({ lables: [] });

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPages((prev: any) => ({ ...prev, [name]: value }));
  };

  // Handle hero image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPages((prev: any) => ({ ...prev, image: `/images/hero/${file.name}` }));
    }
  };

  // Handle label text change
  const handleLabelChange = (index: number, value: string) => {
    const updated = [...pages.lables];
    updated[index].label = value;
    setPages((prev: any) => ({ ...prev, lables: updated }));
  };

  // Handle label image upload
  const handleLabelImageChange =  async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const updated = [...pages.lables];
      updated[index].src = `/images/hero/${file.name}`;
      setPages((prev: any) => ({ ...prev, lables: updated }));
          if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filePath", "/images/hero/");
    await fetch("/api/uploads", { method: "POST", body: formData });
    }
  };

  // Add new label
  const addLabel = () => {
    setPages((prev: any) => ({
      ...prev,
      lables: [...prev.lables, { id: Date.now(), src: "", label: "" }],
    }));
  };

  const loadPages = async () => {
    try {
      const res = await fetch("/api/content-manage?contentId=C001");
      if (!res.ok) throw new Error("Failed to fetch pages");
      const data = await res.json();
      setPages(data);
      setPreview(data.image);
    } catch (err) {
      console.error("Error loading pages:", err);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  const savePages = async () => {
    await fetch("/api/content-manage?contentId=C001", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pages),
    });
    uploadImage();
    alert("Pages saved!");
  };

  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("filePath", "/images/hero/");
    await fetch("/api/uploads", { method: "POST", body: formData });
  };

  return (
    <section className="!py-0 relative">
      {pages && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-3xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Hero Section</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                savePages();
              }}
            >
              {/* Hero Title */}
              <label className="block mb-2 text-sm font-medium">Hero Title</label>
              <input
                type="text"
                name="title"
                value={pages.title || ""}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />

              {/* Button Text */}
              <label className="block mb-2 text-sm font-medium">Button Text</label>
              <input
                type="text"
                name="Button1"
                value={pages.Button1 || ""}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
              />

              {/* Hero Image */}
              <label className="block mb-2 text-sm font-medium">Hero Image</label>
              {preview && (
                <div className="mb-4">
                  <Image src={preview} alt="Preview" width={200} height={150} unoptimized />
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

              {/* Labels Section */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Labels</label>
                {pages.lables?.map((lbl: any, index: number) => (
                  <div key={lbl.id} className="flex items-center gap-4 mb-2 border p-2 rounded">
                    {/* Label Image Preview */}
                    {lbl.src && (
                      <Image src={lbl.src} alt="icon" width={40} height={40} unoptimized />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLabelImageChange(index, e)}
                    />
                    {/* Label Text */}
                    <input
                      type="text"
                      value={lbl.label}
                      onChange={(e) => handleLabelChange(index, e.target.value)}
                      placeholder="Enter label"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>
                ))}
                {/* <button
                  type="button"
                  onClick={addLabel}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  + Add Label
                </button> */}
              </div>

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
