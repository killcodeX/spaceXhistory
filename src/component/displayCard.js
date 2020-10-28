import React, { useContext } from "react";
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

export default function DisplayCard() {
  const { spaceshipHistory } = useContext(DataContext);
 
  return (
    <>
      <div className="row">
        {spaceshipHistory ? (
          spaceshipHistory.map((data, index) => {
            return (
              <div className="col-md-4 p-2" key={index}>
                <div className="card">
                  <div className="card-header brdr">
                    <img
                      className="mission-image"
                      src={data.links.mission_patch}
                      alt={data.mission_name}
                    />
                  </div>
                  <div className="card-body">
                    <h6 className=" card-title brdr">
                      {data.mission_name + "#" + data.flight_number}
                    </h6>
                    <p className="card-details">
                      <strong>Missions Id: </strong>
                      {data.mission_id == ' '? data.mission_id : "No data"}
                    </p>
                    <p className="card-details">
                      <strong>Launch Year: </strong>
                      {data.launch_year}
                    </p>
                    <p className="card-details">
                      <strong>Successful Launches: </strong>
                      {data.launch_success || 'Data'}
                    </p>
                    <p className="card-details">
                      <strong>Successful Landing: </strong>
                      {data.rocket.first_stage.cores[0].land_success || 'No Data'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border spin" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}
