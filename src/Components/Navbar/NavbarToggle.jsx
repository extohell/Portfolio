import React from 'react';
import styled from 'styled-components';
import { devices } from '../../mediaSizes';

const Wrapper = styled.div`
	position: absolute;
	width: 50px;
	height: 40px;
	z-index: 31;
	display: none;
		
	transition: transform 0.3s;
	
	@media ${ devices.tablet } {
		right: 60px;
		top: 60px;
		display: block;
	}
	
	@media ${ devices.mobileL } {
		right: 30px;
		top: 30px;
	}	
	
	span {
  		background-color: #000000;
  		position: absolute;
  		border-radius: 1px;
  		transition: 0.3s cubic-bezier(.8, .5, .2, 1.4);
  		
  		&:nth-child(1) {
  			width: 100%;
  			height:  4px;
  			display: block;
  			top: 0;
  			left: 0;
		}
		&:nth-child(2) {
  			width: 100%;
  			height:  4px;
  			display: block;
  			top: 18px;
  			left: 0;
		}
		&:nth-child(3) {
  			width: 100%;
  			height:  4px;
  			display: block;
  			bottom: 0;
  			left: 0;
		}
	}
	&.open {
		transform: rotate(90deg);
		
		span {
			&:nth-child(1) {
  				left: 3px;
  				top: 10px;
  				width: 40px;
  				transition: 0.3s cubic-bezier(.8, .5, .2, 1.4);
  				transform: rotate(90deg);
  				transition-delay: 150ms;
			}
			&:nth-child(2) {
  				left: 0;
  				top: 22px;
  				width: 28px;
  				transition: 0.3s cubic-bezier(.8, .5, .2, 1.4);
  				transform: rotate(45deg);
  				transition-delay: 50ms;
			}
			&:nth-child(3) {
  				left: 18px;
  				top: 22px;
  				width: 28px;
  				transition: 0.3s cubic-bezier(.8, .5, .2, 1.4);
  				transform: rotate(-45deg);
  				transition-delay: 100ms;
			}
		}
	}
`;

const NavbarToggle = ({ toggle, show }) => {
	return (
		<Wrapper onClick={ toggle } className={ show && 'open' }>
			<span/>
			<span/>
			<span/>
		</Wrapper>
	);
};

export default NavbarToggle;