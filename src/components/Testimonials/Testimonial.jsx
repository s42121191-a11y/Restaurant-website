import React from 'react'
import './Testimonial.css'
import pro_1 from '../../assets/images/pro_1.jpeg'
import pro_2 from '../../assets/images/pro_2.jpeg'
import pro_3 from '../../assets/images/pro_3.jpeg'
import pro_4 from '../../assets/images/pro_4.jpeg'
import pro_5 from '../../assets/images/pro_5.jpeg'
import pro_6 from '../../assets/images/pro_6.jpeg'



const Testimonial = () => {
  return (
   <>
   <div className='testimonial_cards'>
   
    <div className='overlay_back'>
     <h1 className='test_title'>our happy customers</h1>
    
    <div className="carousel">
        <div className="group">

            <div className="cards"> 
                <img src={pro_1} />

                <h2>Emily Carter</h2>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>Absolutely delicious food and wonderful service. We'll definitely return soon.</p> 
                </div>

            <div className="cards"> 
                <img src={pro_2} />

                <h2>James Wilson</h2>
               <h3>⭐⭐⭐⭐⭐</h3>
                <p>Every dish was flavorful, fresh, and beautifully presented. Highly recommended!</p>
                </div>

            <div className="cards">
                 <img src={pro_4} />
                 <h2>Sophia Brown</h2>
                   <h3>⭐⭐⭐⭐⭐</h3>
                <p>Cozy atmosphere, friendly staff, and unforgettable dining experience every visit.</p>
                </div>

            <div className="cards">
                 <img src={pro_3} />
                 <h2>Daniel Lee</h2>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>Excellent hospitality, quick service, and amazing food. Loved every single bite!</p>
                </div>

            <div className="cards">
                 <img src={pro_5} />
                   <h2>Olivia Martin</h2>
                 <h3>⭐⭐⭐⭐</h3>
                <p>Perfect place for family dinners. Great ambiance and outstanding customer service.</p>
                </div>

            <div className="cards"> 
                <img src={pro_6} />
                <h2>Ethan Davis</h2>
                <h3>⭐⭐⭐⭐⭐</h3> 
                <p>Fresh ingredients, authentic flavors, and a relaxing atmosphere. Truly exceptional dining.</p>
                </div>
        </div>
       
         <div className="group">

            <div className="cards"> 
                <img src={pro_1} />

                <h2>Emily Carter</h2>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>Absolutely delicious food and wonderful service. We'll definitely return soon.</p> 
                </div>

            <div className="cards"> 
                <img src={pro_2} />

                <h2>James Wilson</h2>
               <h3>⭐⭐⭐⭐⭐</h3>
                <p>Every dish was flavorful, fresh, and beautifully presented. Highly recommended!</p>
                </div>

            <div className="cards">
                 <img src={pro_4} />
                 <h2>Sophia Brown</h2>
                   <h3>⭐⭐⭐⭐⭐</h3>
                <p>Cozy atmosphere, friendly staff, and unforgettable dining experience every visit.</p>
                </div>

            <div className="cards">
                 <img src={pro_3} />
                 <h2>Daniel Lee</h2>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>Excellent hospitality, quick service, and amazing food. Loved every single bite!</p>
                </div>

            <div className="cards">
                 <img src={pro_5} />
                   <h2>Olivia Martin</h2>
                 <h3>⭐⭐⭐⭐</h3>
                <p>Perfect place for family dinners. Great ambiance and outstanding customer service.</p>
                </div>

            <div className="cards"> 
                <img src={pro_6} />
                <h2>Ethan Davis</h2>
                <h3>⭐⭐⭐⭐⭐</h3> 
                <p>Fresh ingredients, authentic flavors, and a relaxing atmosphere. Truly exceptional dining.</p>
                </div>
        </div>
       
        
   
    </div>
   </div>
   </div>
   </>
  )
}

export default Testimonial
