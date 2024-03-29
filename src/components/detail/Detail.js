import React from 'react';
import './Detail.css';
import {API_URL} from '../../config';
import {Response,renderChangePercent} from '../../helpers';
import Loading from '../common/Loading';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currency : {},
            loading : false,
            error : '',
        }

    }

    componentDidMount(){
        const currencyId = this.props.match.params.id;
        this.setState ({
            loading : true,
        })

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(Response)
        .then((currency) => { 
            console.log(currency)
            this.setState({
                loading:false,
                currency : currency,
            })
        })

        .catch((error) => {
            console.log(error)
            this.setState({
              error : error.errorMessage,
              loading : false,  
            })
          });
    }
    render(){
        const {error,loading,currency} = this.state;
         if(loading){
             return <div className='loading-container'>;
             <Loading />
             </div>
         }
         if(error){
            return <div className="error">{error}</div>;
         }
        return (
            <div className="Detail">
               <h1 className="Detail-heading">{currency.name} ({currency.symbol})</h1>
               <div className="Detail-container">
                   <div className="Detail-item">Price <span className="Detail-value">{currency.price} $</span></div>
                   <div className="Detail-item">Rank <span className="Detail-value">{currency.rank} </span></div>
                   <div className="Detail-item">24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span></div>
                   <div className="Detail-item"><span className="Detail-title">Market Cap</span> 
                   <span className="Detail-dollar">$</span>
                   {currency.marketCap}
                   </div>
                   <div className="Detail-item">
                        <span className="Detail-title">24H Volume</span> 
                        <span className="Detail-dollar">$</span>
                   {currency.volume24h}
                   </div>
                   <div className="Detail-item"><span className="Detail-title">Total Supply</span> 
                   {currency.totalSupply}
                   </div>
               </div>
            </div>
        )
    }
}

export default Detail;