import React from 'react';
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
	
	will-change: left, top, transform;
	transition: transform 5s, opacity 5s;
	opacity: ${ props => props.opacity };
	
	font-size: 30px;
`;

const getRandomCoords = () => {
	return {
		x: Math.random() * (document.documentElement.clientWidth - 50),
		y: Math.random() * (document.documentElement.clientHeight - 50)
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
			coords: { ...getRandomCoords(), angle: 0 },
			opacity: 0
		};
	}

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
				coords: { ...this.chain[this.chain.length - 1] },
				angle: (this.chain[this.chain.length - 1].x - this.target.x > 0 ? 1 : -1) * 360
			}));
			setTimeout(() => this.setState(state => ({ ...state, opacity: 1 })));
		}, 20);
	}

	componentWillUnmount() {
		clearInterval(this.timers.target);
		clearInterval(this.timers.chain);
	}

	render() {
		return <Span coords={ this.state.coords } opacity={ this.state.opacity }>{ this.props.children }</Span>;
	}
}

export default Letter;