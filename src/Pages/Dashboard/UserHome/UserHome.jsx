import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
			<h2 className="text-[32px] text-[#151515] font-cinzel font-semibold">Hi, Welcome Back! {user?.displayName}</h2>
		</div>
    );
};

export default UserHome;