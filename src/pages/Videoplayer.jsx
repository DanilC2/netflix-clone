// src/pages/VideoPlayer.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backArrow from "../assets/back_arrow_icon.png";
import "./VideoPlayer.css";

export default function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { video } = location.state || {}; // get passed video from Home

  return (
    <div className="video-player-page">
      <img
        src={backArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate("/")}
      />

      <video
        className="full-video"
        src={video}
        controls
        autoPlay
      />
    </div>
  );
}
