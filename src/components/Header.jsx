import trollFace from "/src/assets/trollFace.png"

export function Header(){
  return(
    <header className="header">
      <div className="header__title-container">
        <img className="header__trollFace" src={trollFace}/>
        <h1 className="header__title">Meme generator</h1>
      </div>
      <h4 className="header__h4">React Course - Project 3</h4>
    </header>
  )
}
