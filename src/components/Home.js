import React from 'react'
import '../styles/Home.css';


const Home = () => {  //nfn shortcut for cretaing namearrowfunction

    const registration = ( ) => { 

     }
  return (
    <div className="home-page">
    <header className="header">
        <h1 id="pms">Welcome to Product Management System</h1>
        <p class="slogan">Your one-stop solution for managing products effectively</p>
    </header>
    <section className="features">
        <div className="feature">
            <img src="/images/Designer (1).png" alt="Feature 1" />
            <h2>Easy Product Management</h2>
            <p>Effortlessly manage your products, update details, and track inventory.</p>
        </div>
        <div className="feature">
            <img src="/images/Designer.png" alt="Feature 2" />
            <h2>Enhanced Analytics</h2>
            <p>Gain insights into sales trends, product performance, and customer preferences.</p>
        </div>
        <div className="feature">
            <img src="/images/Designer (2).png" alt="Feature 3" />
            <h2>User-Friendly Interface</h2>
            <p>Intuitive and user-friendly interface makes product management a breeze.</p>
        </div>
    </section>
    <section className="cta">
        <h2>Get Started Today</h2>
        <p>Join us in revolutionizing the way you manage your products.</p>
        <button className="btn-primary" onClick={registration}>Sign Up</button>
    </section>
</div>
    )
}

export default Home;
