import React from 'react';
import './App.css';
import { season2Missions } from './data/missions';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>A.I KIDS LABS</h1>
      </header>

      <main>
        <section>
          <h2 className="season-title">Temporada 2: Explorando a IA</h2>
          <div className="missions-row">
            {season2Missions.map((mission) => (
              <div key={mission.id} className="mission-card">
                <div className="card-image-container">
                  <picture>
                    <source srcSet={mission.image.webp} type="image/webp" />
                    <img
                      src={mission.image.jpg}
                      alt={mission.title}
                      className="card-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#333';
                        target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22169%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20169%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22300%22%20height%3D%22169%22%20fill%3D%22%23333%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100%22%20y%3D%2294%22%3EImage%20Missing%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                      }}
                    />
                  </picture>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{mission.title}</h3>
                  <div className="card-meta">
                    <span className="duration">{mission.duration}</span>
                    <span className="difficulty-badge">{mission.difficulty}</span>
                  </div>
                  <p className="card-description">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
