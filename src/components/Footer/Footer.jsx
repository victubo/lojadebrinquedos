import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitterx.png'

function Footer() {

  return (
    <div>
        <img src={Facebook} alt="facebook_logo"/>
        <img src={Instagram} alt="instagram_logo"/>
        <img src={Twitter} alt="twitter_logo"/>
        <h5>© 2024 - Todos os direitos reservados.</h5>
    </div>
  )
}

export default Footer