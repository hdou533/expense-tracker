import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
function App() {
  return (
    <div className='app'>
      <Header />
      <Balance />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
