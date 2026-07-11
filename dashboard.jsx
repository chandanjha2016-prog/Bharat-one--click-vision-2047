
export default function Dashboard() {
  return (
    <div style={{padding: '20px', background: '#EFF6FF'}}>
      <h2 style={{color: 'blue', textAlign: 'center'}}>📊 Govt Dashboard - Real Time Report</h2>
      <p style={{textAlign: 'center'}}>Ward se lekar Videsh tak 1 click me report</p>
      
      <div style={{background: 'white', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '20px auto'}}>
        <h4>📍 Jamalpur Ward No. 5 - Live Data</h4>
        <p>✅ Shikayat: 12 pending, 45 solved</p>
        <p>✅ Bhojan: 300 bachhe ko mila</p>
        <p>✅ Job: 25 ladko ko training mili</p>
        <p>✅ Hospital: 0 kuposhan case</p>
      </div>
      
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <button style={{background: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px'}}>
          Full Report Download karo
        </button>
      </div>
    </div>
  )
}
