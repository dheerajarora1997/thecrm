"use client";

import React, { use, useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";

type User = {
  name: string;
  email: string;
  role: string;
};

export default function Dashboard() {
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
        header: "Role",
        accessorKey: "role",
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
      role: "Admin",
      age: 12,
      department: "new one",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Editor",
      age: 12,
      department: "new one",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Viewer",
      age: 12,
      department: "new one",
    },
    {
      name: "David Miller",
      email: "david@example.com",
      role: "Admin",
      age: 12,
      department: "new one",
    },
    {
      name: "Eva Green",
      email: "eva@example.com",
      role: "Editor",
      age: 12,
      department: "new one",
    },
    {
      name: "Frank Ocean",
      email: "frank@example.com",
      role: "Viewer",
      age: 12,
      department: "new one",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      age: 12,
      department: "new one",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Editor",
      age: 12,
      department: "new one",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Viewer",
      age: 12,
      department: "new one",
    },
    {
      name: "David Miller",
      email: "david@example.com",
      role: "Admin",
      age: 12,
      department: "new one",
    },
    {
      name: "Eva Green",
      email: "eva@example.com",
      role: "Editor",
      age: 12,
      department: "new one",
    },
    {
      name: "Frank Ocean",
      email: "frank@example.com",
      role: "Viewer",
      age: 12,
      department: "new one",
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
      <div className="info-grid shadow rounded my-3">
        <div className="card box-shadow-sm border-0 bg-quinary">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-4 border-end border-tertiary">
                <div className="">
                  <h4>Total Sales</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4 border-end border-tertiary">
                <div className="">
                  <h4>Today's Sale</h4>
                  <h6 className="text-">43</h6>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="">
                  <h4>Weekly Sales</h4>
                  <h6 className="text-">343</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 w-100 d-inline-block">
        {/* <ControlledTable
          title={"Sales"}
          border={0}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={data}
          fallbackData={fallbackData}
          sorting={true}
          headerSticky={true}
        /> */}
      </div>
    </div>
  );
}
