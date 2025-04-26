"use client";

import React, { use, useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";

type Sale = {
  id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  date: string;
  customer: string;
};

export default function Sales() {
  const columns = useMemo(
    () => [
      {
        header: "Id",
        accessorKey: "id",
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
      {
        header: "Date",
        accessorKey: "Date",
      },
    ],
    []
  );
  const [data, setData] = useState<Sale[]>(() => [
    {
      id: "1",
      productName: "Gold Necklace",
      quantity: 2,
      totalPrice: 500,
      date: "2025-04-10",
      customer: "Alice Johnson",
    },
    {
      id: "2",
      productName: "Diamond Ring",
      quantity: 1,
      totalPrice: 500,
      date: "2025-04-11",
      customer: "Bob Smith",
    },
    {
      id: "3",
      productName: "Silver Bracelet",
      quantity: 3,
      totalPrice: 450,
      date: "2025-04-12",
      customer: "Charlie Brown",
    },
    {
      id: "4",
      productName: "Pearl Earrings",
      quantity: 1,
      totalPrice: 180,
      date: "2025-04-13",
      customer: "Diana Prince",
    },
    {
      id: "5",
      productName: "Emerald Pendant",
      quantity: 2,
      totalPrice: 600,
      date: "2025-04-13",
      customer: "Eva Green",
    },
    {
      id: "6",
      productName: "Rose Gold Anklet",
      quantity: 4,
      totalPrice: 480,
      date: "2025-04-14",
      customer: "Frank Ocean",
    },
    {
      id: "7",
      productName: "Platinum Chain",
      quantity: 1,
      totalPrice: 600,
      date: "2025-04-14",
      customer: "George Lucas",
    },
    {
      id: "8",
      productName: "Turquoise Necklace",
      quantity: 2,
      totalPrice: 440,
      date: "2025-04-15",
      customer: "Hannah Lee",
    },
    {
      id: "9",
      productName: "Sapphire Ring",
      quantity: 1,
      totalPrice: 450,
      date: "2025-04-15",
      customer: "Iris West",
    },
    {
      id: "10",
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
    <div className="w-100 d-inline-block">
      <div className="info-grid my-2">
        <div className="">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4">
                <div className="card box-shadow border-0 bg-quinary p-3 mb-2">
                  <h4>Total Sales</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4">
                <div className="card box-shadow border-0 bg-quinary p-3 mb-2">
                  <h4>Today's Sale</h4>
                  <h6 className="text-">12</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4">
                <div className="card box-shadow border-0 bg-quinary p-3 mb-2">
                  <h4>Last Week Sales</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 w-100 d-inline-block">
        <ControlledTable
          title={"Sales"}
          border={0}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={data}
          fallbackData={fallbackData}
          sorting={true}
          headerSticky={true}
          tableButtonLink={"/sales/create"}
          tableButtonText={"+ Create Sales"}
        />
      </div>
    </div>
  );
}
