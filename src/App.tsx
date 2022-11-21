import './global.css';
import { Header } from './Header';
import { TaskList } from './TaskList';

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList/>
      </main>
    </>
  )
}

export default App
