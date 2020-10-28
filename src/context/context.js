import React, { useState, useContext, useEffect } from "react";
import FakeData from './fakedata.json';
import getDataApi from '../api/getData';
import getlaunchSuccessApi from '../api/launchesSuccess';
import LaunchYearDataApi from '../api/launchYear';



export const DataContext = React.createContext();

export default function DataProvider(props) {

    const [spaceshipHistory, setSpaceshipHistory] = useState('');
    const [launchYear, setLaunchYear] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getDataApi();
            if(data){
                setSpaceshipHistory(data)
            } else{
                setSpaceshipHistory(FakeData)
            }
            
        }
        
        const getLaunchYear = async () => {
            //console.log(launchYear)
            const data = await LaunchYearDataApi(launchYear);
            if(data){
                setSpaceshipHistory(data)
            }
            
        }

        getLaunchYear()


        getData()
    }, [launchYear])


    const getLnchYear = (data) => {
        //console.log(data)
        setLaunchYear(data)
    }


  return (
    <DataContext.Provider
      value={{
        spaceshipHistory,
        getLnchYear
      }}
    >
      <>{props.children}</>
    </DataContext.Provider>
  );
}
