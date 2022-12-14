import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CardCity from './Card/Card'



const Cards = ({ storage }) => (
    <div className='flex flex-row flex-wrap pl-10 '>
        {storage[0] ?
            storage.map((city, index) =>
                <div className=' mr-4 mb-4 flex flex-wrap ' key={index.toString()}>
                    <CardCity city={city} />
                </div>) :
            <h2>No choosen cities yet</h2>}
    </div>
)

Cards.propTypes = {
    storage: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => {
    return {
        storage: state.storage,
    }
}

export default connect(mapStateToProps)(Cards)
