import React,{Component} from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '70%',
  margin: '50 auto',
  color: 'olive',
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
            this.props.article !='NULL' ?(  <table>
               
               <tr>
                 <th>OrderName:</th>
                 <th>OrderAdd:</th>
                 <th>orderpin:</th>
                 <th>Orderstatus:</th>
                  </tr>
            </table>)   : (<h1>Orders list</h1>) }
       {/* <h1>Orders List</h1> */}
        {this.props.article &&
        this.props.article.map((details,index) => {
          return [
           
            <article style= {articleStyle}>
             <table>
               
            {/* <tr>
              <th>OrderName:</th>
              <th>OrderAdd:</th>
              <th>orderpin:</th>
              <th>Orderstatus:</th>
               </tr> */} 
         {/* <tr>       
            
         <th>  <h4 key={index}>{details.ordername}</h4> </th> 
          <th> <h4 key ={index}>{details.orderadd}</h4> </th>
            <th><h4 key ={index}>{details.orderpin}</h4></th>
             <th><h4 key ={index}>{details.orderstatus}</h4></th>
             </tr>         */}
             
             
             <tr key = {index}>
                      <td>{details.ordername}</td>
                      <td>{details.orderadd}</td>
                      <td>{details.orderpin}</td>
                       { details.orderstatus=="Approve" ? (<font color="blue"><td>{details.orderstatus}</td></font>) : (<font color="red"><td>{details.orderstatus}</td></font>)}

 
                  </tr>
                  </table>
             </article>
            
           
            
          
          ]
        })} 
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


