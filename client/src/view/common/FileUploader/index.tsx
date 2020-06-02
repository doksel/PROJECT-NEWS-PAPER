import React, { useState, useEffect } from "react";

import FileUploaderUI from "../../ui/FileUploader/FileUploader";
import { message } from "../../../helpers/notifications";

type FileUploaderTypes = {
  label: string;
  input: any;
  accepts: string;
  maxFiles: string;
  maxFileSize: string;
  meta: { touched: boolean; error: string };
  url: string;
  uploadReq: any;
  removeReq: any;
  disabled: boolean;
};

const FileUploader: React.FC<FileUploaderTypes> = ({
  label,
  input,
  accepts,
  maxFiles,
  maxFileSize,
  meta: { touched, error },
  url,
  uploadReq,
  removeReq,
  disabled
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<Array<any>>([]);

  useEffect(() => {
    if (input.value && input.value.length) {
      const { files } = initFiles();
      setFiles(files);
    }
  }, [files]);

  const initFiles = () => {
    const files = input.value;

    return { files: files || [] };
  };

  const checkValid = (input: any) => {
    const inputMaxSize = Object.values(input.files).some(
      (file: any) => file.size > input.size
    );

    if (files.length + input.files.length > maxFiles) {
      message.error(
        `Кількість заватажених файлів не повинна перевищувати ${maxFiles}`
      );

      return false;
    } else if (inputMaxSize) {
      message.error(`Розмір заватаженого файлa не повинна перевищувати 10mb`);

      return false;
    }

    const arrayAccepts = input.accept.split(",");

    const inputAccept = Object.values(input.files).some((file: any) =>
      arrayAccepts.every(
        (accept: any) =>
          `.${file.name.split(".")[1].toLowerCase()}` !== accept.trim()
      )
    );

    if (inputAccept) {
      message.error("Завантажте файл дозволеного формату");

      return false;
    }

    return true;
  };

  const customRequest = async (e: any) => {
    if (checkValid(e.target)) {
      let formData = new FormData();

      for (let i = 0; i < e.target.files.length; i++) {
        formData.append(`file${i + 1}`, e.target.files[i]);
      }

      setLoading(true);

      // uploadReq(formData)
      //   .then(res => {
      //     onSuccess(res);
      //     e.target.value = null;
      //   })
      //   .catch(() => message.error())
      //   .finally(() => setLoading(false));
    }
  };

  const onSuccess = (res: any) => {
    setFiles([...files, ...res]);

    input.onChange([...files, ...res]);

    message.success("Файл успішно завантажено.");
  };

  const onDeletefile = (inComeFile: any) => {
    const newFiles = files.filter(file => file.id !== inComeFile.id);

    input.onChange(newFiles);
    setFiles(newFiles);

    // inComeFile.fileHash &&
    //   removeReq &&
    //   removeReq(inComeFile.fileHash)
    //     .then(() => message.success("Файл успішно видалено."))
    //     .catch(() => message.error());
  };

  return (
    <div>
      <FileUploaderUI
        {...input}
        input={input}
        url={url}
        uploadReq={uploadReq}
        removeReq={removeReq}
        disabled={disabled}
        name={input.name}
        label={label}
        accepts={accepts}
        maxFiles={maxFiles}
        maxFileSize={maxFileSize}
        onChange={customRequest}
        onDeletefile={onDeletefile}
        loading={loading}
        files={files}
      />

      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};
export default FileUploader;
