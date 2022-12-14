import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, TextField } from '@mui/material'
import { setData } from '../../../actions/actions'


const Input = ({ setData }) => {

    const [city, setCity] = useState('')

    const API_KEY = 'fa409d51d2fbf7b2eb2a6f676d5ee223'

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
            .then(res => setData(res.data))
    }

    return (
        <div className=' flex justify-center mt-10 mb-5'>
            <form className='' onSubmit={handleSubmit}>
                <TextField className='mr-5 w-96 bg-white' id='outlined-basic' onChange={(e) => setCity(e.target.value)}
                           placeholder='Search city...' type='text' label='Search city...' variant='outlined' />
                <Button className='mt-1.5 ' disabled={city === ''} type='submit' variant='contained'>Search</Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setData(data))
        },
    }
}

export default connect(null, mapDispatchToProps)(Input)
