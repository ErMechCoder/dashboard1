import { BrowserRouter, Route, Routes} from "react-router-dom";
//import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CallToCreators from "./pages/CallToCreators";
import Collection from "./pages/Collection";
import ConnectWallet from "./pages/ConnectWallet";
import Contact from "./pages/Contact";
import CreateNft from "./pages/CreateNft"; 
import Creator from "./pages/Creator";
import CtcMid from "./pages/CtcMid";
import FindCreator from "./pages/FindCreator";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurNews from "./pages/OurNews";
import PrivacyPolicy from "./pages/PrivacyPolicy";
//import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Term from "./pages/Term";
import UpcomingEvents from "./pages/UpcomingEvents";
import ShopProductDetails from "./pages/ShopProductDetails.jsx";
import Shop from "./pages/Shop";
//import { useContext } from "react";
import OurTeam from "./pages/OurTeam";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CatProducts from "./pages/CatProducts";
import Event from "./pages/Event";
//import { glhContext } from "./context/Context";
import useLocalStorage from "use-local-storage";


function App() {
  // const {user,setUser,productId,setProductId,getBalance,currentAccount } = useContext(TransactionContext)
  //const [currentAccount, setCurrentAccount] = React.useState("");
 // const [productId, setProductId] = React.useState("");
 // useEffect (() => {
 //   if(window.localStorage.getItem("LOGIN" === user)){
    //  window.localStorage.setItem("LOGIN" === user);
 //   };
 // })
  //const {
   // userState: { user },
  //  cartState: { cart },
   // userDispatch,
 // } = useContext(glhContext);


  // Check user set theme mode...
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // Handle on click from the theme switcher...
  const clickHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };


  return (
    <div  data-theme={theme}>
      
 
          <div className="alert alert-warning text-center">
        <strong>Warning!</strong> You don't have Metamask installed. Please install <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-primary ">Metamask</a> to use this website.
        <button onClick={() => clickHandler()}>Dark Mode</button>
      </div>

        
    
      <BrowserRouter>
       {/*<Header user={user} currentAccount={currentAccount} /> */} 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            {/*<Route path="/" element={<Home setProductId={setProductId}  />} /> */}
          
          <Route path="/login"  element={<Login />}/>

          {/*   <Route path="/login"  element={user ? <Navigate to="/" /> : <Login />}/> */}
          {/* <Route path="/signup" element={<Signup setUser={setUser}/>}/> */}
          <Route path="/signup" element={<Signup />} />

            {/* <Route path="/signup" element={<Signup setUser={setUser}/>}/> */}
          <Route
            path="/creator"
            element={<Creator/>}
          />
           <Route path="/create-nft" element={<CreateNft />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/connect-to-wallet" element={<ConnectWallet />} />
         
          <Route path="/terms" element={<Term />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/find-creator" element={<FindCreator />} />
          <Route path="/our-news" element={<OurNews />} />
          <Route path="/our-collection" element={<Collection />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/blog-details" element={<BlogDetail />} />
          <Route
            path="/call-to-creators"
            element={ <CallToCreators /> }
          />
          <Route path="/call-to-creator" element={<CtcMid />} />
          <Route path="/shop" element={ <Shop />}  />
          <Route path="/shop-details/:id" element={<ShopProductDetails />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path={`/cat/:category`} element={<CatProducts />} />
          <Route path={`/event/:id`} element={<Event />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;