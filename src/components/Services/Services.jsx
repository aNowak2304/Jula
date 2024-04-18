import './Services.scss';

const Services = () => {
  return (
    <section className='services'>

        <div className="wrapper">

        <p className='services__text'>Chodź zrobimy to razem!</p>

        <div className="services__box">
        <div className="shadow-img"></div>
        <h2 className='services__heading'>Usługi</h2>
        <p className='services__describe'>Witaj w miejscu, gdzie Twoje pomysły nabierają kształtu i koloru! Moje usługi to sztuka, która ożywia Twoje marzenia i zamienia je w rzeczywistość. Od grafiki po branding, jestem na straży Twojej wizji. pozwól mi przelać Twoje pomysły na światło dzienne!</p>
        </div>

        <button className='services__btn'>Kontakt</button>

        </div>
        
    </section>
  );
};

export default Services;