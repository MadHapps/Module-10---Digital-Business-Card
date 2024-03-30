import './App.css'
import Info from './components/info.jsx'
import Content from './components/content.jsx'
import Footer from './components/footer.jsx'
import HeaderImg from './assets/joey_beach_bw.jpg'

function App() {

  return (
      <div className='app-wrapper'>
        <img className='headerPortrait' src={HeaderImg} />
        <Info />
        <Content />
        <Footer />
      </div>
  )
}

export default App
