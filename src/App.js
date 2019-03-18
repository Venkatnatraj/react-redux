import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actions from './actions/Action'


class App extends Component {
  componentDidMount = ()=>{
    // this.props.history()
  }
  render() {
    const {age , histo , increase , decrease , del} = this.props
    console.log(this.props.histo)
    return (
      <div className="App">
        <h1>{age}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
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
    histo : state.history
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
