import './LikersPicture.css'

const LikersPicture = ({ image }) => {
    return ( 
        <div className="likers_picture">
            <img src={image} alt='liker picture'/>
        </div>
     );
}
 
export default LikersPicture;