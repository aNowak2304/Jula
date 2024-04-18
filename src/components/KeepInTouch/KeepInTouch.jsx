import './KeepInTouch.scss';

const KeepInToch = () => {

  const messages = ["Napisz już dziś by skorzystać z promocyjnej oferty!", "Napisz już dziś by skorzystać z promocyjnej oferty!", "Napisz już dziś by skorzystać z promocyjnej oferty!"];
  return (
    <section className='contact'>
        <div className="contact__box">
        <h2 className="contact__heading">Bądźmy w kontakcie!</h2>
        <p className="contact__text">Bym mogła dostosowywać ofertę do Twoich oczekiwań.</p>
        <button className='contact__btn'>Kontakt</button>
      <div className="shadow-box"></div>
        </div>

        <div className="contact__container">
      <div className="contact__container-text">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default KeepInToch;