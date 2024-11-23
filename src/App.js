import ReactDOM from "react-dom"; 
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Show_restaurant_click from "./Body/Component/show_restaurant_click/Show_restaurant_click";

import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

const App = ()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Body/>,
      errorElement: <Error/>
    },
      {
        path: "Show_restaurant_click/:Rest_id",
        element: <Show_restaurant_click/>
      }
    
  ]);
  
  const Root = ReactDOM.createRoot(
      document.getElementById("root")
  );
  
  Root.render(<RouterProvider router={router} />);