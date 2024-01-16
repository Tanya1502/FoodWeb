

const Contact = () => {

  const formSubmit = () => {
    alert("Thanks for contacting us. We'll get back to you soon...")
  }

  return (


    <div id="contact">
      <img src="https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div id="overlay"></div>
      <div id="contact-left">
        <h1>Get In Touch</h1>
        <p>
          Need assistance or have a question? Contact our friendly team for
          quick and helpful support
        </p>
      </div>

      <div id="contact-right">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" placeholder="xyz@gmail.com" />
        <label>Tell Us More</label>
        <textarea placeholder="Write Here..." cols="30" rows="10"></textarea>
        <button onClick={formSubmit}>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;