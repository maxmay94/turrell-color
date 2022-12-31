import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex transition-colors bg-pink-600 hover:bg-sky-700 duration-700 h-screen">
      <div className='transition-colors bg-orange-600  hover:bg-pink-600 duration-2000 h-2/3 w-2/3 m-auto align-middle shadow-2xl rounded-full flex'>
        <div className='transition-colors bg-blue-600 hover:bg-emerald-600 h-3/4 duration-1000 w-3/4 m-auto align-middle rounded-full flex'>
          <div className='transition-colors bg-lime-600 hover:bg-red-500 h-3/4 duration-1000 w-3/4 m-auto align-middle rounded-full flex'>
            <div className='transition-colors bg-red-100 hover:bg-slate-800 h-3/4 duration-1000 w-3/4 m-auto align-middle rounded-full flex'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
