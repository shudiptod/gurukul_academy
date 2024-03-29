import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Prices from './components/Prices/Prices';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';
function App() {

  const [courses, setCourses] = useState({});

  useEffect(() => {

    fetch('./fakedb.json')
      .then(res => res.json())
      .then(data => setCourses(data));

  }, []);
  return (
    <div className="w-full">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home courses={courses} ></Home>
          </Route>
          <Route path="/home">
            <Home courses={courses}></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services courses={courses}></Services>
          </Route>
          <Route path="/prices">
            <Prices></Prices>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
