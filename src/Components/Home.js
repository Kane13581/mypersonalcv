import React from "react";

function Home() {
  return (
    <div className="HomePageSyle">
      <div className="HomeDivStyle">
        <h2 className="HomeBottomTextStyle">Home</h2>
      </div>

      <div className="HomeContentScreen">

        <div className="Carousel">


          <div id="myCarousel" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              <div class="item active">
                <img className="HomeCarFirstImg" src={require('./../Assets/Home/slide1.jpg')} alt="location.jpg" />
              </div>

              <div class="item">
                <img className="HomeCarFirstImg" src={require('./../Assets/Home/slide2.jpg')} alt="location.jpg" />
              </div>

              <div class="item">
                <img className="HomeCarFirstImg" src={require('./../Assets/Home/slide3.jpg')} alt="location.jpg" />
              </div>
            </div>


            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>

        <div className="HomeLeftPictures">
          <img className="HomeImageWho" src={require('./../Assets/Home/who.jpg')} alt="location.jpg" />
        </div>

        <div className="HomeBlackBoard">
          <div className="HomeDetailsContainer">
            <img className="HomeQRcode" src={require('./../Assets/Home/QRcodeGit.png')} alt="location.jpg" />
            <img className="HomeQRcode1" src={require('./../Assets/Home/QRcodeLink.png')} alt="location.jpg" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;