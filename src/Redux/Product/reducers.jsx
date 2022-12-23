import {
  GET_PROD_LOAGING,
  GET_PROD_SUCCESS,
  SET_LOAGING_TRUE,
  SET_LOAGING_FALSE,
} from "./actionType";

const init = {
  loading: false,
  error: false,
  product: [],
};

export const otherReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PROD_LOAGING:
      return { ...state, loading: true };

    case SET_LOAGING_TRUE:
      return { ...state, loading: true };

    case SET_LOAGING_FALSE:
      return { ...state, loading: false };

    case GET_PROD_SUCCESS:
      return { ...state, product: payload };

    default:
      return { ...state };
  }
};
