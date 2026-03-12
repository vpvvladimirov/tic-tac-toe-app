import HeaderImage from "../assets/game-logo.png";

function Header() {
  return (
    <header>
      <img src={HeaderImage} alt="Tic-Tac-Toe logo"/>
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}

export default Header;
