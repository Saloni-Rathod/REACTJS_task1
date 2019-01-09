export const getOrderList = (data) => ({
  type: 'GET_ORDER_LIST',
  payload:data
});

export const orderListError =(error) =>({
  type:'ORDER_LIST_ERROR',
  payload:error


});
export const orderListReceived =(data) =>({
  type:'ORDER_LIST_RECEIVED',
  payload:data

});