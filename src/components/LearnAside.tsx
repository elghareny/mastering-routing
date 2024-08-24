/** @format */

import {NavLink} from "react-router-dom";

const LearnAside = () => {
	return (
		<aside className='h-screen w-[300px] bg-gray-700 py-10 '>
			<nav className=' w-full my-auto'>
				<ul className='flex flex-col space-y-4 items-center justify-between list-none'>
					<li className='hover:text-[#149eca] '>
						<NavLink
							className='transition-all duration-200 '
							to='/learn'
							end>
							Quick Start
						</NavLink>
					</li>
					<li className='hover:text-[#149eca]'>
						<NavLink
							className='transition-all duration-200'
							to='/learn/thinking-in-react'>
							Thinking In React
						</NavLink>
					</li>
					<li className='hover:text-[#149eca] '>
						<NavLink
							className='transition-all duration-200'
							to='/learn/installation'>
							Installation
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default LearnAside;
