import profilePic from './assets/cf.png';
function Card(){
    return(
        <div className = "card">
            <img src = {profilePic} className = "profilePic"></img>
            <h2 className = "card-title">Cold Fusion</h2>
            <p>Adobe Coldfuison technology</p>
        </div>
    );
}
export default Card ; 