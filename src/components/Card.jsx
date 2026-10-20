const Card = ({ nome, preco, imagem }) => {
    return (
        <div >
            <img src={imagem} alt={nome} className="w-full h-[250px] object-cover" />
            <article className="p-5 text-center">
                <h2 className="font-title-secondary text-xl text-text-accent mb-3">{nome}</h2>
                <p className="font-body text-text-light text-xl font-semibold mb-5">{preco}</p>
                <button className="bg-background text-text font-body font-semibold px-6 py-3 rounded-xl cursor-pointer hover:scale-105 transition-all">Comprar</button>
            </article>
        </div>

    )
}

export default Card