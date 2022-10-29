import './App.css';
import useTheme from './hooks/useTheme';
import Main from './Main'

function App() {
  const [nextTheme, setTheme] = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = nextTheme === 'light' ? 'dark': 'light';
  
    if(currentTheme === 'dark'){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setTheme(nextTheme)}
             className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
        )
    }else{
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => setTheme(nextTheme)}
            className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        )
    }
  }
  
  return (
    // h-screen 
    <div style={{height:'100vh'}} className='bg-gray-200 dark:bg-neutral-900'>
      <div style={{height:'7%'}} className='py-2 px-5 flex justify-end  '>
        {renderThemeChanger()}
      </div>
      {/* h-4/5 */}
      <div style={{height:'80%'}} className=' flex justify-center items-center'>
        <Main />
      </div>
      <div style={{height:'7%'}} className='mt-8 sm:p-1'>
        <div className='grid  '>
          <div className='grid-cols-6 flex justify-center items-center'>
          <p className='text-center bg-blue-600 text-white font-4xl sm:py-1 px-2 sm:px-4 rounded rounded-xl'>Made with 🤍 by <a href='https://www.instagram.com/pranaykumar001'>@gpranaykumar</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
