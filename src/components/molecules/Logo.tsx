import React from "react"
import Link from "next/link";


const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/logo.png"
        alt="로고"
        style={{ width: "80px", height: "auto" }}
      />
    </Link>
  );
};

export default Logo;