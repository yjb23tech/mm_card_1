import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h3>Above It All</h3>
            <Card />
        </div>
    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)


