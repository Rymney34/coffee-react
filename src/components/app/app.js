
import './app.css';
import AppHeader from '../app-header/app-header.js'
import MainBgBlock from '../main-bg/main-bg-block.js';
import AboutUsBlock from '../about-us-block/about-us-block.js';
import OurBestBlock from '../our-best-block/our-best-bloc.js';
function App() {
  return (
    <div className="App">
     <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
      <MainBgBlock>
        
      </MainBgBlock>
      <AboutUsBlock></AboutUsBlock>
      <OurBestBlock></OurBestBlock>
 
    </div>
  );
}

export default App;
