"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "antd";
import { useDeleteOrderMutation } from "@/lib/ClientApi/ClientApi";
const { confirm } = Modal;

import { GiConfirmed } from "react-icons/gi";
import { MdDetails } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { convertDateFormat } from "@/utils/convertDateFormat";
import { Tooltip } from "antd";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { customRevalidateTag } from "@/lib/customRevalidate";

const AllOrder = ({ allOderData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [deleteOrder] = useDeleteOrderMutation();

  const statusShow = (status) => {
    if (status == "delivered") {
      return <h1 className="text-[#e5f448] bg-[#2e312b] badge">Delivered</h1>;
    } else if (status == "confirmed") {
      return <h1 className="text-[#245900] bg-[#232a1d] badge">Confirmed</h1>;
    } else if (status == "pending") {
      return <h1 className="text-[#004b9a] bg-[#d9ecff] badge">Pending</h1>;
    } else {
      return <h1 className="text-[#900] bg-[#ffdcdc] badge">Canceled</h1>;
    }
  };

  //   const updateStatus = (id, status) => {
  //     const payload = {
  //       id: id,
  //       status: status,
  //     };

  //     updateFN(payload);
  //   };

  const rowStyles = [
    {
      when: () => true,
      style: {
        padding: "10px",
      },
    },
  ];

  const showDeleteConfirm = (orderId) => {
    confirm({
      title: "Are you sure you want to delete this order?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteOrder(orderId)
          .unwrap()
          .then(() => {
            toast.success("Order deleted successfully");
            customRevalidateTag("allorder");
          })
          .catch((error) => {
            toast.error(error?.data?.message || "Failed to delete order");
            console.error("Failed to delete order:", error);
          });
      },
    });
  };

  const columns = [
    {
      name: "Order ID",
      style: {
        fontWeight: "500",
      },
      cell: (row) => `${row?._id}`,
    },

    {
      name: "Customer Name",
      style: {
        fontWeight: "500",
      },
      cell: (row) => `${row?.address?.name} `,
    },
    {
      name: "Date",

      style: {
        fontWeight: "500",
      },
      cell: (row) => `${convertDateFormat(row.createdAt)}`,
    },
    {
      name: "Phone",
      selector: "Phone",
      style: {
        fontWeight: "500",
      },
      cell: (row) => `${row?.address?.phone} `,
    },

    {
      name: "Items",
      selector: "items",
      style: {
        fontWeight: "500",
      },
      cell: (row) =>
        `${row.products.reduce((acc, obj) => acc + obj?.quantity, 0)} items`,
    },

    {
      name: "Price",
      selector: "Price",
      style: {
        fontWeight: "500",
      },
      cell: (row) =>
        `${
          row.products.reduce((acc, obj) => acc + obj?.totalPrice, 0) + 100
        } ৳`,
    },

    {
      name: "Action",
      selector: "order_status",
      style: {
        fontWeight: "500",
        textAlign: "center",
      },
      cell: (row, index) => (
        <div>
          <div className="flex gap-4">
            <div
              data-tooltip-id="confirmed"
              data-tooltip-content="confirmed"
              className="bg-[#0C4BCC] px-[12px] py-[8px] rounded-[5px] cursor-pointer"
            >
              <GiConfirmed className="text-white text-[16px]" />
            </div>
            <Tooltip title="Delete">
              <div
                onClick={() => showDeleteConfirm(row._id)}
                className="bg-red-600 px-[12px] py-[8px] rounded-[5px] cursor-pointer"
              >
                <BsFillTrashFill className="!text-white text-[16px]" />
              </div>
            </Tooltip>
            <Tooltip title="Details">
              <div
                onClick={() => router.push(`/order/OrderDetails/${row._id}`)}
                className="bg-[#3ab559] px-[12px] py-[8px] rounded-[5px] cursor-pointer"
              >
                <MdDetails className="!text-white text-[16px]" />
              </div>
            </Tooltip>
          </div>
        </div>
      ),
    },
  ];

  const filterOrder = allOderData?.data
    ?.filter((item) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const { address, _id } = item;
      return (
        address?.name?.toLowerCase().includes(searchTermLowerCase) ||
        address?.phone?.toLowerCase().includes(searchTermLowerCase) ||
        _id.toLowerCase().includes(searchTermLowerCase)
      );
    })
    .reverse();

  return (
    <div className="">
      <div className="p-6 bg-white  rounded-[10px]">
        {/* <div className="flex justify-between my-2">
          <h1 className="text-[1.6rem] font-medium">List Of Orders</h1>
        </div> */}
        <div className="mb-3 relative">
          <input
            type="text"
            className="bg-[#e3e2e2a1]  text-sm rounded-md md:rounded-md focus:outline-primary w-full p-2.5"
            placeholder="Search Product Here"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <DataTable
          columns={columns}
          data={filterOrder}
          striped
          pagination
          conditionalRowStyles={rowStyles}
        />
      </div>
    </div>
  );
};

export default AllOrder;
