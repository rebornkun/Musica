import { Link } from 'react-router-dom';
import CollectionBoxList from  '../../Components/CollectionBoxList'
import './Collection.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import CollectionLikes from '../../Components/CollectionLikes/CollectionLikes';
import CollectionBoxListContainer from '../../Components/CollectionBoxListContainer';

const Collection = () => {
    return ( 
        <div className='Collection_Page'>
            <div className='Collection_Page_container'>
                <div className='collection_buttons'>
                    <Link className='text-link' to='/collection/collections'>
                        <div className='my_collection_btn active'>
                            <p>My collection</p>
                        </div>
                    </Link>
                    <Link className='text-link' to='/collection/likes'>
                        <div className='my_collection_btn my_collection_likes_btn'>
                            <p>Likes</p>
                        </div>
                    </Link>
                </div>
                <div className='collection_rest_part'>
                    <Routes>
                        <Route path='collections' element={<CollectionBoxListContainer />} />
                        <Route path='likes' element={<CollectionLikes />} />
                    </Routes>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Collection;