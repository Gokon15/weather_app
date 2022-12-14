import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'

const Refresh = ({ setRefresh, refresh }) => {

    const handleRefresh = () => {
        setRefresh(!refresh)
    }

    return (
        <div className='mr-16 mb-6'>
            <Button variant='contained' onClick={handleRefresh} startIcon={<RefreshIcon />}>Update</Button>
        </div>
    )
}

Refresh.propTypes = {
    setRefresh: PropTypes.func.isRequired,
    refresh: PropTypes.bool.isRequired,
}

export default Refresh
