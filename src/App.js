import './App.css';
import  {Index}  from './component';
import { Create } from './component/create';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return ( 
    <>
      <Create></Create>
      <Index></Index>
    </>
  );
}

export default App;
