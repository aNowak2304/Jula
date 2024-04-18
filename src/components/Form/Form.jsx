import './Form.scss';

const Form = () => {
  return (
    <section className='form'>
        <div className="wrapper">
            <form action="form">
            <h2 className='form__heading'>ZOSTAW WIADOMOŚĆ</h2>
  <p className='form__text'>A za pomocą jej spełnić Twoją wizję.</p>
  
  {/* <label>IMIĘ</label>
  <input>
  
  <label>NAZWISKO</label>
  <input>
  
  <label>TEMAT</label>
  <input>
  
  <label>WIADOMOŚĆ</label>
  <textarea></textarea> */}
  
  <button className='form__btn'>WYŚLIJ</button>
            </form>
        </div>
    </section>
  );
};

export default Form;