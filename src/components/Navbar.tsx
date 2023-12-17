import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="" style={{ backgroundColor: "#2C303C", color: "#F4F7F9" }}>
      <ul className="py-2 border-t border-gray-300 ">
        <li className="space-x-6 " style={{ marginLeft: "450px" }}>
          <Link href="/news">News</Link>
          <Link href="/education">Education</Link>
          <Link href="/health">Health</Link>
          <Link href="/money">Money</Link>
          <Link href="/travel">Travel</Link>
          <Link href="">Cars</Link>
          <Link href="">Law Firms</Link>
          <Link href="">Real Estate</Link>
          <Link href="">360 REVIEWS</Link>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-black mb-1" />
      <div className="w-full h-[1px] bg-black" />
    </nav>
  );
};

export default Navbar;
