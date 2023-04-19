import { Card } from "react-bootstrap";
import Facebook from '../../assets/facebook.png'
import Downloads from '../../assets/download.png'
import Cofee from '../../assets/Cofee.png'
import classes from './footer.module.css'
const Footer = () => {
  return (
    <Card>
      <Card.Body className={classes.footer1}>
        <footer>
          <h1>The Genrics</h1>
          <span>
          <a  href="https://www.youtube.com/"><img  
          src={Downloads} 
          alt="youtube" 
          width="25" 
          height="25" 

         /></a>
          <a href="https://open.spotify.com/"> <img 
          src={Facebook} 
          alt="youtube" 
          width="25" 
          height="25" /></a>
         <a href="https://www.facebook.com/" ><img 
          src={Cofee} 
          alt="youtube" 
          width="25" 
          height="25" /></a> </span>
        </footer>
      </Card.Body>
    </Card>
  );
};
export default Footer;