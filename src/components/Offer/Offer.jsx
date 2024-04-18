import './Offer.scss';
import offerImg1 from '../img/offerImg1.png';
import offerImg2 from '../img/offerImg2.jpg';
import offerImg3 from '../img/offerImg3.jpg';
import offerImg4 from '../img/offerImg4.jpg';

const Offer = () => {
  return (
    <section className='offer'>


    <div className="offer__card offer__card--first">

<div className="wrapper">
<div className="offer__box">

<h2 className='offer__box-heading'>Projektowanie grafiki reklamowej:</h2>

<p className='offer__box-text'>Moja usługa polega na projektowaniu atrakcyjnych i skutecznych materiałów reklamowych, takich jak banery internetowe, plakaty czy ulotki. Dzięki moim umiejętnościom w zakresie kompozycji, kolorystyki i typografii, dostarczam grafiki, które przyciągają uwagę i skutecznie przekazują przekaz reklamowy.</p>

<p className='offer__box-describe'>Zaufaj specjaliście</p>
  </div>


<div className="offer__box offer__box--last offer__box--first offer__box--right">
<img className='offer__box-image' src={offerImg1} />
<span className='offer__box-numbers'>01</span>

</div>
</div>
    </div>

    <div className="offer__card">

<div className="wrapper wrapper--left">
<div className="offer__box">

    <h2 className='offer__box-heading'>Retuszowanie 
i edycja fotografii:</h2>

<p className='offer__box-text'>Moja usługa polega na projektowaniu atrakcyjnych i skutecznych materiałów reklamowych, takich jak banery internetowe, plakaty czy ulotki. Dzięki moim umiejętnościom w zakresie kompozycji, kolorystyki i typografii, dostarczam grafiki, które przyciągają uwagę i skutecznie przekazują przekaz reklamowy.</p>

<p className='offer__box-describe'>Zaufaj specjaliście</p>
      </div>


<div className="offer__box offer__box--last offer__box--second">
<img className='offer__box-image' src={offerImg2} />
<span className='offer__box-numbers'>02</span>

</div>
</div>
    </div>

    <div className="offer__card offer__card--third">

      <div className="wrapper">
      <div className="offer__box">

<h2 className='offer__box-heading'>Tworzenie 
grafiki dla 
mediów 
społecznościowych:</h2>

<p className='offer__box-text'>usługa obejmuje projektowanie grafiki dedykowanej do mediów społecznościowych, takiej jak grafiki do postów na Facebooku, Instagramie czy Twitterze. Zapewniam kreatywne i atrakcyjne materiały, które angażują odbiorców i budują świadomość marki.</p>

<p className='offer__box-describe'>Sprawdź i się przekonaj</p>
  </div>


<div className="offer__box offer__box--last offer__box--third">
<img className='offer__box-image' src={offerImg3} />
<span className='offer__box-numbers'>03</span>

</div>

      </div>
    </div>

    <div className="offer__card offer__card--fourth ">

      <div className="wrapper wrapper--left">
      <div className="offer__box">

<h2 className='offer__box-heading'>Projektowanie 
layoutów dla stron 
internetowych 
i aplikacji mobilnych:</h2>

<p className='offer__box-text'>usługa obejmuje projektowanie layoutów dla stron internetowych i aplikacji mobilnych, które zapewniają intuicyjną nawigację i atrakcyjny wygląd. Dzięki mojemu doświadczeniu w projektowaniu interfejsów użytkownika, tworzę rozwiązania, które spełniają oczekiwania klientów i zapewniają doskonałe doświadczenie użytkownika.</p>

<p className='offer__box-describe'>To moja najwięszka specjalność</p>
  </div>


<div className="offer__box offer__box--last">
<img className='offer__box-image' src={offerImg4} />
<span className='offer__box-numbers'>04</span>

</div>
      </div>
    </div>

    

        
    </section>
  );
};

export default Offer;