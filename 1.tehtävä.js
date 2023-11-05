const Header = (props) => {
  return (
      <div>
          <h1>{props.course.name}</h1>
      </div>
  )
}

const Part = (props) => {
    return (
      <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.parts[0]}/>
      <Part part={props.parts.parts[1]}/>
      <Part part={props.parts.parts[2]}/>
      
      </div>
  )
}

const Total = (props) => {
  return (
      <p>
         Number of exercises {props.points.parts[0].exercises + props.points.parts[1].exercises + props.points.parts[2].exercises}
      </p>

  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total points={course}/>
    </div>
  )
}

export default App