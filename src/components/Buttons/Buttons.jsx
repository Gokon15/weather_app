import React from 'react';
import Refresh from './Refresh/Refresh';
import Delete from './Delete/Delete';


const Buttons = ({ info, setRefresh, refresh }) => (
		<div className='flex ml-6'>
			<Refresh setRefresh={setRefresh} refresh={refresh} />
			<Delete info={info} />
		</div>
	);

export default Buttons;
