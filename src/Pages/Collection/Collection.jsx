import { Link } from 'react-router-dom';
import CollectionBoxList from  '../../Components/CollectionBoxList'
import './Collection.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import CollectionLikes from '../../Components/CollectionLikes/CollectionLikes';
import CollectionBoxListContainer from '../../Components/CollectionBoxListContainer';
import { useEffect, useState } from 'react';

const Collection = () => {
    const location = useLocation()
    const [currentRoute, setCurrentRoute] = useState('collection')

    useEffect(()=>{

        if (location.pathname  === '/collection/likes'){
            setCurrentRoute('likes')
        }else if(location.pathname === '/collection'){
            setCurrentRoute('collection')
        }

        
    },[location])

    return ( 
        <div className='Collection_Page'>
            <div className='Collection_Page_container'>
                <div className='collection_buttons'>
                    <Link className='text-link' to='/collection'>
                        <div className={currentRoute === 'collection' ? 'my_collection_btn active' : 'my_collection_btn'}>
                            <p>My collection</p>
                        </div>
                    </Link>
                    <Link className='text-link' to='/collection/likes'>
                        <div className={currentRoute === 'likes' ? 'my_collection_btn my_collection_likes_btn active' : 'my_collection_btn my_collection_likes_btn'}>
                            <p>Likes</p>
                        </div>
                    </Link>
                </div>
                <div className='collection_rest_part'>
                    <Routes>
                        <Route index element={<CollectionBoxListContainer />} />
                        <Route path='likes' element={<CollectionLikes />} />
                    </Routes>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Collection;