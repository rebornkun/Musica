//sfc
import './AsideNav.css'
import Logo from '../../assets/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AsideNav = ({handleMenuToggle, menuIsOpen, setmenuIsOpen }) => {
    const location = useLocation()
    const [currentRoute, setCurrentRoute] = useState('home')

    useEffect(()=>{

        if (location.pathname  === '/'){
            setCurrentRoute('home')
        }else if(location.pathname === '/playlist'){
            setCurrentRoute('home')
        }else if(location.pathname === '/chart'){
            setCurrentRoute('home')
        }else if(location.pathname === '/collection'){
            setCurrentRoute('collection')
        }else if(location.pathname  === '/collection/likes'){
            setCurrentRoute('collection')
        }else if(location.pathname === '/radio'){
            setCurrentRoute('radio')
        }else if(location.pathname === '/video'){
            setCurrentRoute('video')
        }else if(location.pathname === '/profile'){
            setCurrentRoute('profile')
        }else if(location.pathname === '/logout'){
            setCurrentRoute('logout')
        }
        
    },[location])
    
    return ( 
        <div className={menuIsOpen ? 'aside show' : 'aside' }>
            <div className='aside_container'>
                    <div className='nav'>
                        <ul>
                            <li className={`nav_item home ${currentRoute === 'home' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='/' onClick={handleMenuToggle}>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.8">
                                            <path d="M8.38171 19.0503V16.239C8.3817 15.5266 8.96099 14.9478 9.67852 14.9433H12.3132C13.0339 14.9433 13.6182 15.5234 13.6182 16.239V19.0421C13.6182 19.66 14.1203 20.1622 14.7427 20.1667H16.5401C17.3796 20.1688 18.1855 19.8392 18.7799 19.2507C19.3742 18.6621 19.7083 17.8629 19.7083 17.0294V9.0437C19.7083 8.37045 19.4077 7.73183 18.8875 7.29989L12.781 2.45142C11.7136 1.60337 10.1891 1.63077 9.15323 2.51661L3.17805 7.29989C2.6333 7.7191 2.30772 8.35961 2.29163 9.0437V17.0213C2.29163 18.7584 3.71006 20.1667 5.45978 20.1667H7.21623C7.51587 20.1688 7.80399 20.0522 8.01664 19.8426C8.2293 19.633 8.34889 19.3478 8.34888 19.0503H8.38171Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <p className='nav_link_text'>Home</p>
                                </NavLink>
                            </li>
                            <li className={`nav_item collection ${currentRoute === 'collection' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='collection' onClick={handleMenuToggle}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='collection_cover' d="M15.5834 4.35416H14.6667V2.98832C14.6667 2.22749 14.0434 1.60416 13.2825 1.60416H8.71754C7.95671 1.60416 7.33337 2.22749 7.33337 2.98832V4.35416H6.41671C5.40837 4.35416 4.58337 5.17916 4.58337 6.18749V6.30666C4.87671 6.22416 5.17921 6.18749 5.50004 6.18749H16.5C16.8209 6.18749 17.1234 6.22416 17.4167 6.30666V6.18749C17.4167 5.17916 16.5917 4.35416 15.5834 4.35416Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M12.7692 15.5192C12.4759 15.5192 12.2467 15.7575 12.2467 16.0417C12.2467 16.3258 12.485 16.5642 12.7692 16.5642C13.0534 16.5642 13.2917 16.3258 13.2917 16.0417C13.2917 15.7575 13.0534 15.5192 12.7692 15.5192Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M8.31413 16.3258C8.02079 16.3258 7.79163 16.5642 7.79163 16.8483C7.79163 17.1325 8.02996 17.3708 8.31413 17.3708C8.59829 17.3708 8.83663 17.1325 8.83663 16.8483C8.83663 16.5642 8.60746 16.3258 8.31413 16.3258Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M17.4167 7.68167C17.1234 7.59917 16.8209 7.5625 16.5 7.5625H5.50004C5.17921 7.5625 4.87671 7.59917 4.58337 7.68167C3.00671 8.09417 1.83337 9.53333 1.83337 11.2292V16.7292C1.83337 18.7458 3.48337 20.3958 5.50004 20.3958H16.5C18.5167 20.3958 20.1667 18.7458 20.1667 16.7292V11.2292C20.1667 9.53333 18.9934 8.09417 17.4167 7.68167ZM14.6667 12.1733V16.0417C14.6667 17.0867 13.8142 17.9392 12.7692 17.9392C11.7242 17.9392 10.8717 17.0867 10.8717 16.0417C10.8717 14.9967 11.7242 14.1442 12.7692 14.1442C12.9525 14.1442 13.1267 14.1808 13.2917 14.2267V13.0717L10.2209 13.9058V16.8483C10.2209 16.8575 10.2209 16.8667 10.2117 16.8758C10.2025 17.9117 9.35004 18.755 8.31421 18.755C7.26921 18.755 6.41671 17.9025 6.41671 16.8483C6.41671 15.7942 7.26921 14.9508 8.31421 14.9508C8.49754 14.9508 8.67171 14.9875 8.84587 15.0333V13.3833V11.9625C8.84587 11.1742 9.34087 10.5325 10.0925 10.3308L12.5217 9.66167C13.3009 9.45083 13.7959 9.6525 14.0709 9.86333C14.3459 10.0742 14.6667 10.4867 14.6667 11.3025V12.1733Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                    </svg>
                                    <p className='nav_link_text'>My Collections</p>
                                </NavLink>
                            </li>
                            <li className={`nav_item radio ${currentRoute === 'radio' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='radio' onClick={handleMenuToggle}>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.10413 1.83333V4.58333H6.41663C6.17829 4.58333 5.94913 4.5925 5.72913 4.62916V1.83333C5.72913 1.45749 6.04079 1.14583 6.41663 1.14583C6.79246 1.14583 7.10413 1.45749 7.10413 1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                            <path d="M15.5834 4.58333H6.41671C6.17837 4.58333 5.94921 4.5925 5.72921 4.62916C3.36421 4.90416 1.83337 6.65499 1.83337 9.16666V15.5833C1.83337 18.3333 3.66671 20.1667 6.41671 20.1667H15.5834C18.3334 20.1667 20.1667 18.3333 20.1667 15.5833V9.16666C20.1667 6.41666 18.3334 4.58333 15.5834 4.58333ZM7.22337 14.6667C5.95837 14.6667 4.93171 13.64 4.93171 12.375C4.93171 11.11 5.95837 10.0833 7.22337 10.0833C8.48837 10.0833 9.51504 11.11 9.51504 12.375C9.51504 13.64 8.48837 14.6667 7.22337 14.6667ZM13.1817 14.8958H12.7234C12.3475 14.8958 12.0359 14.5842 12.0359 14.2083C12.0359 13.8325 12.3475 13.5208 12.7234 13.5208H13.1817C13.5575 13.5208 13.8692 13.8325 13.8692 14.2083C13.8692 14.5842 13.5575 14.8958 13.1817 14.8958ZM16.39 14.8958H15.9317C15.5559 14.8958 15.2442 14.5842 15.2442 14.2083C15.2442 13.8325 15.5559 13.5208 15.9317 13.5208H16.39C16.7659 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7659 14.8958 16.39 14.8958ZM16.39 11.2292H12.7234C12.3475 11.2292 12.0359 10.9175 12.0359 10.5417C12.0359 10.1658 12.3475 9.85416 12.7234 9.85416H16.39C16.7659 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7659 11.2292 16.39 11.2292Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        </svg>
                                    </div>
                                    <p className='nav_link_text'>Radio & Podcasts</p>
                                </NavLink>
                            </li>
                            <li className={`nav_item video ${currentRoute === 'video' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='video' onClick={handleMenuToggle}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3125 7.205H1.83337V14.8408C1.83337 14.8958 1.83337 14.9508 1.84254 14.9967H10.3125V7.205Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M16.2341 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2433 1.97084V5.80251C16.2433 5.81167 16.2341 5.82084 16.2341 5.83001Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0016 16.3717H16.2433V20.0292Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M1.99829 16.3717C2.42912 18.3333 3.73079 19.6167 5.70162 20.02V16.3717H1.99829Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                    </svg>
                                    <p className='nav_link_text'>Music videos</p>
                                </NavLink>
                            </li>
                        </ul>

                        <ul>
                            <li className={`nav_item profile ${currentRoute === 'profile' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='profile' onClick={handleMenuToggle}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                        <path d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                    </svg>
                                    <p className='nav_link_text'>Profile</p>
                                </NavLink>
                            </li>
                            <li className={`nav_item log_out ${currentRoute === 'logout' ? 'active' : '' }`}>
                                <NavLink className='text-link navlist' to='logout' onClick={handleMenuToggle}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.535 1.83334C12.8107 1.83334 14.6667 3.6575 14.6667 5.90334V10.2942H9.07078C8.66974 10.2942 8.35263 10.6058 8.35263 11C8.35263 11.385 8.66974 11.7058 9.07078 11.7058H14.6667V16.0875C14.6667 18.3333 12.8107 20.1667 10.5164 20.1667H5.97436C3.68936 20.1667 1.83337 18.3425 1.83337 16.0967V5.9125C1.83337 3.6575 3.69868 1.83334 5.98369 1.83334H10.535ZM16.9952 7.83769C17.2702 7.55352 17.7194 7.55352 17.9944 7.82852L20.6711 10.496C20.8086 10.6335 20.8819 10.8077 20.8819 11.0002C20.8819 11.1835 20.8086 11.3669 20.6711 11.4952L17.9944 14.1627C17.8569 14.3002 17.6736 14.3735 17.4994 14.3735C17.3161 14.3735 17.1327 14.3002 16.9952 14.1627C16.7202 13.8877 16.7202 13.4385 16.9952 13.1635L18.4619 11.706H14.6669V10.2944H18.4619L16.9952 8.83685C16.7202 8.56185 16.7202 8.11269 16.9952 7.83769Z" fill="#EFEEE0" fill-opacity="0.25"/>
                                    </svg>
                                    <p className='nav_link_text'>Log out</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     );
}
 
export default AsideNav;