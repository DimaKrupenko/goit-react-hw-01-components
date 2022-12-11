import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({ transactions }) => {
    return <table className={css.transactionHistory} >
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    {transactions.map( ({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
  </tbody>
  
))}
</table>
}