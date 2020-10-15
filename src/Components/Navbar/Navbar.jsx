import React, { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import Link from './Link';
import { withRouter } from 'react-router-dom';
import LanguageContext from '../../LanguageContext';
import { devices } from '../../mediaSizes';

const Ul = styled.ul`
	position: fixed;
	top: 50%;
	left: 50px;
	
	transform: translateY(-50%);
	
	@media ${ devices.tablet } {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 30;
		
		background-color: #ffffff;
		opacity: 0.9;
		transform: translateX(${ props => props.show ? 0 : '-100%' });
		transition: 0s;
		transition-delay: ${ props => props.show ? 0 : 1.3 }s;
	}
`;

const Li = styled.li`
	margin-bottom: 15px;
	
	@media ${ devices.tablet } {
		transform: translateX(${ props => props.show ? 0 : -document.documentElement.clientWidth }px);
		transition: transform 0.5s;
		transition-delay: ${ props => props.index * 0.15 + (props.show ? 0 : 0.5) }s;
	}
`;

const navItems = [
	{ path: '/', en: 'Home', ru: 'Главная', es: 'Principal' },
	{ path: '/cv', en: 'Curriculum', ru: 'Резюме', es: 'Curriculum' },
	{ path: '/portfolio', en: 'Portfolio', ru: 'Портфолио', es: 'Portafolio' },
	{ path: '/contacts', en: 'Contacts', ru: 'Контакты', es: 'Contactos' },
];

const Navbar = ({ contentOffsetLeft, loaded, location, showMobileNavbar, mobileToggle }) => {
	const [ hoverScale, setHoverScale ] = useState(true);
	const [ activeLink, setActiveLink ] = useState(location.pathname);
	const lang = useContext(LanguageContext);

	const toggleScale = useCallback(() => setHoverScale(!hoverScale), [ hoverScale ]);

	return (
		<Ul show={ showMobileNavbar }>
			{
				navItems.map((item, index) => {
					return <Li key={ index } index={ index + 1 } show={ showMobileNavbar }>
						<Link activeLink={ activeLink }
							  setActiveLink={ setActiveLink }
							  loaded={ loaded } label={ item[lang] }
							  to={ item.path }
							  hoverScale={ hoverScale }
							  toggleScale={ toggleScale }
							  contentOffsetLeft={ contentOffsetLeft }
							  mobileToggle={ mobileToggle }/></Li>;
				})
			}
		</Ul>
	);
};

export default withRouter(Navbar);