import React from "react";
import { DataContext } from "../context/context";

const years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];

export default function Filter() {

  const[select, setSelect] = React.useState(null);

  const[bool, setBool] = React.useState(null);

  const[bool2, setBool2] = React.useState(null);

  const { getLnchYear, getLnchSuccessfull, getLndSuccessfull } = React.useContext(DataContext);

  const handleClick = (data, id) => {
    getLnchYear(data)
    setSelect(id)
    setBool(null)
    setBool2(null)
  }

  const handleSecondClick = (data) => {
    getLnchSuccessfull(data)
    setBool(data)
    setSelect(null)
    setBool2(null)
  }

  const handlethirdClick = (data) => {
    getLndSuccessfull(data)
    setBool2(data)
    setBool(null)
    setSelect(null)
  }

  return (
    <>
      <h3 className="filter-title mt-1 mb-3">Filters</h3>
      <div className="row mb-2">
        <div className="col brdr">
          <h4 className="filter-subtitle">Lunch Year</h4>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        {years.map((data, index) => {
          return (
            <div className="col colmn" key={index}>
              <button className={select == index? 'btn-year mb-2': 'btn-year1 mb-2'} onClick={() => handleClick(data, index)}>{data}</button>
            </div>
          );
        })}
      </div>
      <div className="row mb-4">
        <div className="col brdr">
          <h4 className="filter-subtitle">Successful Launch</h4>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col brdr colmn1">
            <button className={bool? 'btn-year mb-2': 'btn-year1 mb-2'} onClick={() => handleSecondClick(true)}>True</button>
          </div>
          <div className="col">
            <button className={bool == false? 'btn-year mb-2': 'btn-year1 mb-2'} onClick={() => handleSecondClick(false)}>False</button>
          </div>
      </div>
      <div className="row mt-4">
        <div className="col brdr">
          <h4 className="filter-subtitle">Successful Landing</h4>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col brdr colmn1">
            <button className={bool2? 'btn-year mb-2': 'btn-year1 mb-2'} onClick={() => handlethirdClick(true)}>True</button>
          </div>
          <div className="col">
            <button className={bool2 == false? 'btn-year mb-2': 'btn-year1 mb-2'} onClick={() => handlethirdClick(false)}>False</button>
          </div>
      </div>
    </>
  );
}

