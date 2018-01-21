import React from 'react';
import axios from 'axios';

class CoinInfo extends React.Component{
    state = {
        name: '',
        reward: 0,
        webpage: '',
        explorer: '',
        getDifficulty: '',
        getBlockCount: '',
        getNetHash: '',
        algorithm: '',
        netHash: 0
    }

    componentWillMount = () => {
        this.setState({...this.props.coinData});

        axios.get(this.props.coinData.getNetHash)
        .then(res => {
            this.setState({netHash: res.data});            
        });
    }

    setNetHash = (netHash) => {
        this.setState({netHash});
    }

    getImageSource = () => {
        return `../images/coins/${this.state.name}.png`;
    }

    render = () => {
        return (
            <div>
                <img src={this.getImageSource()}/>
                <h2>{this.state.name}</h2>
                <div>
                    <p>Algorithm: {this.state.algorithm}</p>
                    <p>Block reward: {this.state.reward}</p>
                    <p>Network hashrate: {`${this.state.netHash} H/s`}</p>
                    <p>Last block: {this.state.lastBlock}</p>
                    <p>Official Site: {this.state.webpage}</p>
                    <p>Explorer: {this.state.explorer}</p>
                </div>
            </div>
        )
    }
}

export default CoinInfo;