import React from 'react';
import StatCard from "./StatCard.jsx";

const HomeThreeColumns = () => {
    return (
        <section className="three-columns" id="three-columns">
        <StatCard number={10} title={'Oddanych worków'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
        <StatCard number={5} title={'Wspartych organizacji'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
        <StatCard number={10} title={'Zorganizowanych zbiórek'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
        </section>
    );
};

export default HomeThreeColumns;