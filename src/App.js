import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import { withRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Curriculum from './Components/Curriculum/Curriculum';
import Contacts from './Components/Contacts/Contacts';
import ManAnimation from './Components/ManAnimation/ManAnimation';
import NameAnimation from './Components/NameAnimation/NameAnimation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LanguageSelector from './Components/LanguageSelector/LanguageSelector';
import LanguageContext from './LanguageContext';
import { devices } from './mediaSizes';
import NavbarToggle from './Components/Navbar/NavbarToggle';

const ContentWrapper = styled.div`
	position: relative;
	width: 55%;
	min-height: 100vh;
	margin: 0 auto;
	padding: 50px 100px;
	overflow-y: auto;
	scrollbar-width: none;
		
	&::before {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: ${ props => props.left }px;
		width: 2px;
		
		background-color: #000000;
		
		@media ${ devices.laptopS } {
			display: none;
		}
	}
	
	@media ${ devices.laptopL } {
		padding: 50px 70px;
	}
	@media ${ devices.tablet } {
		width: 100%;
		padding: 40px;
	}
`;

export const PositionWrapper = styled.div`
	position: absolute;
	left: 100px;
	right: 100px;
	top: 50%;
	transform: translateY(-50%);
	
	@media ${ devices.laptopS } {
		left: 60px;
		right: 60px;
	}
	
	@media ${ devices.mobileL } {
		left: 40px;
		right: 40px;
		top: 150px;
		transform: translateY(0);
	}
`;

const MobileTopCover = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 120px;
	z-index: 21;
	display: none;
	
	background-color: #ffffff;
	
	@media ${ devices.tablet } {
		display: block;
	}
`;

function App({ location }) {
	const wrapperRef = useRef();
	const [ contentOffsetLeft, setContentOffsetLeft ] = useState(0);
	const [ loaded, setLoaded ] = useState(false);
	const [ lang, setLang ] = useState('en');
	const [ showMobileNavbar, setShowMobileNavbar ] = useState(false);

	useEffect(() => {
		setContentOffsetLeft(wrapperRef.current.getBoundingClientRect().left);
	}, [ lang ]);

	const toggleLang = useCallback((lang) => {
		setLang(lang);
	}, [ setLang ]);

	const toggleMobileNavbar = useCallback(() => {
		setShowMobileNavbar(bool => !bool);
	}, [ setShowMobileNavbar ]);

	return (
		<LanguageContext.Provider value={ lang }>
			<LanguageSelector toggleLang={ toggleLang }/>
			{
				document.documentElement.clientWidth > 768 && <ManAnimation loaded={ loaded }/>
			}
			<NameAnimation name={ 'IVAN BEREZHNOI' } loaded={ loaded } setLoaded={ () => setLoaded(true) }/>
			<NavbarToggle toggle={ toggleMobileNavbar } show={ showMobileNavbar }/>
			<MobileTopCover/>
			<Navbar contentOffsetLeft={ contentOffsetLeft } loaded={ loaded } showMobileNavbar={ showMobileNavbar }
					mobileToggle={ toggleMobileNavbar }/>
			<ContentWrapper ref={ wrapperRef } left={ contentOffsetLeft }>
				<TransitionGroup>
					<CSSTransition key={ location.key }
								   classNames='contentAnim'
								   unmountOnExit
								   timeout={ {
									   enter: 500,
									   exit: 500
								   } }>
						<Switch location={ location }>
							<Route exact path='/' component={ MainPage }/>
							<Route exact path='/portfolio' component={ Portfolio }/>
							<Route exact path='/cv' component={ Curriculum }/>
							<Route exact path='/contacts' component={ Contacts }/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</ContentWrapper>
		</LanguageContext.Provider>
	);
}

export default withRouter(App);
