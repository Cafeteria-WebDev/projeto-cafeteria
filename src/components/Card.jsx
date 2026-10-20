const Card = ({ nome, preco, imagem }) => {
    return (
        <div className="bg-blue-200 p-6 rounded-4xl">
            <img src={imagem} alt={nome} className="w-full h-[250px] object-cover rounded-4xl shadow-2xl" />
            <article className="p-5 text-center">
                <h2 className="font-title-secondary text-xl text-text-accent mb-3">{nome}</h2>
                <p className="font-body text-surface text-xl font-semibold mb-5">{preco}</p>
                <button className="bg-surface text-text-light font-body font-semibold px-6 py-3 rounded-xl cursor-pointer hover:scale-105 transition-all hover:bg-text-accent">Comprar</button>
            </article>
        </div>

    )
}

export default Card