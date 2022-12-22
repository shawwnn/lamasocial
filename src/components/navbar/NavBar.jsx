import './navbar.scss'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none'}}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode 
          ? <DarkModeOutlinedIcon onClick={toggleDarkMode}/> 
          : <WbSunnyOutlinedIcon  onClick={toggleDarkMode}/>}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
          <span>John Doe</span>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar