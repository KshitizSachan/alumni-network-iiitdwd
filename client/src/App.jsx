//==============================|| Library Imports ||================================
import {RecoilRoot} from "recoil";

//==============================|| Project Imports ||================================
import Count from "./components/Count";
import {PrimaryButton} from './components/Buttons'

const App =() => {
  return (
<>
  <RecoilRoot>
  <p className='text-2xl'>Hello from client</p>
  <PrimaryButton/>
    <Count/>
    </RecoilRoot>
</>
  );
}

export default App;
