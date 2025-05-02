import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center h-100 text-center"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      <Image
        width={200}
        height={150}
        src="/assets/not-found.png"
        alt="No Found"
        className="mb-4"
        style={{ width: "auto !important" }}
      />
      <h4>404 - Page Not Found</h4>
      <p className="text-muted">
        Oops! The page you're looking for does not exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
