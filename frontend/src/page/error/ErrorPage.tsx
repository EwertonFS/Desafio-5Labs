import style from './Container.module.css'
/* import style from './Home.module.css' */
export function Error() {
    return (
      <>
      <div className={style.Container}>
        <h1>Desculpe algo deu MUITO<span></span><br/>MUITO deu Errado!</h1>
        <iframe
          src="https://giphy.com/embed/8SxGru3XzElqg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          title="Error GIF"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/darth-vader-star-wars-gif-8SxGru3XzElqg">
            via GIPHY
          </a>
        </p>
      </div>
      </>
    );
  }
  