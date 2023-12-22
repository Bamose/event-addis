  import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
  // Or from '@reduxjs/toolkit/query/react'
  import { setupListeners } from "@reduxjs/toolkit/query";
  import { Eventapi } from "./api";
  import { createWrapper,Context } from "next-redux-wrapper";
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
  /* import locationReducer from "./locationSlice";
  /* import authReducer from "../../lib/api/authslice" */
  /* import selectedlocationReducer from "./selectedlocation"; */
  import whichgabReducer from "./gab";
  export const Store =()=> configureStore({
    reducer: {
      [Eventapi.reducerPath]: Eventapi.reducer,
    /*  location: locationReducer,
      selectedlocation: selectedlocationReducer, */
      whichgab: whichgabReducer,
    
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(Eventapi.middleware),
  });

  /* setupListeners(Store.dispatch); */
 /*  export type AppDispatch = typeof Store.dispatch;
  export type RootState = ReturnType<typeof Store.getState>;
  export type AppStore = typeof Store;
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  export const wrapper = createWrapper<AppStore>((context: Context) => Store, {
    debug: true,
  }); */
export type AppStore = ReturnType<typeof Store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const wrapper = createWrapper<AppStore>(Store, { debug: true });