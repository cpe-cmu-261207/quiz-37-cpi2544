import React from "react";
import Comment from "../components/Comment";

export default function PostOwner(props) {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/profile.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">Chayayos Inpracha 640610624</span>
        </div>
        <span>Quiz ยากเกิ้นนน #261207</span>
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">10 คน</span>
        </div>
        <hr className="m-0" />
        {props.comments.map((data, idx) => {
          return <Comment data={data} key={idx} />;
        })}
      </div>
    </div>
  );
}
