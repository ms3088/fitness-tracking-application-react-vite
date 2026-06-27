import React from 'react'
import "./Workout_plan.css"

const Workout_plan = () => {
  return (
    <div>
        
     <section className="workout-section">
  <div className="workout-container">
    
    <div className="workout-text">
      <h2>3.Workout Plan Management</h2>
      <p>
        The trainer will create customized workout routines for each client.
      </p>
      <h3 style={{marginTop:"5%", marginLeft:"10px"}}>Workout plans may include:</h3>
      <ul className='features-list'>
        <li>Exercise name</li>
        <li>Sets</li>
        <li>Repetitions</li>
        <li>Weight used</li>
        <li>Workout day</li>
        
        </ul>
      
    </div>

    <div className="workout-image">
        
      <img src="https://imgs.search.brave.com/VoDCNdP5H66AOUU_JdKKp10F1zAfnzSDNpKruMUwa44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93b3Jr/b3V0LXRyYWluaW5n/LXNjaGVkdWxlLXBs/YW4tZ3ltLXBsYW5u/ZXItYm9vay0yMzAx/NTU0OTQuanBn" alt="No Fake Profile"/>
    </div>

  </div>
</section>
    </div>
  )
}

export default Workout_plan