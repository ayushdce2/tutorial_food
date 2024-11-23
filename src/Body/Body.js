import {Api} from "../Assets/Utility";
import {useState, useEffect} from "react";
import Restaurants from "./Component/Restaurants";
import All_filters from "./Component/All_filters";
import { Link } from "react-router-dom";

const Body = ()=>{

    const [api_data,setApi_data]=useState(""); //for original API variable
    const [filter_api_data,setFilter_api_data]=useState(""); //for filtered data

useEffect( //loads after all components have rendered
    ()=>{
        fetchData();
    },[]
);

const fetchData = async ()=>{ //will fetch data
    
    const response = await fetch(Api);
    const data_json = await response.json();

    setApi_data(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilter_api_data(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
}

return api_data.length===0? <p>shimmer view WAIT</p> : ( //shimmer implemented, till data is unavailable
        <>
        
        <All_filters filter_api_data={filter_api_data} setFilter_api_data={setFilter_api_data} api_data={api_data}/>
        
        <div style={{display:"grid",gap:"5px",gridTemplateColumns:"repeat(auto-fill, min(14rem))",wordBreak:"break-all",justifyContent:"space-between"}}>
        {/* {console.log(filter_api_data,"filter_api_data")} */}
           {filter_api_data.map((key,index)=>{

            return <Restaurants allData = {key} key={index} />

           })}
           </div>
           
        </>
    )
}

export default Body;