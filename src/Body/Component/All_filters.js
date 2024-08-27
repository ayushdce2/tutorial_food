import Rest_above_4point5 from "./Rest_above_4point5";
import Rest_pizza_filter from "./Rest_pizza_filter";
import Rest_search_filter from "./Rest_search_filter";
import All_Restaurants from "./All_Restaurants";

const All_filters = (props)=>{

    const {filter_api_data,setFilter_api_data,api_data} = props;

    return(
        <>
                    <div style={{display:"flex",alignItems:"center", gap:"10px"}}>
                        <All_Restaurants api_data={api_data} setFilter_api_data={setFilter_api_data} />  
                        <Rest_above_4point5 filter_api_data={filter_api_data} setFilter_api_data={setFilter_api_data} api_data={api_data}/>
                        <Rest_pizza_filter filter_api_data={filter_api_data} setFilter_api_data={setFilter_api_data} api_data={api_data}/>
                        <Rest_search_filter filter_api_data={filter_api_data} setFilter_api_data={setFilter_api_data} api_data={api_data}/>
                        
                    </div>
        </>
    )
}

export default All_filters;