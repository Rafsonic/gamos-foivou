import { useEffect } from "react";

const CLOUD_NANE = "du5moszn6";
const CLOUD_PRESET = "foivos";

const CloudinaryUpload = () => {
  useEffect(() => {
    // @ts-ignore
    window.cloudinary?.createUploadWidget(
      {
        cloudName: CLOUD_NANE,
        uploadPreset: CLOUD_PRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("File uploaded:", result.info);
        }
      }
    );
  }, []);

  const openWidget = () => {
    // @ts-ignore
    const widget = window.cloudinary?.createUploadWidget(
      {
        cloudName: CLOUD_NANE,
        uploadPreset: CLOUD_PRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("File uploaded:", result.info.secure_url);
        }
      }
    );
    widget.open();
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <button
        onClick={openWidget}
        className="bg-blue-600 text-white px-4 py-2 rounded uploadimg"
      >
        Upload to Photos
      </button>
    </div>
  );
};

export default CloudinaryUpload;
