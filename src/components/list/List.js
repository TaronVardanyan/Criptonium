import React from 'react';
import {API_URL} from '../../config';
import {Response,renderChangePercent} from '../../helpers';
import './Table.css';
import Table from './Table';
import Loading from '../common/Loading';
import Pagination from './Pagination'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          loading : false,
          currencies : [],
          error : '',
          page : 1,
          totalPages : '0'
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }
    componentDidMount(){
     this.fetchCurrencies()
    }
    fetchCurrencies(){
      this.setState({
        loading : true
    })
    const {page} = this.state;
    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
.then(Response)
.then((data) => {
  const {currencies,page,totalPages} = data;
  console.log(data)
  this.setState({
      currencies,
      loading : false,
      page,
      totalPages,
  })
})
.catch((error) => {
  this.setState({
    error : error.errorMessage,
    loading : false,

  })
});
    }
   
      handlePaginationClick(direction){
        let nextPage = this.state.page;
        nextPage = direction === 'next'? nextPage+1 : nextPage-1;
        this.setState({
          page : nextPage,
        },()=>{ this.fetchCurrencies() })
      }

 render(){
     const {currencies, loading, error,page,totalPages} = this.state
     if(loading){
        return (<div className="loading-container">
            <Loading />
        </div>)
     }
     if (error){
        return <div className = "error">{error}</div>
     }
     return (
         <div>
         <Table currencies={currencies}  renderChangePercent={renderChangePercent}/>
         <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>
         </div>
     );
 }
}

export default List;