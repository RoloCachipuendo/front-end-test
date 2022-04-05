import { makeStyles } from '@material-ui/core/styles';

//estilos de la Aplicacion
import buttonStyles from 'configurations/styles/buttons';
import letterStyles from 'configurations/styles/letter';
import stylesTags from 'configurations/styles/tags';
import stylesTable from 'configurations/styles/table';
import notifications from 'configurations/styles/notifications';

export const useStylesApp = makeStyles({
    ...buttonStyles,
    ...letterStyles,
    ...stylesTags,
    ...stylesTable,
    ...notifications
});
