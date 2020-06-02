import React from "react";
import { useHistory } from "react-router-dom";

import Icon from "../../common/Icon";
import LikeIcon from "../../../images/icons/like.svg";
import CommentIcon from "../../../images/icons/comment.svg";

import { WrapInfo } from "./styles";
import { Row } from "../../../styles/theme";

type ShortArticleType = {};

const Info: React.FC<ShortArticleType> = () => {
  let history = useHistory();

  return (
    <WrapInfo>
      <Row alignItems="center">
        <Icon onClick={() => console.log("Like")} icon={LikeIcon} />
        <span>333</span>
      </Row>
      <Row alignItems="center">
        <Icon onClick={() => console.log("Comment")} icon={CommentIcon} />
        <span>12</span>
      </Row>
    </WrapInfo>
  );
};

export default Info;
