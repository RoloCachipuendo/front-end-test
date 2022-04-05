import React from 'react';
//material-io
import {  TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//componentes del sistema
import TablePaginationActions from './Pagination';
const useStyles = makeStyles(theme => ({
    paginacion: {
        color: 'black',
        fontSize: '12px',
    },
    botonesFooter: {
        margin: '1%'
    },
}));
//componentes propios

const FotterTable = ({ totalElements, rowsPerPage, pageNumber, totalPages, handleChangePage, handleChangeRowsPerPage, BotonesFooter }) => {
    const classes = useStyles();
    return (
        <div>
            <div align='center' aria-label="paginacion">
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    colSpan={10}
                    count={totalElements}
                    rowsPerPage={rowsPerPage}
                    page={pageNumber}
                    totalPages={totalPages}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    labelRowsPerPage="Filas por página: "
                    className={classes.paginacion}
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                />
            </div>
            <div align='center' className={classes.botonesFooter}>
                {BotonesFooter}
            </div>
        </div>
    );
}

export default FotterTable;