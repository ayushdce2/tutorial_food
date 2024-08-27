import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

const Show_restaurant_click = ()=>{

    const {Rest_id} = useParams();
// console.log(Rest_id,"jjhjhjhjhjhjhjhjh");
    const [Allrestaurants, setAllrestaurants] = useState("");
    useEffect(()=>{
        collect_data();
    },[])
const API = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId="+Rest_id+"&catalog_qa=undefined&submitAction=ENTER";
    const collect_data= async ()=>{
        try{
        const data = await fetch(API)
        const data_json = await data.json();
        // console.log(data_json.data.cards[2].card.card.info.name,"data")
        setAllrestaurants(data_json.data)
            
    }catch(err){    console.log(err,"<---56565--->")}
    }

if(Allrestaurants.length==0){
    return <p> Waiting for data</p>;
} 

// console.log(Allrestaurants.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards,"Allrestaurants");
const Current_restaurant_data = Allrestaurants?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
const Current_restaurant_name = Allrestaurants?.cards[2].card.card.info.name;

// console.log(Current_restaurant_data,"<<<<<<<<<<<<<<<<<<<<");
    return Current_restaurant_data.length==0? <p>itemCards waiting</p>:(

        <>
         <Link to={"/"}>HOME</Link>
        <h3>{Current_restaurant_name}</h3><br/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(14rem,1fr))",gap:"5px",wordBreak:"break-all"}}>
        
                       {
                
                Current_restaurant_data.map((key)=>{
                return <div style={{border:"1px dashed #ddd",minHeight:"150px",backgroundColor:"#eee"}} key={key.card.info.id}>
                            {key.card.info.name}
                            <hr/>
                            {"Rs."}{(key.card.info.price/100) || (key.card.info.defaultPrice/100)}
                            <br/>
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+key.card.info.imageId} style={{width:"100%",height:"200px",objectFit:"contain"}}/>
                        </div>
            })

        }
        </div>
        
        </>
    )
}

export default Show_restaurant_click;