import { Link } from "react-router-dom";
import './SignIn.css'
import weeknd from '../../assets/weekndposter.jpg'
import davido from '../../assets/davido.jpg'
import ariana from '../../assets/ariana.jpg'
import { useEffect, useState } from "react";

const SignIn = () => {
    
    let wallpaperarray = [
        {
            name: 'Davido',
            title: `Nigerian's Top Artist`,
            picture: davido,
            back: {
                deg: 268, 
                firstcol: '#b32910',
                seccol: '#ae4d0a',
            }
        },
        {
            name: 'Ariana',
            title: `America's TOP Artist`,
            picture: ariana,
            back: {
                deg: 93, 
                firstcol: '#cecec9',
                seccol: '#797876',
            }
        },
        {
            name: 'The Weeknd',
            title: `Best Albums`,
            picture: weeknd,
            back: {
                deg: 93, 
                firstcol: '#461c11',
                seccol: '#0e1517',
            }
        },
    ]
    const [index, setIndex] = useState(2)
    const [currentslide, setCurrentslide] = useState({...wallpaperarray[0]})
    // const []
    const delay = 5000

    useEffect(()=>{

        
        setTimeout(()=>{
            handlesilder()
        },delay)
        
    },[index])

    const check =()=>{
        let elems = document.querySelectorAll('.wallpaper');
        let elemsback = document.querySelectorAll('.form_back');
        console.log(elems)
        elems.forEach(function(elem){
            if (elem.classList.contains('show')){
                elem.classList.remove('show')
            }else{
    
            }
          });
          elemsback.forEach(function(elem){
            if (elem.classList.contains('show')){
                elem.classList.remove('show')
            }else{
    
            }
          });
        
    }
    const handlesilder =()=>{

        console.log(index)
        if (index === 1){
            setCurrentslide({...wallpaperarray[0]})
            check()
            document.querySelectorAll('.wallpaper')[index-1].classList.add('show')
            document.querySelectorAll('.form_back')[index-1].classList.add('show')
            setIndex(index + 1)
        }else if(index === 2){
            setCurrentslide({...wallpaperarray[1]})
            check()
            document.querySelectorAll('.wallpaper')[index-1].classList.add('show')
            document.querySelectorAll('.form_back')[index-1].classList.add('show')
            setIndex(index + 1)
        }else if(index === 3){
            setCurrentslide({...wallpaperarray[2]})
            check()
            document.querySelectorAll('.wallpaper')[index-1].classList.add('show')
            document.querySelectorAll('.form_back')[index-1].classList.add('show')
            setIndex(1)
        }

        

        console.log(currentslide)
        // for (let i = 0; i<3; i++){
            
        // }
    }

    return ( 
        <div className="signin_page">
            {/* <Link to='/'>
                <p>signin</p>
            </Link> */}
            <div className="signin_page_container">
                <div className="form_section" >
                    {wallpaperarray.map((wallpaper, i) => {
                        return (
                        <div 
                            className={ i === 0 ? "form_back show": "form_back"}
                            style={{ backgroundImage: `linear-gradient(${wallpaper.back.deg}deg, ${wallpaper.back.firstcol} 50%, ${wallpaper.back.seccol})`}}
                            
                        ></div>
                        ); 
                    })}
                </div>
                <div className="middle_section">

                </div>
                <div className="Wallpaper_section">
                    {wallpaperarray.map((wallpaper, i) => {
                        return (
                        <img 
                            src={wallpaper.picture}
                            alt='back'
                            className={ i === 0 ? "wallpaper show": "wallpaper"}
                        />
                        ); 
                    })}
                    <div className="sign_filter"></div>
                    <div className="signin_page_artist">
                        <div className="signin_page_artist_detials">
                            <p>{currentslide.name}</p>
                            <p>{currentslide.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;