
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../homePage/homePage"
import OurCoffee from '../our-coffee/our-coffee';
import AboutCoffeeItems from '../about-coffee-item/about-coffee-item';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';
import { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
               data :[
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Brazil", price: 200, id: 1},
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Kenya", price:  200, id: 2},
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Columbia",price:200, id: 3},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 4},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 5},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 6},
                     
                     
                     ],
                     term: "",
                     filter: ""
               }
    }

  render() {

    const {data} = this.state;
      return (
        
          <Router>
            <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/ourCoffee" element={<OurCoffee data={data} />} />
              <Route path="/page1" element={<AboutCoffeeItems />} />
              <Route path="/forPleasure" element={<ForYourPleasure data={data}/>} />
            </Routes>

            
          </Router>
        );
}
  
}

export default App;
