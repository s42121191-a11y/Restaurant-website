import "./Reservation.css";

function Reservation() {
  return (
    <section className="reservation">
      <div className="reservation-overlay">

        <div className="reservation-content">
          <div className="reservation-text">
            <h2>Reserve Your Table</h2>
            <p> 
              delicious food & unforgettable moments are easy to capture, book a table now
            </p>
          </div>

          <form className="reservation-form">

            <input type="text" placeholder="Your Name"/>

            <input type="email" placeholder="Your Email"/>

            <input type="tel" placeholder="Phone Number"/>

            <input type="date"/>

            <input type="time"/>

            <select>
              <option>Guests</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>4 People</option>
              <option>6+ People</option>
            </select>


            <textarea placeholder=" Any Special Request"></textarea>
            <button type="submit">Book Table</button>

          </form>

          </div>
          </div>
    </section>
  );
}

export default Reservation;