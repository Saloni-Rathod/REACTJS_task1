import React,{Component} from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '70%',
  margin: '50 auto',
  border: '4px solid Black',
  borderRadius: '5%',
  padding: '20px'
}

// let NewsItem = ({ article }) => (
//    article ?
//      <article style={articleStyle} >
//        <div>
//          <h1>{article.ordername}</h1>
      
//          <h2>{article.orderadd}</h2>
//          <h2>{article.orderpin}</h2>
//          <h2>{article.orderstatus}</h2>
       
//        </div>
//      </article> :
//      null
//  );


class OrderList  extends Component {
  render() {
    console.log("Articale",this.props.article)
    return (
    
      <div>
         {
            this.props.article != null?
          ( 
            <table style = {articleStyle}>
              <tr style = {articleStyle}>
                 <th style = {articleStyle}>OrderName:</th>
                 <th style = {articleStyle}>OrderAdd:</th>
                 <th  style = {articleStyle}>orderpin:</th>
                 <th style = {articleStyle}>Orderstatus:</th>
             </tr>
           
            
       
        {this.props.article &&
        this.props.article.map((details,index) => {
          return [
           
      
             
           
    
             
             
             <tr key = {index}>
                      <td style = {articleStyle} >{details.ordername}</td>
                      <td style = {articleStyle}>{details.orderadd}</td>
                      <td style = {articleStyle}>{details.orderpin}</td>
                       { details.orderstatus=="Approve" ? (<font color="blue"><td style = {articleStyle}>{details.orderstatus}</td></font>) : (<font color="red"><td style = {articleStyle}>{details.orderstatus}</td></font>)}

 
                  </tr>
                  
    
            
           
            
          
          ]
        }) }
        </table>): (<div></div>)}  
        
      </div>
    )
  }
}




const mapStateToProps = (state) => ({
  article: state.news
})

// const mapStateToProps = ({ state }) => {
//   const { news, loading } = state;
//   console.log("News in Page",news)
//   return { news, loading };
// }

OrderList = connect(
  mapStateToProps,
  null
)(OrderList)

export default OrderList;


