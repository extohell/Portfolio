import React, { useEffect, useRef, useState } from 'react';
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

const ContentWrapper = styled.div`
	position: relative;
	max-width: 986px;
	min-height: 100vh;
	margin: 0 auto;
	padding: 50px 100px;
		
	&::before {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: ${ props => props.left }px;
		width: 2px;
		
		background-color: #000000;
	}
`;

export const PositionWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

function App({ location }) {
	const wrapperRef = useRef();
	const [ contentOffsetLeft, setContentOffsetLeft ] = useState(0);
	const [ loaded, setLoaded ] = useState(false);

	useEffect(() => {
		setContentOffsetLeft(wrapperRef.current.getBoundingClientRect().left);
	}, []);

	return (
		<>
			{/*<ManAnimation/>*/}
			{/*<NameAnimation name={ 'IVAN BEREZHNOI' } loaded={ loaded } setLoaded={ () => setLoaded(true) }/>*/}
			<Navbar contentOffsetLeft={ contentOffsetLeft } loaded={ loaded }/>
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
		</>
	);
}

export default withRouter(App);
