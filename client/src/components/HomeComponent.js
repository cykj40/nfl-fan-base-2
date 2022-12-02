import React, { useState } from 'react';
import NFLNews from '../assets/NFLNews';
import LiveData from '../assets/LiveData';

export default function HomeComponent() {
    return (
        <div>
            <NFLNews></NFLNews>
        <LiveData/>
        </div>
    )
}
