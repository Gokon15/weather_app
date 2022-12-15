import React from 'react'
import moment from 'moment'
import { useLocation, Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AirIcon from '@mui/icons-material/Air'
import OpacityIcon from '@mui/icons-material/Opacity'
import CompressIcon from '@mui/icons-material/Compress'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'

const Info = () => {
    const location = useLocation()

    const handleTime = (time) => {
        return moment.unix(time).format('HH:mm')
    }

    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
                <Card sx={{ maxWidth: 450 }}>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://lh6.googleusercontent.com/4FNvPCtwGSKRJwT-Dz8x8ZGTXEmo1WjmKUh7oIbmqyOcjDcGP-zNPWI2Y8LAQdNEGtJ6l1zUCeMXI4ax2ZB0qu-PCVVFzgFrFvImBxmdVR1-wmMnN-NG7MCcp8Euj_BVDOhJFLQM'
                        alt='city'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            <p className='flex justify-center text-2xl'>{location.state.name}, {location.state.sys.country}</p>
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            <p className='flex justify-center text-xl mb-2'>
                                <ThermostatIcon />{`${Math.round(location.state.main.temp)}\u00B0C`}</p>
                            <p className='flex justify-center text-xl mb-2'>
                                <CompressIcon /> {`${Math.round(location.state.main.pressure)}mm`}  </p>
                            <p className='flex justify-center text-xl mb-2'>
                                <OpacityIcon /> {`${Math.round(location.state.main.humidity)}%`}</p>
                            <p className='flex justify-center text-xl mb-2'>
                                <AirIcon /> {`${Math.round(location.state.wind.speed)}m/s`}</p>
                            <p className='flex justify-center text-xl'>
                                <WbTwilightIcon /> {handleTime(location.state.sys.sunset)}</p>
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-center mb-2'>
                        <Link to='/'>
                            <Button variant='contained' startIcon={<ArrowBackIcon />}>Back</Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Info
