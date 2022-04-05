import { palette } from './theme';

const stylesTable = {
    cellTable: {
        borderStyle: '0px 0px 0px 3px',
        borderColor: palette.primary.borderCell,
        borderWidth: '1px 1px 0px 1px',
        textAlign: 'center',
        '&:hover': {
            color: '#FFFFFF',
        },
        padding: "0",
        fontSize: "small",
    },
    cellLeft : {
        borderStyle: '0px 0px 0px 3px',
        borderColor: palette.primary.borderCell,
        borderWidth: '1px 1px 0px 1px',
        textAlign: 'left',
        '&:hover': {
            color: '#FFFFFF',
        },
        padding: "0px",
        paddingLeft: "1%",
        fontSize: "small",
    },
    cellRight: {
        borderStyle: '0px 0px 0px 3px',
        borderColor: palette.primary.borderCell,
        borderWidth: '1px 1px 0px 1px',
        textAlign: 'right',
        '&:hover': {
            color: '#FFFFFF',
        },
        padding: "0px",
        paddingRight:"5px",
        fontSize: "small",
    },
    cellCenterSmall: {
        borderStyle: '0px 0px 0px 3px',
        borderColor: palette.primary.borderCell,
        borderWidth: '1px 1px 0px 1px',
        textAlign: 'center',
        '&:hover': {
            color: '#FFFFFF',
        },
        padding: "0",
        fontSize: "small"
    },
    cellLeftSmall: {
        borderStyle: '0px 0px 0px 3px',
        borderColor: palette.primary.borderCell,
        borderWidth: '1px 1px 0px 1px',
        textAlign: 'left',
        '&:hover': {
            color: '#FFFFFF',
        },
        padding: "0px",
        paddingLeft: "1%",
        fontSize: "small"
    }
};

export default stylesTable;