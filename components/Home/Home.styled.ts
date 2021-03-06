import styled from 'styled-components';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/home/background-home-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/home/background-home-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/home/background-home-desktop.jpg');
		background-position: right;
		background-size: 80vw 100vh;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		height: 70vh;
		justify-content: space-around;
		flex-direction: row;
		align-items: end;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		heightL 382px;
		width: 450px;
	}
`;

export const SubHeading = styled.h6`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	margin: 48px 0 0 0;
	color: ${({ theme }) => theme.purple};
	letter-spacing: 2.36px;

	@media (min-width: 768px) {
		font-size: 20px;
		letter-spacing: 3.38px;
		margin: 5rem 0 0 0;
		word-spacing: 1px;
	}

	@media (min-width: 1224px) {
		font-size: 28px;
		letter-spacing: 4.72px;
		line-height: auto;
		margin: 5rem 0 0 0;
		word-spacing: 1px;
	}
`;

export const Heading = styled.h2`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 80px;
	margin: 1rem 0 0 0;
	color: ${({ theme }) => theme.white};

	@media (min-width: 768px) {
		font-size: 150px;
		line-height: 150px;
		margin: 2rem 0 0 0;
	}

	@media (min-width: 1224px) {
		margin: 1rem 0 0 0;
	}
`;

export const BodyText = styled.p`
	height: 150px;
	width: 327px;
	margin: 1rem 0 0 0;
	font-family: ${({ theme }) => theme.barlow};
	font-size: 18px;
	line-height: 32px;
	word-spacing: 1px;
	text-align: center;
	color: ${({ theme }) => theme.purple};

	@media (min-width: 768px) {
		height: 112px;
		width: 444px;
		margin: 2rem 0 0 0;
		font-size: 19px;
		line-height: 28px;
		word-spacing: 2px;
	}

	@media (min-width: 1224px) {
		height: 128px;
		margin: 1rem 0 0 0;
		font-size: 22px;
		line-height: 32px;
		text-align: left;
		word-spacing: 0px;
	}
`;

export const Oval = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 150px;
	width: 150px;
	border-radius: 100%;
	margin-top: 10rem;
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 20px;
	word-spacing: 1px;
	letter-spacing: 1.25px;
	background-color: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.black};

	@media (min-width: 768px) {
		height: 242px;
		width: 242px;
		font-size: 32px;
		letter-spacing: 2px;
		margin-top: 11rem;
	}

	@media (min-width: 1224px) {
		align-self: end;
		height: 274px;
		width: 274px;
	}
`;
