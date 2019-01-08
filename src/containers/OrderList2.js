import React,{Component} from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table';
import ReactDOM from 'react-dom';
import data from '../sagas/index.js';
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
    var dataColumns= this.props.data.columns;
    var dataRows = this.props.data.rows;
  //  console.log("Articale",this.props.article)
    var tableHeaders = (<thead>
        <tr>
          {dataColumns.map(function(column) {
            return <th>{column}</th>; })}
        </tr>
    </thead>);

  var tableBody = dataRows.map(function(row) {
    return (
      <tr>
        {dataColumns.map(function(column) {
          return <td>{row[column]}</td>; })}
      </tr>); });
 return (<table className="table table-bordered table-hover" width="100%">
 {tableHeaders}
 {tableBody}
</table>) }};





    




const mapStateToProps = (state) => ({
  data: state.news
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


