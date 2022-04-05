import { palette } from './theme';

const styleNotifications = {
    successNotification: {
        borderColor: palette.success.contrastText,
        backgroundColor: palette.success.base,
        color: palette.success.main,
        '&:hover': {
            backgroundColor: '#FFFFFF',   
            color: palette.success.main,
        },
    },
    error: {
        width: "225px",
        color: palette.error.main, 
        borderColor: palette.error.main,
        backgroundColor: palette.error.base,
        '&:hover': {
            backgroundColor: '#FFFFFF',  
            color: palette.error.main,
        },
    },
    warning: {
        color: palette.warning.main,
        borderColor: palette.warning.main,
        backgroundColor: palette.warning.base,
        '&:hover': {
            backgroundColor: '#FFFFFF', 
            color: palette.warning.main,
        },
    },
    info: {
        color: palette.info.main,
        borderColor: palette.info.main,
        backgroundColor: palette.info.base,
        '&:hover': {
            backgroundColor: '#FFFFFF', 
            color: palette.info.main,
        },
    },
    msgNotigications: {
        display: "flex",
        flex: 3
    }
}

export default styleNotifications;