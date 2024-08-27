    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Link } from "react-router-dom";
    
    const Restaurants = (props)=>{
    
        // console.log(props,"<---props");
        const {allData }=props;
        const{cloudinaryImageId, name, cuisines, locality, avgRating, sla, areaName,veg,id} = allData?.info;
        return(
            <>
    <Link to={"/Show_restaurant_click/"+id}>
    <div style={{border:"1px dashed #ddd",padding:"5px"}}>
                        
                    
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} style={{width:"10rem",height:"7rem"}}/>
                            <p>Name - {name}</p>
                            <p>Cuisine - {cuisines.join(",")}</p>
                            <p>Location - {locality}</p>
                            <p>Star Rating - {avgRating}</p>
                            <p>Minutes - {sla.deliveryTime}</p>
                            <p>Area - {areaName}</p>
                            <p>Location - {locality}</p>
                     
                    </div>
                    </Link>
    
            </>
        )
    }
    
    export default Restaurants;