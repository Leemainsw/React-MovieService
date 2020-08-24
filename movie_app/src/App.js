import React from 'react';
import { number } from 'prop-types';

// class component
class App extends React.Component{

  state = {
    count : 0
  };

  add = () =>{console.log('add');};
  minus = () => {console.log('minus')};

  render(){
    return(
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

// Function component
// function App() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {foodILike.map(result => <Food 
//       key = {result.id}
//       name = {result.name} 
//       image = {result.image}
//       rating = {result.rating}
//       />)}
//     </div>
//   );
// }

export default App;
