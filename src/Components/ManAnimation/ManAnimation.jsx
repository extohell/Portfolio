import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Man from './Man';

import react from '../../assets/image/logos/react.svg';
import html from '../../assets/image/logos/html-5.svg';
import git from '../../assets/image/logos/git.svg';
import javascript from '../../assets/image/logos/javascript.svg';
import redux from '../../assets/image/logos/redux.svg';
import sass from '../../assets/image/logos/sass-1.svg';

const graffitiImgs = [ react, html, git, javascript, redux, sass ].sort(() => Math.random() - 0.5);

const Graffiti = styled.span`
	position: absolute;
	top: ${ props => props.coords.y + 30 }px;
	left: ${ props => props.coords.x + 30 }px;
	width: 60px;
	height: 60px;
	z-index: -1;
	
	background-image: url(${ props => props.coords.img });
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	
	transform: rotate(${ props => props.coords.angle }deg);
`;

const ManAnimation = () => {
	const [ graffiti, setGraffiti ] = useState(null);
	const [ mainCoords, setMainCoords ] = useState({ x: 0, y: 0 });
	const [ mainStage, setMainStage ] = useState(null);
	const graffitiCounter = useRef(5);

	const drawGraffiti = useCallback((x = null, y = null) => {
		if (x === null || y === null) {
			setGraffiti(null);
		} else {
			setGraffiti({
				x,
				y,
				img: graffitiImgs[graffitiCounter.current++],
				angle: Math.round((Math.random() * (40 - 10) + 10) * (Math.random() < 0.5 ? -1 : 1))
			});
		}
		if (graffitiCounter.current >= graffitiImgs.length) graffitiCounter.current = 0;
	}, []);

	useEffect(() => {
		getMainCoords();
		setTimeout(() => setMainStage('painter'), 3000);
	}, []);

	useEffect(() => {
		if (mainStage === 'painter') getMainCoords();
	}, [ mainStage ]);

	const getMainCoords = () => {
		const doc = document.documentElement;
		setMainCoords({
			x: Math.random() * (doc.offsetWidth - 150 - 150) + 150,
			y: Math.random() * (doc.offsetHeight - 300 - 150) + 150,
		});
	};

	return (
		<>
			<Man coords={ mainCoords } drawGraffiti={ drawGraffiti } graffiti={ graffiti } mainStage={ mainStage }
				 setMainStage={ setMainStage }/>
			<Man cleaner coords={ mainCoords } drawGraffiti={ drawGraffiti } graffiti={ graffiti }
				 mainStage={ mainStage } setMainStage={ setMainStage }/>
			{
				graffiti && <Graffiti className='graffiti' coords={ graffiti }/>
			}
		</>
	);
};

export default (ManAnimation);