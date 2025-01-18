import React from "react";
import "./upload.css";
import { useFormContext } from "react-hook-form";

export interface UploadComponentProps {
  overlayText?: string;
}

const Upload: React.FC<UploadComponentProps> = ({ overlayText }) => {
  const { watch, setValue } = useFormContext();
  const upload = watch("upload");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setValue(
        "upload",
        {
          name: file.name,
          type: file.type,
          size: file.size,
          preview: fileURL, // Adiciona o preview como um campo temporário
        },
        { shouldDirty: true }
      );
    }
  };

  const handleRemoveImage = () => {
    setValue("upload", null, { shouldDirty: true });
  };

  return (
    <div className={upload?.preview ? "upload-container no-border" : "upload-container"}>
      <input
        type="file"
        id="file-upload"
        className="upload-input"
        onChange={handleFileChange}
      />
      {upload?.preview ? (
        <div className="upload-preview">
          <img src={upload.preview} alt="Preview" className="upload-image" />
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
