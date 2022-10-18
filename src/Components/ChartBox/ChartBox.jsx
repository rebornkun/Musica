import './ChartBox.css'
import chartpic from '../../assets/chartpic.png'
import { Link } from 'react-router-dom';
import Chartart from '../Chartart/Chartart';


const ChartBox = ({bigimage, image, name, time, firsttitle, country, amount}) => {
    return ( 
        <div className="chartbox">
            <Link className='text-link' to='/chart' state={{bigimage: bigimage, name: name, time: time, firsttitle: firsttitle, country: country, amount: amount}}>
                <Chartart name={name} firsttitle={firsttitle} country={country} amount={amount} />
                <p className='chartname'>
                    {name}
                </p>
            </Link>
        </div>
     );
}
 
export default ChartBox