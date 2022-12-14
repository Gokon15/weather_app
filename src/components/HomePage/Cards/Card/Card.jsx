import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import OpacityIcon from '@mui/icons-material/Opacity'
import PropTypes from 'prop-types'
import Buttons from '../../../Buttons/Buttons'

const CardCity = ({ city, storage }) => {
    const API_KEY = 'fa409d51d2fbf7b2eb2a6f676d5ee223'

    const [info, setInfo] = useState('')
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
            .then(res => setInfo(res.data))
    }, [storage, refresh, city])

    return (
        <div>
            {info ?
                (<>
                    <Card sx={{ maxWidth: 345 }}>
                        <Link className='card__link' to={{ pathname: '/info', state: info }}>
                            <CardMedia
                                component='img'
                                alt='city'
                                height='140'
                                image='https://lh6.googleusercontent.com/4FNvPCtwGSKRJwT-Dz8x8ZGTXEmo1WjmKUh7oIbmqyOcjDcGP-zNPWI2Y8LAQdNEGtJ6l1zUCeMXI4ax2ZB0qu-PCVVFzgFrFvImBxmdVR1-wmMnN-NG7MCcp8Euj_BVDOhJFLQM'
                            />
                        </Link>
                        <div className=' flex justify-center '>
                            <CardContent>
                                <Link to={{ pathname: '/info', state: info }}>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        <div className='text-red-400'> {info.name}, {info.sys.country}</div>
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' className='flex flex-col '>
                                        <p className='text-xl '>
                                            <ThermostatIcon /> ~ {`${Math.round(info.main.temp)}\u00B0C`}
                                        </p>
                                        <h3 className='text-xl  '>
                                            <h3 className=' text-xl mb-2'>
                                                <OpacityIcon /> {Math.round(info.main.humidity) + '%'}</h3>
                                        </h3>
                                    </Typography>
                                </Link>
                            </CardContent>
                        </div>
                        <CardActions>
                            <Buttons info={info} setRefresh={setRefresh} refresh={refresh} />
                        </CardActions>
                    </Card>
                </>) : null}
        </div>
    )
}

CardCity.propTypes = {
    city: PropTypes.string.isRequired,
    storage: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => {
    return {
        storage: state.storage,
    }
}

export default connect(mapStateToProps)(CardCity)
