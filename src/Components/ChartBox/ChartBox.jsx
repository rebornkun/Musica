import Chartart from '../Chartart/Chartart';
import './ChartBox.css'

const ChartBox = () => {
    return ( 
        <div className="chartbox">
            <Chartart />
            <p className='chartname'>
                TOP 100 Nigeria
            </p>
        </div>
     );
}
 
export default ChartBox