import { useEffect, useState } from 'react';
import './ChartRank.css'


const ChartRank = ({ranknumber}) => {

    const [rankcolor, setRankColor] = useState('white')

    useEffect(()=>{
        if (ranknumber === 1){
            setRankColor('gold')
        }else if (ranknumber === 2){
            setRankColor('silver')
        }else if (ranknumber === 3){
            setRankColor('bronze')
        }
    },[])

    return ( 
        <div className={`${rankcolor} rank_container`}>
            <p className='rankn'>{ranknumber}</p>
        </div>
     );
}
 
export default ChartRank;