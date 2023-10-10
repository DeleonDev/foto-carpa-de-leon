import React, { useState } from "react";
import QRCode from "qrcode.react";
import Quote from "@/app/components/elements/WhatsappQuote";
import PhotoModel from "@/app/components/PhotoModel";

export default function ModelPanel({ model, slug }) {
  const domain = window.location.protocol + "//" + window.location.hostname;
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrFileName, setQrFileName] = useState("");

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = qrFileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="panel panel-info" id={model.name}>
      <div className="panel-heading">
        <h1 className="panel-title text-center">{model.name}</h1>
      </div>
      <div className="panel-body">
        <PhotoModel frames={model.frames} />
      </div>
      <div className="panel-footer d-flex justify-content-between">
        <Quote
          text={`un paquete de graduación, el modelo *${model.name}* de la linea *${slug}*`}
          className={"w-50"}
        />
        <button
          onClick={() => {
            setShowQRCode(true);
            setQrFileName(`QR-Linea:${slug}-Modelo:${model.name}.png`);
          }}
          className="btn btn-info w-50"
        >
          <i className="fas fa-qrcode"></i>
          Generar QR
        </button>
      </div>
      {showQRCode && (
        <div className="d-flex flex-column align-items-center justify-content-between">
          <QRCode
            value={`${domain}/paquetes-de-graduacion/linea/${slug}/#${model.name}`}
            id="qr-code"
            size={256}
            level={"H"}
            includeMargin={true}
          />
          <p className="text-capitalize">
            Linea <strong>{slug}</strong> \ Modelo{" "}
            <strong>{model.name}</strong>
          </p>
          <button
            className="btn btn-success"
            onClick={downloadQRCode}
            role="button"
          >
            <i className="fas fa-download"></i>
            Descargar
          </button>
        </div>
      )}
    </div>
  );
}
