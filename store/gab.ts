
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface gabState {

  whichgab: string | null;
  mainpage: string | null;
 
}

const initialState: gabState = {
  
 whichgab: 'newgab',
 mainpage: null

};

const whichgabSlice = createSlice({
  name: 'whichgab',
  initialState,
  reducers: {
   setwhichgabdata: (state, action: PayloadAction<{ whichgab:string }>) => {
      state.whichgab = action.payload.whichgab;

    
    },
    setmainpage:(state, action: PayloadAction<{mainpage:string}>) =>{
      state.mainpage = action.payload.mainpage;
    }
   
  },
});

export const { setwhichgabdata,setmainpage } = whichgabSlice.actions;
export default whichgabSlice.reducer;
