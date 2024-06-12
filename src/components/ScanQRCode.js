import React, { useState } from "react";
import jsQR from "jsqr";

function ScanQRCode() {
  const [scannedResult, setScannedResult] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        decodeQRCode(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const decodeQRCode = (imageDataUrl) => {
    const image = new Image();
    image.src = imageDataUrl;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        setScannedResult(code.data);
      } else {
        setScannedResult("No QR code found.");
      }
    };
  };

  return (
    <div>
      <label htmlFor="file-upload" className="custom-file-upload">
        Custom Upload
      </label>
      <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
      {scannedResult && (
        <a
          href={`${scannedResult}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open scanned result in a new tab"
        >
          {scannedResult}
        </a>
      )}
    </div>
  );
}

export default ScanQRCode;
