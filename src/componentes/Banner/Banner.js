import './Banner.css'

export const Banner = () => {
    //JSX = como React trabalha com o visual
    //retorna essa function que tem nela uma <img> e Append onde ele tá chamando
    return(
        <header className='banner'> 
            <img src='../imagens/banner.png' alt='banner principal'/>
        </header>
    )
}

