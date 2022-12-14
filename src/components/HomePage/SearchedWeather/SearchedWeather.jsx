import React from 'react'
import { connect } from 'react-redux'
import PropTypes, { string } from 'prop-types'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import Add from './Add/Add'


const SearchedWeather = ({ currentCity }) => {
    return (
        <div>
            {currentCity ?
                (<div className='flex justify-center mt-5 mb-5'>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardMedia
                                component='img'
                                alt='city'
                                height='140'
                                image='https://lh6.googleusercontent.com/4FNvPCtwGSKRJwT-Dz8x8ZGTXEmo1WjmKUh7oIbmqyOcjDcGP-zNPWI2Y8LAQdNEGtJ6l1zUCeMXI4ax2ZB0qu-PCVVFzgFrFvImBxmdVR1-wmMnN-NG7MCcp8Euj_BVDOhJFLQM'
                            />
                            <div className=' flex justify-center '>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {currentCity.name}, {currentCity.sys.country}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' className='flex flex-col '>
                                        <h3 className=' flex justify-center text-xl '>
                                            <ThermostatIcon /> ~ {`${Math.round(currentCity.main.temp)}\u00B0C`}
                                        </h3>
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions className='flex justify-center'>
                                <Add />
                            </CardActions>
                        </Card>
                    </div>
                ) : false}
        </div>
    )
}

SearchedWeather.propTypes = {
    currentCity: PropTypes.oneOfType([string, PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        temp: PropTypes.string,
    }),]).isRequired,

}

const mapStateToProps = (state) => {
    return {
        currentCity: state.currentCity,
    }
}

export default connect(mapStateToProps)(SearchedWeather)
