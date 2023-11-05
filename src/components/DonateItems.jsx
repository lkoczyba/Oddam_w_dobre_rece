import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import DiamondCard from "./DiamondCard/DiamondCard.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";
import FormHeader from "./FormHeader/FormHeader.jsx";
import Radio from "./Radio/Radio.jsx";

const DonateItems = () => {

    const [step, setStep] = useState(1);

    const handleStepInc = ()=>{
        setStep(step=>step+1)
    }
    const handleStepDec = ()=>{
        setStep(step=>step-1)
    }

    const importantMessages = ['Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.', 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.', 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.', 'Podaj adres oraz termin odbioru rzeczy.']
    const formTitles = ['Zaznacz co chcesz oddać:', 'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:', 'Lokalizacja:', 'Podaj adres oraz termin odbioru rzecz przez kuriera']
    const handleSubmit1 = (e) => {
        e.preventDefault();
        handleStepInc();
        console.log('form 1 submitted');
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        setStep(step => step + 1);
        console.log('form 2 submitted');
    }

    return (
        <>
            <div className='donate-items'>
                <div className='donate-items__hero'>
                    <div className='donate-items__img-container'>
                        <img className='donate-items__hero-img' src="src/assets/Form-Hero-Image.jpg" alt="cloth"/>
                    </div>
                    <div className='donate-items__title-container'>
                        <Heading text1='Oddaj rzeczy których już nie chcesz' text2='Potrzebujęcym'/>
                        <h2 className='donate-items__subtitle'>Wystarczą 4 proste kroki</h2>
                        <div className='donate-items__diamond-card-container'>
                            <DiamondCard number='1' text='Wybierz rzeczy'/>
                            <DiamondCard number='2' text='Spakuj je w worki'/>
                            <DiamondCard number='3' text='Wybierz fundację'/>
                            <DiamondCard number='4' text='Zamów kuriera'/>
                        </div>
                    </div>
                </div>
                <FormHeader title='Ważne!'
                            text={importantMessages[step-1]}/>
                {step === 1 && <form onSubmit={handleSubmit1} className='donate-form'>
                    <p className='donate-form__step'> Krok {step}/4</p>
                    <h2 className='donate-form__title'>{formTitles[step-1]}</h2>

                    <Radio name='item' label='ubrania, które nadają się do ponownego użycia'/>
                    <Radio name='item' label='ubrania, do wyrzucenia'/>
                    <Radio name='item' label='zabawki'/>
                    <Radio name='item' label='książki'/>
                    <Radio name='item' label='inne'/>
                    <div className='donate-form__button-container'>
                        <button className='button button--border'>Dalej</button>
                    </div>

                </form>}

                {step === 2 && <form onSubmit={handleSubmit2} className='donate-form'>
                    <p className='donate-form__step'> Krok {step}/4</p>
                    <h2 className='donate-form__title'>{formTitles[step-1]}</h2>

                    <div className='donate-form__button-container'>
                        <button onClick={handleStepDec} className='button button--border'>Wstecz</button>
                        <button className='button button--border'>Dalej</button>
                    </div>

                    <label className='select__label'>
                        Liczba 60l worków:
                        <select className='select'>
                        <option className='select__option' value={0}>--wybierz--</option>
                        <option className='select__option' value={1}>1</option>
                        <option className='select__option' value={2}>2</option>
                        <option className='select__option' value={3}>3</option>
                        <option className='select__option' value={4}>4</option>
                        <option className='select__option' value={5}>5</option>

                    </select>
                    </label>

                </form>}

            </div>
            <HomeContact/>
            <HomeFooter/>
        </>
    );
};

export default DonateItems;