import './style.scss';
import { useHistory } from "react-router-dom"

export default function Header() {
  const history = useHistory();

  function redirectToHome() {
    history.push("/");
  }

  return (
    <header className="home__header">
      <div className="home__header__logo" onClick={redirectToHome}></div>
    </header>
  )
}