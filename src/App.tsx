import './App.css'
import HlsPlayer from "./componentes/HlsPlayer.tsx";

function App() {

  return (
    <>
      <div style={{ padding: 16 }}>
        <HlsPlayer
            src="http://localhost:8080/prometheus-grafana/hls/output.m3u8" // nginx 등에서 서빙 중인 m3u8 경로
            autoPlay
            controls
            muted
        />
      </div>

    </>
  )
}

export default App
