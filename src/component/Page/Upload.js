import axios from "axios";
import React, { useState } from "react";

function Upload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    try {
      // ใช้ URL สั้นๆ โดยไม่ต้องระบุเต็มที่ และใช้ proxy ที่ตั้งค่าไว้ใน package.json
      await axios.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    // รีเซ็ตค่า image เมื่อทำการส่งฟอร์ม
    setImage(null);
  };

  return (
    <div>
      <div className="text-center">
        <p className="font-extrabold text-2xl">อัพโหลดรูป</p>
        {image && (
          <p className="mt-4">Selected File: {image.name}</p>
        )}
        <label
          htmlFor="upload"
          className="cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          Upload Image
          <input
            type="file"
            id="upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      
      <div className="text-center">
      <button className="bg-slate-300 rounded-md text-3xl" onClick={handleSubmit}>
        Submit
        </button>
      </div>

      {/* <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <label htmlFor="upload" className="cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
          Upload Image
          <input type="file" id="upload" className="hidden" accept="image/*" onChange={handleImageChange}/>
        </label>
      </div>
    </div> */}
    </div>

    
  );
}

export default Upload;
