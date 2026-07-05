import './Hero.css'

function Hero() {
   return(
    <>
   
    <div className='h_container'>

        <h3 className='h_head'> Welcome To Our Delicious Corrner</h3>
        <span className='h_title'>The Finest Dishes</span>
        <p className='h_decs'>we have proper passion for cooking and love is the secret ingredient that makes all our dishes test better and magical</p>

    </div>

    <div className='btn_container'>

    <button className='explore_btn'>Explore Menu</button>
    <button className='order_btn'>Order Now</button>

    </div>
    </>
   );
}
export default Hero;