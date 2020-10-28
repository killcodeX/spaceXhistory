export default async function getAllFilterDataApi(params){

    console.log(params)
  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    try {
    //   const data = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params.launch}&land_success=${params.land}&launch_year=${params.year}`, requestOptions)
    //     const logData = await data.json();
    //     if(logData){
    //         return logData
    //     }
        
      
    } catch (error) {
      console.log(error)
    }
  }
