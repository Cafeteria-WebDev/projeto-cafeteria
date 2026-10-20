import Card from "../components/Card"

import Cafe1 from "../assets/cafe1.jpg"
import Cafe2 from "../assets/cafe2.jpg"
import Cafe3 from "../assets/cafe3.jpg"
import Cafe4 from "../assets/cafe4.jpg"

const Produtos = () => {
    const produtos = [
        {
            id: 1,
            nome: "Cappuccino",
            preco: "R$ 16,00",
            imagem: Cafe1
        },
        {
            id: 2,
            nome: "Latte",
            preco: "R$ 18,00",
            imagem: Cafe2
        },
        {
            id: 3,
            nome: "Espresso",
            preco: "R$ 10,00",
            imagem: Cafe3
        },
        {
            id: 4,
            nome: "Mocha",
            preco: "R$ 20,00",
            imagem: Cafe4
        }
    ]


    return (
        <main>
            <h2 >Nossos Produtos</h2>
            <section >
                {produtos.map((produto) => (
                    <Card
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </section>
        </main>
    )
    
    
}

export default Produtos