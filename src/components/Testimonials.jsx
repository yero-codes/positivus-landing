import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Real Stories from Satisfied Customers</h2>
        <p>See how our landing page ui kit is making an impact.</p>
      </div>

      <div className="testimonials-grid">
        {/* Карточка 1 */}
        <div className="testimonial-card">
          <div className="avatar-placeholder">👤</div>
          <h3>Sarah K.</h3>
          <span className="role">UX Designer @Brello</span>
          <p>"I was looking for a way to streamline my design process and the Anima's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customization have saved me hours of time and effort. Highly recommend!"</p>
          <div className="stars">★★★★★</div>
        </div>

        {/* Карточка 2 */}
        <div className="testimonial-card">
          <div className="avatar-placeholder">👤</div>
          <h3>Michael L.</h3>
          <span className="role">Creative Director @Yo</span>
          <p>"The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"</p>
          <div className="stars">★★★★☆</div>
        </div>

        {/* Карточка 3 */}
        <div className="testimonial-card">
          <div className="avatar-placeholder">👤</div>
          <h3>Lauren M.</h3>
          <span className="role">UI Designer @Boo</span>
          <p>"Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."</p>
          <div className="stars">★★★★★</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;