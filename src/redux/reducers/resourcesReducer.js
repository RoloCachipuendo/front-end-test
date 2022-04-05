import {
  ADD_RESOURSE_LOADING,
  ADD_RESOURSE_SUCCESS,
  ADD_RESOURSE_ERROR,
  ADD_RESOURSE_DENIED,
  ADD_INFO_COMPANY,
  ADD_ERROR_COMPANY,
  SELECTED_RESOURCE,
  ISLOADING_INFO_COMPANY,
  REMOVE_RESOURCE,
  UPDATE_INFO_COMPANY_LOGO,
  ADD_CONFIG_RESOURCES,
  DELETE_CONFIG_RESOURCES
} from "../types/resourcesType";

const initialState = {
  resources: [],
  configResources: [],
  error: null,
  loading: false,
  loadingInfoCompany: true,
  selectedResource: null,
  infoCompany: null,
  errorsCompany: null,
  resourceDenied: { id: "INI", titlePage: "Inicio" },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RESOURSE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_RESOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
      };
    case ADD_RESOURSE_ERROR:
      return {
        ...state,
        resources: [],
        loading: false,
        error: true,
      };
    case ADD_RESOURSE_DENIED:
      return {
        ...state,
        resourceDenied: action.payload,
      };
    case SELECTED_RESOURCE:
      return {
        ...state,
        selectedResource: action.payload,
      };
    case REMOVE_RESOURCE:
      return initialState;
    case ADD_INFO_COMPANY:
      return {
        ...state,
        ...action.payload,
      };
    case ISLOADING_INFO_COMPANY:
      return {
        ...state,
        loadingInfoCompany: action.payload,
      };
    case ADD_ERROR_COMPANY:
      return {
        ...state,
        errorsCompany: action.payload,
      };
    case UPDATE_INFO_COMPANY_LOGO:
      return {
        ...state,
        infoCompany: {
          ...state.infoCompany,
          logoEmpresa: action.payload,
        },
      };
    case ADD_CONFIG_RESOURCES:
      return {
        ...state,
        configResources: action.payload
      }
    case DELETE_CONFIG_RESOURCES:
      return {
        ...state,
        configResources: []
      }
    default:
      return state;
  }
}
