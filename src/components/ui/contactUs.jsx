"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BiPhone } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Social from "./Social";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehi83p4",
        "template_lg7ogl3",
        form.current,
        "Q-1YKUiAfDzLOBx1d"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log(result.text);
            toast.success("Message Sent.Thank You.");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" py-[5rem]" id="contact">
      <div className="w-[95%] md:w-[60%] flex flex-col md:flex-row mx-auto gap-8 shadow-deep md:p-12 p-4 rounded-lg bg-white">
        <div className="w-full md:w-1/2  ">
          <div className=" ">
            <div className="text-[14px] md:text-[15px] text-black">
              <div className="mb-4">
                <h1 className=" font-medium text-xl text-black">
                  Contact info
                </h1>
              </div>
              <div className="">
                <div className="">
                  <div className="flex gap-1 items-center ">
                    <IoIosPeople />
                    <h1 className="text-[12px]"> Name</h1>
                  </div>
                  <h1 className="text-[17px]">Oronno</h1>
                </div>
                <div className="mt-6">
                  <div className="flex gap-1 items-center ">
                    <MdOutlineEmail />
                    <h1 className="text-[12px]">Email</h1>
                  </div>
                  <h1 className="text-[17px]">info@oroonno.com</h1>
                </div>
                <div className="mt-6">
                  <div className="flex gap-1 items-center ">
                    <BiPhone />
                    <h1 className="text-[12px]">Phone</h1>
                  </div>
                  <h1 className="text-[17px]">01711258558</h1>
                </div>

                <div className="mt-6">
                  <div className="flex gap-1 items-center ">
                    <FaRegAddressCard />
                    <h1 className="text-[12px]">Address</h1>
                  </div>
                  <h1 className="text-[15px] md:text-[16px] mt-2">
                    {" "}
                    <span className="font-semibold">Office</span> : House: 35,
                    Road: 15, Sector: 11, Uttara, Dhaka-1230
                  </h1>
                  <h1 className=" text-[15px] md:text-[16px] mt-2 md:mt-0">
                    <span className="font-semibold">Nursery</span>: Charabug,
                    Ashulia, Savar, Dhaka
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Social />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h1 className="md:text-2xl text-xl font-bold">Contact Us</h1>
            <p className="text-muted">
              we are here for you , how can we help you
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              className="bg-[#F2F2F2] rounded-md text-muted w-full p-3 focus:outline-none"
              type="text"
              placeholder="Enter your name"
              name="from_name"
              required
            />
            <input
              className="bg-[#F2F2F2] rounded-md text-muted w-full p-3 focus:outline-none"
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />
            <textarea
              className="bg-[#F2F2F2] rounded-md text-muted w-full p-3 focus:outline-none"
              placeholder="Enter your message"
              name="message"
              id=""
              cols="20"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              // onClick={() => toast("First Toast")}
              className="bg-primary w-full p-3 focus:outline-none text-white font-semibold rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
