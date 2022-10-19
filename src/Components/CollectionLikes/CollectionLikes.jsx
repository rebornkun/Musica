import Slider from '../Slider/Slider';
import './CollectionLikes.css'
import CollectionBoxList from '../CollectionBoxList';
import CollectionLikesBoxList from '../CollectionLikesBoxList';
import SongPlaylist from '../SongPlaylist/SongPlaylist';
import pic1 from '../../assets/musicpics/music1.png'
import pic2 from '../../assets/musicpics/music2.png'
import pic3 from '../../assets/musicpics/music3.png'
import pic4 from '../../assets/musicpics/music4.png'
import pic5 from '../../assets/musicpics/music5.png'
import pic6 from '../../assets/musicpics/music6.png'
import pic7 from '../../assets/musicpics/music7.png'

const CollectionLikes = () => {
    return ( 
        <div>
            <div className='collection_likes_slider_part'>
                <Slider List={<CollectionLikesBoxList />}/>
            </div>
            <div className='collection_likes_song_part'>
            <SongPlaylist songImage={pic7} songTitle={'Tech 4 lyf'} songArtist={'Sweet Tyrant'} songAlbum={''} songDuration={'1:04:17'} />
                <SongPlaylist songImage={pic2} songTitle={'Watin man go do'} songArtist={'Burna boy'} songAlbum={'African Giant'} songDuration={'3:16'} />
                <SongPlaylist songImage={pic3} songTitle={'Stand Strong'} songArtist={'Davido'} songAlbum={''} songDuration={'4:00'} />
                <SongPlaylist songImage={pic4} songTitle={'Fire on fire'} songArtist={'Sam Smite'} songAlbum={'Netflix'} songDuration={'3:54'} />
                <SongPlaylist songImage={pic5} songTitle={'Head Chala (Dragon ball)'} songArtist={'Toei Animations'} songAlbum={'DBZ'} songDuration={'2:20'} />
                <SongPlaylist songImage={pic6} songTitle={'Closa'} songArtist={'Ybee'} songAlbum={''} songDuration={'3:23'} />
                <SongPlaylist songImage={pic1} songTitle={'Let me love you'} songArtist={'Krisx'} songAlbum={''} songDuration={'4:17'} />
            </div>
        </div>
     );
}
 
export default CollectionLikes;