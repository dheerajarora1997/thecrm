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
      <div className="row justify-content-between align-items-center mb-2">
        <div className="col-sm-12 col-md-6">
          {title && <h3 className="">{title}</h3>}
        </div>
        <div className="col-sm-12 col-md-3">
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-100 form-control m-0"
          />
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
        <div className="col-sm-12 col-md-7"></div>
        <div className="col-sm-12 col-md-5 text-end">
          <div className="row g-2 align-items-center justify-content-end">
            <div className="col-sm-3">
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
            <div className="col-sm-5 col-md-7 col-lg-6">
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
