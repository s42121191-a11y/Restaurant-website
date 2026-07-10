import React from 'react'
import './Menu.css'

const Menu = (props) => {
  return (
    <>
   
    <div className='menu_struct'>
       
    <div className='menu_img'><img   src={props.img} alt='Food pic'/></div>  

      <div className='menu_content'>
        <h2 className='m_title'>{props.food_title}</h2>

       <p className='f_price'>{props.price} <span className='f_discount'>{props.discount}</span></p>
       <p className='stars'>{props.rating}</p>
       <p className='f_desc'>{props.descrip}</p>
      </div>
       <button className='exp_btn'>Explore more</button>

    </div>
  
    

    </>
  )
}

export default Menu
