import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setStorage, removeCity } from '../../../actions/actions';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = ({ info, setStorage, removeCity, id }) => {

  //Handling delete button
  const handleDelete = () => {
    removeCity(info.name)
  }
  //Delete method
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(id))
    setStorage(JSON.parse(localStorage.getItem('fav')))
  }, [id, setStorage])

  return (
    <div>
      <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStorage: (data) => { dispatch(setStorage(data)) },
    removeCity: (data) => { dispatch(removeCity(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
