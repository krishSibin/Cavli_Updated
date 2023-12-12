import React from 'react'
import EChartsComponent from './EchartsComponent'

const Graph = ({propFile}) => {
  return (
    <div className='graph'>
        {/* <h1>Graph</h1> */}
        <EChartsComponent/>
        {propFile}
    </div>
  )
}

export default Graph