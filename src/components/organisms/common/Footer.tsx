import React from "react"
import { styled } from "styled-components"

const FooterBoard = styled.div`
  position: fixed;
	display: flex;
	align-items: center;
  justify-content: center;
	flex-direction: column;
	bottom: 0;
	width: 100%;
	background-color: #D9D9D9;
`
const Footer = () => {
	const openNewTab = () => {
		window.open("https://modern-agile-official-client.vercel.app/", "_blank"); // 여기에 링크할 페이지 URL을 넣으세요
	};
	return (
		<FooterBoard>
			<a href="#" onClick={openNewTab}>
				<img
					src="ModernAgile.png"
					alt="모던 애자일"
					style={{ width: "50px", height: "auto" }}
				/>
			</a>
			<div>ⓒ 2023 Modern Agile</div>
			<br />
			<div>CRAB | 신나게</div>
		</FooterBoard>
	)
}

export default Footer;