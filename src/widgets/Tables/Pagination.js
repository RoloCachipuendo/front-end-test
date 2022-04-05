import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton } from '@material-ui/core';
//iconos
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import {palette} from '../../configurations/styles/theme';

const useStyles = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
    iconPage: {
        padding: '0px'
    }
}));

const TablePaginationActions = (props) => {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage } = props;


    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="primera página" className={classes.iconPage}>
                {page === 0 ?
                    <FirstPageIcon />
                    :
                    <FirstPageIcon style={{ color: palette.primary.main }} />
                }
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="página previa"
                className={classes.iconPage}>
                {page === 0 ?
                    <KeyboardArrowLeft />
                    :
                    <KeyboardArrowLeft style={{ color: palette.primary.main  }} />
                }
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="siguiente página" className={classes.iconPage}
            >
                {page >= Math.ceil(count / rowsPerPage) - 1 ?
                    <KeyboardArrowRight />
                    :
                    <KeyboardArrowRight style={{ color: palette.primary.main  }} />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="última página" className={classes.iconPage}
            >
                {page >= Math.ceil(count / rowsPerPage) - 1 ?
                    <LastPageIcon />
                    :
                    <LastPageIcon style={{ color: palette.primary.main  }} />
                }
            </IconButton>
        </div>
    );
}

export default TablePaginationActions;