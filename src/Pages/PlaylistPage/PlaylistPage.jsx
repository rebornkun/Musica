import './PlaylistPage.css'
import tommtunes from '../../assets/tommtunes.png'
import SongPlaylist from '../../Components/SongPlaylist/SongPlaylist';
import pic1 from '../../assets/musicpics/music1.png'
import pic2 from '../../assets/musicpics/music2.png'
import pic3 from '../../assets/musicpics/music3.png'
import pic4 from '../../assets/musicpics/music4.png'
import pic5 from '../../assets/musicpics/music5.png'
import pic6 from '../../assets/musicpics/music6.png'
import pic7 from '../../assets/musicpics/music7.png'
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

const PlaylistPage = () => {
    const location = useLocation()
    const [liked, setLiked] = useState(location.state.liked)
    const [addedToCollection, setAddedToCollection] = useState(false)

    const toogleLike = () => {
        if (liked === false){
            setLiked(true)
        }else{
            setLiked(false)
        }
    }
    const toogleCollection = () => {
        if (addedToCollection === false){
            setAddedToCollection(true)
        }else{
            setAddedToCollection(false)
        }
    }

    return ( 
        <div className="playlistpage">
            <div className='backdrop_image'>
                <img className='playlistback' src={location.state.bigimage} />
                <div className='filter'></div>
            </div>
            <div className='playlistpage_container'>
                <div className='playlistpage_top_part'>
                    <div className='img_container'>
                        <img src={location.state.image} alt='playlist'/>
                    </div>
                    <div className='details'>
                        <div className='text'>
                            <div className='name_n_owner'>
                                <h1>{location.state.name}</h1>
                                <p>{`~ ${location.state.creator}`} </p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            <p>64 songs ~ 16 hrs+</p>
                        </div>
                        <div className='buttons'>
                            <div className='play_all_button'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 1.33331C11.6744 1.33331 14.6667 4.32415 14.6667 8.00384C14.6667 11.6758 11.6744 14.6666 8.00001 14.6666C4.32562 14.6666 1.33334 11.6758 1.33334 8.00384C1.33334 4.32415 4.32562 1.33331 8.00001 1.33331ZM7.24068 5.35325C7.09911 5.35325 6.96397 5.38541 6.83527 5.44973C6.6744 5.53978 6.5457 5.68128 6.47491 5.84851C6.42987 5.96428 6.35908 6.3116 6.35908 6.31804C6.2883 6.69752 6.24969 7.31498 6.24969 7.99676C6.24969 8.64703 6.2883 9.23812 6.34621 9.62403C6.35265 9.63047 6.42343 10.0614 6.50065 10.2093C6.64222 10.4795 6.91893 10.6467 7.21494 10.6467H7.24068C7.43373 10.6403 7.83913 10.473 7.83913 10.4666C8.52125 10.1836 9.86616 9.30244 10.4067 8.71714L10.4453 8.67854C10.5161 8.60779 10.6062 8.49845 10.6255 8.47272C10.7285 8.33765 10.7799 8.17042 10.7799 8.00384C10.7799 7.81667 10.722 7.64301 10.6126 7.50151C10.5869 7.47578 10.4904 7.36644 10.4003 7.27639C9.8726 6.71038 8.4955 5.78419 7.77478 5.50119C7.66539 5.45681 7.38868 5.35968 7.24068 5.35325Z" fill="#FACD66"/>
                                </svg>
                                <p>Play all</p>
                            </div>
                            <div className='add_to_collection_button' onClick={toogleCollection}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={addedToCollection ? 'bounceout smallplus' : 'smallplus'} d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z" fill="#FACD66"/>
                                    <path className={addedToCollection ? 'slidein marker' : 'marker'} d="M12.4783 12.6667L10 11.0575L12.4783 15L17 8L12.4783 12.6667Z" fill="#FF0000"/>
                                    <path d="M8.15334 8.04669C7.88 8.04669 7.66 8.26669 7.66 8.54003C7.66 8.81336 7.88 9.03336 8.15334 9.03336C8.42667 9.03336 8.64667 8.81336 8.64667 8.54003C8.64667 8.26669 8.42667 8.04669 8.15334 8.04669Z" fill="#FACD66"/>
                                    <path d="M4.50667 8.70673C4.23334 8.70673 4.01334 8.92673 4.01334 9.20006C4.01334 9.47339 4.23334 9.69339 4.50667 9.69339C4.78 9.69339 5 9.47339 5 9.20006C5 8.92673 4.78 8.70673 4.50667 8.70673Z" fill="#FACD66"/>
                                    <path d="M10.7933 1.33331H5.20668C5.02001 1.33331 4.84001 1.33998 4.66668 1.36665C2.56668 1.55998 1.33334 2.96665 1.33334 5.20665V10.7933C1.33334 13.0333 2.56668 14.44 4.66668 14.6333C4.84001 14.66 5.02001 14.6666 5.20668 14.6666H9.00001C9.26001 14.6666 9.42668 14.3733 9.32668 14.1333C9.13334 13.6733 9.00001 13.14 9.00001 12.6666C9.00001 10.6466 10.6467 8.99998 12.6667 8.99998C13.1733 8.99998 13.6667 9.09998 14.12 9.29998C14.3667 9.40665 14.6667 9.23998 14.6667 8.97331V5.20665C14.6667 2.77998 13.22 1.33331 10.7933 1.33331ZM9.65334 5.36665V8.53998C9.65334 8.54665 9.64668 8.55331 9.64668 8.56665C9.63334 9.37998 8.97334 10.04 8.15334 10.04C7.32668 10.04 6.66001 9.36665 6.66001 8.54665C6.66001 7.71998 7.33334 7.05331 8.15334 7.05331C8.32668 7.05331 8.49334 7.08665 8.65334 7.14665V6.01998L6.00668 6.73998V9.20665C6.00668 9.21331 6.00001 9.21998 6.00001 9.22665C5.98668 10.04 5.32668 10.6933 4.50668 10.6933C3.68001 10.6933 3.01334 10.02 3.01334 9.19998C3.01334 8.37998 3.68668 7.70665 4.50668 7.70665C4.68001 7.70665 4.84668 7.73998 5.00001 7.79998V6.35998V5.19331C5.00001 4.57331 5.38668 4.07331 5.98001 3.91331L7.96668 3.36665C8.58668 3.19998 8.96668 3.36665 9.18001 3.52665C9.48668 3.75998 9.64001 4.13998 9.64001 4.64665V5.36665H9.65334Z" fill="#FACD66"/>
                                </svg>
                                <p>Add to collection</p>
                            </div>
                            <div className={ liked ? 'liked like_button': 'like_button'} onClick={toogleLike}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.51987 1.66697C5.93987 1.67975 6.34654 1.75308 6.74054 1.88708H6.77987C6.80654 1.89975 6.82654 1.91375 6.83987 1.92641C6.9872 1.97375 7.12654 2.02708 7.25987 2.10041L7.5132 2.21375C7.6132 2.26708 7.7332 2.36641 7.79987 2.40708C7.86654 2.44641 7.93987 2.48708 7.99987 2.53308C8.74054 1.96708 9.63987 1.66041 10.5665 1.66697C10.9872 1.66697 11.4072 1.72641 11.8065 1.86041C14.2672 2.66041 15.1539 5.36041 14.4132 7.72041C13.9932 8.92641 13.3065 10.0271 12.4072 10.9264C11.1199 12.1731 9.7072 13.2797 8.18654 14.2331L8.01987 14.3337L7.84654 14.2264C6.32054 13.2797 4.89987 12.1731 3.60054 10.9197C2.7072 10.0204 2.01987 8.92641 1.5932 7.72041C0.839869 5.36041 1.72654 2.66041 4.21387 1.84641C4.4072 1.77975 4.60654 1.73308 4.80654 1.70708H4.88654C5.07387 1.67975 5.25987 1.66697 5.44654 1.66697H5.51987ZM11.4599 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6932 4.38708 10.8399 4.69375 11.1199 4.79308C11.5472 4.95308 11.8332 5.37375 11.8332 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9599 6.27375C12.0532 6.38708 12.1932 6.45308 12.3399 6.46708C12.6132 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4599 3.77375Z" fill="#E5524A"/>
                                </svg>
                                <p>like</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='playlistpage_last_part'>
                    <SongPlaylist songImage={pic7} songTitle={'Tech 4 lyf'} songArtist={'Sweet Tyrant'} songAlbum={''} songDuration={'1:04:17'} />
                    <SongPlaylist songImage={pic2} songTitle={'Watin man go do'} songArtist={'Burna boy'} songAlbum={'African Giant'} songDuration={'3:16'} />
                    <SongPlaylist songImage={pic3} songTitle={'Stand Strong'} songArtist={'Davido'} songAlbum={''} songDuration={'4:00'} />
                    <SongPlaylist songImage={pic4} songTitle={'Fire on fire'} songArtist={'Sam Smite'} songAlbum={'Netflix'} songDuration={'3:54'} />
                    <SongPlaylist songImage={pic5} songTitle={'Head Chala (Dragon ball)'} songArtist={'Toei Animations'} songAlbum={'DBZ'} songDuration={'2:20'} />
                    <SongPlaylist songImage={pic6} songTitle={'Closa'} songArtist={'Ybee'} songAlbum={''} songDuration={'3:23'} />
                    <SongPlaylist songImage={pic1} songTitle={'Let me love you'} songArtist={'Krisx'} songAlbum={''} songDuration={'4:17'} />
                </div>
            </div>
        </div>
     );
}

export default PlaylistPage;