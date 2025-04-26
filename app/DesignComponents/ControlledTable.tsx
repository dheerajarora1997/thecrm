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

import "../styles/components/_controlledTable.scss";
import Link from "next/link";

type ITableProps = {
  border?: number;
  cellPadding?: number;
  data?: any[];
  columns: ColumnDef<any, any>[];
  fallbackData: any[];
  sorting?: boolean;
  style?: React.CSSProperties;
  title?: string;
  headerSticky?: boolean;
  pageSizeToDisplay?: number;
  tableButtonLink?: string;
  tableButtonText?: string;
};

export default function ControlledTable({
  border = 0,
  cellPadding = 8,
  data,
  columns,
  fallbackData,
  sorting: enableSorting = false,
  style = {},
  title = "",
  headerSticky = false,
  pageSizeToDisplay = 10,
  tableButtonLink = "",
  tableButtonText = "",
}: ITableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSizeToDisplay,
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
      <div className="row justify-content-between align-items-center mb-2">
        <div className="col-sm-12 col-md-6">
          {title && <h3 className="">{title}</h3>}
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="d-flex justify-content-end align-items-center">
            <input
              type="text"
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="form-control my-0 mx-2"
              style={{ maxWidth: "300px" }}
            />

            {tableButtonLink && (
              <Link href={tableButtonLink} className="btn btn-primary">
                {tableButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={`controlled-table ${headerSticky ? "table-sticky" : ""}`}
        style={{ overflow: "auto", maxHeight: "calc(100vh - 100px)" }}
      >
        <table border={border} cellPadding={cellPadding} style={{ ...style }}>
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup, index) => (
              <tr key={index}>
                {headerGroup.headers.map((header, ind) => {
                  return (
                    <th
                      key={ind}
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
            {tableInstance.getRowModel().rows.map((row, index) => (
              <tr key={index}>
                {row.getVisibleCells().map((cell, ind) => (
                  <td key={ind} data-title={cell.column.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row align-items-center justify-content-between mt-2">
        <div className="col-sm-12 col-md-4"></div>
        <div className="col-sm-12 col-md-8 text-end">
          <div className="d-flex justify-content-end align-items-center">
            <div className="mx-2">
              <select
                className="form-select"
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
            </div>
            <div className="">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => prevBtnClicked()}
                  disabled={!tableInstance.getCanPreviousPage()}
                  type="button"
                  className="btn btn-secondary"
                >
                  Prev
                </button>
                <span
                  className="btn btn-secondary"
                  style={{ cursor: "default", pointerEvents: "none" }}
                >
                  Page {tableInstance.getState().pagination.pageIndex + 1} of{" "}
                  {tableInstance.getPageCount()}
                </span>
                <button
                  onClick={() => nextBtnClicked()}
                  disabled={!tableInstance.getCanNextPage()}
                  type="button"
                  className="btn btn-secondary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
