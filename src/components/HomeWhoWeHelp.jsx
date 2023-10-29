import React, {useEffect, useState} from 'react';
import Heading from "./Heading.jsx";
import Pagination from "./Pagination.jsx";

const HomeWhoWeHelp = () => {

    const handleCategory = (e) => {
        setActiveCategory(e.target.id);
    }

    const data = [
        {
            id: "fundacje",
            name: "Fundacje",
            description: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            items: [
                {
                    id: 1,
                    name: 'Fundacja "Dbam o zdrowie"',
                    description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                    need: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
                },
                {
                    id: 2,
                    name: 'Fundacja "Dla dzieci"',
                    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                    need: ['ubrania', 'meble', 'zabawki']
                },
                {
                    id: 3,
                    name: 'Fundacja "Bez domu"',
                    description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
                    need: ['ubrania', 'jedzenie', 'ciepłe koce']
                }
            ]
        },
        {
            id: "organizacje",
            name: "Organizacje pozarządowe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            items: [
                {
                    id: 1,
                    name: "Organizacja Lorem Ipsum 1",
                    description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    need: ['Egestas', 'sed', 'tempus']
                },
                {
                    id: 2,
                    name: "Organizacja Lorem Ipsum 2",
                    description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
                    need: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
                },
                {
                    id: 3,
                    name: "Organizacja Lorem Ipsum 3",
                    description: "Scelerisque in dictum non consectetur a erat nam.",
                    need: ['Mi', 'quis', 'hendrerit', 'dolor']
                },
                {
                    id: 4,
                    name: "Organizacja Lorem Ipsum 4",
                    description: "Lorem ipsum dolor sit amet.",
                    need: ['Mi', 'quis', 'hendrerit', 'dolor']
                },
                {
                    id: 5,
                    name: "Organizacja Lorem Ipsum 5",
                    description: "Scelerisque in dictum non consectetur a erat nam.",
                    need: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
                }
            ]
        },
        {
            id: "lokalne",
            name: "Lokalne zbiórki",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            items: [
                {
                    id: 1,
                    name: "Zbiórka Lorem Ipsum 1",
                    description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    need: ['Egestas', 'sed', 'tempus']
                },
                {
                    id: 2,
                    name: "Zbiórka Lorem Ipsum 2",
                    description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
                    need: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
                },
                {
                    id: 3,
                    name: "Zbiórka Lorem Ipsum 3",
                    description: "Scelerisque in dictum non consectetur a erat nam.",
                    need: ['Mi', 'quis', 'hendrerit', 'dolor']
                },
                {
                    id: 4,
                    name: "Zbiórka Lorem Ipsum 4",
                    description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    need: ['Egestas', 'sed', 'tempus']
                },
                {
                    id: 5,
                    name: "Zbiórka Lorem Ipsum 5",
                    description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
                    need: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
                },
                {
                    id: 6,
                    name: "Zbiórka Lorem Ipsum 6",
                    description: "Scelerisque in dictum non consectetur a erat nam.",
                    need: ['Mi', 'quis', 'hendrerit', 'dolor']
                },
                {
                    id: 7,
                    name: "Zbiórka Lorem Ipsum 7",
                    description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    need: ['Egestas', 'sed', 'tempus']
                },
                {
                    id: 8,
                    name: "Zbiórka Lorem Ipsum 8",
                    description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
                    need: ['Ut', 'aliquam', 'purus', 'sit', 'amet']
                },
                {
                    id: 9,
                    name: "Zbiórka Lorem Ipsum 9",
                    description: "Scelerisque in dictum non consectetur a erat nam.",
                    need: ['Mi', 'quis', 'hendrerit', 'dolor']
                }
            ]
        }
    ]


    const [activeCategory, setActiveCategory] = useState('fundacje');
    const [page, setPage] = useState(1);


    const activeCategoryData = data.find((category) => category.id === activeCategory);

    useEffect(() => {
        setPage(1);
    }, [activeCategory]);

    // console.log('category', activeCategory);
    // console.log(activeCategoryData);
    // console.log('page', page)

    return (
        <section className="who-we-help" id="who-we-help">
            <Heading text1='Komu pomagamy?'/>
            <div className='who-we-help__category-container'>
                <button onClick={handleCategory}
                        className={activeCategory === 'fundacje' ? 'who-we-help__category-button who-we-help__category-button--active' : 'who-we-help__category-button'}
                        id='fundacje'>Fundacjom
                </button>
                <button onClick={handleCategory}
                        className={activeCategory === 'organizacje' ? 'who-we-help__category-button who-we-help__category-button--active' : 'who-we-help__category-button'}
                        id='organizacje'>Organizacjom pozarządowym
                </button>
                <button onClick={handleCategory}
                        className={activeCategory === 'lokalne' ? 'who-we-help__category-button who-we-help__category-button--active' : 'who-we-help__category-button'}
                        id='lokalne'>Lokalnym zbiórkom
                </button>
            </div>
            <p className='who-we-help__text'>{activeCategoryData.description}</p>
            <Pagination data={activeCategoryData.items} setPage={setPage} currentPage={page} postsPerPage={3}/>
        </section>
    );
};

export default HomeWhoWeHelp;