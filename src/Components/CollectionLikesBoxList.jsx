import pic1 from '../assets/musicpics/music1.png'
import pic2 from '../assets/musicpics/music2.png'
import pic3 from '../assets/musicpics/music3.png'
import pic4 from '../assets/musicpics/music4.png'
import pic5 from '../assets/musicpics/music5.png'
import pic6 from '../assets/musicpics/music6.png'
import pic7 from '../assets/musicpics/music7.png'
import tommtunes from '../assets/tommtunes.png'
import volumeup from '../assets/volumeup.jpg'
import other from '../assets/other.jpg'
import CollectionBox from './CollectionBox/CollectionBox';

const CollectionLikesBoxList = () => {
    return(
        <>
        <div className='likes_box_list'>
                <CollectionBox playlistCover={tommtunes} playlistName='Golden age of 80s' creator='Sean swadder' likes='2.7 m likes'/>
                <CollectionBox playlistCover={volumeup} playlistName='Reggae “n” blues' creator='Dj YK mule' likes='1.4 k likes'/>
                <CollectionBox playlistCover={other} playlistName='Tomorrow’s tunes' creator='Obi Datti' likes='300 likes'/>
                <CollectionBox playlistCover={pic1} playlistName='Golden age of 80s' creator='Sean swadder' likes='2.7 m likes'/>
                <CollectionBox playlistCover={pic2} playlistName='Reggae “n” blues' creator='Dj YK mule' likes='1.4 k likes'/>
                <CollectionBox playlistCover={pic3} playlistName='Tomorrow’s tunes' creator='Obi Datti' likes='300 likes'/>
                <CollectionBox playlistCover={pic4} playlistName='Golden age of 80s' creator='Sean swadder' likes='2.7 m likes'/>
                <CollectionBox playlistCover={pic5} playlistName='Reggae “n” blues' creator='Dj YK mule' likes='1.4 k likes'/>
                <CollectionBox playlistCover={pic6} playlistName='Tomorrow’s tunes' creator='Obi Datti' likes='300 likes'/>
        </div>
        </>
    );
} 

export default CollectionLikesBoxList;