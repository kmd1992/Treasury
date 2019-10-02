const getLoans = ({ state }, params) => {
   return axios
     .post("/loans", params)
     .then(res => {
       state.loans = res.data;
       return res.data;
     })
     .catch(error => {
       console.log(error);
     });
 };
 const createLoan = ({ state }, params) => {
   return axios
     .post("/loan/store", params)
     .then(res => {
       state.loans = res.data;
       return res.data;
     })
     .catch(error => {
       console.log(error);
     });
 };
 export { getLoans, createLoan };
 