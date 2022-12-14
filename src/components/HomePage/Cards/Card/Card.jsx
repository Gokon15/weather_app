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

import Buttons from '../../../Buttons/Buttons'

const CardCity = ({ city, storage }) => {
    const API_KEY = '6c2847c395792f9cf85a804db24ced16'

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
                                        <p className='text-xl  '>
                                            <p className=' text-xl mb-2'>
                                                <OpacityIcon /> {Math.round(info.main.humidity) + '%'}</p>
                                        </p>
                                        <Link to={{ pathname: '/info', state: info }} />
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

const mapStateToProps = (state) => {
    return {
        storage: state.storage,
    }
}

export default connect(mapStateToProps)(CardCity)
