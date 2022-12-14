import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import PropTypes from 'prop-types'
import { setStorage, removeCity } from '../../../actions/actions'


const Delete = ({ info, setStorage, removeCity, id }) => {

    const handleDelete = () => {
        removeCity(info.name)
    }

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(id))
        setStorage(JSON.parse(localStorage.getItem('fav')))
    }, [id, setStorage])

    return (
        <div>
            <Button variant='outlined' onClick={handleDelete} startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </div>
    )
}

Delete.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStorage: (data) => {
            dispatch(setStorage(data))
        },
        removeCity: (data) => {
            dispatch(removeCity(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete)
