import React from 'react';
import SlotM from './SlotMach';

const App = () => {
return (
  <>
  <div className='heading'>
  <h1>
    🎰 Welcome to <span style={{fontWeight: 'bold'}}>Slot Machine Game</span> 🎰
    </h1>
    </div>
    <div className='slotmach'>
      <SlotM x='😄' y='😄' z='😄'/>
      <hr/>
      <SlotM x='😄' y='😆' z='😄'/>
      <hr/>
      <SlotM x='🍎' y='🍌' z='🍎'/>
      <hr/>
      <SlotM x='💑' y='💑' z='💑'/>
    </div>
  </>
);
};
export default App;