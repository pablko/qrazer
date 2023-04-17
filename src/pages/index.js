import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = () => {
    setQRCode(url);
  };

  const downloadPNG = () => {
    const node = document.querySelector('.qr-code-container svg');
      toPng(node)
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = `${url}-QRazer.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
  }

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
      {qrCode && (
        <button className="button" onClick={downloadPNG}>Download PNG</button>
      )}
   </div>
  );
}

export default App;
