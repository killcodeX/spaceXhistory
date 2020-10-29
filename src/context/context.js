import React, { useState, useContext, useEffect } from "react";
import FakeData from './fakedata.json';
import getDataApi from '../api/getData';
import getlaunchSuccessApi from '../api/launchesSuccess';
import LaunchYearDataApi from '../api/launchYear';
import getlandSuccessApi from '../api/landSuccess';
import getfilterApi from '../api/allFIlterData';



export const DataContext = React.createContext();

export default function DataProvider(props) {

    const [spaceshipHistory, setSpaceshipHistory] = useState('');
    const [launchYear, setLaunchYear] = useState(null);
    const [launchSuccessful, setLaunchSuccessful] = useState(null)
    const [landSuccessful, setLandSuccessful] = useState(null)

    useEffect(() => {

        // to get all data
        const getData = async () => {
            const data = await getDataApi();
            if(data){
                setSpaceshipHistory(data)
            } else{
                setSpaceshipHistory(FakeData)
            }
            
        }

        // Data filter by year  
        const getLaunchYear = async () => {
            //console.log(launchYear)
            const data = await LaunchYearDataApi(launchYear);
            if(data){
                setSpaceshipHistory(data)
            }
            
        }


        // Data filter by Launch
        const getlaunchSuccessfull = async () => {
            //console.log(launchYear)
            const data = await getlaunchSuccessApi(launchSuccessful);
            if(data){
                setSpaceshipHistory(data)
            }
            
        }

        // Data filter by Land
        const getlandSuccessfull = async () => {
            //console.log(launchYear)
            const data = await getlandSuccessApi(landSuccessful);
            if(data){
                setSpaceshipHistory(data)
            }
            
        }

        // Data filter by everything
        const getAllFilterData = async () => {
            let params = {
                launch: launchSuccessful,
                land : landSuccessful,
                year : launchYear
            }

            console.log(params)
            const data = await getlandSuccessApi(params);
            if(data){
                setSpaceshipHistory(data)
            }
            
        }

        // if(launchSuccessful && landSuccessful && launchYear){
        //     console.log('got all data')
        // }
        getAllFilterData()
        getlandSuccessfull()
        getlaunchSuccessfull()
        getLaunchYear()
        getData()
    }, [launchYear, launchSuccessful, landSuccessful])


    const getLnchYear = (data) => {
        //console.log(data)
        setLaunchYear(data)
    }

    const getLnchSuccessfull = (data) => {
       // console.log(data)
        setLaunchSuccessful(data)
    }

    const getLndSuccessfull = (data) => {
    //console.log(data)
        setLandSuccessful(data)
     }


  return (
    <DataContext.Provider
      value={{
        spaceshipHistory,
        getLnchYear,
        getLnchSuccessfull,
        getLndSuccessfull
      }}
    >
      <>{props.children}</>
    </DataContext.Provider>
  );
}
