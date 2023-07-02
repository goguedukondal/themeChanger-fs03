import {configureStore} from '@reduxjs/toolkit'
import themeReducer from  './Slice'

export default configureStore({
 reducer:{
    theme:themeReducer
 }
});