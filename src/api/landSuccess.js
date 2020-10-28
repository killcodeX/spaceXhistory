export default async function LandSuccessDataApi(params){
  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    try {
      const data = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${params}`, requestOptions)
        const logData = await data.json();
        if(logData){
            return logData
        }
        
      
    } catch (error) {
      console.log(error)
    }
  }
