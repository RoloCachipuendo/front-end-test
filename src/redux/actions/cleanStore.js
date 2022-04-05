import { clearAll } from "../localStorage";

//clean Actions
import { signoutUser } from "./userActions"

const cleanStore = (dispatch) => {
    dispatch(signoutUser());
    clearAll();
}

export default cleanStore;