"use client";

import React, { useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";
type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  reorderLevel: number;
  price: number;
};
export default function Inventory() {
  const columns = useMemo(
    () => [
      {
        header: "Id",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "SKU",
        accessorKey: "sku",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Stock",
        accessorKey: "stock",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Record Level",
        accessorKey: "recordLevel",
      },
    ],
    []
  );
  const [inventory, setInventory] = useState<InventoryItem[]>(() => [
    {
      id: "1",
      name: "Gold Necklace",
      sku: "JN-GOLD-001",
      category: "Necklace",
      stock: 25,
      reorderLevel: 10,
      price: 250,
    },
    {
      id: "2",
      name: "Diamond Ring",
      sku: "JR-DIAMOND-002",
      category: "Ring",
      stock: 8,
      reorderLevel: 5,
      price: 500,
    },
    {
      id: "3",
      name: "Silver Bracelet",
      sku: "JB-SILVER-003",
      category: "Bracelet",
      stock: 30,
      reorderLevel: 15,
      price: 150,
    },
    {
      id: "4",
      name: "Pearl Earrings",
      sku: "JE-PEARL-004",
      category: "Earrings",
      stock: 12,
      reorderLevel: 6,
      price: 180,
    },
    {
      id: "5",
      name: "Emerald Pendant",
      sku: "JP-EMERALD-005",
      category: "Pendant",
      stock: 6,
      reorderLevel: 3,
      price: 300,
    },
    {
      id: "6",
      name: "Rose Gold Anklet",
      sku: "JA-ROSEGOLD-006",
      category: "Anklet",
      stock: 18,
      reorderLevel: 7,
      price: 120,
    },
    {
      id: "7",
      name: "Platinum Chain",
      sku: "JC-PLATINUM-007",
      category: "Chain",
      stock: 4,
      reorderLevel: 2,
      price: 600,
    },
    {
      id: "8",
      name: "Sapphire Ring",
      sku: "JR-SAPPHIRE-008",
      category: "Ring",
      stock: 10,
      reorderLevel: 4,
      price: 450,
    },
    {
      id: "9",
      name: "Turquoise Necklace",
      sku: "JN-TURQUOISE-009",
      category: "Necklace",
      stock: 9,
      reorderLevel: 5,
      price: 220,
    },
    {
      id: "10",
      name: "Amethyst Bracelet",
      sku: "JB-AMETHYST-010",
      category: "Bracelet",
      stock: 16,
      reorderLevel: 8,
      price: 170,
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
          title={"Inventory"}
          border={0}
          cellPadding={10}
          style={{ borderCollapse: "collapse", width: "100%" }}
          columns={columns}
          data={inventory}
          fallbackData={fallbackData}
          sorting={true}
          headerSticky={true}
          pageSizeToDisplay={10}
          tableButtonLink={"/inventory/create"}
          tableButtonText={"+ Create Inventory"}
        />
      </div>
    </div>
  );
}
