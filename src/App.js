import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Curriculum from './Components/Curriculum/Curriculum';
import Contacts from './Components/Contacts/Contacts';
import ManAnimation from './Components/ManAnimation/ManAnimation';
import NameAnimation from './Components/NameAnimation/NameAnimation';

const ContentWrapper = styled.div`
	max-width: 986px;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
		
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

function App() {
	const wrapperRef = useRef();
	const [ contentOffsetLeft, setContentOffsetLeft ] = useState(0);
	const [ loaded, setLoaded ] = useState(false);

	useEffect(() => {
		setContentOffsetLeft(wrapperRef.current.getBoundingClientRect().left);
	}, [ loaded ]);

	return (
		<>
			{/*<ManAnimation/>*/ }
			<NameAnimation name={ 'IVAN BEREZHNOI' } loaded={ loaded } setLoaded={ () => setLoaded(true) }/>
			<Navbar contentOffsetLeft={ contentOffsetLeft }/>
			<ContentWrapper ref={ wrapperRef } left={ contentOffsetLeft }>
				<Switch>
					<Route exact path='/' component={ MainPage }/>
					<Route exact path='/portfolio' component={ Portfolio }/>
					<Route exact path='/cv' component={ Curriculum }/>
					<Route exact path='/contacts' component={ Contacts }/>
				</Switch>
			</ContentWrapper>
		</>
	);
}

export default App;
