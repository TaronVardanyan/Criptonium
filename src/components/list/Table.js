import React from 'react';
import {withRouter} from 'react-router-dom';
import './Table.css'

const Table = (props) => {
    const {currencies,renderChangePercent} = props;
    return (
<div className="Table-container">
            <table className="Table">
                <thead className="Table-head">
                 
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>

                </thead>
                <tbody className="Table-body">
                
                {currencies.map((currency) => { return <tr key={currency.id} onClick={() => props.history.push(`/currency/${currency.id}`)}>
                    <td><span className="Table-rank">{currency.rank}</span> {currency.name}</td>
                    <td>{currency.price} <span className="Table-dollar">$</span></td>
                    <td>{currency.marketCap} <span className="Table-dollar">$</span></td>
                    <td>{renderChangePercent(currency.percentChange24h)}</td>
                </tr>})}
                
                </tbody>
            </table>
         </div>
)
}

export default withRouter(Table);
