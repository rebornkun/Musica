import './CollectionBox.css'


const CollectionBox = ({playlistCover, playlistName, creator, likes}) => {
    return ( 
        <div className="collectionbox">
            <div className='collectionbox_img_container'>
                <img src={playlistCover} alt='collectionbox pic'/>
                <div className='filter'></div>
            </div>
            <div className='collectionbox_detials'>
                <p>{playlistName}</p>
                <p>{creator}</p>
                <p>{likes}</p>
            </div>
            <div className='playbutton_container'>
                <div className='playbutton'>
                </div>
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z" fill="#EFEEE0"/>
                </svg>
            </div>
        </div>
     );
}
 
export default CollectionBox;