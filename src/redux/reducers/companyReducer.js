import TypesActions from "../types/companyTypes";

const initialState = {
  information: {
    nombreUsuario: null,
    nombreEmpresa: null,
    logoEmpresa: null,
  },
  loadInfo: false,
  rememberCompany: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TypesActions.ADD_INFO_COMPANY:
      return {
        ...state,
        information: action.payload,
        loadInfo: false,
      };
    case TypesActions.LOAD_INFO_COMPANY:
      return {
        ...state,
        loadInfo: true,
      };
    case TypesActions.REMEMBER_COMPANY:
      return {
        ...state,
        rememberCompany: true,
      };
    case TypesActions.CLEAR_INFO_COMPANY:
      return initialState;
    default:
      return state;
  }
}
