"use client";

import { useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";
type Invoice = {
  id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  date: string;
  customer: string;
};
export default function Invoice() {
  const columns = useMemo(
    () => [
      {
        header: "Id",
        accessorKey: "id",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Customer",
        accessorKey: "customer",
      },
      {
        header: "Product Name",
        accessorKey: "productName",
      },
      {
        header: "Quantity",
        accessorKey: "quantity",
      },
      {
        header: "Total Price",
        accessorKey: "totalPrice",
      },
    ],
    []
  );
  const [data, setData] = useState<Invoice[]>(() => [
    {
      id: "134567865",
      productName: "Gold Necklace",
      quantity: 2,
      totalPrice: 500,
      date: "2025-04-10",
      customer: "Alice Johnson",
    },
    {
      id: "234567865",
      productName: "Diamond Ring",
      quantity: 1,
      totalPrice: 500,
      date: "2025-04-11",
      customer: "Bob Smith",
    },
    {
      id: "334567865",
      productName: "Silver Bracelet",
      quantity: 3,
      totalPrice: 450,
      date: "2025-04-12",
      customer: "Charlie Brown",
    },
    {
      id: "434567865",
      productName: "Pearl Earrings",
      quantity: 1,
      totalPrice: 180,
      date: "2025-04-13",
      customer: "Diana Prince",
    },
    {
      id: "534567865",
      productName: "Emerald Pendant",
      quantity: 2,
      totalPrice: 600,
      date: "2025-04-13",
      customer: "Eva Green",
    },
    {
      id: "634567865",
      productName: "Rose Gold Anklet",
      quantity: 4,
      totalPrice: 480,
      date: "2025-04-14",
      customer: "Frank Ocean",
    },
    {
      id: "734567865",
      productName: "Platinum Chain",
      quantity: 1,
      totalPrice: 600,
      date: "2025-04-14",
      customer: "George Lucas",
    },
    {
      id: "834567865",
      productName: "Turquoise Necklace",
      quantity: 2,
      totalPrice: 440,
      date: "2025-04-15",
      customer: "Hannah Lee",
    },
    {
      id: "934567865",
      productName: "Sapphire Ring",
      quantity: 1,
      totalPrice: 450,
      date: "2025-04-15",
      customer: "Iris West",
    },
    {
      id: "1345678650",
      productName: "Amethyst Bracelet",
      quantity: 3,
      totalPrice: 510,
      date: "2025-04-16",
      customer: "John Snow",
    },
  ]);

  const fallbackData = [
    {
      name: "Fallback User",
      email: "fallback@example.com",
      role: "Guest",
      age: "33",
      department: "new",
    },
  ];
  return (
    <>
      <div className="w-100 d-inline-block">
        <div className="mt-3 w-100 d-inline-block">
          <ControlledTable
            title={"Invoices"}
            border={0}
            cellPadding={10}
            style={{ borderCollapse: "collapse", width: "100%" }}
            columns={columns}
            data={data}
            fallbackData={fallbackData}
            sorting={true}
            headerSticky={true}
            tableButtonLink={"/invoice/create"}
            tableButtonText={"+ Create Invoice"}
          />
        </div>
      </div>
    </>
  );
}
