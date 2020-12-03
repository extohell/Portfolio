import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Man from './Man';

import react from '../../assets/image/logos/react.svg';
import html from '../../assets/image/logos/html-5.svg';
import css from '../../assets/image/logos/css-5.svg';
import php from '../../assets/image/logos/php.svg';
import javascript from '../../assets/image/logos/javascript.svg';
import redux from '../../assets/image/logos/redux.svg';
import sass from '../../assets/image/logos/sass-1.svg';
import vue from '../../assets/image/logos/vue.svg';

const graffitiImgs = [ react, vue, javascript, php, redux, sass, css, html ].sort(() => Math.random() - 0.5);

const Graffiti = styled.span`
	position: absolute;
	top: ${ props => props.coords.y + 30 }px;
	left: ${ props => props.coords.x + 30 }px;
	width: 80px;
	height: 80px;
	z-index: -10;
	
	background-image: url(${ props => props.coords.img });
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	
	//transform: rotate(${ props => props.coords.angle }deg);
`;

const ManAnimation = ({ loaded }) => {
	const [ graffiti, setGraffiti ] = useState(null);
	const [ mainCoords, setMainCoords ] = useState({ x: 0, y: 0 });
	const [ mainStage, setMainStage ] = useState(null);
	const graffitiCounter = useRef(0);

	const drawGraffiti = useCallback((x = null, y = null) => {
		if (x === null || y === null) {
			setGraffiti(null);
		} else {
			setGraffiti({
				x,
				y,
				img: graffitiImgs[graffitiCounter.current++],
				// angle: Math.round((Math.random() * (40 - 10) + 10) * (Math.random() < 0.5 ? -1 : 1))
			});
		}
		if (graffitiCounter.current >= graffitiImgs.length) graffitiCounter.current = 0;
	}, []);

	useEffect(() => {
		if (loaded) {
			getMainCoords();
			setTimeout(() => setMainStage('painter'), 7000);
		}
	}, [ loaded ]);

	useEffect(() => {
		if (mainStage === 'painter') getMainCoords();
	}, [ mainStage ]);

	const getMainCoords = () => {
		const doc = document.documentElement;
		setMainCoords({
			x: Math.random() * (doc.clientWidth - 150 - 150) + 150,
			y: Math.random() * (doc.clientHeight - 300 - 150) + 150,
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