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
        <main className="grow bg-background px-[5%] py-12">
            <h2 className="font-title text-4xl text-text text-center mb-10">Nossos Produtos</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
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