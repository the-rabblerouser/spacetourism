import React, { useState } from 'react';
import { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

import data from '../lib/data.json';

const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/crew/background-crew-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/crew/background-crew-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/crew/background-crew-desktop.jpg');
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 24px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		display: grid;
		justify-content: space-between;
		height: 88vh;
		width: 100vw;
		grid-columns-template: 1fr 1fr 2fr;
		grid-rows-template: 2fr;
		grid-template-areas:
			'subheading planet planet'
			'moon planet planet';
	}
`;

export const SubHeading = styled.h6`
	display: flex;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: 400;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 19.2px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin: 0 0 0 0;

	@media (min-width: 768px) {
		align-self: start;
		margin: 40px 0 0 38.5px;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
		text-align: left;
	}

	@media (min-width: 1224px) {
		grid-area: subheading;
		margin: 40px 0 0 166.5px;
		font-family: Barlow Condensed;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.724999904632568px;
		text-align: left;
	}
`;

export const Span = styled.div`
	display: inline;
	opacity: 25%;
	margin-right: 16px;
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 2.7px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 20px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 3.375px;
		text-align: left;
	}

	@media (min-width: 1224px) {
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.724999904632568px;
		text-align: left;
	}
`;

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 223px;
	width: 327px;
	margin-top: 32px;
	border-bottom: 1px solid ${({ theme }) => theme.hrBlack};

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Img = styled.img`
	height: 222px;
	width: 177.12px;
	justify-self: center;

	@media (min-width: 768px) {
		height: 300px;
		width: 300px;
		margin-top: 60px;
	}

	@media (min-width: 1224px) {
		grid-area: moon;
		align-self: center;
		justify-self: end;
		width: 445px;
		height: 445px;
		margin: 0 0 0 230px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 220px;
	width: 327px;

	@media (min-width: 1224px) {
	}
`;

const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 10px;
	width: 88px;
	margin: 32px 0 0 0;

	@media (min-width: 1224px) {
	}
`;

const ToggleIcon = styled.button`
	height: 10px;
	width: 10px;
	border-radius: 100%;
	border: none;
	background: ${({ theme }) => theme.grey};
	cursor: pointer;

	@media (min-width: 1224px) {
	}
`;

const Title = styled.h6`
	height: 18px;
	width: 107px;
	font-family: ${({ theme }) => theme.bellefair};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 18.34px;
	opacity: 0.5;
	text-align: center;
	margin: 32px 0 0 0;
`;

const Name = styled.h5`
	height: 28px;
	width: 327px;
	font-family: ${({ theme }) => theme.bellefair};
	font-family: Bellefair;
	font-size: 24px;
	font-style: normal;
	font-weight: normal;
	color: ${({ theme }) => theme.white};
	line-height: 28px;
	text-align: center;
	text-transform: uppercase;
	line-height: auto;
	letter-spacing: 0px;

	margin: 8px 0 0 0;
`;

const BodyText = styled.p`
	height: 100px;
	width: 80%;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	word-spacing: 2px;
	color: ${({ theme }) => theme.purple};
	margin: 16px 0 0 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const crew: NextPage = () => {
	const [selected, setSelected] = useState<string>('Douglas Hurley');
	const [crew] = useState<string[]>([
		'Douglas Hurley',
		'Mark Shuttleworth',
		'Victor Glover',
		'Anousheh Ansari',
	]);

	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading>
							<Span>02</Span> MEET YOUR CREW
						</SubHeading>
						<ImgContainer>
							<Img src={`./assets/crew/image-${selected}.png`} />
						</ImgContainer>
						<TextContainer>
							<ToggleContainer>
								<ToggleIcon />
								<ToggleIcon />
								<ToggleIcon />
								<ToggleIcon />
							</ToggleContainer>
							<Title>COMMANDER</Title>
							<Name>DOUGLAS HURLEY</Name>
							<BodyText>
								Douglas Gerald Hurley is an American engineer, former Marine
								Corps pilot and former NASA astronaut. He launched into space
								for the third time as commander of Crew Dragon Demo-2.
							</BodyText>
						</TextContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default crew;