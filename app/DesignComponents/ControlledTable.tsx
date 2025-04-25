"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

type ITableProps = {
  border?: number;
  cellPadding?: number;
  data?: any[];
  columns: ColumnDef<any, any>[];
  fallbackData: any[];
  sorting?: boolean;
  style?: React.CSSProperties;
};

export default function ControlledTable({
  border = 1,
  cellPadding = 8,
  data,
  columns,
  fallbackData,
  sorting: enableSorting = false,
  style = {},
}: ITableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });
  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: {
        pageSize: pagination.pageSize,
        pageIndex: pagination.pageIndex,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });

  const prevBtnClicked = () => {
    if (tableInstance.getCanPreviousPage()) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: prev.pageIndex - 1,
      }));
      tableInstance.previousPage();
    } else {
      tableInstance.setPageIndex(0);
    }
  };

  const nextBtnClicked = () => {
    if (tableInstance.getCanNextPage()) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: prev.pageIndex + 1,
      }));
      tableInstance.nextPage();
    } else {
      tableInstance.setPageIndex(0);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "30%" }}
        className="w-100"
      />
      <table border={border} cellPadding={cellPadding} style={{ ...style }}>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    onClick={
                      enableSorting
                        ? header.column.getToggleSortingHandler()
                        : null
                    }
                    style={{ cursor: enableSorting ? "pointer" : "default" }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <select
          value={pagination?.pageSize}
          onChange={(e) => {
            const size = Number(e.target.value);
            setPagination((prev) => ({
              ...prev,
              pageSize: size,
            }));
            tableInstance.setPageSize(size);
          }}
        >
          {[5, 10, 25].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <button
          onClick={() => prevBtnClicked()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          Prev
        </button>
        <span>
          Page {tableInstance.getState().pagination.pageIndex + 1} of{" "}
          {tableInstance.getPageCount()}
        </span>
        <button
          onClick={() => nextBtnClicked()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Next
        </button>

        {/* Page Size Selection */}
      </div>
    </>
  );
}
