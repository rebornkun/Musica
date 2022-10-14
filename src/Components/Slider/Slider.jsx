import Box from '../Box/Box';
import './Slider.css'

import pic1 from '../../assets/musicpics/music1.png'
import pic2 from '../../assets/musicpics/music2.png'
import pic3 from '../../assets/musicpics/music3.png'
import pic4 from '../../assets/musicpics/music4.png'
import pic5 from '../../assets/musicpics/music5.png'
import pic6 from '../../assets/musicpics/music6.png'
import pic7 from '../../assets/musicpics/music7.png'

const Slider = () => {
    return ( 
        <div className="slider">
            <Box songCover={pic1} songName='Life in a bubble' artist='The van' />
            <Box songCover={pic2} songName='Mountain' artist='Krisx' />
            <Box songCover={pic3} songName='Limits' artist='John Dillion' />
            <Box songCover={pic4} songName='Everything’s black' artist='Ameed' />
            <Box songCover={pic5} songName='Cancelled' artist='Enimen' />
            <Box songCover={pic6} songName='Nomad' artist='Makrol eli' />
            <Box songCover={pic7} songName='Blind' artist='Wiz zee' />
        </div>
     );
}
 
export default Slider;