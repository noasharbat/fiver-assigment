// src/App.jsx
import React from 'react';
import ChatRoom from './components/ChatRoom/ChatRoom';
import './App.css';

/**
 * Main application entry component.
 * - Renders header + diagram preview (from the uploaded file path)
 * - Shows the ChatRoom smart component (handles SignalR connection)
 *
 * NOTE: The diagram image is referenced using the local path you uploaded.
 * Your deployment/build process should serve files from /mnt/data or you can
 * copy the image into the public/ folder and update the path accordingly.
 */
const App = () => {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Real-Time Group Chat</h1>
      </header>

      <main className="app-main">
        

        <section className="chat-section" aria-label="Chat room">
          <ChatRoom />
        </section>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Chat System by noa sharbat— MVP</small>
      </footer>
    </div>
  );
};

export default App;
