import ButtonC from "./button.jsx"
import FooterC from "./footer.jsx"
import LogoC from "./logo.jsx"

export default function App(){
    return (
		<section>
            <header>
                <LogoC/>
            </header>
            <main className="item item2">
                <ButtonC/>
                <ButtonC/>
                <ButtonC/>
                <ButtonC/>
            </main>
                <FooterC/>
        </section>
    )
}