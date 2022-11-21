import Navbar from "../../components/Home/header/header"
import SvgArt from "../../components/Home/svg/svg"
import { App } from "./styles"

export default function Home() {
    return (
        <>
            <App>
                <Navbar />
                <SvgArt />
            </App>
        </>
    )
}