import {
  GET_PROD_LOAGING,
  GET_PROD_SUCCESS,
  SET_LOAGING_TRUE,
  SET_LOAGING_FALSE,
} from "./actionType";


export const  getProdLoading = () => {
    return {type:  GET_PROD_LOAGING};
}

export const  setLoadingTrue = () => {
    return {type:  SET_LOAGING_TRUE};
}

export const  setLoadingFalse = () => {
    return {type:  SET_LOAGING_FALSE};
}


export const getProdSuccess = (payload) => {
    return {type:  GET_PROD_SUCCESS, payload};
}



export const getproductdata = () => (dispatch) => {
    dispatch(getProdLoading());
    fetch("https://api.earthsfresh.in/api/categories/getCategorylist")
    .then((api) => api.json())
    .then((data) => {
        console.log(data)
        dispatch(getProdSuccess(data));
    })
    .finally(() => {
        dispatch(setLoadingFalse())
    });
};