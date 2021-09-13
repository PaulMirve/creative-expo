import React from 'react'
import WhyGrid from './WhyGrid/WhyGrid'
import PropertyDescriptions from './PropertyDescriptions/PropertyDescriptions';
import WhySass from './WhySass/WhySass';
import GridAreas from './GridAreas/GridAreas';
import DrakeMeme from './Meme/DrakeMeme';

export default function Main() {
    return (
        <main style={{ padding: '8rem 8vw' }}>
            <WhyGrid />
            <PropertyDescriptions />
            <GridAreas />
            <WhySass />
            <DrakeMeme />
        </main>
    )
}
