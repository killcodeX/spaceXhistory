import React from "react";
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
  return (
    <>
      {years.map((index) => {
        return (
          <div className="col-md-3 p-2" key={index}>
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
