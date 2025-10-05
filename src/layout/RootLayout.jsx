import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container max-w-[1024px] mx-auto px-5 py-5 lg:py-0">
      <Outlet />
    </div>
  );
}
