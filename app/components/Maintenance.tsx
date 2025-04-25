"use client";

import Image from "next/image";

export default function Maintenance(props: {
  title?: string;
  subTitle?: string;
}) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center h-100 text-center"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      <Image
        width={200}
        height={200}
        src="/assets/maintenance.png"
        alt="No Data"
        className="w-1/2 mb-4"
      />
      <h4 className="">
        {props.title || "We are building something amazing."}
      </h4>
      <p className="text-muted">
        {props.subTitle || "Thanks for your patience. We will be back soon."}
      </p>
    </div>
  );
}
