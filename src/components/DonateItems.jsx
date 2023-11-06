import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import DiamondCard from "./DiamondCard/DiamondCard.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";
import Radio from "./Radio/Radio.jsx";
import DonateForm from "./DonateForm/DonateForm.jsx";
import Checkbox from "./Checkbox/Checkbox.jsx";

const DonateItems = () => {

    const [step, setStep] = useState(1);

    const handleStepInc = () => {
        setStep(step => step + 1)
    }
    const handleStepDec = () => {
        setStep(step => step - 1)
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
        handleStepInc();
        console.log('form 2 submitted');
    }

    const handleSubmit3 = (e) => {
        e.preventDefault();
        handleStepInc();
        console.log('form 3 submitted');
    }

    const handleSubmit4 = (e) => {
        e.preventDefault();
        handleStepInc();
        console.log('form 4 submitted');
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
            </div>
            <DonateForm step={step} title={formTitles[step - 1]} importantMessage={importantMessages[step - 1]} displayHeader={step<=4} displaySteps={step<=4}>
                {step === 1 && <form onSubmit={handleSubmit1} className='step-form'>

                    <Radio name='item' label='ubrania, które nadają się do ponownego użycia'/>
                    <Radio name='item' label='ubrania, do wyrzucenia'/>
                    <Radio name='item' label='zabawki'/>
                    <Radio name='item' label='książki'/>
                    <Radio name='item' label='inne'/>
                    <div className='step-form__button-container'>
                        <button className='button button--border'>Dalej</button>
                    </div>
                </form>}

                {step === 2 && <form onSubmit={handleSubmit2} className='step-form'>
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
                    <div className='step-form__button-container'>
                        <button type='button' onClick={handleStepDec} className='button button--border'>Wstecz</button>
                        <button className='button button--border'>Dalej</button>
                    </div>
                </form>}

                {step === 3 && <form onSubmit={handleSubmit3} className='step-form'>

                    <select className='select'>
                        <option className='select__option' value={''}>--wybierz--</option>
                        <option className='select__option' value={'Poznań'}>Poznań</option>
                        <option className='select__option' value={'Warszawa'}>Warszawa</option>
                        <option className='select__option' value={'Kraków'}>Kraków</option>
                        <option className='select__option' value={'Wrocław'}>Wrocław</option>
                        <option className='select__option' value={'Katowice'}>Katowice</option>
                    </select>

                    <label className='step-form__label'>Komu chcesz Pomóc?</label>
                    <div className='step-form__checkbox-container'>
                        <Checkbox label={'dzieciom'} value={'dzieciom'}/>
                        <Checkbox label={'samotnym matkom'} value={'samotnym matkom'}/>
                        <Checkbox label={'bezdomnym'} value={'bezdomnym'}/>
                        <Checkbox label={'niepełnosprawnym'} value={'niepełnosprawnym'}/>
                        <Checkbox label={'osobom starszym'} value={'osobom starszym'}/>
                    </div>


                    <label className='step-form__label'>Wpisz nazwę konkretnej organizacji (opcjonalnie) </label>
                    <input className='step-form__text-input' type="text"/>


                    <div className='step-form__button-container'>
                        <button onClick={handleStepDec} className='button button--border'>Wstecz</button>
                        <button className='button button--border'>Dalej</button>
                    </div>
                </form>}

                {step === 4 && <form onSubmit={handleSubmit4} className='step-form step-form--columns'>

                    <div className='step-form__column'>
                        <label className='step-form__label'>Adres odbioru:</label>
                        <label className='step-form__address-input'>Ulica
                            <input type="text"/>
                        </label>
                        <label className='step-form__address-input'>Miasto
                            <input type="text"/>
                        </label>
                        <label className='step-form__address-input'>Kod pocztowy
                            <input type="text"/>
                        </label>
                        <label className='step-form__address-input'>Numer telefonu
                            <input type="text"/>
                        </label>

                    </div>
                    <div className='step-form__column'>
                        <label className='step-form__label'>Termin odbioru:</label>
                        <label className='step-form__address-input'>Data
                            <input type="text"/>
                        </label>
                        <label className='step-form__address-input'>Godzina
                            <input type="text"/>
                        </label>
                        <label className='step-form__address-input'>Uwagi dla kuriera
                            <textarea/>
                        </label>
                    </div>


                    <div className='step-form__button-container'>
                        <button onClick={handleStepDec} className='button button--border'>Wstecz</button>
                        <button className='button button--border'>Dalej</button>
                    </div>
                </form>}

                {step === 5 &&
                <div className='summary'>
                    <h2 className='donate-form__title'>Podsumowanie Twojej darowizny</h2>
                    <div className='step-form__button-container'>
                        <button onClick={handleStepDec} className='button button--border'>Wstecz</button>
                        <button className='button button--border'>Dalej</button>
                    </div>
                </div>
                }


            </DonateForm>
            <HomeContact/>
            <HomeFooter/>
        </>
    );
};

export default DonateItems;