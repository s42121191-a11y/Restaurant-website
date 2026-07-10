import React from 'react'
import Menu from './Menu.jsx'
import pic_1 from '../../assets/images/f_1.jpeg'
import pic_2 from '../../assets/images/f_2.jpeg'
import pic_3 from '../../assets/images/f_3.jpeg'
import pic_4 from '../../assets/images/f_4.jpeg'
import pic_5 from '../../assets/images/f_5.jpeg'
import pic_6 from '../../assets/images/f_6.jpeg'
import pic_7 from '../../assets/images/f_7.jpeg'
import pic_8 from '../../assets/images/f_8.jpeg'


const MenuCard = () => {
  return (

   <>
    <section className='menu_section'>
   
    <div className='menu_head'> our menu<span className='menu_subhead'>-----</span></div>
    
    <div className='Menu_cards' >
        <Menu 
        img={pic_1}
        food_title="GRILLED STEAK"
        price="$25.00"
        discount="$28.00"
        rating="⭐⭐⭐⭐"
        descrip="Juicy grilled ribeye served with roasted cherry tomatoes, fresh herbs, and house-made pepper sauce."/>
         
         <Menu
         img={pic_2}
        food_title="Blueberry Cheesecake"
        price="$9.00"
        discount="$12.00"
        rating="⭐⭐⭐⭐"
        descrip="Creamy cheesecake topped with fresh blueberries, berry glaze, and delicate whipped cream."
          />

          <Menu
          img={pic_3}
        food_title="Classic Apple Pie"
        price="$15.00"
        discount="$20.00"
        rating="⭐⭐⭐⭐⭐"
        descrip="Warm buttery apple pie served with vanilla ice cream and rich caramel drizzle."
        />

           <Menu
           img={pic_4}
        food_title="Mediterranean Veg Stack"
        price="$13.00"
        discount="$18.00"
        rating="⭐⭐⭐⭐"
        descrip="Layers of grilled eggplant, tomato, mozzarella, and basil finished with balsamic glaze."
           />

            <Menu
            img={pic_5}
        food_title="Surf & Turf Steak"
        price="$29.00"
        discount="$35.00"
        rating="⭐⭐⭐⭐"
        descrip="Tender grilled steak paired with succulent shrimp and our signature garlic butter sauce."
            />
        
         <Menu
            img={pic_6}
        food_title="Filet Mignon"
        price="$35.00"
        discount="$40.00"
        rating="⭐⭐⭐⭐⭐"
        descrip="Premium filet mignon served over creamy mashed potatoes with rosemary and red wine reduction."
            />

             <Menu
            img={pic_7}
        food_title="Blackberry Cheesecake"
        price="$10.00"
        discount="$15.00"
        rating="⭐⭐⭐⭐⭐"
        descrip="Smooth cheesecake topped with fresh blackberries and sweet berry compote."
            />

            <Menu
            img={pic_8}
        food_title="Blackberry Cheesecake"
        price="$10.00"
        discount="$15.00"
        rating="⭐⭐⭐⭐⭐"
        descrip="Smooth cheesecake topped with fresh blackberries and sweet berry compote."
            />

            </div>
            </section>
            
           
    </>
  )
}

export default MenuCard
