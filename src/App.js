import GlobalStyle from './components/GlobalStyle';

// import NavigationMobile from './components/NavigationMobile';
// import About from './components/About';
import Navbar from './components/Nav/Navbar';

import Contact from './components/Contact';

import Home from './pages/Home';
import Destination from './pages/Destination';
import About from './pages/About';
import Partner from './pages/Partner';
import HolidayFinder from './components/HolidayFinder';
import Footer from './components/Footer';

import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Counter from './components/Counter';
import Error from './components/Error';
import CounterHook from './components/CounterHook';
import RandomMood from './components/RandomMood';
import useEffect from './components/useEffect';
// import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      {/* <NavigationMobile /> */}
      {/* <Navigation></Navigation> */}
      <HolidayFinder />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/destination" exact>
          <Destination />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/partner" exact>
          <Partner />
        </Route>

        <Route path="/contact" component={Contact} exact />
        <Route path="/counter" component={Counter} exact />
        <Route path="/counterhook" component={CounterHook} exact />
        <Route path="/useEffect" component={useEffect} exact />
        <Route path="/random" component={RandomMood} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:test" component={BlogItem} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
