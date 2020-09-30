import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Span = styled.span.attrs(props => ({
	style: {
		left: props.coords.x + 'px',
		top: props.coords.y + 'px',
		transform: `translateX(-50%) rotate(${ props.coords.angle }deg)`
	},
}))`
	display: inline-block;
	min-width: 8px;
	position: absolute;
	top: 0;
	left: 0;
	
	will-change: left, top, transform;
	transition: transform 5s;
	
	font-size: 30px;
`;

const initialChain = [];
for (let i = 0; i < 10; i++) {
	initialChain.push({ x: 0, y: 0 });
}

const Letter = ({ children }) => {
	const k = useRef(0.08);
	const timers = useRef({});
	const [ chain, setChain ] = useState(initialChain);
	const [ coords, setCoords ] = useState({ x: 0, y: 0, angle: 0 });
	const [ target, setTarget ] = useState({ x: 0, y: 0 });
	const targetRef = useRef(target);

	useEffect(() => {
		targetRef.current = target;
	});

	useEffect(() => {
		timers.current.target = setInterval(() => {
			setTarget({
				x: Math.random() * document.documentElement.offsetWidth,
				y: Math.random() * document.documentElement.offsetHeight
			});
		}, 1500);
		timers.current.chain = setInterval(() => {
			setChain(arr => {
				const tmp = [ ...arr ];
				for (let i = 0; i < arr.length; i++) {
					if (i === 0) {
						tmp[0] = {
							x: tmp[0].x + k.current * (targetRef.current.x - tmp[0].x),
							y: tmp[0].y + k.current * (targetRef.current.y - tmp[0].y),
						};
					} else {
						tmp[i] = {
							x: tmp[i].x + k.current * (tmp[i - 1].x - tmp[i].x),
							y: tmp[i].y + k.current * (tmp[i - 1].y - tmp[i].y),
						};
					}
				}
				return tmp;
			});
		}, 20);
		const targetTimer = timers.current.target;
		const chainTimer = timers.current.chain;
		return () => {
			clearInterval(targetTimer);
			clearInterval(chainTimer);
		}
	}, []);

	useEffect(() => {
		setCoords({
			...chain[chain.length - 1],
			angle: (chain[chain.length - 1].x - targetRef.current.x > 0 ? 1 : -1) * 360
		});
	}, [ chain ]);

	return <Span coords={ coords }>{ children }</Span>;
};

export default Letter;