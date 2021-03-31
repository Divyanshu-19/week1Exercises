import './App.css';
import {Counter} from "./components/Counter";
import {CharaterCounter} from "./components/CharacterCounter";
import {PasswordMatch} from "./components/PasswordMatch";
import {Alphanumberic} from "./components/Alphanumberic";
import {DisableSubmit} from "./components/DisableSubmit"
import {ShowPassword} from "./components/ShowPassword"
import {DesignerTool} from "./components/DesignerTool"
import {SwitchTabs} from "./components/SwitchTabs"
import {Toast} from "./components/Toast"
import {Todo} from "./components/Todo"
import DarkMode from './components/DarkMode';

function App() {
  return (
    <div className="App">
      <Counter />
      <CharaterCounter />
      <PasswordMatch />
      <Alphanumberic />
      <DisableSubmit />
      <ShowPassword />
      <DesignerTool />
      <SwitchTabs />
      <Toast />
      <Todo />
      <DarkMode />
    </div>
  );
}

export default App;
