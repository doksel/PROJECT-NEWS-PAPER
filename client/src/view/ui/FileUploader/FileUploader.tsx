import React from "react";

import Icon from "../../common/Icon";
import Loader from "../../components/Loader";
import AddIcon from "../../../images/icons/add.svg";
import CloseIcon from "../../../images/icons/close-big.svg";

import { Wrapper, Label } from "./styles";

const token = localStorage.getItem("token");

type FileUploaderTypes = {
  name: string;
  label: string;
  input: any;
  accepts: string;
  maxFileSize: number;
  url: string;
  onChange: any;
  onDeletefile: any;
  loading: boolean;
  files: any;
};

const FileUploaderUI: React.FC<FileUploaderTypes> = ({
  name,
  label,
  maxFileSize = 10000000,
  accepts = ".jpg,.jpeg,.png,.pdf",
  input,
  url,
  onChange,
  onDeletefile,
  loading,
  files
}) => (
  <Wrapper>
    <Label>
      <input
        name={name}
        multiple={true}
        // encType="multipart/form-data"
        type="file"
        size={maxFileSize}
        accept={accepts}
        ref={ref => (input = ref)}
        onChange={onChange}
      />
      <Icon icon={AddIcon} />
      {loading ? <Loader /> : label}
    </Label>

    <div>
      <small>Support file's formats: {accepts}</small>
    </div>

    <div>
      <small>Size no more: {maxFileSize ? maxFileSize / 1000000 : 10} Mb</small>
    </div>

    <div>
      {files.map((file: any, index: number) => (
        <div className="file" key={index}>
          {file.name ? (
            <div className="file_name">{file.name}</div>
          ) : (
            <a
              className="file_name"
              href={`${url}/attachments/${file.fileHash}?token=${token}`}
              target="blank"
            >{`файл-${index + 1}`}</a>
          )}

          <div
            className="file_delete"
            onClick={() =>
              onDeletefile({ fileHash: file.fileHash, id: file.id })
            }
          >
            <img src={CloseIcon} alt="delete" />
          </div>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default FileUploaderUI;
