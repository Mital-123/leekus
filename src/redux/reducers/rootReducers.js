import { combineReducers } from "redux";
import { createReducer } from "./createReducer";
import { clothingReducer } from "./clothingReducer";
import { imageReducer } from "./imageReducer";
import { linkREducer } from "./linkReducer";
import { subsliderReducer } from "./subsliderReducer";
import { testimonialReducer } from "./testimoniacReducer";
import { wishlistReducer } from "./wishlistReducer";
import { videoReducer } from "./videoReducer";
import { addtocartReducer } from "./addcartReducer";
import { homeSliderReducer } from "./homeSliderReducer";
import { addressReducer } from "./addressReducer";
import { orderDetailReducer } from "./orderDetailReducer";
import { allcategoryreducer } from "./allcategoryReducer";



export const rootReducer=(combineReducers({

    user:createReducer,
    loginuser:createReducer,
    clothing:clothingReducer,
    imagedata:imageReducer,
    linkdata:linkREducer,
    subslider:subsliderReducer,
    testimonial:testimonialReducer,
    wish:wishlistReducer,
    video:videoReducer,
    addcart:addtocartReducer,
    homeslider:homeSliderReducer,
    useradress:addressReducer,
    orderdetail:orderDetailReducer,
    allcategory:allcategoryreducer,
    
}))