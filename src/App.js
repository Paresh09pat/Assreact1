import React from 'react';
import SecondComp from './components/class';
import './components/All.css';
import FirstComp from './components/function';



class App extends React.Component{

state={
  showClass: false,
  NewClass: false
}


  render(){
      return(
          <>

          <h1 className='MainHead'> Styling using Functional and Class Component</h1>


          <div className='main'>

          <div className='btnMain'>
          <button className='button'
          onClick={() => this.setState({showClass: !this.state.showClass})}
          >
             To see styling in Class Component
          </button>
          {this.state.showClass && <SecondComp/>}
         </div>


         <div className='btnMain'>
          <button className='button'
          onClick={() => this.setState({NewClass: !this.state.NewClass})}
          >
             To see styling in Functional Component
          </button>
          {this.state.NewClass && <FirstComp/>}
          </div>

          </div>

          </>
      )
  }
}

export default App;
