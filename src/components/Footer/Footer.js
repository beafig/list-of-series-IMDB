import logo from '../../images/tv-logo.png'
import '../../styles/layout/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Made it with 💜 by Bea</p>
        <span className="footer__copy">©️</span>
        <a href="https://github.com/beafig" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github-alt"></i></a>
        <a href="https://www.linkedin.com/in/bea-figueroa/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i></a>
      </div>
      <img src={logo} alt="logo tv" title="logo tv" className="footer__img" />
    </footer>
  )
}
export default Footer;