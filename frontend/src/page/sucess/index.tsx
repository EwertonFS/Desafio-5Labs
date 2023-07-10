import style from './Container.module.css'
import group from '../../assets/sucess.jpeg'
export function Sucess() {
    return ( 
        <>
        <div className={style.Container}>
        <div>Sucesso Aguarde que enviaremos o quantos antes </div>
            <img src={group}/>
        </div>
        </>
     );
}

