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
  2020,
];

export default function Filter() {

  const { getLnchYear } = React.useContext(DataContext);

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
            <div className="col  brdr" key={index}>
              <button className="btn-year mb-2" onClick={() => getLnchYear(data)}>{data}</button>
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
          <div className="col brdr">
            <button className="btn-year mb-2">True</button>
          </div>
          <div className="col">
            <button className="btn-year mb-2">False</button>
          </div>
      </div>
      <div className="row mt-4">
        <div className="col brdr">
          <h4 className="filter-subtitle">Successful Landing</h4>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col brdr">
            <button className="btn-year mb-2">True</button>
          </div>
          <div className="col">
            <button className="btn-year mb-2">False</button>
          </div>
      </div>
    </>
  );
}

