import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import poductReducer from "./product.reducers";
import categoryReducer from "./category.reducers";
import orderReducer from "./order.reducers";
import pageReducer from "./page.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  user: userReducer,
  product: poductReducer,

  order: orderReducer,
  page: pageReducer,
});

export default rootReducer;
