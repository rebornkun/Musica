import './Box.css'


const Box = ({songCover, songName, artist}) => {
    return ( 
        <div className="box">
            <div className='box_img_container'>
                <img src={songCover} alt='box pic'/>
            </div>
            <div className='box_detials'>
                <p>{songName}</p>
                <p>{artist}</p>
            </div>
        </div>
     );
}
 
export default Box;