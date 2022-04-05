import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.modal + 999,
        color: '#fff',
    },
}));

const Loader = () => {
    const processAsync = useSelector(state => state.processAsync);
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={processAsync} >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}

export default Loader;