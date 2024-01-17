import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav>
				<div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li>
							<Link
								to='/'
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
                        <li>
							<Link
								to='/test'
								onClick={closeMobileMenu}
							>
								Test
							</Link>
						</li>
					</ul>
					{button}
				</div>
			</nav>
		</>
	);
}

export default Navbar;