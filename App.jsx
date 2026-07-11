
export default function App() {
  return (
    <div style={{background: '#FFF7ED', minHeight: '100vh', padding: '20px', textAlign: 'center'}}>
      <h1 style={{color: '#C2410C'}}>🇮🇳 BharatOneClick</h1>
      <p>New Digital India - Vision 2047</p>
      <p style={{marginTop: '30px'}}><b>Sab padhe sablog aage badhe. Koi peeche na rahe.</b></p>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', maxWidth: '600px', margin: '30px auto'}}>
        <div style={{background: 'white', padding: '20px', borderRadius: '10px'}}>
          <h3>Seva</h3>
          <p>Ration, Swasthya, Shikayat</p>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '10px'}}>
          <h3>Vyapar</h3>
          <p>Local to Global Product</p>
        </div>
      </div>
    </div>
  )
}
