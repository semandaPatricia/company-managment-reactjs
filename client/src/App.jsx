import { useState } from 'react'
import Employee from './components/Employee'



function App() {
 

  return (
    <div className='grid grid-cols-3 gap-3'>
     <Employee/>
   <Employee/>
   <Employee/>
   <Employee/>
   <Employee/>
    </div>
  
  )
}

export default App
