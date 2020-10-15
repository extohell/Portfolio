import React from 'react';
import styled from 'styled-components';
import { devices } from '../../mediaSizes';

const Span = styled.span.attrs(props => ({
	style: {
		left: props.coords.x + 'px',
		top: props.coords.y + 'px',
		transform: `rotate(${ props.coords.angle }deg)`
	},
}))`
	display: inline-block;
	position: relative;
	min-width: 15px;
	
	will-change: left, top, transform;
	transition: transform 3s, opacity 3s ${ props => props.coords.x === 0 && props.coords.y === 0 && ', left 0.3s, top 0.3s' };
	opacity: ${ props => props.opacity };
	
	font-size: 50px;
	font-family: 'Titillium Web', sans-serif;
	font-weight: 900;
	
	@media ${ devices.mobileL } {
		font-size: 40px;
	}
`;

const getRandomCoords = () => {
	return {
		x: Math.round(Math.random() * document.documentElement.clientWidth / 2 * (Math.random() < 0.5 ? -1 : 1)),
		y: Math.round(Math.random() * document.documentElement.clientHeight / 2 * (Math.random() < 0.5 ? -1 : 1)),
	};
};

class Letter extends React.Component {
	constructor(props) {
		super(props);
		this.k = 0.08;
		this.target = getRandomCoords();
		this.chain = [];
		this.timers = {};
		this.state = {
			coords: {
				...getRandomCoords(),
				angle: Math.random() * 180
			},
			opacity: 0
		};
		this.toCenter = false;
		this.updateTime = document.documentElement.clientWidth <= 768 ? 5 : 20;
	}

	static allTransitionEnd = [];

	componentDidMount() {
		for (let i = 0; i < 10; i++) {
			this.chain.push(getRandomCoords());
		}
		this.timers.target = setInterval(() => {
			this.target = getRandomCoords();
		}, 1500);
		this.timers.chain = setInterval(() => {
			this.chain = this.chain.map((item, index) => {
				if (index === 0) {
					return {
						x: item.x + this.k * (this.target.x - item.x),
						y: item.y + this.k * (this.target.y - item.y)
					};
				} else {
					return {
						x: item.x + this.k * (this.chain[index - 1].x - item.x),
						y: item.y + this.k * (this.chain[index - 1].y - item.y)
					};
				}
			});
			this.setState(state => ({
				...state,
				coords: {
					x: Math.round(this.chain[this.chain.length - 1].x),
					y: Math.round(this.chain[this.chain.length - 1].y),
					angle: (this.chain[this.chain.length - 1].x - this.target.x > 0 ? 1 : -1) * 360
				},

			}));
		}, this.updateTime);
		setTimeout(() => this.setState(state => ({ ...state, opacity: 1 })), 100);
		setTimeout(() => {
			clearInterval(this.timers.target);
			this.target = { x: 0, y: 0 };
			this.toCenter = true;
		}, 3000);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.toCenter && Math.abs(this.state.coords.x) < 5 && Math.abs(this.state.coords.y) < 5) {
			clearInterval(this.timers.chain);
			this.setState(state => ({ ...state, coords: { x: 0, y: 0 } }));
			this.toCenter = false;
			Letter.allTransitionEnd.push(true);
			if (Letter.allTransitionEnd.length === this.props.nameArr.length &&
			Letter.allTransitionEnd.every(bool => bool === true)) {
				setTimeout(() => this.props.setLoaded(true), 1000);
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.timers.target);
		clearInterval(this.timers.chain);
	}

	render() {
		const { coords, opacity } = this.state;
		const { children, index } = this.props;
		return <Span index={ index } coords={ coords }
					 opacity={ opacity }>{ children }</Span>;
	}
}

export default Letter;