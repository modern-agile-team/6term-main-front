import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const FooterBoard = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: auto;
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #d9d9d9;
`;
const FooterText = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;

const Footer = () => {
  const openNewTab = () => {
    window.open('https://modern-agile-official-client.vercel.app/', '_blank'); // 여기에 링크할 페이지 URL을 넣으세요
  };
  return (
    <FooterBoard>
      <a href="#" onClick={openNewTab}>
        <Image
          src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/ModernAgile.png"
          alt="모던 애자일"
          width={50}
          height={40}
        />
      </a>
      <FooterText>ⓒ 2023 Modern Agile</FooterText>
      <br />
      <FooterText>CRAB | 신나게</FooterText>
    </FooterBoard>
  );
};

export default Footer;
