export default function Vyapar() {
  const items = [
    {product: "Munger ka Litti", bihar: "₹50", delhi: "₹80", tamilnadu: "₹120", mumbai: "₹90"},
    {product: "Tamilnadu ka Chawal", bihar: "₹60", delhi: "₹65", tamilnadu: "₹50", mumbai: "₹70"},
    {product: "Bihar ka Makka", bihar: "₹40", delhi: "₹70", tamilnadu: "₹85", mumbai: "₹75"},
  ]

  return (
    <div style={{padding: '20px', background: '#FFEDD5'}}>
      <h2 style={{color: 'orange', textAlign: 'center'}}>🛒 Vyapar - Local to Global</h2>
      <p style={{textAlign: 'center'}}><b>Munger ka samaan kahan sasta? Kahan mehnga?</b></p>
      
      <table style={{width: '100%', background: 'white', borderRadius: '10px', borderCollapse: 'collapse', maxWidth: '700px', margin: '20px auto'}}>
        <thead style={{background: 'orange', color: 'white'}}>
          <tr>
            <th style={{padding: '10px'}}>Product</th>
            <th>Bihar</th><th>Delhi</th><th>Tamilnadu</th><th>Mumbai</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '10px'}}><b>{item.product}</b></td>
              <td>{item.bihar}</td>
              <td>{item.delhi}</td>
              <td>{item.tamilnadu}</td>
              <td>{item.mumbai}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{textAlign: 'center', color: 'green'}}><b>Palayan roko - Yahin rojgar do</b></p>
    </div>
  )
}
