import './PlayBar.css'
import currentpic from '../../assets/musicpics/current.png'

import { useRef, useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'

const PlayBar = ({audioelem, isPlaying, setIsPlaying, currentSong, setCurrentSong, loadedList, setLoadedList, isOnShuffle, setisOnShuffle, shuffleLoadedList, repeatType, setRepeatType, songdata}) => {

    const { isSignedIn, setIsSignedIn } = useContext(UserContext)
    const musicPlayerBarRef = useRef()
    
    const handleSongProgress = (e) => {
        let song_progress = document.getElementById('song_progress')
        let song_progress_counter = document.getElementById('song_progress_counter')
        let song_progress_bar = document.getElementById('song_progress_bar')
        let song_progress_keeper = document.getElementById('song_progress_keeper')
        song_progress_keeper.style.left = e.target.value + '%'
        song_progress_bar.style.width = e.target.value + '%'
        // console.log(e.target.value)

    }
    const handleVolume = (e) => {
        let volume_progress = document.getElementById('volume_progress')
        let song_progress_counter = document.getElementById('song_progress_counter')
        let song_volume_bar = document.getElementById('song_volume_bar')
        song_volume_bar.style.width = e.target.value + '%'

        audioelem.current.volume = e.target.value/100
        
    }
    
    const playPause = () => {

        setIsPlaying(!isPlaying)
        if (audioelem.current.currentTime === 0){

        }else{}
    } 

    const checkWidth = (e) => {

        let width = musicPlayerBarRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX
       
        const divprogress = offset / width * 100;
        audioelem.current.currentTime = divprogress / 100 * currentSong.length;

    }

    function sToTime(t) {
        let realhours = parseInt((t / (60 * 60)) % 24)
        let hours = padZero(parseInt((t / (60 * 60)) % 24))
        let minutes = padZero(parseInt((t / (60)) % 60)) 
        let seconds = padZero(parseInt((t) % 60));
        let time;

        if( realhours <= 0 ){
            time = `${minutes}:${seconds}`
            return time
        }else{
            time = `${hours}:${minutes}:${seconds}`
            return time
        }

    }

    function padZero(v) {
    return (v < 10) ? "0" + v : v;
    }
    
    const doPrev = () => {

        const index = loadedList.findIndex( x => x.title === currentSong.title);
        setIsPlaying(false)
        console.log(index)
        if(index === 0){

            audioelem.current.currentTime = 0

        }else{
            setCurrentSong(loadedList[index - 1])
            setIsPlaying(true)
        }

    }

    const doNext = () => {

        const index = loadedList.findIndex( x => x.title === currentSong.title);
        setIsPlaying(false)
        console.log(index)
        if(index === loadedList.length - 1){

            audioelem.current.currentTime = 0

        }else{
            setCurrentSong(loadedList[index + 1])
            setIsPlaying(true)
        }

    }

    const doShuffle = () => {

        setisOnShuffle(!isOnShuffle)

        if(!isOnShuffle){
            shuffleLoadedList()
        }else{
            setLoadedList([...songdata])
        }

    }

    const doRepeat = () => {

        if (repeatType === 'no_repeat'){
            setRepeatType('repeat_once')
        }else if(repeatType === 'repeat_once'){
            setRepeatType('repeat_loop')
        }else if(repeatType === 'repeat_loop'){
            setRepeatType('no_repeat')
        }

    }

    return ( 
        <>
            { 
            isSignedIn ?
            <div className="playbar">
                <div className='playbar_container'>
                    <div className='current_song'>
                        <div className='current_song_img'>
                            <img src={currentpic} alt='current song img' />
                        </div>
                        <div className='current_song_details'>
                            <p>{currentSong.title}</p>
                            <p>{currentSong.artist}</p>
                        </div>
                    </div>
                    <div className='controls'>
                        <div className='buttons'>
                            <div className={isOnShuffle ? 'shuffle active' : 'shuffle'} onClick={doShuffle}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z" fill="white"/>
                                    <path d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z" fill="white"/>
                                    <path d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z" fill="white"/>
                                </svg>
                            </div>
                            <div className='previous' onClick={doPrev}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z" fill="white"/>
                                    <path d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z" fill="white"/>
                                </svg>
                            </div>
                            <div className='play_n_pause' onClick={playPause}>
                                <svg className={isPlaying ? 'playicon' : 'playicon show'} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z" fill="#EFEEE0"/>
                                </svg>
                                <svg className={isPlaying ? 'pauseicon show' : 'pauseicon'} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="3" height="9" rx="1.5" fill="white"/>
                                    <rect x="5" width="3" height="9" rx="1.5" fill="white"/>
                                </svg>
                            </div>
                            <div className='forward' onClick={doNext}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z" fill="white"/>
                                    <path d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={ repeatType === 'no_repeat' ? 'repeat' : repeatType === 'repeat_once' ? 'repeat once' : repeatType === 'repeat_loop' ? 'repeat loop' : 'repeat'} onClick={doRepeat}>
                                {
                                    repeatType === 'no_repeat' ?
                                    <svg className={repeatType === 'no_repeat' ? 'no_repeat show' : 'no_repeat'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.60659 11.4533C2.47992 11.4533 2.35325 11.4067 2.25325 11.3067C1.33992 10.3867 0.833252 9.17335 0.833252 7.88668C0.833252 5.21335 2.99992 3.04001 5.66659 3.04001L9.71325 3.05335L8.98659 2.36001C8.78659 2.16668 8.77992 1.85335 8.97325 1.65335C9.16659 1.45335 9.47992 1.44668 9.67992 1.64001L11.3066 3.20001C11.4533 3.34001 11.4999 3.56001 11.4266 3.74668C11.3533 3.93335 11.1666 4.06001 10.9599 4.06001L5.66659 4.04668C3.55325 4.04668 1.83325 5.77335 1.83325 7.89335C1.83325 8.91335 2.23325 9.88001 2.95992 10.6067C3.15325 10.8 3.15325 11.12 2.95992 11.3133C2.85992 11.4067 2.73325 11.4533 2.60659 11.4533Z" fill="white"/>
                                        <path d="M6.6666 14.5C6.53993 14.5 6.41993 14.4534 6.31993 14.36L4.69327 12.8C4.5466 12.66 4.49993 12.44 4.57327 12.2534C4.65327 12.0667 4.83993 11.9667 5.03993 11.94L10.3399 11.9534C12.4533 11.9534 14.1733 10.2267 14.1733 8.10669C14.1733 7.08669 13.7733 6.12002 13.0466 5.39335C12.8533 5.20002 12.8533 4.88002 13.0466 4.68669C13.2399 4.49335 13.5599 4.49335 13.7533 4.68669C14.6666 5.60669 15.1733 6.82002 15.1733 8.10669C15.1733 10.78 13.0066 12.9534 10.3399 12.9534L6.29327 12.94L7.01993 13.6334C7.21993 13.8267 7.2266 14.14 7.03327 14.34C6.9266 14.4467 6.79993 14.5 6.6666 14.5Z" fill="white"/>
                                        <path d="M7.842 10.06C7.498 10.06 7.206 9.97 6.966 9.79C6.73 9.606 6.55 9.352 6.426 9.028C6.302 8.7 6.24 8.324 6.24 7.9C6.24 7.472 6.302 7.096 6.426 6.772C6.55 6.448 6.73 6.196 6.966 6.016C7.206 5.832 7.498 5.74 7.842 5.74C8.186 5.74 8.476 5.832 8.712 6.016C8.952 6.196 9.134 6.448 9.258 6.772C9.382 7.096 9.444 7.472 9.444 7.9C9.444 8.324 9.382 8.7 9.258 9.028C9.134 9.352 8.952 9.606 8.712 9.79C8.476 9.97 8.186 10.06 7.842 10.06ZM7.842 9.34C8.01 9.34 8.154 9.288 8.274 9.184C8.398 9.076 8.494 8.916 8.562 8.704C8.63 8.488 8.664 8.22 8.664 7.9C8.664 7.576 8.63 7.308 8.562 7.096C8.494 6.884 8.398 6.726 8.274 6.622C8.154 6.514 8.01 6.46 7.842 6.46C7.678 6.46 7.534 6.514 7.41 6.622C7.286 6.726 7.19 6.884 7.122 7.096C7.054 7.308 7.02 7.576 7.02 7.9C7.02 8.22 7.054 8.488 7.122 8.704C7.19 8.916 7.286 9.076 7.41 9.184C7.534 9.288 7.678 9.34 7.842 9.34Z" fill="white"/>
                                    </svg>
                                    :
                                    repeatType === 'repeat_once' ?
                                    <svg className={repeatType === 'repeat_once' ? 'repeat_once show' : 'repeat_once'} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z" fill="white"/>
                                        <path d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z" fill="white"/>
                                        <path d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z" fill="white"/>
                                    </svg>
                                    :
                                    <svg className={repeatType === 'repeat_loop' ? 'repeat_loop show' : 'repeat_loop'} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z" fill="white"/>
                                        <path d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z" fill="white"/>
                                    </svg>
                                }

                                


                            </div>
                        </div>
                        <div className='progress_container'>
                            <p>{ currentSong.progress ? sToTime(currentSong.currentTime) : '00:00'}</p>
                            <div className='progress'>
                                <input 
                                onInput={handleSongProgress}
                                onClick={checkWidth}
                                ref={musicPlayerBarRef}
                                id='song_progress'
                                type='range'
                                min='0'
                                max='100'
                                step='1'
                                value={currentSong.progress}
                                defaultValue="0"
                                />
                                <div id='song_progress_keeper' style={{left: `${currentSong.progress + '%'}`}}>
                                    <div className={isPlaying ? 'song_progress_keeper_move onplay'  : 'song_progress_keeper_move'}></div>
                                </div>
                                <div id='song_progress_bar' className={isPlaying ? 'song_progress_bar onplay'  : 'song_progress_bar'} style={{width: `${currentSong.progress + '%'}`}}></div>
                            </div>
                            <p>{ currentSong.length ? sToTime(currentSong.length) : '00:00'}</p>

                        </div>
                    </div>
                    <div className={isPlaying ? 'volume onplay'  : 'volume'}>
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='volumebass' d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z" fill="#EFEEE0"/>
                                <path className='volumebass' d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z" fill="#EFEEE0"/>
                                <path d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z" fill="#EFEEE0"/>
                            </svg>
                        </div>
                        <div className='volume_container'>
                            <input 
                            onInput={handleVolume}
                            id='volume_progress'
                            type='range'
                            min='0'
                            max='100'
                            step='1'
                            defaultValue="100"
                            />
                            <div id='song_volume_bar'></div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className='signin_banner'>
                <div className='signin_banner_container'>
                    <div className='signin_banner_text'>
                        <p>Muscia Preview</p>
                        <p>Sign up to show unlimited songs and podcasts with occasional ads. No credit card needed</p>
                    </div>
                    <div className='signin_buttons'>
                        <Link className='text-link' to='/signin'>
                            <div className='signin_button'>
                                <p>Sign In</p>
                            </div>
                        </Link>
                        <Link className='text-link' to='/signup'>
                            <div className='signin_button'>
                                <p>Sign Up For Free</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            }
        </>
     );
}
 
export default PlayBar;