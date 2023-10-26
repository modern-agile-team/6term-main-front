import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/Logo.png"
        alt="로고"
        width={80}
        height={70}
      />
    </Link>
  );
};

export default Logo;
