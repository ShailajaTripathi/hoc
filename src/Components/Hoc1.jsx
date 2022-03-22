import React from 'react'


function Hoc1(props) {
  return (
    <div>
        <h2 style={{backgroundColor:'rgba(255, 0, 0, 0.4)',width:'200px'}}>For Children<props.cmp/></h2>
    </div>
  )
}

export default Hoc1