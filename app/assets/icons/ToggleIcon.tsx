export default function ToggleIcon(prop: any) {
  return (
    <svg
      width="34px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M4 8H20M4 16H12"
        stroke={prop.color || "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
