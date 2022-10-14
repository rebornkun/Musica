import Charts from '../../Components/Charts/Charts';
import PlaylistBig from '../../Components/PlaylistBig/PlaylistBig';
import SearchBar from '../../Components/SearchBar/SearchBar';

import chartone from '../../assets/chartone.png'
import charttwo from '../../assets/charttwo.png'
import chartthree from '../../assets/chartthree.png'
import './Home.css'
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return ( 
        <div className='Home_Page'>
            <div className='Home_Page_container'>
                <div className='playlist_part'>
                    <PlaylistBig />
                    <div className='charts_section'>
                        <h1 className='top_charts_title'>Top Charts</h1>
                        <div className='chart_container'>
                            <Charts image={chartone} name='Golden age of 80s' creator='Sean swadder' time='2:34:45'/>
                            <Charts image={charttwo} name='Reggae “n” blues' creator='Dj YK mule' time='1:02:42'/>
                            <Charts image={chartthree} name='Tomorrow’s tunes' creator='Obi Datti' time='2:01:25'/>
                        </div>
                    </div>
                </div>
                <div className='new_releases'>
                    <h1>New releases.</h1>
                    <div className='new_releases_slider'>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;