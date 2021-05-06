import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Pay from "../Pay";
import Details from "../Details";
import "./home.css";
import Bag from "../Bag";
import Favorite from "../Favorite";
import Info from "../Info";
export default function Home(props) {
  const [favorite, setFavorite] = useState(false);
  const [bag, setBag] = useState(false);
  const [pay, setPay] = useState(false);
  const [detailToggle, setDetailToggle] = React.useState(false)
  const [infoToggle, setInfoToggle] = React.useState(false)


//   const detailsOpen=()=>{
//     setDetailToggle(!detailToggle)
// }
// const detailsClose=()=>{
//     if(detailToggle !== false ){
//         setDetailToggle(false)
//     }
// }
const infoOpen=()=>{
    setInfoToggle(!infoToggle)
}
const infoClose=()=>{
    if(infoToggle !== false ){
        setInfoToggle(false)
    }
}
  const detailsOpen = () => {
    setDetailToggle(!detailToggle);
  };
  const detailsClose = () => {
    if (detailToggle !== false) {
      setDetailToggle(false);
    }
  };

  const favoriteOpen = () => {
    setFavorite(!favorite);
  };
  const favoriteClose = () => {
    if (favorite !== false) {
      setFavorite(false);
    }
  };

  const bagOpen = () => {
    setBag(!bag);
  };
  const bagClose = () => {
    if (bag !== false) {
      setBag(false);
    }
  };

  const payOpen = () => {
    setPay(!pay);
  };
  const payClose = () => {
    if (pay !== false) {
      setPay(false);
    }
  };
  return (
    <div>
      <Header 
          favoriteClose={favoriteClose}
          favoriteOpen={favoriteOpen}
          bagClose={bagClose}
          bagOpen={bagOpen}
          payClose={payClose}
          payOpen={payOpen}
      />

      <div className="back-color">
        <div className="container">
          <div className="first-category" onClick={detailsOpen}>
            <h5 className="category-name">Mac</h5>
          </div>
          <div className="second-category"onClick={detailsOpen}>
            <h5 className="category-name">IPad</h5>
          </div>
          <div className="third-category"onClick={detailsOpen}>
            <h5 className="category-name">IPhone</h5>
          </div>
          <div className="forth-category"onClick={detailsOpen}>
            <h5 className="category-name">Whatch</h5>
          </div>
          <div className="fifth-category"onClick={detailsOpen}>
            <h5 className="category-name">TV</h5>
          </div>
          <div className="sixth-category"onClick={detailsOpen}>
            <h5 className="category-name">Accessories</h5>
          </div>
        </div>
        <div className="second-container">
          <h4 className="second-container-name">Apple</h4>
          <p className="second-container-text">
            Apple Inc. is an American multinational technology company
            headquartered in Cupertino, California, <br />
            that designs, develops, and sells consumer electronics, computer
            software, and online services. <br />
            It is considered one of the Big Five companies in the U.S.
            information technology industry, along with Amazon, Google, <br />
            Microsoft, and Facebook. Its hardware products include iPhone
            smartphones, iPad tablet computers, <br />
            Mac personal computers, iPod portable media players, Apple Watch
            smartwatches, Apple TV digital media players, <br />
            AirPods wireless earbuds, AirPods Max headphones, and the HomePod
            smart speaker line. <br />
            Apple's software includes the iOS, iPadOS, macOS, watchOS, and tvOS
            operating systems, the iTunes media player, <br />
            the Safari web browser, the Shazam music identifier, and the iLife
            and iWork creativity and productivity suites, <br />
            as well as professional applications like Final Cut Pro, Logic Pro,
            and Xcode. Its online services include the iTunes Store, <br />
            the iOS App Store, Mac App Store, Apple Arcade, Apple Music, Apple
            TV+, Apple Fitness+, iMessage, and iCloud. <br />
            Other services include Apple Stores, the Genius Bar, AppleCare,
            Apple Pay, Apple Cash, and Apple Card.
          </p>
        </div>
      </div>

      {detailToggle?<Details
            detailsClose={detailsClose}
            detailsOpen={detailsOpen}
             infoOpen={infoOpen}
           infoClose={infoClose}
         />:null}
        {infoToggle? <Info
           infoOpen={infoOpen}
           infoClose={infoClose}
           detailsOpen={detailsOpen}
           infoToggle={infoToggle}
         />:null}


      
      {favorite ? 
        <Favorite
          favoriteClose={favoriteClose}
          favoriteOpen={favoriteOpen}
          bagClose={bagClose}
          bagOpen={bagOpen}
        />
       : null}
      {bag ? 
        <Bag
          bagClose={bagClose}
          bagOpen={bagOpen}
          payClose={payClose}
          payOpen={payOpen}
        />
       : null}
      {pay ? 
        <Pay
          bagClose={bagClose}
          bagOpen={bagOpen}
          payClose={payClose}
          payOpen={payOpen}
        />
       : null}

      <Footer />
    </div>
  );
}
