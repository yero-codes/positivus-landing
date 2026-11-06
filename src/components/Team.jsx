import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team">
      <div className="team-header">
        <h2>Meet our team</h2>
        <p>Get to know the faces behind the scenes and learn about the values that drive us.</p>
      </div>

      <div className="team-grid">
        {/* Карточка 1 */}
        <div className="team-card">
          <div className="team-avatar-placeholder">👤</div>
          <div className="team-info">
            <h3>Sarah K.</h3>
            <p className="role">UX Designer</p>
            <div className="socials">
              <span>🐦</span>
              <span>💼</span>
              <span>📸</span>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="team-card">
          <div className="team-avatar-placeholder">👤</div>
          <div className="team-info">
            <h3>Michael L.</h3>
            <p className="role">Lead Designer</p>
            <div className="socials">
              <span>🐦</span>
              <span>💼</span>
              <span>📸</span>
            </div>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="team-card">
          <div className="team-avatar-placeholder">👤</div>
          <div className="team-info">
            <h3>Lauren M.</h3>
            <p className="role">Product Designer</p>
            <div className="socials">
              <span>🐦</span>
              <span>💼</span>
              <span>📸</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;