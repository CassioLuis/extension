import ButtonC from "./button.jsx"
import FooterC from "./footer.jsx"
import LogoC from "./logo.jsx"

export default function App(){
  const meusCus = [
    'NFe',
    'NFCe',
    'CTe',
    'MEU PINTO',
    'Aumente seu penis',
    'piroquinha'
  ]
    return (
		<section>
            <header>
                <LogoC/>
            </header>
            <main className="item item2">
                { meusCus.map((cuS,index) => (<ButtonC key={index} meuCu={cuS}/>)) }
            </main>
                <FooterC/>
        </section>
    )
}