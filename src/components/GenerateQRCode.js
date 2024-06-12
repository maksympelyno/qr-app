import React, { useState } from "react";
import QRCode from "qrcode";

function GenerateQRCode() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const handleGenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQr(url);
      }
    );
  };

  return (
    <div className="generate-div">
      <input type="text" placeholder="e.g. https://google.com" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleGenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img className="qr-img" src={qr} alt="qr-code" />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default GenerateQRCode;
