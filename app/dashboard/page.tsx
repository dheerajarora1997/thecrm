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
    ],
    []
  );
  const [data, setData] = useState<User[]>(() => [
    { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
    { name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
    { name: "David Miller", email: "david@example.com", role: "Admin" },
    { name: "Eva Green", email: "eva@example.com", role: "Editor" },
    { name: "Frank Ocean", email: "frank@example.com", role: "Viewer" },
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
    <div className="w-100 d-inline-block mt-2">
      <div className="info-grid shadow rounded mb-3">
        <div className="card box-shadow-sm border-0 bg-quinary">
          <div className="card-body">
            <div className="row">
              <div className="col border-end border-tertiary m-2">
                <div className="">
                  <h4>Heading Here</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
              <div className="col border-end border-tertiary m-2">
                <div className="">
                  <h4>Heading Here</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
              <div className="col border-end border-tertiary m-2">
                <div className="">
                  <h4>Heading Here</h4>
                  <h6 className="text-">4343</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <ControlledTable
          border={1}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={data}
          fallbackData={fallbackData}
          sorting={true}
        />
      </div>
    </div>
  );
}
