function BondForm() {
  const [payments, setPayments] = React.useState([{}, {}])

  handleAddPayment = (previous) => {
    const newPayment = {}
    setPayments([...previous, newPayment])
  }

  return (<div>
    <button onClick={handleAddPayment}>Add Payment</button>

    { payments.map((payment) => {
      return <input></input>
    })}
  </div>)
}