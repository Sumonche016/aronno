"use client";

import { useForm } from "react-hook-form";
const DeliveryAddress = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="checkout">
      {/* shopping address */}
      <div className="  py-6  px-2">
        <h4 className=" text-red-700 flex font-semibold items-center text-center  py-4 border-b border-borderDark">
          অর্ডার কনফার্ম করতে আপনার নাম, মোবাইল নাম্বর, ঠিকানা লিখে অর্ডার করুন
          বাটনে ক্লিক করুন।
        </h4>
        {/* use form for address */}
        <form id="checkoutform" onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="">
              {/* user name */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="block mb-1.5 text-sm font-medium">
                    নাম <span className="text-red-700 text-lg">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন..."
                  className="bg-[#E3E2E2] text-sm md:rounded-md focus:outline-primary block w-full p-2.5"
                  {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-lg">
                    নাম অবশ্যই লিখতে হবে
                  </span>
                )}
              </div>
              {/* your phone number */}
              <div className="form-control">
                <label className="label">
                  <span className="block mb-1.5 text-sm font-medium">
                    মোবাইল
                    <span className="text-red-700 text-lg">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন..."
                  className="bg-[#E3E2E2] text-sm md:rounded-md focus:outline-primary block w-full p-2.5"
                  {...register("phone", {
                    required: "ফোন নম্বর অবশ্যই দিতে হবে",
                    pattern: {
                      value: /^(00|88|01|\+88)[0-9]{9}$/,
                      message: "ফোন নম্বর সঠিক নয়",
                    },
                  })}
                />
                {errors?.phone && (
                  <span className="label-text-alt text-red-500 text-lg">
                    {errors?.phone.message}
                  </span>
                )}
              </div>
            </div>
            {/* contact address */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="block mb-1.5 text-sm font-medium">ঠিকানা</span>
              </label>
              <textarea
                rows="5"
                cols="50"
                placeholder="আপনার ঠিকানা লিখুন..."
                className="bg-[#E3E2E2] text-sm md:rounded-md focus:outline-primary block w-full p-2.5"
                {...register("address", {
                  maxLength: {
                    value: 200,
                    message: "ঠিকানা অনুমোদিত সীমা ছাড়িয়ে গেছে",
                  },
                })}
              />
              {errors?.address?.message && (
                <span className="label-text-alt text-red-500 text-lg">
                  {errors?.address.message}
                </span>
              )}
            </div>

            {/* Delivery location */}
            <div className="form-control text-center mt-4">
              <span className="text-base md:text-[1rem] px-10 py-1  text-primary-black   text-center">
                <div className="inline-flex items-center my-4">
                  ডেলিভারি চার্জ
                </div>
              </span>

              {errors.deliveryLocation && (
                <span className="label-text-alt text-red-500 text-lg">
                  অবস্থান নির্বাচন করতে হবে
                </span>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* order biboroni */}
    </div>
  );
};

export default DeliveryAddress;
