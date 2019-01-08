import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  
  const data = [
    
    {
      ordername:"SS",
      orderadd:"Sidsar",
      orderpin:'320005',
      orderstatus:'Approve'
    },
    {
      ordername:"GEC",
      orderadd:"Vidhyanagar",
      orderpin:'320005',
      orderstatus:'pending'
    },
    {
      ordername:"GMIT",
      orderadd:"Sidsar",
      orderpin:'320005',
      orderstatus:'pending'
    },
    {
      ordername:"BPTI",
      orderadd:"Vidhyanagar",
      orderpin:'320005',
      orderstatus:'pending'
    }
  ]

  // const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  //   .then(response => response.json(), );

  yield put({ type: "ORDER_LIST_RECEIVED",
 json:data, });
}

function* actionWatcher() {
  yield takeLatest('GET_ORDER_LIST', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
