import logo from './logo.svg';
import './App.css';
import { data } from './utils/data';
import { FileSystem } from './Components/FileSystem';
function App() {
  return (
    <div className="App">
      <h1>File System </h1>
      <FileSystem  data={data} />
    </div>
  );
}

export default App;
