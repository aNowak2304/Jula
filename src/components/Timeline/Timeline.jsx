import './Timeline.scss';

const Timeline = () => {
  return (
    <section className='timeline'>
        <div className="circle-box">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>

            <h2 className='timeline__heading'>Jak działam</h2>
            <p className='timeline__title'>Krok po kroku</p>
        <div className="wrapper">
            <div className="timeline__box">
                <p className='timeline__box-counter'>01.</p>
                <div className="timeline__info">
                    <p className='timeline__info-title'>Krok pierwszy</p>
                    <p className='timeline__info-other'>Poznanie potrzeb </p>
                    <p className='timeline__info-text'>Poznanie potrzeb Analizuję potrzeby i cele klienta, aby zrozumieć jego oczekiwania i grupę docelową</p>
                </div>
            </div>

            <div className="timeline__box">
                <p className='timeline__box-counter'>02.</p>
                <div className="timeline__info">
                    <p className='timeline__info-title'>Krok drugi</p>
                    <p className='timeline__info-other'>Doradztwo marketingowe </p>
                    <p className='timeline__info-text'>Doradztwo marketingowe Oferuję wsparcie i doradztwo marketingowe, proponując skuteczne strategie promocji.</p>
                </div>
            </div>

            <div className="timeline__box">
                <p className='timeline__box-counter'>03.</p>
                <div className="timeline__info">
                    <p className='timeline__info-title'>Krok trzeci</p>
                    <p className='timeline__info-other'>Projekt wstępny </p>
                    <p className='timeline__info-text'>Projekt wstępny Tworzę pierwsze koncepcje graficzne lub szkice strony internetowej, które następnie przedstawiam klientowi do oceny.</p>
                </div>
            </div>

            <div className="timeline__box">
                <p className='timeline__box-counter'>04.</p>
                <div className="timeline__info">
                    <p className='timeline__info-title'>Krok czwarty</p>
                    <p className='timeline__info-other'>Realizacja projektu </p>
                    <p className='timeline__info-text'>Realizacja projektu Przechodzimy do finalnej produkcji grafik komputerowych lub strony internetowej, zapewniając ciągłą komunikację i dostarczając gotowy produkt zgodnie z ustalonymi terminami.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Timeline;