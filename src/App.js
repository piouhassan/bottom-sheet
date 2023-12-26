import {useState} from "react";
import {BottomSheet} from './components/bottom-sheet/BottomSheet'

function App() {

    const [open, setOpen] = useState(false);


    return (
        <div className="App">

            <button className="btn btn-primary" onClick={event => setOpen(true)}>Open BottomSheet</button>

            <bottom-sheet isOpen={open} onClose={setOpen}>
                  <div slot="content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id neque qui quisquam saepe temporibus? Facilis officiis optio totam? Est exercitationem fugiat ipsum maiores nam, natus obcaecati omnis porro sit veniam.
                  </div>
           </bottom-sheet>
</div>
)
    ;
}

export default App;
