import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Filter from './component/filter';
import DisplayCards from './component/displayCard'

function App() {
  return (
    <section className="section bg-light">
      <div class="container">
        <div className='row'>
          <div className='col title-row'>
            <h2 className='section_title'>SpaceX Launch Programs</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-lg-3 mt-4 '>
            <div className='content-left p-2'><Filter/></div>
          </div>
          <div className='col-xl-8 col-lg-8 mt-4 pb-4'><DisplayCards/></div>
        </div>
      </div>
    </section>
  );
}

export default App;
