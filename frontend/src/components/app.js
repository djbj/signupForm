import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: ""
    }
    this.handleInputChangeUsername = this.handleInputChangeUsername.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// handleInputChange(event) {
//     console.log("Event.target " + event.target)
//     const target = event.target
//     const value = target.value
//     const name = target.name
//
//     this.setState({
//       [name]: value
//     })
//     console.log("handleInputChange")
//   }

handleInputChangeUsername (event) {
  console.log(event.target.value)

  this.setState({
    userName: event.target.value
      })

}

handleSubmit = event => {
  event.preventDefault()
  console.log("Im handling submit and state is now: " + this.state.userName)
}

render() {
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <label>
          Username: <input type="text" name="username" value={this.state.userName} onChange={this.handleInputChangeUsername} />
        </label>
        <label>
          Email: <input type="email" name="email"
            // onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password: <input type="password" name="psw"
            // onChange={this.handleInputChange}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

}

export default App
