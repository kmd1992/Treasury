const getLoans = ({ state }, params) => {
   return axios
     .post("/loan", params)
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
const loanSummary = ({state}, params) => {
    return axios.get("/loan/loan_summary", params).then(
        (res) => {
            state.loan_summary = res.data;
            return res.data;
        }).catch(error => console.log(error) );
};
 export { getLoans, createLoan, loanSummary };
 