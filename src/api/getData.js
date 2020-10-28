export default async function getDataApi(){
  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    try {
      const data = await fetch("https://api.spaceXdata.com/v3/launches?limit=100", requestOptions)
        const logData = await data.json();
        if(logData){
            return logData
        }
        
      
    } catch (error) {
      console.log(error)
    }
  }
