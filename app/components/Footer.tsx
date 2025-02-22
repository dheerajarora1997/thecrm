import "../styles/components/_footer.scss";

export default function Footer() {
  return (
    <footer className="border-top pe-3 ps-2">
      <div className="d-flex justify-content-between align-items-center py-2">
        <small>All Rights reserved &copy; {new Date().getFullYear()}</small>
        <span>Product Logo</span>
      </div>
    </footer>
  );
}
