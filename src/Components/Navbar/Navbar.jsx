import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Link from './Link';
import { withRouter } from 'react-router-dom';

const Ul = styled.ul`
	position: fixed;
	top: 50%;
	left: 50px;
	
	transform: translateY(-50%);
`;

const Li = styled.li`
	margin-bottom: 15px;
`;

const navItems = [
	{ path: '/', en: 'Home', ru: 'Главная', es: 'Principal' },
	{ path: '/cv', en: 'Curriculum', ru: 'Резюме', es: 'Curriculum' },
	{ path: '/portfolio', en: 'Portfolio', ru: 'Портфолио', es: 'Portafolio' },
	{ path: '/contacts', en: 'Contacts', ru: 'Контакты', es: 'Contactos' },
];

const Navbar = ({ contentOffsetLeft, loaded, location }) => {
	const [ hoverScale, setHoverScale ] = useState(true);
	const [ activeLink, setActiveLink ] = useState(location.pathname);

	const toggleScale = useCallback(() => setHoverScale(!hoverScale), [ hoverScale ]);

	return (
		<Ul>
			{
				navItems.map((item, i) => {
					return <Li key={ i }><Link activeLink={ activeLink } setActiveLink={ setActiveLink }
											   loaded={ loaded } label={ item.en }
											   to={ item.path }
											   hoverScale={ hoverScale }
											   toggleScale={ toggleScale }
											   contentOffsetLeft={ contentOffsetLeft }/></Li>;
				})
			}
		</Ul>
	);
};

export default withRouter(Navbar);