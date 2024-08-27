const All_Restaurants = (props)=>{

    const{api_data,setFilter_api_data}=props;

    const show_ALL = ()=>{
        setFilter_api_data(api_data);
    }



     return (
        <>
            <button onClick={show_ALL}>Show All Restaurants</button>
        </>
     )

}

export default All_Restaurants;