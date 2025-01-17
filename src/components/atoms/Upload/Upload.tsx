import React, { useState } from "react";
import "./upload.css";


export interface UploadProps {
  onFileUpload: (file: File) => void;
  overlayText?: string;
}

const Upload: React.FC<UploadProps> = ({ onFileUpload, overlayText }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
      onFileUpload(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
  };

  return (
    <div className={preview ? "upload-container no-border" : "upload-container"}>
      <input
        type="file"
        id="file-upload"
        className="upload-input"
        onChange={handleFileChange}
      />
      {preview ? (
        <div className="upload-preview">
          <img src={preview} alt="Preview" className="upload-image" />
          {overlayText && <span className="upload-overlay-text">{overlayText}</span>}
          <span className="upload-remove-button" onClick={handleRemoveImage}>
            ×
          </span>
        </div>
      ) : (
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-icon" />
          <p>Click or drop image</p>
        </label>
      )}
    </div>
  );
};

export default Upload;
