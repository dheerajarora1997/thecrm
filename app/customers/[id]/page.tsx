"use client";
import { useParams } from "next/navigation";

export default function SingleCustomer() {
  const { id } = useParams();
  return <>hello world! - {id}</>;
}
