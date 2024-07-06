"use client";
import { useState } from "react";
import { Modal, Button } from "antd";
import whatsapp from "../../assests/Images/whatsapp.png";
import messenger from "../../assests/Images/messnger.png";
import call from "../../assests/Images/call.png";
import Image from "next/image";
const ContactUsButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const phoneNumber = "+8801711258558";

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleMessengerClick = () => {
    // Replace 'YOUR_FACEBOOK_PAGE_ID' with your actual Facebook Page ID
    window.open("https://m.me/61561305989542", "_blank");
  };

  const handleDirectCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="text-center mt-4 py-3">
      <button
        onClick={showModal}
        className="px-8 py-3 bg-primary text-white font-medium  rounded-md shadow-sm"
      >
        Contact Us
      </button>
      <Modal
        title="Contact Options"
        visible={isModalVisible}
        centered={true}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col space-y-4">
          <Button
            icon={
              <Image src={whatsapp} alt="whatsapp" width={30} height={30} />
            }
            size="large"
            onClick={handleWhatsAppClick}
          >
            WhatsApp Message
          </Button>
          <Button
            icon={
              <Image src={messenger} alt="whatsapp" width={30} height={30} />
            }
            size="large"
            onClick={handleMessengerClick}
          >
            Messenger
          </Button>
          <Button
            icon={<Image src={call} alt="whatsapp" width={30} height={30} />}
            size="large"
            onClick={handleDirectCallClick}
          >
            Direct Call
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUsButton;
