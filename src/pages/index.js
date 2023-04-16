import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = () => {
    setQRCode(url);
  };

  return (
    <div className="container">
      <h1 className="title">QR Code Generator</h1>
      <div className="input-container">
        <input
          className="input"
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
          <div className="qr-code-container">
            <QRCodeSVG value={qrCode} size={120} />
          </div>
        )}
      </div>
      <button className="button" onClick={generateQRCode}>QRazer</button>
    </div>
  );
}

export default App;
