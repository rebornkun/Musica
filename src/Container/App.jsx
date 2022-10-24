import { useEffect, useRef, useState } from 'react'
import './App.css'
import AsideNav from '../Components/AsideNav/AsideNav'
import Home from '../Pages/Home/Home'
import SearchBar from '../Components/SearchBar/SearchBar'
import PlayBar from '../Components/PlayBar/PlayBar'

import { songdata } from '../audios'
import PlaylistPage from '../Pages/PlaylistPage/PlaylistPage'
import ChartlistPage from '../Pages/PlaylistPage/ChartlistPage'

import { Route, Routes, useLocation } from 'react-router-dom'
import { UserContext } from '../Components/UserContext'
import Collection from '../Pages/Collection/Collection'
import CollectionBoxList from '../Components/CollectionBoxList'
import CollectionLikes from '../Components/CollectionLikes/CollectionLikes'
import CollectionBoxListContainer from '../Components/CollectionBoxListContainer'

import axios from 'axios'

function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOnShuffle, setisOnShuffle] = useState(false);
  const [repeatType, setRepeatType] = useState('no_repeat');
  const [loadedList, setLoadedList] = useState([...songdata])
  const [currentSong, setCurrentSong] = useState(loadedList[2])

  const [removeBack, SetRemoveBack] = useState(false)

  const [liked, setLiked] = useState(false)
  const [menuIsOpen, setmenuIsOpen] = useState(false)

  const audioelem = useRef();

  const location = useLocation()
  console.log(location)
  
  useEffect(()=>{

    if(isPlaying){
      audioelem.current.play()
    }else{
      audioelem.current.pause()
    }

    console.log(location.pathname)
    if(location.pathname === '/playlist'){
      SetRemoveBack(true)
    }else if(location.pathname === '/chart'){
      SetRemoveBack(true)
    }else{
      SetRemoveBack(false)
    }

    if(menuIsOpen === true){
      
    }

    // searchAPi()

  },[isPlaying, loadedList, currentSong, location])

  const options = {
    method: 'GET',
    url: 'https://spotify81.p.rapidapi.com/search',
    params: {
      q: 'davido',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '3d4ddbdab7mshf57e9645ec3c4b2p13d009jsncc246d583eea',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

  async function searchAPi() {

    try{

      const response = await axios.request(options)
      console.log(response);  

      }catch(e){
        console.log(e)
    }

  }


  const onPlaying = () => {

    const duration = audioelem.current.duration;
    const currentTime = audioelem.current.currentTime;

    // console.log('duration: ', duration)
    // console.log('currentTime: ', currentTime/duration * 100)

    setCurrentSong({...currentSong, currentTime: currentTime, progress: currentTime/duration * 100, length: duration})
    //when song ends
    if (currentTime === duration){
      setIsPlaying(false)
      setCurrentSong({...currentSong, progress: 0})
      
      //check if theres a next song on the list
      if(loadedList.length > 1){
        
        const index = loadedList.findIndex( x => x.title === currentSong.title);

        //to show if its the last song on the list
        if(index === loadedList.length - 1){

          //if repeat is active repeat song or not
          if (repeatType === 'no_repeat'){
            audioelem.current.currentTime = 0 //play no more songs
          }else if(repeatType === 'repeat_once'){
            setCurrentSong(loadedList[index]) //play same song
            setIsPlaying(true)
          }else if(repeatType === 'repeat_loop'){
            setCurrentSong(loadedList[0]) //start song list again
            setIsPlaying(true)
          }

        }else{
            //since its not the last song on the list
            if (repeatType === 'no_repeat'){
              setCurrentSong(loadedList[index + 1])//play next song
              setIsPlaying(true)
            }else if(repeatType === 'repeat_once'){
              setCurrentSong(loadedList[index]) //play same song
              setIsPlaying(true)
            }else if(repeatType === 'repeat_loop'){
              setCurrentSong(loadedList[index + 1])//play next song
              setIsPlaying(true)
            }
            

        }

      }

    }else{

    }

  }

  const shuffleLoadedList = () => {

    let shuffled = shuffle(loadedList)
    setLoadedList(shuffled)
    console.log('shuffled: ', shuffled)

  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const toogleLike = () => {
    if (liked === false){
        setLiked(true)
    }else{
        setLiked(false)
    }
  }

  const handleMenuToggle = () => {

    if (menuIsOpen === false){
      setmenuIsOpen(true)
    }else{
      setmenuIsOpen(false)
    }

  }

  return (
    <UserContext.Provider value={{ removeBack, SetRemoveBack, liked, setLiked, toogleLike }}>
    <div className={removeBack === true ? "App playlist" : "App normal"}>
        <nav>
          <AsideNav handleMenuToggle={handleMenuToggle} menuIsOpen={menuIsOpen} setmenuIsOpen={setmenuIsOpen} />
        </nav>
        <div className='top'>
          <div className='search_bar_part'>
            <SearchBar handleMenuToggle={handleMenuToggle} menuIsOpen={menuIsOpen} setmenuIsOpen={setmenuIsOpen} />
          </div>
        </div>
        <div className='route_container'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='playlist' element={<PlaylistPage />} />
              <Route path='chart' element={<ChartlistPage />} />
            </Route>
            <Route path='/collection/*' element={<Collection />} >
            </Route>
            <Route path='*' />
          </Routes>
        </div>
        <div className='playbar_part'>
          <audio src={currentSong.song} ref={audioelem} onTimeUpdate={onPlaying} />
          <PlayBar 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          audioelem={audioelem}
          loadedList={loadedList}
          setLoadedList={setLoadedList}
          isOnShuffle={isOnShuffle}
          setisOnShuffle={setisOnShuffle}
          shuffleLoadedList={shuffleLoadedList}
          repeatType={repeatType}
          setRepeatType={setRepeatType}
          songdata={songdata}
          />
        </div>
      </div>
      </UserContext.Provider>
  )
}

export default App
