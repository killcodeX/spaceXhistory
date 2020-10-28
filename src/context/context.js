import React, { useState, useContext, useEffect } from "react";
import getDataApi from '../api/getData';
import FakeData from './fakedata.json';

export const DataContext = React.createContext();

export default function DataProvider(props) {

    const [spaceshipHistory, setSpaceshipHistory] = useState('');

    useEffect(() => {
        const getData = async () => {
            const data = await getDataApi();
            if(data){
                setSpaceshipHistory(data)
            } else{
                setSpaceshipHistory(FakeData)
            }
            
        }

        getData()
    }, [])


  return (
    <DataContext.Provider
      value={{
        spaceshipHistory
      }}
    >
      <>{props.children}</>
    </DataContext.Provider>
  );
}
