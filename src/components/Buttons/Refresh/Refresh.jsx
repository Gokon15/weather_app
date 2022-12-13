import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import {Button} from "@mui/material";

const Refresh = ({ setRefresh, refresh }) => {

	//Refresh button method
	const handleRefresh = () => {
		setRefresh(!refresh)
	}

	return (
		<div className='mr-16 mb-6'>
			<Button  variant="contained" onClick={handleRefresh} startIcon={<RefreshIcon/>}>Update</Button>
		</div>
	);
};

export default Refresh;
