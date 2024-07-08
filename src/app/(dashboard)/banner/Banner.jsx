"use client";
import { toast } from "react-toastify";

const Banner = () => {
  // handle add banner

  const handleImageAdd = async (e) => {
    console.log("handleImageAdd called"); // Log to check if the function is being called
    setImageUploadLoading(true);
    const imageFile = e.target.files[0];
    console.log("Selected file:", imageFile); // Log the selected file

    const formData = new FormData();
    formData.append("image", imageFile);
    const url = `https://api.imgbb.com/1/upload?key=3d10492adfa8561b3f13d1051a54448e`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      console.log("Upload result:", result); // Log the upload result

      await addImageFN(result.data.display_url);
      setImageUploadLoading(false);
      toast.success("Image upload Successful");
    } catch (error) {
      console.log("Error during upload:", error.message); // Log any errors during upload
      setImageUploadLoading(false);
      toast.error("Upload fail");
    }
  };

  // handle delete banner img

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-x-6 my-10 items-start">
        <div className="flex items-center justify-center w-full max-w-2xl">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-700 ">
                PNG, JPG || Recommend Size (height-418 width-1200)
              </p>
            </div>
            <input
              id="dropzone-file"
              accept=".png, .jpg, .jpeg"
              type="file"
              className="hidden"
              onChange={handleImageAdd}
            />
          </label>
        </div>
        {/* banner table */}

        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  NO
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Banner;
