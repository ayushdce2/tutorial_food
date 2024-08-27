const Rest_above_4point5 = (props)=>{
const {filter_api_data,setFilter_api_data,api_data} = props;

// console.log(filter_api_data,"level 1");


    const above_4point5 = ()=>{
        // console.log("hit");

        const All_filtered_api_data = api_data.filter((key)=>{
            // console.log(key.info.avgRating,"hbhbhbhbhb");
            return key?.info?.avgRating >=4.5
            // return key;
        })
        setFilter_api_data(All_filtered_api_data);
        // console.log(All_filtered_api_data,"All_filtered_api_data");
    }

    return (
        <>
            <button onClick={above_4point5}>Restaurants Above 4.5</button>
        </>
    )
}

export default Rest_above_4point5;