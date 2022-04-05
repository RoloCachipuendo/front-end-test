import { palette } from './theme';

const stylesButtons = {
    cancelButton: {
        background: palette.error.main,
        borderRadius: 3,
        color: 'white',
        textTransform: 'capitalize',
        width: "40%",
        '&:hover': {
            backgroundColor:  palette.error.light,
            color: 'white',
            borderColor: palette.error.main,
            borderWidth: '1px',
            borderStyle: 'solid'
        },
    }
};

export default stylesButtons;