import styled from 'styled-components';

interface HamburgerTypes {
	showModal: boolean;
}

export const Nav = styled.nav`
	display: flex;
	align-items: start;
	width: 100vw;
	height: 12vh;

	@media (min-width: 1224px) {
		align-items: end;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 12vh;
	width: 100%;

	@media (min-width: 768px) {
	}
`;

export const LogoContainer = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;

	@media (min-width: 1224px) {
		margin-top: 40px;
	}
`;

export const HamburgerContainer = styled.button<HamburgerTypes>`
	display: ${({ showModal }) => (showModal ? 'none' : 'flex')};
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;
	background: none;
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const NavLinkContainer = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
		width: 450px;
		background-color: rgba(225, 225, 225, 0.04);
	}

	@media (min-width: 1224px) {
		position: relative;
		display: flex;
		justify-content: space-evenly;
		margin-top: 40px;
		width: 830px;
		height: 96px;
	}
`;

export const Hr = styled.hr`
	display: none;

	@media (min-width: 1224px) {
		display: flex;
		position: absolute;
		width: 473px;
		height: 1px;
		right: 802px;
		top: 40px;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(81.5485px);
	}
`;

interface NavlinkTypes {
	pathname: string;
}

export const NavLink = styled.a<NavlinkTypes>`
	display: flex;
	align-items: center;
	height: 100%;
	font-family: ${({ theme }) => theme.barlow};
	color: ${({ theme }) => theme.white};
	border-bottom: 3px solid
		${({ href, pathname }) => (href === pathname ? '#FFFFFF' : 'none')};
	font-size: 16px;
	letter-spacing: 2.7px;
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid ${({ theme }) => theme.grey};
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

export const Span = styled.span`
	display: inline;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: bold;
	color: ${({ theme }) => theme.white};
	margin-right: 10px;

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1224px) {
		display: inline;
	}
`;
