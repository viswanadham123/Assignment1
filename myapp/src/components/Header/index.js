import {Link, withRouter} from 'react-router-dom'

import "../Header/index.css"

const Header=(props)=>{
    const {history}=props
const pageLogout=(props)=>{
    
    history.push("/login-page")
    localStorage.removeItem("formData")
}
    
    
    return(<div className="main-div">
    <Link to="/">
        <p className="header1">Home</p>
    </Link>
    <Link to="/profile"><p className="header1">Profile</p></Link>  
    <Link to="/medicine"><p className="header1">Medicine Reminder</p></Link>
    <Link to="/health-check"><p className="header1">Health Check</p></Link>
    <Link to="/health-tips"><p className='header1'>Health tips</p></Link>
    <p onClick={pageLogout}>Logout</p>
</div>)}

export default withRouter(Header)