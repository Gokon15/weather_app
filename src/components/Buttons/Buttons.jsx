import React from 'react'
import PropTypes from 'prop-types'
import Refresh from './Refresh/Refresh'
import Delete from './Delete/Delete'


const Buttons = ({ info, setRefresh, refresh }) => {
    return (
        <div className='flex ml-6'>
            <Refresh setRefresh={setRefresh} refresh={refresh} />
            <Delete info={info} />
        </div>
    )
}

Buttons.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    setRefresh: PropTypes.func.isRequired,
    refresh: PropTypes.bool.isRequired,
}
export default Buttons
