/** @format */

import {Outlet} from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import Nav from "../../components/Nav";

const LearnLayout = () => {
	return (
		<>
			<div className='flex '>
				<LearnAside />
				<div className='w-full '>
					<Nav />
					<div className='p-5 text-3xl font-semibold'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default LearnLayout;
