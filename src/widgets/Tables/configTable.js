import { palette } from '../../configurations/styles/theme';
const letterColor = palette.primary.main;
export const localization = {
    toolbar: {
        addRemoveColumns: 'Agregue o elimine columnas',
        nRowsSelected: ' Filas Seleccionadas',
        searchTooltip: 'Buscar',
        searchPlaceholder: 'Buscar ...'
    },
    header: {
        actions: ''
    },
    body: {
        emptyDataSourceMessage: 'No existen datos',
        addTooltip: 'Agregar ',
        deleteTooltip: 'Borrar ',
        editTooltip: 'Editar',
        editRow: {
            deleteText: '¿Esta Seguro que deseea eliminarlo?',
            cancelTooltip: 'Cancelar',
            saveTooltip: 'Aceptar'
        }
    }
}

export const selections = {
    toolbar: {
        addRemoveColumns: 'Agregue o elimine columnas',
        nRowsSelected: ' Filas Seleccionadas',
        searchTooltip: 'Buscar',
        searchPlaceholder: 'Buscar ...'
    },
    header: {
        actions: ''
    },
    body: {
        emptyDataSourceMessage: 'No existen datos',
        addTooltip: 'Agregar ',
        deleteTooltip: 'Borrar ',
        editTooltip: 'Editar',
        editRow: {
            deleteText: '¿Esta Seguro que deseea eliminarlo?',
            cancelTooltip: 'Cancelar',
            saveTooltip: 'Aceptar'
        }
    }
}
export function optionsDefaul(numFilas = 15, search = false, sorting = false, selection = false) {
    return ({
        search: search,
        sorting: sorting,
        selection: selection,
        pageSize: numFilas,
        headerStyle: {
            backgroundColor: letterColor,
            color: '#FFFFFF',
            borderStyle: 'solid',
            borderColor: palette.primary.light,
            borderWidth: "0px 0px 0px 0px",
            alignItems: 'center',
            textAlign: 'center',
            padding: '0px',
        },
        rowStyle: {
            borderStyle: 'solid',
            borderColor: letterColor,
            borderWidth: '1px 0px ',
            alignContent: 'center',
            textAlign: 'center'
        }
    });
};

export function optionsSelection(numFilas = 15, search = false, sorting = false, selection) {
    return ({
        search: search,
        sorting: sorting,
        selection: selection,
        pageSize: numFilas,
        headerStyle: {
            backgroundColor: letterColor,
            color: '#FFFFFF',
            borderStyle: 'solid',
            borderColor: palette.primary.light,
            borderWidth: "0px 0px 0px 0px",
            alignItems: 'center',
            textAlign: 'center',
            padding: '0px',
        },
        rowStyle: {
            borderStyle: 'solid',
            borderColor: letterColor,
            borderWidth: '1px 0px ',
            alignContent: 'center',
            textAlign: 'center'
        }
    });
};
const ConfigTable = {
    localization: localization,
    optionsDefaul: optionsDefaul,
    optionsSelection: optionsSelection,

}

export default ConfigTable;