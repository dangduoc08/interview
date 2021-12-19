import { useState } from 'react';

function Sum() {
  let [sum, setSum] = useState(0)

  async function getSum() {
    const result = await fetch('http://localhost:4040/sum', { method: 'GET' })
    const jsonResult = await result.json()
    setSum(jsonResult.sum)
  }

  return (
    <div>
      <button onClick={getSum}>Click to get sum</button>
      <br /><br />
      <b>Result: {sum}</b>
    </div>
  )
}

export default Sum