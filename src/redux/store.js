import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import {
  setNotifications,
  getNotifications,
} from "./sessionstorage";

import { getTokenStorage, setTokenStorage, getMenuStorage, setMenuStore, getCompanyStorage, setCompanyStore } from "./localStorage";

const storeState = {
  ...getTokenStorage(),
  ...getMenuStorage(),
  ...getNotifications(),
  ...getCompanyStorage()
};

//TODO: quitar herramita de dev typeof window === 'object'...
const store = createStore(
  reducer,
  storeState,
  //compose(applyMiddleware(thunk))
  compose(
    applyMiddleware(thunk),
    /*typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f*/
  )
);

store.subscribe(() => {
  setTokenStorage(store.getState().user);
  setMenuStore(store.getState().resources);
  setNotifications(store.getState().notifications);
  setCompanyStore(store.getState().company);
});

export default store;
