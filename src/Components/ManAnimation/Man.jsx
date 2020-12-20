import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import painterWalkSrc from '../../assets/image/sprites/painter-walk.png';
import cleanerWalkSrc from '../../assets/image/sprites/cleaner-walk.png';
import paintInSrc from '../../assets/image/sprites/paint-in.png';
import paintOutSrc from '../../assets/image/sprites/paint-out.png';
import cleanInSrc from '../../assets/image/sprites/cleaning-in.png';
import cleanOutSrc from '../../assets/image/sprites/cleaning-out.png';
import cloudSrc from '../../assets/image/sprites/cloud.png';
import cleanSrc from '../../assets/image/sprites/cleaning.png';

const painterWalking = new Image();
painterWalking.src = painterWalkSrc;
const cleanerWalking = new Image();
cleanerWalking.src = cleanerWalkSrc;
const paintingIn = new Image();
paintingIn.src = paintInSrc;
const cleaningIn = new Image();
cleaningIn.src = cleanInSrc;
const paintingOut = new Image();
paintingOut.src = paintOutSrc;
const cleaningOut = new Image();
cleaningOut.src = cleanOutSrc;
const cloud = new Image();
cloud.src = cloudSrc;
const cleaning = new Image();
cleaning.src = cleanSrc;

const painterImgs = { walk: painterWalking, actionIn: paintingIn, actionOut: paintingOut, action: cloud };
const cleanerImgs = { walk: cleanerWalking, actionIn: cleaningIn, actionOut: cleaningOut, action: cleaning };

const Div = styled.div.attrs(props => ({
	style: {
		[props.side]: props.mainPosition + 'px',
		backgroundPosition: props.bgTranslate + 'px 0'
	},
}))`position: absolute;
	top: ${ props => props.coords.y }px;
	width: 120px;
	height: 100px;
	
	background-image: url(${ props => props.img });
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	
	transform: scaleX(${ props => props.side === 'left' ? -1 : 1 });
	will-change: left, right, background-position;
	
	&::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 47%;
		width: 40px;
		height: 4px;
		z-index: -11;
		
		background-color: #8b8b8b;
		box-shadow: 0 0 10px 3px #8b8b8b, 0 0 5px 1px #8b8b8b;
		opacity: 0.15;
		border-radius: 50%;
		
		transform: translateX(-50%);
	}
	
	&.cleaner {
		top: ${ props => props.coords.y - 60 }px;
		height: 140px;
	}
	
	& ~ .graffiti {
		filter: blur(${ props => props.blur }px);
		transition: filter 0.2s;
	}
`;

const Cloud = styled.span.attrs(props => ({
	style: {
		backgroundPosition: props.cloudBgTranslate + 'px 0'
	},
}))`position: absolute;
	right: 98px;
	bottom: 80px;
	width: 140px;
	height: 140px;
		
	background-image: url(${ cloud.src });
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Man = ({ coords, cleaner, drawGraffiti, graffiti, mainStage, setMainStage }) => {
	const timers = useRef({});
	const cloudRef = useRef();
	const images = useRef(cleaner ? cleanerImgs : painterImgs);
	const [ stage, setStage ] = useState(null);
	const [ bgTranslate, setBgTranslate ] = useState(0);
	const [ cloudBgTranslate, setCloudBgTranslate ] = useState(0);
	const sideRef = useRef('left');
	const [ mainPosition, setMainPosition ] = useState(-120);
	const [ currImg, setCurrImg ] = useState(cleaner ? cleanerWalking.src : painterWalking.src);
	const [ graffitiBlur, setGraffitiBlur ] = useState(0);
	const graffitiRef = useRef(graffiti);

	useEffect(() => {
		graffitiRef.current = graffiti;
	}, [ graffiti ]);

	useEffect(() => {
		if (mainStage === 'painter' && !cleaner) setStage('walk-in');
		else if (mainStage === 'cleaner' && cleaner) setStage('walk-in');
		else setStage(null);
	}, [ mainStage, cleaner ]);

	const bgTimerReset = useCallback((frames, img) => {
		clearInterval(timers.current.bg);
		setCurrImg(img);
		setBgTranslate(0);
		timers.current.bg = setInterval(() => {
			setBgTranslate((a) => {
				if (a <= -120 * (frames - 1)) {
					if (stage === 'action-in') {
						setStage('action');
					} else if (stage === 'action-out') {
						setStage('walk-out');
					}
					clearInterval(timers.current.bg);
					return cleaner ? 0 : a;
				}
				return a - 120;
			});
		}, 50);
	}, [ stage, cleaner ]);

	useEffect(() => {
		const imgs = images.current;
		switch (stage) {
			case 'walk-in':
				sideRef.current = Math.random() < 0.5 ? 'left' : 'right';
			case 'walk-out':
				clearInterval(timers.current.cloudBg);
				setCurrImg(imgs.walk.src);
				timers.current.main = setInterval(() => {
					setMainPosition((a) => {
						if ((a + 120 >= coords.x && !cleaner && stage === 'walk-in') ||
							(cleaner && graffitiRef.current && sideRef.current === 'left' && a + 40 >= graffitiRef.current.x &&
								stage === 'walk-in') ||
							(cleaner && graffitiRef.current && sideRef.current === 'right' && a + 160 >=
								document.documentElement.offsetWidth - graffitiRef.current.x && stage === 'walk-in')) {
							setStage('action-in');
							return a;
						} else {
							if (a >= document.documentElement.offsetWidth) {
								clearInterval(timers.current.main);
								clearInterval(timers.current.bg);
								if (cleaner) {
									setTimeout(() => setMainStage('painter'), 15000);
								} else {
									setTimeout(() => setMainStage('cleaner'), 8000);
								}
								return -120;
							}
							return a + 2;
						}
					});
				}, 30);
				timers.current.bg = setInterval(() => {
					setBgTranslate((a) => a <= -120 * 24 ? 0 : a - 120);
				}, 30);
				break;
			case 'action-in':
				clearInterval(timers.current.main);
				bgTimerReset(cleaner ? 13 : 17, imgs.actionIn.src);
				break;
			case 'action-out':
				if (cleaner) {
					setGraffitiBlur(0);
					drawGraffiti(null);
				}
				clearInterval(timers.current.cloudBg);
				clearInterval(timers.current.bg);
				bgTimerReset(cleaner ? 13 : 14, imgs.actionOut.src);
				break;
			case 'action':
				if (!cleaner) {
					timers.current.cloudBg = setInterval(() => {
						setCloudBgTranslate((a) => a <= -140 * 2 ? 0 : a - 140);
					}, 120);
					const cloudCoords = cloudRef.current.getBoundingClientRect();
					drawGraffiti(cloudCoords.left, cloudCoords.top);
					setTimeout(() => setStage('action-out'), 2000);
				} else {
					setCurrImg(imgs.action.src);
					timers.current.bg = setInterval(() => {
						setBgTranslate((a) => {
							if (a <= -120 * 3) {
								setGraffitiBlur(a => {
									if (a === 9) {
										setStage('action-out');
									}
									return ++a;
								});
								return 0;
							}
							return a - 120;
						});
					}, 150);
				}
				break;
			default:
				return;
		}
	}, [ coords, stage, bgTimerReset, drawGraffiti, cleaner, setGraffitiBlur, setMainStage ]);

	return (
		<>
			<Div className={ cleaner && 'cleaner' } side={ sideRef.current } bgTranslate={ bgTranslate }
				 mainPosition={ mainPosition } img={ currImg } coords={ coords } blur={ graffitiBlur }>
				{
					stage === 'action' && !cleaner && <Cloud ref={ cloudRef } cloudBgTranslate={ cloudBgTranslate }/>
				}
			</Div>
		</>
	);
};

export default React.memo(Man);