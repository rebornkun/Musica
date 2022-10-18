import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Playlist.css'
import { UserContext } from '../UserContext'

const Playlist = ({bigimage, image, name, creator, time}) => {

    const [liked, setLiked] = useState(false)

    const toogleLike = () => {
        if (liked === false){
            setLiked(true)
        }else{
            setLiked(false)
        }
    }

    const { SetRemoveBack } = useContext(UserContext)
    return ( 
        <div className='chart'>
            <Link className='text-link' to='/playlist' state={{bigimage: bigimage, image: image, name: name, creator: creator, time: time, liked: liked}}>
                <div className='chart_slide'></div>
                <div className='chart_first_part'>
                    <div className='chart_img'>
                        <img src={image} alt='chart img' />
                    </div>
                    <div className='chart_detials'>
                        <p className='chart_name'>{name}</p>
                        <p className='chart_creator'>{creator}</p>
                        <p className='chart_time'>{time}</p>
                    </div>
                </div>
            </Link>
                <div className={ liked ? 'liked chart_fav': 'chart_fav'} onClick={toogleLike}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
        </div>
     );
}
 
export default Playlist;