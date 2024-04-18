import './AboutMe.scss';
import aboutMePhoto from '../img/aboutMePhoto.jpg';
import aboutMeLogo1 from '../img/aboutMeLogo1.jpg';
import aboutMeLogo2 from '../img/aboutMeLogo2.jpg';
import aboutMeLogo3 from '../img/aboutMeLogo3.jpg';
import aboutMeLogo4 from '../img/aboutMeLogo4.jpg';

const AboutMe = () => {
  return (
    <section className='aboutme'>

            <div className="circle-box">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>
        <h2 className='aboutme__heading'>Doświadczona specjalistka od projektowania</h2>
        <p className='aboutme__describe'>Kilka słów o mnie</p>

        <div className="aboutme__card">

<div className="wrapper aboutme__card-wrapper">
<div className="aboutme__card-container aboutme__card-container--first">
          <img className='aboutme__card-img' src={aboutMePhoto} alt="" />
          <p className='aboutme__card-title'>Cześć! jestem  <span className='aboutme__card-other'>Julia</span></p>
          </div>
<div className="aboutme__card-container aboutme__card-container--last">
<p className='aboutme__card-text'>
Grafiką komputerową zajmuje się od 5 lat. Specjalizuję się w projektowaniu stron internetowych, skupiając się na zapewnieniu doskonałej użyteczności ,oraz  intuicyjnym interfejsie użytkownika i estetycznym designie. Moja droga do tej profesji rozpoczęła się w technikum fotograficznym, gdzie zdobyłam dyplom technika fotografii i multimediów. Od tego czasu moja praca jest połączeniem kreatywności i technologii, dbając o perfekcyjne wykonanie oraz tworząc ekskluzywne wizualne doznania dla użytkowników.  
</p>
<p className='aboutme__card-name'>Julia Gwiżdż</p>
</div>

</div>

</div>

<div className="aboutme__box">
<div className="circle-box">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div> 
    <p className='aboutme__box-text'>Te marki mi <span className='aboutme__box-other'>zaufały</span></p>

    <div className="wrapper">
    <div className="aboutme__imgBox">
        <img className='aboutme__imgBox-logo' src={aboutMeLogo1} alt="" />
        <img className='aboutme__imgBox-logo' src={aboutMeLogo2} alt="" />
        <img className='aboutme__imgBox-logo' src={aboutMeLogo3} alt="" />
        <img className='aboutme__imgBox-logo' src={aboutMeLogo4} alt="" />
    </div>
    </div>
</div>

    </section>
  );
};

export default AboutMe;