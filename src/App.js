import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Homepage from "./component/page/Homepage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GiftCardOrderPage from "./component/GiftCardOrderPage";
import AboutUs from "./component/AboutUs";
import TrackOrder from "./component/policy/TrackOrder";
import ReturnOrder from "./component/policy/ReturnOrder";
import RefundPolicy from "./component/policy/RefundPolicy";
import ShipingPolicy from "./component/policy/ShipingPolicy";
import PrivacyPolicy from "./component/policy/PrivacyPolicy";
import TermsService from "./component/policy/TermsService";
import ScrollToTop from "./component/scrolltop";
import ContactUs from "./component/ContactUs";
import CartAdd from "./component/CartAdd";
import ClothingAll from "./component/ClothingAll";
import ProductsPurchase from "./component/ProductsPurchase";
import SizeChart from "./component/SizeChart";
import CollectionRange from "./component/CollectionRange";
import Login from "./Account/Login";
import CreateUser from "./Account/CreateUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clothingdata } from "./redux/actions/clothingAction";
import Blog from "./component/Blog";
import AddressShow from "./Account/AddressShow";
import AddressEdit from "./Account/AddressEdit";
import { loginUser, mountData } from "./redux/actions/createAction";
import Error404 from "./component/Error404";
import { imagedataActionon } from "./redux/actions/imagedataAction";
import Top from "./component/Top";
import Blazer from "./component/Blazer";
import Shirt from "./component/Shirt";
import Coat from "./component/Coat";
import { testiAction } from "./redux/actions/testiAction";
import { wishlistdata } from "./redux/actions/wishlistAction";
import { videoAction } from "./redux/actions/videoAction";
import CheckOut from "./Account/CheckOut";
import Pant from "./component/Pant";
import { AddCartAction } from "./redux/actions/addCartAction";
import { getAddress } from "./redux/actions/adressAction";
import YourOrder from "./Account/YourOrder";
import Skrit from "./component/Skrit";
import { categoryall } from "./redux/actions/allcategoryAction";
import Wishlist from "./component/Wishlist";
import Accessories from "./component/Accessories";
import SubCollection from "./component/SubCollection";
import Dress from "./component/Dress";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryall())
    dispatch(clothingdata());
    dispatch(testiAction());
    dispatch(videoAction());
    
  }, []);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(mountData());
    }
  }, [state.user.users.user_email]);

  useEffect(() => {

    if(localStorage.getItem("user_id")){
      dispatch(getAddress())
      dispatch(wishlistdata())
      dispatch(AddCartAction())
    }
  }, [])
  




  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          {localStorage.getItem("token")?
            <>
              <Route path="/account" element={<Navigate to={'/adress'} />} />
              <Route path="/adress" element={<AddressShow />} />
            <Route path="/adressedit" element={<AddressEdit />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/wishlist" element={<Wishlist />} />
            
            </>:
             <>
            <Route path="/account" element={<Navigate to={'/login'} />} />
              <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/cartadd" element={<Navigate to={'/account'} />} />
            </>
          }
         
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/giftcardorderpage" element={<GiftCardOrderPage />} />
            <Route path="/trackorder" element={<TrackOrder />} />
            <Route path="/returnorder" element={<ReturnOrder />} />
            <Route path="/ShipingPolicy" element={<ShipingPolicy />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termservice" element={<TermsService />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cartadd" element={<CartAdd />} />
            <Route path="/clothingall" element={<ClothingAll />} />
            <Route path="/productpurchase" element={<ProductsPurchase />}>
          <Route path=":extraParam">
            <Route path=":id">
              <Route path=":colorId" element={<ProductsPurchase />} />
            </Route>
          </Route>
        </Route>
            <Route path="/sizechartpage" element={<SizeChart />} />
            <Route path="/collectionrange" element={<CollectionRange />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/clothing" element={<Top />} >
              <Route path=":id"/>
            </Route>
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/blazer" element={<Blazer />} />
            <Route path="/coat" element={<Coat />} />
            <Route path="/pant" element={<Pant />} />
            <Route path="/skrit" element={<Skrit />} />
            <Route path="/dress" element={<Dress />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/yourorder" element={<YourOrder />} />
            <Route path="/subcollection" element={<SubCollection />} >
          <Route path=":id" >
                <Route path=":category"/>
          </Route>
 </Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </BrowserRouter>
     
      </div>
    </>
  );
}

export default App;
