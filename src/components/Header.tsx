import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header: FC = () => {
  return (
    <nav
      className="flex justify-between items-center py-2 "
      style={{ backgroundColor: "#2C303C", width: "100%" }}
    >
      <Link href="/">
        <div
          className="relative w-[150px] h-[30px]"
          style={{ marginLeft: "750px" }}
        >
          <Image src="/img/ss.svg" alt="logo" fill className="object-contain" />
          <Image
            src="/img/90th_logo_full (1).svg"
            alt="logo"
            fill
            className="object-contain"
            style={{ marginLeft: "100px" }}
          />
        </div>
      </Link>
      <SearchInput />
    </nav>
  );
};

export default Header;
