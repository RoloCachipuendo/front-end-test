import React, { Fragment } from 'react';
//material-table
import { MTableToolbar } from 'material-table';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buscador: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    botonesHeader: {
        marginTop: '0.5%',
        marginLeft: '0.5%'
    }
}));

const HeaderTable = ({ showInputSearch = false, ComponentsHeader, props }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.header} container spacing={0}>
            {showInputSearch ?
                <Fragment>
                    <Grid align='left' xs={12} className={classes.botonesHeader}>
                        {ComponentsHeader? ComponentsHeader() : null }
                    </Grid>
                    <Grid className={classes.buscador} align='right' xs={3}>
                        <MTableToolbar {...props} align='right' />
                    </Grid>
                </Fragment>
                :
                <Grid align='left' xs={12} className={classes.botonesHeader}>
                {ComponentsHeader? ComponentsHeader() : null }
                </Grid>
            }
        </Grid >
    );
}

export default HeaderTable;