"use client";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ControlledTable from "../../DesignComponents/ControlledTable";

type Sale = {
  id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  date: string;
  customer: string;
};

export default function SingleCustomer() {
  const { id } = useParams();
  console.log(id);
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
    <>
      <div className="d-inline-block w-100 position-relative">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="bg-quinary bg-opacity-25 border border-primary border-opacity-50 p-3 rounded-3 shadow-sm w-100 mb-3">
              <div className="row">
                <div className="col-12 col-md-4 my-2">
                  <div className="mb-3">
                    <h3 className="mb-0 pe-1">Name</h3>
                    <span className="badge bg-primary text-white rounded me-2">
                      {id}
                    </span>
                    <span className="badge bg-success text-success bg-opacity-25 rounded me-2">
                      Active
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      Phone Number:{" "}
                    </small>
                    +91 999 999 9999
                  </p>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      E-Mail Address:
                    </small>
                    email@example.com
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      Address:{" "}
                    </small>
                    XYZ, Street Name, Area
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      City:{" "}
                    </small>
                    City Name
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      State:{" "}
                    </small>
                    State Name
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      Zip Code:{" "}
                    </small>
                    000000
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      Aadhar:{""}
                    </small>
                    6755 5555 5555
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      Pan:{""}
                    </small>
                    ASEDF6543S
                  </p>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <p className="text-muted mb-1">
                    <small className="text-primary text-opacity-50 d-block">
                      GST:{""}
                    </small>
                    123456789876543
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <ControlledTable
            title={"Recent Orders"}
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
    </>
  );
}
