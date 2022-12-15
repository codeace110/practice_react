
import React from 'react';
import Posttable from './Posttable';



function Home() {


  return (
    <div className='row  mt-3 justify-content-evenly' >
      <div className='col-3 bg-danger'>
        <p>asda</p>
      </div>
      <div className='col-7  bg-secondary' style={{ height: '100vw' }}>
        <Posttable />
      </div>


    </div>
  );
}

export default Home;