import { useState } from 'react'
import './App.scss'
import Window from './components/window.jsx'
import Accueil from './components/contents/accueil.jsx';
import Backup from './components/contents/backup.jsx';
import Waldi from './components/waldi.jsx';
import Projets from './components/projets.jsx';
import Gallery from './components/gallery.jsx';
import ptdr from './assets/ptdr.jpg'

function App() {
  const [showAccueil, setShowAccueil] = useState(true);
    const [showSortie, setShowSortie] = useState(false);
    const [showBackup, setShowBackup] = useState(false);
      const [showWaldi, setShowWaldi] = useState(false);
      const [showProjets, setShowProjets] = useState(false);
      const [showGallery, setShowGallery] = useState(false);
  
  return (
    <>
      {showAccueil && (
        <Window // Accueil
          nom="Portfolio.exe" 
          id="accueil" 
          contenu={<Accueil 
            onLeaveClick={() => setShowSortie(true)} 
            onStartClick={() => { setShowBackup(true); setShowAccueil(false); setShowSortie(false);}} 
          />} 
        />
      )}
      
      {showSortie && (
        <Window nom="???" id="sortie" contenu={
          <>
            <img src={ptdr} alt="ptdr" className='ptdr-image' />
            <p> t'as vraiment cru que ??? <br />
            non plus serieusement, tu vas rester. </p>
            <div className='ptdr-response' onClick={() => setShowSortie(false)}><p>oui, pardon</p></div>
          </>
        }/>
      )}

      {showBackup && (
        <>
          <Window nom="Backup" id="backup" contenu={<Backup 
            onWaldiClick={() => { setShowWaldi(true); setShowBackup(false); }} 
            onProjetsClick={() => { setShowProjets(true); setShowBackup(false); }} 
            onGalleryClick={() => { setShowGallery(true); setShowBackup(false); }} 
          />} />
          <p id='leave' onClick={() => { setShowBackup(false); setShowAccueil(true); }}>{'<='} Leave</p>
        </>
      )}

      {showWaldi && (
        <>
          <p id='leave' onClick={() => { setShowWaldi(false); setShowBackup(true); }}>{'<='} Leave</p>
          <Waldi />
        </>
      )}

      {showProjets && (
        <>
          <p id='leave' onClick={() => { setShowProjets(false); setShowBackup(true); }}>{'<='} Leave</p>
          <Projets />
        </>
      )}

      {showGallery && (
        <>
          <p id='leave' onClick={() => { setShowGallery(false); setShowBackup(true); }}>{'<='} Leave</p>
          <Gallery />
        </>
      )}
    </>
  )
}

export default App
