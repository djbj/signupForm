import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: ""
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

handleInputChange = event => {
  const target = event.target
  const value = target.value
  const name = target.name

  this.setState({
    [name]: value
  })
  console.log("State is set to: " + this.state.userName + " " + this.state.email + " " + this.state.password)
}

handleSubmit = event => {
  event.preventDefault()
  console.log(this.state.userName, this.state.email, this.state.password)
}

render() {
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <label>
          Username: <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} />
        </label>
        <label>
          Email: <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

}

export default App
