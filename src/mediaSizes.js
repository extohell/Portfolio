const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptopS: '1024px',
	laptopM: '1366px',
	laptopL: '1600px',
	desktopL: '3840px'
};

export const devices = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptopS: `(max-width: ${size.laptopS})`,
	laptopM: `(max-width: ${size.laptopM})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktopL: `(min-width: ${size.desktopL})`
};