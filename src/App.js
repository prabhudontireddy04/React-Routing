import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog/blog';
import Post from './pages/blog/post';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/' style={{marginRight:'20px'}}>Home</Link>
        <Link to='/about' style={{marginRight:'20px'}}>About</Link>
        <Link to='/contact' style={{marginRight:'20px'}}>Contact</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:postID' element={<Post/>}/>
      </Routes>
    </Router>
  )
}

export default App




// import React from 'react';
// import Counter from "./counter";
// const App = () => {
//   return (
//     <div>
//       <center>
//         <Counter />
//       </center>
//     </div>
//   );
// }
// export default App;
