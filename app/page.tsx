export default function Home() {
  return (
    <main className="dashboard-container">
      <div className="dashboard-welcome">
        <h1>Welcome to Boys to Leaders</h1>
        <div className="level-indicator">Level 1: Explorer</div>
      </div>
      
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Your Progress</h2>
          <div className="progress-tracker">
            <div className="progress-item">
              <div className="progress-header">
                <h3>Leadership Skills</h3>
                <span className="progress-percentage">45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="progress-item">
              <div className="progress-header">
                <h3>Communication</h3>
                <span className="progress-percentage">60%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div className="progress-item">
              <div className="progress-header">
                <h3>Financial Literacy</h3>
                <span className="progress-percentage">30%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="dashboard-section">
          <h2>Recent Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon"></div>
              <div className="achievement-title">Team Player</div>
              <div className="achievement-date">March 15, 2025</div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon"></div>
              <div className="achievement-title">Public Speaker</div>
              <div className="achievement-date">March 10, 2025</div>
            </div>
            
            <div className="achievement-card locked">
              <div className="achievement-icon"></div>
              <div className="achievement-title">Financial Wizard</div>
              <div className="achievement-date">Locked</div>
            </div>
          </div>
        </section>
        
        <section className="dashboard-section">
          <h2>Upcoming Mentorship Sessions</h2>
          <div className="card mentorship-card">
            <div className="card-header">
              <h3>Career Planning Workshop</h3>
              <p>March 25, 2025 • 4:00 PM</p>
            </div>
            <div className="card-content">
              <p>Join us for a workshop on planning your career path with mentor John Davis, a successful entrepreneur and community leader.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">RSVP Now</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
