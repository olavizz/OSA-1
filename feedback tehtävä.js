import { useState } from 'react'

const StatisticLine = (props) => {
  return (
      <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.all !== 0) {
  return (
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={(props.good - props.bad)/props.all}/>
      <StatisticLine text="positive" value={props.good/props.all*100 + " %"}/>
      </tbody>
      </table>
    </div>
  )
}
return (
  <div>
    no feedback given
  </div>
)
}

const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodfeedback = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const neutralfeedback = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const badfeedback = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }



  return (
    <div>
      <div>
        <h1> give feedback </h1>
        <Button handleClick={goodfeedback} text='good'/>
        <Button handleClick={neutralfeedback} text='neutral'/>
        <Button handleClick={badfeedback} text='bad'/>
      </div>
      <h1>
        statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
