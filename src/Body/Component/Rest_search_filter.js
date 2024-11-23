import { useEffect, useState } from "react";

const Rest_search_filter = (props)=>{

    const {filter_api_data,setFilter_api_data, api_data} = props;
    
    // console.log(filter_api_data,"level 1");
    const [search_data,setsearch_data] = useState("");

    useEffect(()=>{
        // console.log("filtered_function-----------------------");
        // console.log("hit- filter starts",search_data );
             const All_filtered_api_data =  api_data.filter((key,index)=>{
 
                 if(key?.info?.cuisines.toString().toLowerCase().includes(search_data.toLowerCase())){
                    return key
                }
 
            })
 

                setFilter_api_data(All_filtered_api_data);
          
            
            
 
            // console.log(All_filtered_api_data,"All_filtered_api_data");
            // console.log(Ayush,"Ayush");
            // console.log("hit",search_data);
    },[search_data])
    
        const res_matched =  (e)=>{

             setsearch_data(e.target.value);
            //  console.log(search_data,"search_data -match")
             
             
        }
        
    
        return (
            <>
                
                <input type="search" onChange={res_matched} value={search_data} placeholder="Search Cuisine here"/>
                
            </>
        )
    }
    
    export default Rest_search_filter;