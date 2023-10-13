import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Article from "./Article";


import {Routes as Switch , Route} from 'react-router-dom'

function Main() {

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Switch>
      
      <Footer/>
    </div>
  )
}

export default Main
