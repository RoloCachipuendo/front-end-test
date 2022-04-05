import {
  ADD_RESOURSE_LOADING,
  ADD_RESOURSE_SUCCESS,
  ADD_RESOURSE_ERROR,
  ADD_RESOURSE_DENIED,
  ADD_INFO_COMPANY,
  UPDATE_INFO_COMPANY_LOGO,
  ADD_ERROR_COMPANY,
  SELECTED_RESOURCE,
  REMOVE_RESOURCE,
  ISLOADING_INFO_COMPANY,
  ADD_CONFIG_RESOURCES,
} from "../types/resourcesType";
import uuid from "react-uuid";


export const addInfoCompanyAction = (info) => ({
  type: ADD_INFO_COMPANY,
  payload: info,
});

export const isLoadingInfoCompany = (isLoading) => ({
  type: ISLOADING_INFO_COMPANY,
  payload: isLoading,
});

export const addReourcesLoading = () => ({
  type: ADD_RESOURSE_LOADING,
});

export const addResourcesSuccess = (resources) => ({
  type: ADD_RESOURSE_SUCCESS,
  payload: resources,
});

export const addResourcesError = () => ({
  type: ADD_RESOURSE_ERROR,
});

export const selectedResourceAction = (resource) => ({
  type: SELECTED_RESOURCE,
  payload: resource,
});

export const addErrorCompanyAction = (errors) => ({
  type: ADD_ERROR_COMPANY,
  payload: errors,
});

export const removeResource = () => ({
  type: REMOVE_RESOURCE,
});

export const parseNotificationToArray = (data, typesNotification) => {
  let notifications = [];
  if (typeof data === "object") {
    let keys = Object.keys(data);
    Object.values(data).forEach((item, index) => {
      notifications.push({
        key: uuid(),
        type: typesNotification,
        msg: item,
        keyword: keys[index],
      });
    });
    return notifications;
  }
  return null;
};

export const updateCompanyLogoAction = (urlLogo) => ({
  type: UPDATE_INFO_COMPANY_LOGO,
  payload: urlLogo,
});

export const addResourceDeniedAction = (resource) => ({
  type: ADD_RESOURSE_DENIED,
  payload: resource,
});

export const addConfigResourcesAction = (configResources) => ({
  type: ADD_CONFIG_RESOURCES,
  payload: configResources
})
