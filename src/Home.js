import React from "react";

function Home() {
  return (
    <div className="home_content">
      <div className="intro">
        <h1>
          Welcome to <span className="putcolor">Mobiplace📱</span>, the place where you can see reviews for any 
          mobile of your choice on<a href="https://www.youtube.com" target="_blank" rel='noreferrer'>Youtube</a>
          and understand it better. 
        </h1>
        <a href="./products">Check the mobiles!</a>
        <img src="./images/figure.png" alt="figure"></img>
      </div>
            <div className="intro2">
    <img src="./images/youtubephone.png" alt="youtubephone"></img>
      <h3>You already have the mobile listed? Press the like👍 button if your experience was good with it or dislike👎 if you definetely not recommend it.<span class="goto"> Go to <a href="./products">products</a> and find the mobiles.</span></h3>
    </div>
    </div>
  );
}

export default Home;
