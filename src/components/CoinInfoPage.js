import React from 'react';

import CoinInfo from './CoinInfo'; 
import CoinsData from '../data/coinsData';
import coinsData from '../data/coinsData';

class CoinInfoPage extends React.Component {
    render = () => (
        <div>
            <CoinInfo coinData={coinsData[0]}/>
        </div>
    );
}

export default CoinInfoPage;