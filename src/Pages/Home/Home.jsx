import Playlist from '../../Components/Playlist/Playlist';
import PlaylistBig from '../../Components/PlaylistBig/PlaylistBig';
import SearchBar from '../../Components/SearchBar/SearchBar';

import chartone from '../../assets/chartone.png'
import charttwo from '../../assets/charttwo.png'
import chartthree from '../../assets/chartthree.png'
import './Home.css'
import Slider from '../../Components/Slider/Slider';
import { Boxlist } from '../../Components/Boxlist';
import { ChartList } from '../../Components/ChartList';
import tommtunes from '../../assets/tommtunes.png'
import volumeup from '../../assets/volumeup.jpg'
import other from '../../assets/other.jpg'

const Home = () => {
    return ( 
        <div className='Home_Page'>
            <div className='Home_Page_container'>
                <div className='playlist_part'>
                    <PlaylistBig />
                    <div className='charts_section'>
                        <h1 className='top_charts_title'>Top PlayLists</h1>
                        <div className='chart_container'>
                            <Playlist bigimage={other} image={other} name='Golden age of 80s' creator='Sean swadder' time='2:34:45'/>
                            <Playlist bigimage={volumeup} image={volumeup} name='Reggae “n” blues' creator='Dj YK mule' time='1:02:42'/>
                            <Playlist bigimage={tommtunes} image={tommtunes} name='Tomorrow’s tunes' creator='Obi Datti' time='2:01:25'/>
                        </div>
                    </div>
                </div>
                <div className='new_releases'>
                    <h1>Top Charts</h1>
                    <div className='new_releases_slider'>
                        <Slider List={<ChartList />}/>
                    </div>
                </div>
                <div className='new_releases'>
                    <h1>New releases.</h1>
                    <div className='new_releases_slider'>
                        <Slider List={<Boxlist/>}/>
                    </div>
                </div>
                <div className='new_releases'>
                    <h1>Popular in your area</h1>
                    <div className='new_releases_slider'>
                        <Slider List={<Boxlist/>}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;