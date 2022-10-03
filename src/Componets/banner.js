import offimg from "../img/offbanner.webp";
function Banner() {
  return (
    <>
      <div className="container">
        <img src={offimg} alt="offbanner"  className="off-card"/>
      </div>
    </>
  );
}

export default Banner;
