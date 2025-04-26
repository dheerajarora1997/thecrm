"use client";

import React, { use, useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";

type User = {
  name: string;
  email: string;
  lastOrder: string;
};

export default function Customers() {
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Last Order",
        accessorKey: "lastOrder",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
    ],
    []
  );
  const [data, setData] = useState<User[]>(() => [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "David Miller",
      email: "david@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Eva Green",
      email: "eva@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Frank Ocean",
      email: "frank@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "David Miller",
      email: "david@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Eva Green",
      email: "eva@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
    {
      name: "Frank Ocean",
      email: "frank@example.com",
      lastOrder: "12 Days",
      age: 12,
      department: "new one",
    },
  ]);

  const fallbackData = [
    {
      name: "Fallback User",
      email: "fallback@example.com",
      lastOrder: "12 Days",
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
                  <h4>Total Customers</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4">
                <div className="card box-shadow border-0 bg-quinary p-3 mb-2">
                  <h4>Today's New</h4>
                  <h6 className="text-">12</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4">
                <div className="card box-shadow border-0 bg-quinary p-3 mb-2">
                  <h4>Recent Customers</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 w-100 d-inline-block">
        <ControlledTable
          title={"Customers"}
          border={0}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={data}
          fallbackData={fallbackData}
          sorting={true}
          headerSticky={true}
          tableButtonLink={"/customers/create"}
          tableButtonText={"+ Create Customer"}
        />
      </div>
    </div>
  );
}
