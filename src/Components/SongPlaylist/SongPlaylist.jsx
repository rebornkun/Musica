import './SongPlaylist.css'

const SongPlaylist = ({songImage, songTitle, songArtist, songAlbum, songDuration}) => {
    return ( 
        <div className="songplaylist">
            <div className='images_side'>
                <div className='song_image'>
                    <img src={songImage} alt={`${songTitle} image`}/>
                </div>
                <div className='song_like_button'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.43496 10.3718C1.54079 7.58016 2.58662 4.10933 5.51746 3.16599C7.05912 2.66849 8.96162 3.08349 10.0425 4.57433C11.0616 3.02849 13.0191 2.67183 14.5591 3.16599C17.4891 4.10933 18.5408 7.58016 17.6475 10.3718C16.2558 14.7968 11.4 17.1018 10.0425 17.1018C8.68579 17.1018 3.87329 14.8485 2.43496 10.3718Z" stroke="#EFEEE0" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1572 6.30328C14.163 6.40662 14.7922 7.20412 14.7547 8.32162" stroke="#EFEEE0" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='text_n_option_side'>
                <div className='text_side'>
                    <p>{`${songTitle} ~ ${songArtist}`}</p>
                    <p>{songAlbum === '' ? 'Single' : `${songAlbum}`}</p>
                    <p>{songDuration}</p>
                </div>
                <div className='options'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
     );
}

export default SongPlaylist;