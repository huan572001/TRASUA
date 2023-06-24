import { DeleteOutlined, PictureOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { useState } from 'react';

const ImgCourse = ({ imgFile, setImgFile }) => {
  const [preview, setPreview] = useState();
  const uploadRef = useRef(null);
  const handleUploadImages = (e) => {
    const imageFile = e.target.files[0];
    setImgFile({ file: imageFile, isUploaded: false });

    e.target.value = null;
    const objectUrl = URL.createObjectURL(imageFile);
    setPreview(objectUrl);
  };
  const handleClickUpload = () => {
    uploadRef.current.click();
  };
  const onDelete = () => {
    const doDelete = () => {
      URL.revokeObjectURL(preview);
      setPreview();
      setImgFile({ file: null, isUploaded: false });
    };
    if (!imgFile.isUploaded) {
      doDelete();
    }
  };
  return (
    <>
      <div
        className={`flex flex-col justify-center w-[75px] h-[75px] px-4 py-6 cursor-pointer relative ${
          !preview ? `rounded-lg border-dashed border-2 border-[#475569]` : ''
        }`}
      >
        <input
          className="invisible"
          ref={uploadRef}
          type="file"
          onChange={handleUploadImages}
          accept=".jpg, .png"
        />
        {!preview ? (
          <section
            className="flex flex-col items-center justify-center h-full gap-4 text-center"
            onClick={handleClickUpload}
          >
            <span>
              <PictureOutlined className="text-2xl" />
            </span>
          </section>
        ) : (
          <div>
            <img
              className="object-fill w-full h-full absolute top-0 left-0"
              src={preview}
            />
            <div className="absolute top-0 left-0 opacity-0 w-full h-full bg-[#00000080] duration-300 hover:opacity-100">
              <DeleteOutlined
                className="absolute top-4 right-4 text-[18px] text-white"
                onClick={onDelete}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ImgCourse;
