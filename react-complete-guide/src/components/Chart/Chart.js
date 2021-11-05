import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    return(
        <div className="chart">
        {props.dataPoints.map(dataPoints => {
            <ChartBar key={dataPoint.label} value={dataPoint.value} maxvalue={null} label={dataPoint.label}/>
        })}
        </div>
    )
}