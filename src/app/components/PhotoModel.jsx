"use client";

import Image from "next/image";

export default function PhotoModel({ frames }) {
  return (
    <div className="cards">
      {frames.map((frame, index) => (
        <div key={index} className="card-item">
          <div className="thumbnail">
            <Image
              src={frame.image}
              alt={`Foto ${frame.type}`}
              width={720}
              height={720}
            />
            <div className="caption text-center">
              <h4>{frame.type}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
