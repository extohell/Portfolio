import React from 'react';
import { PositionWrapper } from '../../App';
import AppearanceWrapper from '../Common/AppearanceWrapper';
import { devices } from '../../mediaSizes';

import styled from 'styled-components';
import vk_light from '../../assets/image/contacts/vk-light.svg';
import vk_dark from '../../assets/image/contacts/vk-dark.svg';
import github_light from '../../assets/image/contacts/github-light.svg';
import github_dark from '../../assets/image/contacts/github-dark.svg';
import mail_light from '../../assets/image/contacts/mail-light.svg';
import mail_dark from '../../assets/image/contacts/mail-dark.svg';
import phone_light from '../../assets/image/contacts/phone-light.svg';
import phone_dark from '../../assets/image/contacts/phone-dark.svg';
import telegram_light from '../../assets/image/contacts/telegram-light.svg';
import telegram_dark from '../../assets/image/contacts/telegram-dark.svg';
import whats_light from '../../assets/image/contacts/whats-light.svg';
import wahts_dark from '../../assets/image/contacts/whats-dark.svg';

const vkLight = new Image();
vkLight.src = vk_light;
const vkDark = new Image();
vkDark.src = vk_dark;
const mailLight = new Image();
mailLight.src = mail_light;
const mailDark = new Image();
mailDark.src = mail_dark;
const phoneLight = new Image();
phoneLight.src = phone_light;
const phoneDark = new Image();
phoneDark.src = phone_dark;
const telegramLight = new Image();
telegramLight.src = telegram_light;
const telegramDark = new Image();
telegramDark.src = telegram_dark;
const githubLight = new Image();
githubLight.src = github_light;
const githubDark = new Image();
githubDark.src = github_dark;
const whatsLight = new Image();
whatsLight.src = whats_light;
const whatsDark = new Image();
whatsDark.src = wahts_dark;

const contactsData = [
	{ img: vkLight.src, imgHover: vkDark.src, href: 'https://vk.com/extohell' },
	{ img: mailLight.src, imgHover: mailDark.src, href: 'mailto:extohell@gmail.com' },
	{ img: githubLight.src, imgHover: githubDark.src, href: 'https://github.com/extohell' },
	{ img: phoneLight.src, imgHover: phoneDark.src, href: 'tel: +79631563757' },
	{ img: telegramLight.src, imgHover: telegramDark.src, href: 'https://teleg.run/extohell' },
	{ img: whatsLight.src, imgHover: whatsDark.src, href: 'https://wa.me/+79631563757' }
];

const A = styled.a`
	position: relative;
	display: inline-block;
	width: 70px;
	height: 70px;
	margin-right: 20px;
	z-index: 1;
	
	background-image: url(${ props => props.img });
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: contain;
	
	transition: background-image 0.2s, transform 0.2s;
	
	@media ${ devices.laptopM } {
		width: 50px;
		height: 50px;
	}
	
	@media ${ devices.laptopS } {
		width: 70px;
		height: 70px;
	}
	
	&:hover {
		background-image: url(${ props => props.imgHover });
		transform: scale(1.1) !important;
	}
	
	&.item1,
	&.item3 {
		&::before {
			content: '';
			position: absolute;
			padding: 5px 10px;
			top: 0;
			left: 0;
			bottom: -70%;
			display: flex;
			align-items: flex-end;
			
			text-align: center;
			color: #000000;
			white-space: nowrap;
			font-weight: 600;
			letter-spacing: -0.5em;
			
			transition: letter-spacing 0.5s;
			
			@media ${ devices.laptopM } {
				font-size: 14px;
			}
			@media ${ devices.laptopS } {
				display: none;
			}
		}
	}
	
	&.item3:hover::before {
		content: '+7(963) 156-37-57';
		letter-spacing: normal;
	}
	&.item1:hover::before {
		content: 'extohell@gmail.com';
		letter-spacing: normal;
	}
`;

const Contacts = () => {

	return (
		<PositionWrapper>
			{
				contactsData.map((item, index) => {
					return (
						<AppearanceWrapper key={ index } index={ index } transition={ 0.5 } width={ 'auto' }>
							<A target='_blank' className={ 'item' + index }  href={ item.href } img={ item.img }
							   imgHover={ item.imgHover } index={ index }/>
						</AppearanceWrapper>
					);
				})
			}
		</PositionWrapper>
	);
};

export default Contacts;