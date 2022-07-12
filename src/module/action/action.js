// import axios from "axios";
import API from "../../Axios/API";
import * as ActionType from "../constants/constants";
import axios from "axios";

export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

const userUpdate = () => {
  return{
    type:ActionType.UPDATE_USER,
  };
};

export const callAPIGetListUser = () => {
  return async (dispatch) => {
    try {
      const res = await API(
        "GET",
        "http://www.tennisv2.somee.com/api/v1.0/Customers?page=1"
      );
      dispatch(
        createAction({
          type: ActionType.GET_LIST_USER,
          payload: res.data.data,
        })
      );
    } catch (error) {
      console.log({ ...error });
    }
  };
};

export const updateUser  = (user, email) => {
  return (dispatch) => {
    axios.put(`http://www.tennisv2.somee.com/api/v1.0/Customers/${email}`,user)
    .then((res) => { 
        dispatch(userUpdate());
      })
    .catch((err) => { console.log(err); })
  }
}


export const GetListCour = () => {
  return async (dispatch) => {
    try {
      const res = await API(
        "GET",
        "http://www.tennisv2.somee.com/api/v1.0/CourtOwners?page=1"
      );
      dispatch(
        createAction({
          type: ActionType.GET_LIST_CO,
          payload: res.data.data,
        })
      );
      console.log(res.data.data);
    } catch (error) {
      console.log({ ...error });
    }
    
  };
};
