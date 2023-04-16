import { useState } from "react";
import QRCode from "qrcode.react";


function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = () => {
    setQRCode(url);
  };

  return (
    <div class="container">
      <h1 class="title">QR Code Generator</h1>
      <div class="input-container">
        <input
          class="input"
          type="text"
          placeholder="Input text to QRazer"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              generateQRCode();
            }
          }}
        />
        {qrCode && (
          <div class="qr-code-container">
            <QRCode value={qrCode} size={120} />
          </div>
        )}
      </div>
      <button class="button" onClick={generateQRCode}>QRazer</button>
    </div>

  );
}

export default App;
