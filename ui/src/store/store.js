import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { colorAPI } from "../service/colorService";
import { listsAPI } from "../service/ListsService";
import { tasksAPI } from "../service/TasksService";

const rootReducer = combineReducers({
  [listsAPI.reducerPath]: listsAPI.reducer,
  [tasksAPI.reducerPath]: tasksAPI.reducer,
  [colorAPI.reducerPath]: colorAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        listsAPI.middleware,
        tasksAPI.middleware,
        colorAPI.middleware
      ),
  });
};
