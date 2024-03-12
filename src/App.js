import './App.css';
import Invoice from "./invoice/Invoice";
import {useState} from "react";

function App() {

    const [hide, setHide] = useState(false);

    return (
        <div>
            <button onClick={() => setHide(!hide)}>
                Toggle Component
            </button>
            {!hide && <Invoice/>}
        </div>
    );
}

export default App;
