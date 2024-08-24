/** @format */

import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<nav className='w-full mx-auto py-4 bg-gray-700'>
			<ul className='flex space-x-10 items-center justify-center list-none'>
				<li className='hover:text-[#149eca] '>
					<NavLink
						className='transition-all duration-200'
						to='/'>
						Home
					</NavLink>
				</li>
				<li className='hover:text-[#149eca]'>
					<NavLink
						className='transition-all duration-200'
						to='/contact'>
						Contact
					</NavLink>
				</li>
				<li className='hover:text-[#149eca] '>
					<NavLink
						className='transition-all duration-200'
						to='/about'>
						About Us
					</NavLink>
				</li>
				<li className='hover:text-[#149eca] '>
					<NavLink
						className='transition-all duration-200'
						to='/learn'>
						Learn
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
