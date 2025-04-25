"use client";

import React, { use, useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";

type Product = {
  name: string;
  price: number;
  category: string;
  stock: number;
};

export default function Dashboard() {
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Stock",
        accessorKey: "stock",
      },
    ],
    []
  );
  const [data, setData] = useState<Product[]>(() => [
    {
      name: "Gold Necklace",
      price: 250,
      category: "Necklace",
      stock: 12,
    },
    {
      name: "Diamond Ring",
      price: 500,
      category: "Ring",
      stock: 8,
    },
    {
      name: "Silver Bracelet",
      price: 150,
      category: "Bracelet",
      stock: 20,
    },
    {
      name: "Pearl Earrings",
      price: 180,
      category: "Earrings",
      stock: 10,
    },
    {
      name: "Emerald Pendant",
      price: 300,
      category: "Pendant",
      stock: 5,
    },
    {
      name: "Rose Gold Anklet",
      price: 120,
      category: "Anklet",
      stock: 14,
    },
    {
      name: "Platinum Chain",
      price: 600,
      category: "Chain",
      stock: 3,
    },
    {
      name: "Sapphire Ring",
      price: 450,
      category: "Ring",
      stock: 7,
    },
    {
      name: "Turquoise Necklace",
      price: 220,
      category: "Necklace",
      stock: 9,
    },
    {
      name: "Ruby Stud Earrings",
      price: 260,
      category: "Earrings",
      stock: 6,
    },
    {
      name: "Amethyst Bracelet",
      price: 170,
      category: "Bracelet",
      stock: 11,
    },
    {
      name: "Crystal Pendant",
      price: 195,
      category: "Pendant",
      stock: 13,
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
      <div className="mt-3 w-100 d-inline-block">
        <ControlledTable
          title={"Products"}
          border={0}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={data}
          fallbackData={fallbackData}
          sorting={true}
          headerSticky={true}
          pageSizeToDisplay={10}
        />
      </div>
    </div>
  );
}
