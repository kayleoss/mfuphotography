import './App.css';
import LargeFrame from './Components/LargeFrame';
import Footer from './Components/Footer';
import SmallFrame from './Components/SmallFrame';
import {featuredPhotos, mainFeaturePics} from './Components/photodata.js';
import { Component } from 'react';
import Categories from './Components/Categories';
import Header from './Components/Header';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import CategorySection from './Components/CategorySection/index.js';

class App extends Component {
  onResize() {
    window.location.reload(); 
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/category/:id' element={<CategorySection />} />
        </Routes>
        <ScrollRestoration />
      </div>
    )
  }
}

function Main() {
  return (
    <>
    <Header fixedClass={window.innerWidth > 760 ? 'fixed-top bg-transparent' : 'fixed-top bg-light'} />
        <div className="overflow-y-hidden w-100 overflow-x-hidden mainframe">
          <LargeFrame photos={featuredPhotos} />
        </div>
        <div className="mt-3 text-center">
            <a className="text-dark" href="#features" aria-label="Next"><i className="fa fa-chevron-down"></i></a>
        </div>

        <div id="features" className="container pt-5 pb-5">
          {mainFeaturePics.map(feature => {
            return (
              <SmallFrame {...feature} key={feature.id}/>
            )
          })}
        </div>
        <Categories />
        <Footer />
      </>
  )
}

export default App;
