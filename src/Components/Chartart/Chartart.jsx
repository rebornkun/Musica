import './Chartart.css'
import muiscalgo from '../../assets/musicalogo.png'

const Chartart = () => {
    return ( 
        <div className="chartart">
            <div className='chartart_img_container'>
                {/* <img src={songCover} alt='box pic'/> */}
            </div>
            <div className='chartart_detials_container'>
                <div className='chartart_detials_container_one'>
                    <div className='title'>
                        <p>TOP 100</p>
                        <p>Nigeria</p>
                    </div>
                    <div className='big_title'>
                        <p>100</p>
                    </div>
                </div>
                <div className='chartart_detials_container_two'>
                    <div className='logo'>
                        {/* <img src={muiscalgo} alt='musica logo'/> */}
                        <svg width="44" height="11" viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7123_502)">
                            <path d="M3.74109 1.17272L2.06501 1.6288C2.00493 1.64498 1.95105 1.68667 1.91236 1.74692C1.87368 1.80717 1.85251 1.88235 1.8524 1.95991V5.602C1.73011 5.54836 1.60155 5.52108 1.47209 5.52128C0.886691 5.52128 0.412109 6.06403 0.412109 6.73355C0.412109 7.40306 0.886691 7.94581 1.47211 7.94581C1.87442 7.94581 2.27681 7.6697 2.44405 7.19894C2.58941 6.78981 2.53207 6.298 2.53207 5.85921V2.94771L4.84032 2.27079C4.83238 1.55071 4.30139 1.02028 3.74111 1.17274L3.74109 1.17272Z" fill="#FACD66"/>
                            <path d="M3.74034 4.52884V8.42813C3.7403 8.43743 3.73855 8.44659 3.73522 8.45489C3.7319 8.46319 3.72708 8.47039 3.72117 8.47594C3.71526 8.48148 3.7084 8.48521 3.70115 8.48683C3.6939 8.48846 3.68644 8.48793 3.67938 8.48528C3.57553 8.44781 3.46804 8.42886 3.36003 8.42899C2.77461 8.42899 2.30005 8.97175 2.30005 9.64126C2.30005 10.3108 2.77461 10.8535 3.36003 10.8535C3.76234 10.8535 4.16474 10.5774 4.33199 10.1066C4.47734 9.69753 4.42001 9.20569 4.42001 8.76692V5.59546C4.42004 5.57299 4.4261 5.55119 4.43719 5.53362C4.44829 5.51605 4.46377 5.50374 4.48111 5.4987L6.72826 4.83972C6.73983 4.83628 6.75187 4.83619 6.76347 4.83944C6.77508 4.8427 6.78595 4.84922 6.79529 4.85852C6.80462 4.86782 6.81217 4.87966 6.81737 4.89316C6.82257 4.90666 6.8253 4.92146 6.82534 4.93647V8.13003C6.8253 8.13933 6.82355 8.14849 6.82022 8.15679C6.8169 8.16509 6.81209 8.1723 6.80617 8.17785C6.80026 8.18339 6.7934 8.18713 6.78615 8.18875C6.77889 8.19037 6.77144 8.18984 6.76438 8.1872C6.66053 8.14972 6.55303 8.13076 6.44502 8.13089C5.85961 8.13089 5.38504 8.67364 5.38504 9.34315C5.38504 10.0127 5.85961 10.5554 6.44501 10.5554C6.79927 10.5554 7.15153 10.3239 7.35021 9.94501C7.54273 9.5779 7.5051 9.19227 7.50499 8.77749C7.50481 8.03772 7.50481 7.29796 7.50499 6.55821V3.60079C7.50487 3.55616 7.49685 3.51212 7.48151 3.47191C7.46617 3.4317 7.4439 3.39633 7.41633 3.3684C7.38876 3.34047 7.35659 3.32067 7.32217 3.31047C7.28776 3.30027 7.25198 3.29992 7.21744 3.30944L3.95295 4.19772C3.89287 4.2139 3.83899 4.25559 3.8003 4.31584C3.76162 4.3761 3.74045 4.45127 3.74034 4.52884V4.52884Z" fill="#A4C7C6"/>
                            <path d="M6.36107 4.93647C6.36103 4.92146 6.3583 4.90666 6.3531 4.89316C6.3479 4.87966 6.34035 4.86782 6.33102 4.85852C6.32168 4.84922 6.31081 4.8427 6.2992 4.83944C6.2876 4.83619 6.27556 4.83628 6.26399 4.83972L4.01684 5.4987C3.9995 5.50374 3.98402 5.51605 3.97292 5.53362C3.96183 5.55119 3.95577 5.57299 3.95574 5.59546V8.76692C3.95574 9.20569 4.01307 9.69753 3.86772 10.1067C3.73257 10.4871 3.44385 10.7403 3.12573 10.8235C3.20276 10.8434 3.28119 10.8535 3.35982 10.8535C3.76213 10.8535 4.16454 10.5774 4.33178 10.1066C4.47713 9.69753 4.4198 9.20569 4.4198 8.76692V5.59546C4.41983 5.57299 4.42589 5.55119 4.43699 5.53362C4.44808 5.51605 4.46356 5.50374 4.4809 5.4987L6.36107 4.94733V4.93647ZM3.27559 8.43315C3.22593 8.43759 3.17654 8.44605 3.12773 8.45849C3.15732 8.4661 3.18651 8.47493 3.21511 8.48528C3.22183 8.48778 3.22891 8.48836 3.23583 8.48697C3.24276 8.48559 3.24935 8.48229 3.25514 8.4773C3.26092 8.47231 3.26576 8.46576 3.2693 8.45812C3.27284 8.45048 3.27499 8.44195 3.27559 8.43313V8.43315ZM7.50478 8.77749C7.50461 8.03772 7.50461 7.29796 7.50478 6.55821V3.60079C7.50467 3.55616 7.49664 3.51212 7.4813 3.47191C7.46596 3.4317 7.44369 3.39633 7.41612 3.3684C7.38855 3.34047 7.35638 3.32067 7.32197 3.31047C7.28755 3.30027 7.25177 3.29992 7.21723 3.30944L6.9615 3.37903C6.98643 3.40677 7.00638 3.44089 7.02004 3.47913C7.0337 3.51737 7.04075 3.55884 7.04072 3.60079V8.77749C7.04083 9.19226 7.07846 9.5779 6.88594 9.94501C6.72705 10.2414 6.48369 10.4489 6.2066 10.5243C6.28495 10.545 6.36477 10.5554 6.44482 10.5554C6.79905 10.5554 7.15132 10.3239 7.35 9.94501C7.54252 9.5779 7.50489 9.19227 7.50478 8.77749V8.77749ZM6.36059 8.13505C6.31092 8.13949 6.26153 8.14796 6.21272 8.1604C6.24231 8.168 6.2715 8.17684 6.30011 8.1872C6.30683 8.18969 6.31391 8.19027 6.32083 8.18889C6.32775 8.18751 6.33434 8.1842 6.34013 8.17921C6.34592 8.17422 6.35076 8.16767 6.35429 8.16004C6.35783 8.1524 6.35998 8.14386 6.36059 8.13505V8.13505Z" fill="#9CBCBB"/>
                            </g>
                            <path d="M11.0599 2.99C11.1533 2.99 11.2499 3.01667 11.3499 3.07C11.4566 3.11667 11.5366 3.18 11.5899 3.26L14.0199 7L13.5199 6.98L16.0099 3.26C16.1366 3.08 16.2999 2.99 16.4999 2.99C16.6599 2.99 16.8033 3.04667 16.9299 3.16C17.0566 3.27333 17.1199 3.42 17.1199 3.6V9.39C17.1199 9.56333 17.0633 9.71 16.9499 9.83C16.8366 9.94333 16.6866 10 16.4999 10C16.3133 10 16.1599 9.94333 16.0399 9.83C15.9266 9.71 15.8699 9.56333 15.8699 9.39V4.68L16.2599 4.77L14.2199 7.88C14.1599 7.95333 14.0833 8.01667 13.9899 8.07C13.9033 8.12333 13.8133 8.14667 13.7199 8.14C13.6333 8.14667 13.5433 8.12333 13.4499 8.07C13.3633 8.01667 13.2899 7.95333 13.2299 7.88L11.3199 4.86L11.5799 4.33V9.39C11.5799 9.56333 11.5266 9.71 11.4199 9.83C11.3133 9.94333 11.1733 10 10.9999 10C10.8333 10 10.6966 9.94333 10.5899 9.83C10.4833 9.71 10.4299 9.56333 10.4299 9.39V3.6C10.4299 3.43333 10.4899 3.29 10.6099 3.17C10.7366 3.05 10.8866 2.99 11.0599 2.99ZM22.4933 4.65C22.6666 4.65 22.81 4.71 22.9233 4.83C23.0366 4.94333 23.0933 5.08667 23.0933 5.26V7.8C23.0933 8.50667 22.8966 9.06667 22.5033 9.48C22.11 9.89333 21.5433 10.1 20.8033 10.1C20.0633 10.1 19.4966 9.89333 19.1033 9.48C18.7166 9.06667 18.5233 8.50667 18.5233 7.8V5.26C18.5233 5.08667 18.58 4.94333 18.6933 4.83C18.8066 4.71 18.95 4.65 19.1233 4.65C19.2966 4.65 19.44 4.71 19.5533 4.83C19.6666 4.94333 19.7233 5.08667 19.7233 5.26V7.8C19.7233 8.20667 19.8133 8.51 19.9933 8.71C20.1733 8.90333 20.4433 9 20.8033 9C21.17 9 21.4433 8.90333 21.6233 8.71C21.8033 8.51 21.8933 8.20667 21.8933 7.8V5.26C21.8933 5.08667 21.95 4.94333 22.0633 4.83C22.1766 4.71 22.32 4.65 22.4933 4.65ZM24.0824 9.17C24.0158 9.07667 23.9858 8.95667 23.9924 8.81C23.9991 8.66333 24.0858 8.53667 24.2524 8.43C24.3591 8.36333 24.4724 8.33667 24.5924 8.35C24.7124 8.35667 24.8291 8.41667 24.9424 8.53C25.1358 8.72333 25.3391 8.87333 25.5524 8.98C25.7658 9.08667 26.0324 9.14 26.3524 9.14C26.4524 9.13333 26.5624 9.12 26.6824 9.1C26.8024 9.07333 26.9058 9.02 26.9924 8.94C27.0858 8.85333 27.1324 8.72333 27.1324 8.55C27.1324 8.40333 27.0824 8.28667 26.9824 8.2C26.8824 8.11333 26.7491 8.04 26.5824 7.98C26.4224 7.92 26.2424 7.86333 26.0424 7.81C25.8358 7.75 25.6224 7.68333 25.4024 7.61C25.1891 7.53667 24.9924 7.44333 24.8124 7.33C24.6324 7.21 24.4858 7.05333 24.3724 6.86C24.2591 6.66667 24.2024 6.42333 24.2024 6.13C24.2024 5.79667 24.2958 5.51333 24.4824 5.28C24.6691 5.04667 24.9091 4.86667 25.2024 4.74C25.5024 4.61333 25.8158 4.55 26.1424 4.55C26.3491 4.55 26.5658 4.57667 26.7924 4.63C27.0191 4.67667 27.2358 4.75667 27.4424 4.87C27.6491 4.97667 27.8224 5.12 27.9624 5.3C28.0358 5.4 28.0791 5.52 28.0924 5.66C28.1058 5.8 28.0424 5.92667 27.9024 6.04C27.8024 6.12 27.6858 6.15667 27.5524 6.15C27.4191 6.13667 27.3091 6.09 27.2224 6.01C27.1091 5.86333 26.9558 5.74667 26.7624 5.66C26.5758 5.57333 26.3591 5.53 26.1124 5.53C26.0124 5.53 25.9024 5.54333 25.7824 5.57C25.6691 5.59 25.5691 5.64 25.4824 5.72C25.3958 5.79333 25.3524 5.91333 25.3524 6.08C25.3524 6.23333 25.4024 6.35667 25.5024 6.45C25.6024 6.53667 25.7358 6.61 25.9024 6.67C26.0758 6.72333 26.2591 6.77667 26.4524 6.83C26.6524 6.88333 26.8558 6.94667 27.0624 7.02C27.2691 7.09333 27.4591 7.19 27.6324 7.31C27.8058 7.43 27.9458 7.58667 28.0524 7.78C28.1591 7.96667 28.2124 8.20667 28.2124 8.5C28.2124 8.84 28.1124 9.13 27.9124 9.37C27.7124 9.61 27.4624 9.79333 27.1624 9.92C26.8624 10.04 26.5558 10.1 26.2424 10.1C25.8491 10.1 25.4558 10.0333 25.0624 9.9C24.6691 9.76 24.3424 9.51667 24.0824 9.17ZM30.3467 9.39C30.3467 9.56333 30.29 9.71 30.1767 9.83C30.0633 9.94333 29.92 10 29.7467 10C29.5733 10 29.43 9.94333 29.3167 9.83C29.2033 9.71 29.1467 9.56333 29.1467 9.39V5.26C29.1467 5.08667 29.2033 4.94333 29.3167 4.83C29.43 4.71 29.5733 4.65 29.7467 4.65C29.92 4.65 30.0633 4.71 30.1767 4.83C30.29 4.94333 30.3467 5.08667 30.3467 5.26V9.39ZM29.7367 4C29.51 4 29.35 3.96333 29.2567 3.89C29.1633 3.81667 29.1167 3.68667 29.1167 3.5V3.31C29.1167 3.11667 29.1667 2.98667 29.2667 2.92C29.3733 2.84667 29.5333 2.81 29.7467 2.81C29.98 2.81 30.1433 2.84667 30.2367 2.92C30.33 2.99333 30.3767 3.12333 30.3767 3.31V3.5C30.3767 3.69333 30.3267 3.82667 30.2267 3.9C30.1267 3.96667 29.9633 4 29.7367 4ZM33.9599 4.55C34.3399 4.55 34.6699 4.59 34.9499 4.67C35.2366 4.75 35.4566 4.86333 35.6099 5.01C35.7699 5.15 35.8499 5.32 35.8499 5.52C35.8499 5.65333 35.8099 5.78 35.7299 5.9C35.6499 6.01333 35.5333 6.07 35.3799 6.07C35.2733 6.07 35.1833 6.05667 35.1099 6.03C35.0433 5.99667 34.9833 5.95667 34.9299 5.91C34.8766 5.86333 34.8133 5.82 34.7399 5.78C34.6733 5.74 34.5699 5.71 34.4299 5.69C34.2966 5.66333 34.1966 5.65 34.1299 5.65C33.7899 5.65 33.4999 5.72333 33.2599 5.87C33.0266 6.01667 32.8466 6.21667 32.7199 6.47C32.5933 6.71667 32.5299 7.00333 32.5299 7.33C32.5299 7.65 32.5933 7.93667 32.7199 8.19C32.8533 8.43667 33.0333 8.63333 33.2599 8.78C33.4933 8.92667 33.7599 9 34.0599 9C34.2266 9 34.3699 8.99 34.4899 8.97C34.6099 8.95 34.7099 8.92 34.7899 8.88C34.8833 8.82667 34.9666 8.77 35.0399 8.71C35.1133 8.65 35.2233 8.62 35.3699 8.62C35.5433 8.62 35.6766 8.67667 35.7699 8.79C35.8633 8.89667 35.9099 9.03 35.9099 9.19C35.9099 9.35667 35.8166 9.51 35.6299 9.65C35.4433 9.78333 35.1966 9.89333 34.8899 9.98C34.5899 10.06 34.2633 10.1 33.9099 10.1C33.3833 10.1 32.9266 9.98 32.5399 9.74C32.1533 9.49333 31.8533 9.16 31.6399 8.74C31.4333 8.32 31.3299 7.85 31.3299 7.33C31.3299 6.78333 31.4399 6.30333 31.6599 5.89C31.8866 5.47 32.1966 5.14333 32.5899 4.91C32.9899 4.67 33.4466 4.55 33.9599 4.55Z" fill="#A4C7C6"/>
                            <path d="M41.1552 4.55C41.3286 4.55 41.4719 4.60667 41.5852 4.72C41.6986 4.83333 41.7552 4.98 41.7552 5.16V9.39C41.7552 9.56333 41.6986 9.71 41.5852 9.83C41.4719 9.94333 41.3286 10 41.1552 10C40.9819 10 40.8386 9.94333 40.7252 9.83C40.6119 9.71 40.5552 9.56333 40.5552 9.39V8.9L40.7752 8.99C40.7752 9.07667 40.7286 9.18333 40.6352 9.31C40.5419 9.43 40.4152 9.55 40.2552 9.67C40.0952 9.79 39.9052 9.89333 39.6852 9.98C39.4719 10.06 39.2386 10.1 38.9852 10.1C38.5252 10.1 38.1086 9.98333 37.7352 9.75C37.3619 9.51 37.0652 9.18333 36.8452 8.77C36.6319 8.35 36.5252 7.87 36.5252 7.33C36.5252 6.78333 36.6319 6.30333 36.8452 5.89C37.0652 5.47 37.3586 5.14333 37.7252 4.91C38.0919 4.67 38.4986 4.55 38.9452 4.55C39.2319 4.55 39.4952 4.59333 39.7352 4.68C39.9752 4.76667 40.1819 4.87667 40.3552 5.01C40.5352 5.14333 40.6719 5.28 40.7652 5.42C40.8652 5.55333 40.9152 5.66667 40.9152 5.76L40.5552 5.89V5.16C40.5552 4.98667 40.6119 4.84333 40.7252 4.73C40.8386 4.61 40.9819 4.55 41.1552 4.55ZM39.1352 9C39.4286 9 39.6852 8.92667 39.9052 8.78C40.1252 8.63333 40.2952 8.43333 40.4152 8.18C40.5419 7.92667 40.6052 7.64333 40.6052 7.33C40.6052 7.01 40.5419 6.72333 40.4152 6.47C40.2952 6.21667 40.1252 6.01667 39.9052 5.87C39.6852 5.72333 39.4286 5.65 39.1352 5.65C38.8486 5.65 38.5952 5.72333 38.3752 5.87C38.1552 6.01667 37.9819 6.21667 37.8552 6.47C37.7352 6.72333 37.6752 7.01 37.6752 7.33C37.6752 7.64333 37.7352 7.92667 37.8552 8.18C37.9819 8.43333 38.1552 8.63333 38.3752 8.78C38.5952 8.92667 38.8486 9 39.1352 9Z" fill="#FACD66"/>
                            <defs>
                            <clipPath id="clip0_7123_502">
                            <rect width="7.92" height="10" fill="white" transform="translate(0 1)"/>
                            </clipPath>
                            </defs> 
                        </svg>
                    </div>
                    <div className='lines'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chartart