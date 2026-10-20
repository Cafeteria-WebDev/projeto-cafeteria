const Card = ({ nome, preco, imagem }) => {
    return (
        <div >
            <img src={imagem} alt={nome}/>
            <article >
                <h2 >{nome}</h2>
                <p >{preco}</p>
                <button >Comprar</button>
            </article>
        </div>

    )
}

export default Card