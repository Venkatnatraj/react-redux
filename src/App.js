import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actions from './actions/Action'
import logo from './logo.svg'


class App extends Component {
  componentDidMount = ()=>{
    // this.props.history()
  }
  render() {
    const {age , histo , increase , decrease , del , loading} = this.props
    console.log(this.props.histo)
    console.log(loading)
    return (
      <div className="App">
        <h1>{age}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        {loading && <img src= {logo}
          className="App-logo"
          alt="dnbgd"
          />}
        <hr/>
          {histo.map((el)=>(
            <div key = {el.id} onClick={()=>del(el.id)}>
              {el.age}
            </div>
          ))}
        </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    age : state.age,
    histo : state.history,
    loading : state.loading
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    increase : ()=>dispatch(actions.increase(5)),
    decrease : ()=>dispatch(actions.decrease(2)),
    history : ()=>dispatch(actions.history()),
    del : (id)=>dispatch(actions.delet(id))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(App);
