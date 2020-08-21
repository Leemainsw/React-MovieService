import React from 'react';

function Food({fav}){
  console.log(fav);
  return <h1>{ fav }</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
