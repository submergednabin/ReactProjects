import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //dataPointValues is array so ... spread operator is used to pull the max value 

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum} 
            label={dataPoint.label} 
            />
            )}
        </div>
    );
};
export default Chart;
