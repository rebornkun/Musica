import { Link, useLocation } from "react-router-dom";
import './SignIn.css'
import weeknd from '../../assets/weekndposter.jpg'
import davido from '../../assets/davido.jpg'
import ariana from '../../assets/ariana.jpg'
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

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
    const [passwordShow, setPasswordShow] = useState(false)
    // const []
    const delay = 5000

    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        
        setTimeout(()=>{
            handlesilder()
        },delay)

        if(location.pathname === "/signin"){
            document.querySelector('.signup_form').classList.add('flip')
            document.querySelector('.signin_form').classList.remove('flip')
        }else if(location.pathname === "/signup"){
            document.querySelector('.signup_form').classList.remove('flip')
            document.querySelector('.signin_form').classList.add('flip')
        }
        
    },[index])

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: ", response.credential);
        let userObj = jwtDecode(response.credential)
        console.log(userObj)
    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: "829434199515-526gk4106ii2j4sido647r3jl97nubv5.apps.googleusercontent.com",
            callback: handleCallbackResponse 
        })

        google.accounts.id.renderButton(
            document.getElementById('googleButton'),
            {theme: "outline", size: "large"}
        )

        google.accounts.id.prompt()
    },[])

    const check =()=>{
        let elems = document.querySelectorAll('.wallpaper');
        let elemsback = document.querySelectorAll('.form_back');
        let elemsbacktwo = document.querySelectorAll('.form_con_back');
        let elemstwoback = document.querySelectorAll('.form_back_two');
        let elemstwobacktwo = document.querySelectorAll('.form_con_back_two');
        
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
        elemsbacktwo.forEach(function(elem){
        if (elem.classList.contains('show')){
            elem.classList.remove('show')
        }else{

        }
        });
        elemstwoback.forEach(function(elem){
        if (elem.classList.contains('show')){
            elem.classList.remove('show')
        }else{

        }
        });
        elemstwobacktwo.forEach(function(elem){
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
            document.querySelectorAll('.form_con_back')[index-1].classList.add('show')
            document.querySelectorAll('.form_con_back_two')[index-1].classList.add('show')
            setIndex(index + 1)
        }else if(index === 2){
            setCurrentslide({...wallpaperarray[1]})
            check()
            document.querySelectorAll('.wallpaper')[index-1].classList.add('show')
            document.querySelectorAll('.form_back')[index-1].classList.add('show')
            document.querySelectorAll('.form_con_back')[index-1].classList.add('show')
            document.querySelectorAll('.form_con_back_two')[index-1].classList.add('show')
            setIndex(index + 1)
        }else if(index === 3){
            setCurrentslide({...wallpaperarray[2]})
            check()
            document.querySelectorAll('.wallpaper')[index-1].classList.add('show')
            document.querySelectorAll('.form_back')[index-1].classList.add('show')
            document.querySelectorAll('.form_con_back')[index-1].classList.add('show')
            document.querySelectorAll('.form_con_back_two')[index-1].classList.add('show')
            setIndex(1)
        }
    }

    const togglePasswordShow = () => {
        const passwordfield = document.querySelector('#signin_password');

        if(passwordfield.getAttribute('type') === 'password'){
            passwordfield.setAttribute('type', 'text');
            setPasswordShow(true)
        }else{
            passwordfield.setAttribute('type', 'password');
            setPasswordShow(false)
        }
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

                    <div className="form_section_container">

                        <div className="form_field signin_form">
                            {wallpaperarray.map((wallpaper, i) => {
                                return (
                                <div 
                                    className={ i === 0 ? "form_con_back show": "form_con_back"}
                                    style={{ backgroundImage: `linear-gradient(${wallpaper.back.deg}deg, ${wallpaper.back.firstcol} 50%, ${wallpaper.back.seccol})`}}
                                    
                                ></div>
                                ); 
                            })}
                            <div className="form_field_cotainer">
                                <div className='form_field_logo'>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0601 0.587264L8.86482 2.13792C8.60689 2.19292 8.37561 2.33467 8.20953 2.53953C8.04345 2.74438 7.9526 2.99998 7.95213 3.2637V15.6468C7.42714 15.4644 6.87522 15.3717 6.31946 15.3724C3.80639 15.3724 1.76904 17.2177 1.76904 19.4941C1.76904 21.7704 3.80639 23.6158 6.31953 23.6158C8.04663 23.6158 9.77405 22.677 10.492 21.0764C11.1161 19.6854 10.8699 18.0132 10.8699 16.5213V6.6222L20.779 4.32069C20.745 1.87242 18.4654 0.0689634 16.0602 0.587331L16.0601 0.587264Z" fill="#FACD66"/>
                                    <path d="M16.0566 11.998V25.2556C16.0565 25.2872 16.0489 25.3184 16.0346 25.3466C16.0204 25.3748 15.9997 25.3993 15.9743 25.4181C15.9489 25.437 15.9195 25.4497 15.8884 25.4552C15.8572 25.4607 15.8252 25.4589 15.7949 25.4499C15.3491 25.3225 14.8876 25.2581 14.424 25.2585C11.9108 25.2585 9.87354 27.1039 9.87354 29.3802C9.87354 31.6566 11.9108 33.5019 14.424 33.5019C16.1511 33.5019 17.8785 32.5631 18.5965 30.9625C19.2205 29.5715 18.9744 27.8993 18.9744 26.4075V15.6245C18.9745 15.5481 19.0005 15.474 19.0481 15.4143C19.0958 15.3545 19.1622 15.3127 19.2367 15.2955L28.8835 13.055C28.9332 13.0433 28.9849 13.043 29.0347 13.054C29.0845 13.0651 29.1312 13.0873 29.1713 13.1189C29.2113 13.1505 29.2437 13.1908 29.2661 13.2367C29.2884 13.2826 29.3001 13.3329 29.3003 13.384V24.242C29.3001 24.2737 29.2926 24.3048 29.2783 24.333C29.264 24.3613 29.2434 24.3858 29.218 24.4046C29.1926 24.4235 29.1632 24.4362 29.132 24.4417C29.1009 24.4472 29.0689 24.4454 29.0386 24.4364C28.5928 24.309 28.1313 24.2445 27.6676 24.245C25.1545 24.245 23.1172 26.0903 23.1172 28.3667C23.1172 30.6431 25.1545 32.4884 27.6676 32.4884C29.1884 32.4884 30.7006 31.7011 31.5535 30.413C32.38 29.1648 32.2184 27.8537 32.218 26.4434C32.2172 23.9282 32.2172 21.413 32.218 18.8979V8.84263C32.2175 8.69088 32.183 8.54116 32.1172 8.40444C32.0513 8.26773 31.9557 8.14748 31.8374 8.0525C31.719 7.95752 31.5809 7.89023 31.4332 7.85554C31.2854 7.82086 31.1318 7.81966 30.9836 7.85204L16.9693 10.8722C16.7114 10.9272 16.4801 11.069 16.314 11.2738C16.1479 11.4787 16.0571 11.7343 16.0566 11.998V11.998Z" fill="#A4C7C6"/>
                                    <path d="M27.308 13.384C27.3078 13.3329 27.2961 13.2826 27.2738 13.2367C27.2515 13.1908 27.2191 13.1505 27.179 13.1189C27.1389 13.0873 27.0923 13.0651 27.0424 13.054C26.9926 13.043 26.9409 13.0433 26.8912 13.055L17.2444 15.2955C17.17 15.3127 17.1035 15.3545 17.0559 15.4143C17.0082 15.474 16.9822 15.5481 16.9821 15.6245V26.4075C16.9821 27.8993 17.2282 29.5715 16.6043 30.9626C16.0241 32.2559 14.7846 33.1168 13.4189 33.3998C13.7496 33.4676 14.0863 33.5018 14.4239 33.5019C16.151 33.5019 17.8785 32.5631 18.5964 30.9625C19.2204 29.5715 18.9743 27.8993 18.9743 26.4075V15.6245C18.9744 15.5481 19.0004 15.474 19.0481 15.4143C19.0957 15.3545 19.1621 15.3127 19.2366 15.2955L27.308 13.4209V13.384ZM14.0623 25.2727C13.8491 25.2877 13.637 25.3165 13.4275 25.3588C13.5545 25.3847 13.6799 25.4147 13.8026 25.4499C13.8315 25.4584 13.8619 25.4603 13.8916 25.4557C13.9213 25.451 13.9496 25.4397 13.9745 25.4228C13.9993 25.4058 14.0201 25.3835 14.0353 25.3576C14.0505 25.3316 14.0597 25.3026 14.0623 25.2726V25.2727ZM32.2179 26.4434C32.2171 23.9282 32.2171 21.413 32.2179 18.8979V8.84263C32.2174 8.69088 32.183 8.54116 32.1171 8.40444C32.0512 8.26773 31.9556 8.14748 31.8373 8.0525C31.7189 7.95752 31.5808 7.89023 31.4331 7.85554C31.2853 7.82086 31.1317 7.81966 30.9835 7.85204L29.8856 8.08865C29.9926 8.18295 30.0783 8.29898 30.1369 8.42898C30.1956 8.55899 30.2258 8.70001 30.2257 8.84263V26.4434C30.2262 27.8536 30.3877 29.1648 29.5612 30.413C28.8792 31.4207 27.8344 32.1263 26.6449 32.3826C26.9812 32.4528 27.3239 32.4882 27.6675 32.4884C29.1882 32.4884 30.7005 31.7011 31.5534 30.413C32.3799 29.1648 32.2184 27.8537 32.2179 26.4434V26.4434ZM27.306 24.2591C27.0927 24.2742 26.8807 24.303 26.6712 24.3453C26.7982 24.3711 26.9235 24.4012 27.0463 24.4364C27.0752 24.4449 27.1056 24.4469 27.1353 24.4422C27.165 24.4375 27.1933 24.4262 27.2181 24.4093C27.243 24.3923 27.2637 24.37 27.2789 24.3441C27.2941 24.3181 27.3033 24.2891 27.306 24.2591V24.2591Z" fill="#9CBCBB"/>
                                </svg>
                                <div>
                                    <p className="musica">Musi<p className="colsec">ca</p></p>
                                </div>
                                </div>

                                <form>
                                <div id="googleButton" className="login_with_google_btn">
                                    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
                                        <path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853"/>
                                        <path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05"/>
                                        <path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335"/>
                                    </svg>
                                    <p>Sign in with Google</p>
                                </div>
                                <div className="or">
                                    <div></div>
                                    <p>or</p>
                                    <div></div>
                                </div>
                                <div className="inputs">
                                    <div className="emailfield">
                                        <label htmlFor="Email">Email</label>
                                        <input 
                                        type='email'
                                        id="Email"
                                        name="Email"
                                        placeholder="e.g abc@gmail.com"
                                        autoComplete="email"
                                        />
                                    </div>
                                    <div className="passwordfield">
                                        <label htmlFor="Password">Password</label>
                                        <input 
                                        id="signin_password"
                                        name="Password"
                                        type='password'
                                        autocomplete="current-password"
                                        autoCorrect={false}
                                        />
                                        {
                                        !passwordShow ? 
                                        <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        :
                                        <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.76057 14.3668C9.18557 13.7928 8.83557 13.0128 8.83557 12.1378C8.83557 10.3848 10.2476 8.9718 11.9996 8.9718C12.8666 8.9718 13.6646 9.3228 14.2296 9.8968" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.1047 12.6989C14.8727 13.9889 13.8567 15.0069 12.5677 15.2409" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.65451 17.4723C5.06751 16.2263 3.72351 14.4063 2.74951 12.1373C3.73351 9.85829 5.08651 8.02829 6.68351 6.77229C8.27051 5.51629 10.1015 4.83429 11.9995 4.83429C13.9085 4.83429 15.7385 5.52629 17.3355 6.79129" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.4475 8.99078C20.1355 9.90478 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.8868 4.24957L4.11279 20.0236" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        }

                                    </div>
                                </div>
                                <div className="remeber_forget">
                                    <div className="remeberme_check">
                                        <input
                                        type='checkbox'
                                        />
                                        <p>Remeber me for 30 days</p>
                                    </div>
                                    <p className="forgot_password">Forgot password?</p>
                                </div>
                                <div className="siginpage_signin_button">
                                    <p>Sign in</p>
                                </div>
                                <div className="form_field_lastpart">
                                    <p>Don't have an account? <a>Sign up for free</a></p>
                                </div>
                                </form>
                            </div>
                        </div>

                        <div className="form_field signup_form">
                            {wallpaperarray.map((wallpaper, i) => {
                                return (
                                <div 
                                    className={ i === 0 ? "form_con_back_two show": "form_con_back_two"}
                                    style={{ backgroundImage: `linear-gradient(${wallpaper.back.deg}deg, ${wallpaper.back.firstcol} 50%, ${wallpaper.back.seccol})`}}
                                    
                                ></div>
                                ); 
                            })}
                            <div className="form_field_cotainer signup_form_field_cotainer">
                                <div className='form_field_logo'>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0601 0.587264L8.86482 2.13792C8.60689 2.19292 8.37561 2.33467 8.20953 2.53953C8.04345 2.74438 7.9526 2.99998 7.95213 3.2637V15.6468C7.42714 15.4644 6.87522 15.3717 6.31946 15.3724C3.80639 15.3724 1.76904 17.2177 1.76904 19.4941C1.76904 21.7704 3.80639 23.6158 6.31953 23.6158C8.04663 23.6158 9.77405 22.677 10.492 21.0764C11.1161 19.6854 10.8699 18.0132 10.8699 16.5213V6.6222L20.779 4.32069C20.745 1.87242 18.4654 0.0689634 16.0602 0.587331L16.0601 0.587264Z" fill="#FACD66"/>
                                    <path d="M16.0566 11.998V25.2556C16.0565 25.2872 16.0489 25.3184 16.0346 25.3466C16.0204 25.3748 15.9997 25.3993 15.9743 25.4181C15.9489 25.437 15.9195 25.4497 15.8884 25.4552C15.8572 25.4607 15.8252 25.4589 15.7949 25.4499C15.3491 25.3225 14.8876 25.2581 14.424 25.2585C11.9108 25.2585 9.87354 27.1039 9.87354 29.3802C9.87354 31.6566 11.9108 33.5019 14.424 33.5019C16.1511 33.5019 17.8785 32.5631 18.5965 30.9625C19.2205 29.5715 18.9744 27.8993 18.9744 26.4075V15.6245C18.9745 15.5481 19.0005 15.474 19.0481 15.4143C19.0958 15.3545 19.1622 15.3127 19.2367 15.2955L28.8835 13.055C28.9332 13.0433 28.9849 13.043 29.0347 13.054C29.0845 13.0651 29.1312 13.0873 29.1713 13.1189C29.2113 13.1505 29.2437 13.1908 29.2661 13.2367C29.2884 13.2826 29.3001 13.3329 29.3003 13.384V24.242C29.3001 24.2737 29.2926 24.3048 29.2783 24.333C29.264 24.3613 29.2434 24.3858 29.218 24.4046C29.1926 24.4235 29.1632 24.4362 29.132 24.4417C29.1009 24.4472 29.0689 24.4454 29.0386 24.4364C28.5928 24.309 28.1313 24.2445 27.6676 24.245C25.1545 24.245 23.1172 26.0903 23.1172 28.3667C23.1172 30.6431 25.1545 32.4884 27.6676 32.4884C29.1884 32.4884 30.7006 31.7011 31.5535 30.413C32.38 29.1648 32.2184 27.8537 32.218 26.4434C32.2172 23.9282 32.2172 21.413 32.218 18.8979V8.84263C32.2175 8.69088 32.183 8.54116 32.1172 8.40444C32.0513 8.26773 31.9557 8.14748 31.8374 8.0525C31.719 7.95752 31.5809 7.89023 31.4332 7.85554C31.2854 7.82086 31.1318 7.81966 30.9836 7.85204L16.9693 10.8722C16.7114 10.9272 16.4801 11.069 16.314 11.2738C16.1479 11.4787 16.0571 11.7343 16.0566 11.998V11.998Z" fill="#A4C7C6"/>
                                    <path d="M27.308 13.384C27.3078 13.3329 27.2961 13.2826 27.2738 13.2367C27.2515 13.1908 27.2191 13.1505 27.179 13.1189C27.1389 13.0873 27.0923 13.0651 27.0424 13.054C26.9926 13.043 26.9409 13.0433 26.8912 13.055L17.2444 15.2955C17.17 15.3127 17.1035 15.3545 17.0559 15.4143C17.0082 15.474 16.9822 15.5481 16.9821 15.6245V26.4075C16.9821 27.8993 17.2282 29.5715 16.6043 30.9626C16.0241 32.2559 14.7846 33.1168 13.4189 33.3998C13.7496 33.4676 14.0863 33.5018 14.4239 33.5019C16.151 33.5019 17.8785 32.5631 18.5964 30.9625C19.2204 29.5715 18.9743 27.8993 18.9743 26.4075V15.6245C18.9744 15.5481 19.0004 15.474 19.0481 15.4143C19.0957 15.3545 19.1621 15.3127 19.2366 15.2955L27.308 13.4209V13.384ZM14.0623 25.2727C13.8491 25.2877 13.637 25.3165 13.4275 25.3588C13.5545 25.3847 13.6799 25.4147 13.8026 25.4499C13.8315 25.4584 13.8619 25.4603 13.8916 25.4557C13.9213 25.451 13.9496 25.4397 13.9745 25.4228C13.9993 25.4058 14.0201 25.3835 14.0353 25.3576C14.0505 25.3316 14.0597 25.3026 14.0623 25.2726V25.2727ZM32.2179 26.4434C32.2171 23.9282 32.2171 21.413 32.2179 18.8979V8.84263C32.2174 8.69088 32.183 8.54116 32.1171 8.40444C32.0512 8.26773 31.9556 8.14748 31.8373 8.0525C31.7189 7.95752 31.5808 7.89023 31.4331 7.85554C31.2853 7.82086 31.1317 7.81966 30.9835 7.85204L29.8856 8.08865C29.9926 8.18295 30.0783 8.29898 30.1369 8.42898C30.1956 8.55899 30.2258 8.70001 30.2257 8.84263V26.4434C30.2262 27.8536 30.3877 29.1648 29.5612 30.413C28.8792 31.4207 27.8344 32.1263 26.6449 32.3826C26.9812 32.4528 27.3239 32.4882 27.6675 32.4884C29.1882 32.4884 30.7005 31.7011 31.5534 30.413C32.3799 29.1648 32.2184 27.8537 32.2179 26.4434V26.4434ZM27.306 24.2591C27.0927 24.2742 26.8807 24.303 26.6712 24.3453C26.7982 24.3711 26.9235 24.4012 27.0463 24.4364C27.0752 24.4449 27.1056 24.4469 27.1353 24.4422C27.165 24.4375 27.1933 24.4262 27.2181 24.4093C27.243 24.3923 27.2637 24.37 27.2789 24.3441C27.2941 24.3181 27.3033 24.2891 27.306 24.2591V24.2591Z" fill="#9CBCBB"/>
                                </svg>
                                <div>
                                    <p className="musica">Musi<p className="colsec">ca</p></p>
                                </div>
                                </div>

                                <form>
                                    <div id="googleButton" className="login_with_google_btn">
                                        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
                                            <path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853"/>
                                            <path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05"/>
                                            <path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335"/>
                                        </svg>
                                        <p>Sign up with Google</p>
                                    </div>
                                    <div className="or">
                                        <div></div>
                                        <p>or</p>
                                        <div></div>
                                    </div>
                                    <div className="inputs">
                                        
                                        <div className="emailfield">
                                            <label htmlFor="Email">Email</label>
                                            <input 
                                            type='email'
                                            id="Email"
                                            name="Email"
                                            placeholder="e.g abc@gmail.com"
                                            autoComplete="email"
                                            />
                                        </div>
                                        <div className="confirm_email_field">
                                            <label htmlFor="Email">Confirm Email</label>
                                            <input 
                                            type='email'
                                            id="Confirm_Email"
                                            name="Email"
                                            placeholder="e.g abc@gmail.com"
                                            autoComplete="email"
                                            />
                                        </div>
                                        <div className="passwordfield">
                                            <p>Password</p>
                                            <input 
                                            id="signin_password"
                                            type='password'
                                            autocomplete="current-password"
                                            placeholder="create a password"
                                            autoCorrect={false}
                                            />
                                            {
                                            !passwordShow ? 
                                            <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            :
                                            <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.76057 14.3668C9.18557 13.7928 8.83557 13.0128 8.83557 12.1378C8.83557 10.3848 10.2476 8.9718 11.9996 8.9718C12.8666 8.9718 13.6646 9.3228 14.2296 9.8968" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.1047 12.6989C14.8727 13.9889 13.8567 15.0069 12.5677 15.2409" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6.65451 17.4723C5.06751 16.2263 3.72351 14.4063 2.74951 12.1373C3.73351 9.85829 5.08651 8.02829 6.68351 6.77229C8.27051 5.51629 10.1015 4.83429 11.9995 4.83429C13.9085 4.83429 15.7385 5.52629 17.3355 6.79129" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M19.4475 8.99078C20.1355 9.90478 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M19.8868 4.24957L4.11279 20.0236" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            }

                                        </div>
                                        <div className="user_name">
                                            <label htmlFor="UserName">What should we call you?</label>
                                            <input 
                                            type='text'
                                            id="UserName"
                                            name="UserName"
                                            placeholder="e.g deyPlay123"
                                            autoComplete={false}
                                            autoCorrect={false}
                                            />
                                        </div>
                                        <div className="d_o_b">
                                            <label htmlFor="Dob">What's your date of birth?</label>
                                            <input 
                                            type='date'
                                            id="Dob"
                                            name="Dob"
                                            autoComplete={false}
                                            />
                                        </div>
                                        <div className="gender">
                                            <label>
                                                <input
                                                type="radio"
                                                value="Male"
                                                name="gender"
                                                // checked={this.state.selectedOption === "Male"}
                                                // onChange={this.onValueChange}
                                                />
                                                Male
                                            </label>
                                            <label>
                                                <input
                                                type="radio"
                                                value="Female"
                                                name="gender"
                                                // checked={this.state.selectedOption === "Female"}
                                                // onChange={this.onValueChange}
                                                />
                                                Female
                                            </label>
                                            <label>
                                                <input
                                                type="radio"
                                                value="Prefer Not to say"
                                                name="gender"
                                                // checked={this.state.selectedOption === "Prefer Not to say"}
                                                // onChange={this.onValueChange}
                                                />
                                                Prefer Not to say
                                            </label>
                                            
                                        </div>
                                    </div>
                                    <div className="siginpage_signin_button">
                                        <p>Sign up</p>
                                    </div>
                                    <div className="form_field_lastpart">
                                        <p>Already have an account? <a>Sign in now!</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
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