import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Article from "./Article";
import Login from "./User/Login"
import Register from "./User/Register"
import Dashboard from "./User/Dashboard"
import Person from "./Person"
import Donate from "./Donate"

import {Routes as Switch , Route} from 'react-router-dom'

function Main() {

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/person" element={<Person />} />
        <Route path="/pay" element={<Donate />} />
      </Switch>
      
      <Footer/>
    </div>
  )
}

export default Main
