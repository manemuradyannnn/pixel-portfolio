import React, { useMemo, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import avatar from "./avatar.png";
import hobbyGuitar from "./hobby-guitar.png";
import hobbyCamera from "./hobby-camera.png";
import hobbyGame from "./hobby-game.png";
import hobbyBook from "./hobby-book.png";

import projAlphaImg from "./project-alpha.jpg";
import projBetaImg from "./project-beta.png";
import projGammaImg from "./project-gamma.png";
import tiktokPfpImg from "./tiktokPfp.png";

import edit1 from "./edit1.mp4";
import edit2 from "./edit2.mp4";
import edit3 from "./edit3.mp4";
import edit4 from "./edit4.mp4";
import edit5 from "./edit5.mp4";
import edit6 from "./edit6.mp4";
import edit7 from "./edit7.mp4";
import edit8 from "./edit8.mp4";
import edit9 from "./edit9.mp4";
import edit10 from "./edit10.mp4";
import edit11 from "./edit11.mp4";

const TIKTOK_URL = "https://www.tiktok.com/@atsushibrainrot";
const tiktokPfp = tiktokPfpImg;

// ---------- DATA ----------
const hobbies = [
  {
    id: "guitar",
    title: "Guitar",
    label: "Guitar.exe",
    img: hobbyGuitar,
    fact: "My favourite song to play on the guitar is Narrow by Mayday Parade",
  },
  {
    id: "camera",
    title: "Art",
    label: "Art.exe",
    img: hobbyCamera,
    fact: "My favourite media of art is video editing! scroll to the bottom to see my portfolio",
  },
  {
    id: "games",
    title: "Gaming",
    label: "Gaming.exe",
    img: hobbyGame,
    fact: "Game Dev is one of my major interests in CS! I'm a huge FNAF fan :]",
  },
  { id: "books", title: "Reading", label: "Books.exe", img: hobbyBook, fact: "Reading is my favourite hobby!" },
];

const projects = [
  {
    title: "Morphine Tapering Device",
    description: "An Electrically Stimulated Morphine Tapering Device To Counter The Current Prescription Opioid Epidemic.",
    tech: ["JavaScript", "Fusion 360"],
    link: "https://docs.google.com/document/d/11rsvyvJq2UTU_E6MNGtw38qVZScZXUj7/edit?usp=sharing&ouid=117600191332620046873&rtpof=true&sd=true",
    img: projAlphaImg,
  },
  {
    title: "Market Beat Robot Advisor",
    description: "1st place winning robo-advisor designed to beat the market. Returned 5.7% vs 3.93% benchmark, ending at $1,057,000.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas"],
    link: "https://github.com/Ollienel777/MarketBeat_CFM/blob/main/Team_XX_Assignment.ipynb",
    img: projBetaImg,
  },
  {
    title: "Fentanyl Tapering Patch",
    description: "Multi-laminate fentanyl tapering patch enabling flexible dosages while reducing misuse and withdrawal severity.",
    tech: ["Fusion 360"],
    link: "https://docs.google.com/document/d/1HvhtzPQ1I6ZCxw09iZaYcG9dvyLQqKo0vK56QX6H3xk/edit?usp=sharing",
    img: projGammaImg,
  },
];

const edits = [
  { id: "edit1", title: "Edit 01", src: edit1 },
  { id: "edit2", title: "Edit 02", src: edit2 },
  { id: "edit3", title: "Edit 03", src: edit3 },
  { id: "edit4", title: "Edit 04", src: edit4 },
  { id: "edit5", title: "Edit 05", src: edit5 },
  { id: "edit6", title: "Edit 06", src: edit6 },
  { id: "edit7", title: "Edit 07", src: edit7 },
  { id: "edit8", title: "Edit 08", src: edit8 },
  { id: "edit9", title: "Edit 09", src: edit9 },
  { id: "edit10", title: "Edit 10", src: edit10 },
  { id: "edit11", title: "Edit 11", src: edit11 },
];

export default function PixelPortfolio() {
  const [openFactId, setOpenFactId] = useState(null);
  const [soundOn, setSoundOn] = useState(false);

  const [tiktokStats] = useState({
    username: "atsushibrainrot",
    followers: 1727,
    likes: 194800,
    views: 865000,
  });

  const firstEditId = edits?.[0]?.id ?? null;
  const [activeEditId, setActiveEditId] = useState(firstEditId);

  const activeEdit = useMemo(
    () => edits.find((x) => x.id === activeEditId) ?? edits[0] ?? null,
    [activeEditId]
  );

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#000", overflowX: "hidden" }}>
      <style>{`
        html, body { margin: 0; padding: 0; background: #000; }
        #root { width: 100%; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .slide-in { animation: slideIn 0.6s ease-out; }

        .gradient-text {
          background: linear-gradient(135deg, #0078d3ff, #006ec1ff, #006ec1ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .creativeGrid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 420px;
          gap: 28px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .creativeGrid { grid-template-columns: 1fr; }
        }

        .section-divider {
          height: 4px;
          background: #000;
          margin: 4rem 0;
          opacity: 0.25;
        }

        .container {
          width: min(1100px, calc(100% - 32px));
          margin: 0 auto;
        }

        .h1 { font-weight: 800; margin: 0 0 12px 0; line-height: 1.05; font-size: clamp(48px, 7vw, 88px); }
        .h2 { font-weight: 800; margin: 0; line-height: 1.1; font-size: clamp(34px, 4.5vw, 54px); }

        .hero-pill {
          display: inline-block;
          padding: 12px 32px;
          margin: 10px 0 18px 0;
          font-weight: 800;
          background: #014c86ff;
          color: #000;
          box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
          border: 4px solid #000;
        }

        .pixel-social {
          width: 54px;
          height: 54px;
          background: #01365fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid #000;
          box-shadow: -4px -4px 0 #1e5b87, 4px 4px 0 #000, 8px 8px 0 rgba(0,0,0,0.4);
          image-rendering: pixelated;
          transition: transform 0.12s;
        }
        .pixel-social:hover { transform: translate(-2px, -2px); }
        .pixel-icon { width: 24px; height: 24px; color: #f5ebe0; filter: drop-shadow(2px 2px 0 #000); }

        .desktopPane {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-content: start;
        }

        .desktopIcon {
          width: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 10px;
          cursor: pointer;
          user-select: none;
          border: 3px solid transparent;
        }
        .desktopIcon:hover {
          background: rgba(255,255,255,0.06);
          border: 3px dotted rgba(255,255,255,0.35);
        }
        .desktopLabel {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: #b7c9c4;
          text-align: center;
          text-shadow: 2px 2px 0 rgba(0,0,0,0.45);
          line-height: 1.6;
        }
        .desktopImg {
          width: 58px;
          height: 58px;
          image-rendering: pixelated;
          filter: drop-shadow(3px 3px 0 rgba(0,0,0,0.7));
        }

        .pixelBubble {
          margin-top: 18px;
          padding: 14px;
          background: #ffffff;
          color: #111;
          border: 4px solid #000;
          box-shadow: 6px 6px 0 #000;
          position: relative;
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: 0.04em;
          max-width: 360px;
        }

        .grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 980px) { .grid3 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .grid3 { grid-template-columns: 1fr; } }

        .win {
          background: #c9cce0;
          border: 4px solid #014c86;
          box-shadow: 6px 6px 0 #000;
          display: flex;
          flex-direction: column;
          align-self: start;
        }
        .winHeader {
          background: #014c86ff;
          color: #fff;
          padding: 8px 12px;
          font-family: 'Press Start 2P', monospace;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          letter-spacing: 0.06em;
        }
        .winBtns { display: flex; gap: 8px; }
        .winBtn { width: 14px; height: 14px; border: 2px solid #000; background: #f5ebe0; }
        .winBtnClose { background: #edac8f; }

        /* IMPORTANT FIX: stop gradient-text rules from making other text invisible */
        .winBody {
          background: #fff;
          padding: 16px;
          border: 4px solid #000;
          color: #111;
          -webkit-text-fill-color: #111;
        }

        .projImg {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border: 4px solid #000;
          box-shadow: 4px 4px 0 #000;
          margin-bottom: 14px;
          image-rendering: pixelated;
        }
        .projTitle {
          font-family: 'Press Start 2P', monospace;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: #014c86ff;
          margin: 0 0 10px 0;
          line-height: 1.6;
        }
        .projDesc {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          line-height: 1.9;
          letter-spacing: 0.05em;
          color: #6b7c7a;
          margin: 0 0 14px 0;
        }
        .techTag {
          padding: 8px 10px;
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
          letter-spacing: 0.05em;
          background: #01365fff;
          color: #f5ebe0;
          border: 3px solid #000;
          box-shadow: 3px 3px 0 #000;
        }
      `}</style>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
        <div className="slide-in" style={{ textAlign: "center", width: "min(900px, 100%)" }}>
          <div className="pulse">
            <img src={avatar} alt="Pixel avatar" style={{ width: "200px", imageRendering: "pixelated" }} />
          </div>

          <h1
            className="h1 gradient-text"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              textShadow: "4px 4px 0 rgba(0,0,0,0.25)",
              letterSpacing: "0.12em",
              lineHeight: "1.4",
              fontSize: "clamp(36px, 5vw, 72px)",
            }}
          >
            Mané Muradyan
          </h1>

          <div
            className="hero-pill"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              letterSpacing: "0.12em",
              fontSize: "clamp(12px, 1.2vw, 16px)",
              textShadow: "3px 3px 0 rgba(0,0,0,0.25)",
              padding: "14px 24px",
            }}
          >
            &lt; Current CS + Finance Student @uwaterloo /&gt;
          </div>

          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "10px",
              lineHeight: "1.8",
              margin: "0 0 28px 0",
              color: "#b7c9c4",
              letterSpacing: "0.08em",
              textShadow: "2px 2px 0 rgba(0,0,0,0.35)",
            }}
          >
            welcome to my world! feel free to explore :p
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
            <a className="pixel-social" href="#" aria-label="GitHub">
              <Github className="pixel-icon" />
            </a>
            <a className="pixel-social" href="https://www.linkedin.com/in/mane-muradyan-6584a92a3/" aria-label="LinkedIn">
              <Linkedin className="pixel-icon" />
            </a>
            <a className="pixel-social" href="mailto:mane.dyan@gmail.com" aria-label="Email">
              <Mail className="pixel-icon" />
            </a>
          </div>
        </div>
      </section>
{/* Floating Decorative Elements */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="float" style={{ position: "absolute", top: 30, left: 40, fontSize: 64, opacity: 0.2, animationDelay: "0s" }}>. ₊ ⊹ . ₊˖ . ₊</div>
        <div className="float" style={{ position: "absolute", top: 160, right: 80, fontSize: 56, opacity: 0.2, animationDelay: "1s" }}> ₊ ⊹</div>
        <div className="float" style={{ position: "absolute", bottom: 160, left: "25%", fontSize: 72, opacity: 0.2, animationDelay: "2s" }}>. ݁˖ . ݁</div>
        <div className="float" style={{ position: "absolute", bottom: 80, right: "50%", fontSize: 64, opacity: 0.2, animationDelay: "3s" }}>⊹ . ݁˖ </div>
      </div>
      <div
  className="float pixel-star"
  style={{ position: "absolute", top: 120, left: 500, fontSize: 64 }}
>
  ₊ ⊹
</div>


<div
  className="float pixel-star"
  style={{ position: "absolute", top: 160, right: 80, fontSize: 56 }}
>
  . ݁₊ ⊹ . ݁˖ . ݁
</div>


<div
  className="float pixel-star"
  style={{ position: "absolute", bottom: 160, left: "25%", fontSize: 72 }}
>
  . ݁˖ . ݁
</div>


<div
  className="float pixel-star"
  style={{ position: "absolute", bottom: 80, right: "33%", fontSize: 64 }}
>
  . ₊˖ .
</div>


<div
  className="float pixel-star"
  style={{ position: "absolute", bottom: 300, right: "85%", fontSize: 64 }}
>
  ₊ ⊹₊
</div>



      {/* MAIN */}
      <div className="container" style={{ paddingBottom: 80 }}>
        {/* ABOUT */}
        <section className="slide-in" style={{ marginBottom: 80 }}>
          <div className="creativeGrid">
            <div className="win" style={{ maxWidth: 520 }}>
              <div className="winHeader">
                <span style={{ fontFamily: "'Press Start 2P', monospace" }}>About_me.txt — Notepad</span>
                <div className="winBtns">
                  <div className="winBtn" />
                  <div className="winBtn" />
                  <div className="winBtn winBtnClose" />
                </div>
              </div>
              <div className="winBody" style={{ borderColor: "#014c86" }}>
                <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 12, lineHeight: 1.9, margin: 0, color: "#6b7c7a", letterSpacing: "0.06em" }}>
                  Hi there im Mané! My goal in CS is creating tools that help others and leave impacts on any community, big or small. Click on the icons to learn
                  more about my hobbies outside of coding!! :3
                </p>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#b7c9c4", letterSpacing: "0.06em", marginBottom: 12, textShadow: "2px 2px 0 rgba(0,0,0,0.45)" }}>
                click on the files to learn about me and my hobbies
              </div>

              <div className="desktopPane">
                {hobbies.map((h) => (
                  <div
                    key={h.id}
                    className="desktopIcon"
                    onClick={() => setOpenFactId((prev) => (prev === h.id ? null : h.id))}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setOpenFactId((prev) => (prev === h.id ? null : h.id));
                    }}
                  >
                    <img src={h.img} alt={h.title} className="desktopImg" />
                    <div className="desktopLabel">{h.label}</div>
                  </div>
                ))}
              </div>

              {openFactId && (
                <div className="pixelBubble">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: "#014c86" }}>{hobbies.find((h) => h.id === openFactId)?.title}</div>
                    <button
                      style={{
                        width: 22,
                        height: 22,
                        border: "3px solid #000",
                        background: "#edac8f",
                        cursor: "pointer",
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => setOpenFactId(null)}
                      aria-label="Close"
                    >
                      X
                    </button>
                  </div>
                  <div>{hobbies.find((h) => h.id === openFactId)?.fact}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* PROJECTS */}
        <section className="slide-in" style={{ marginBottom: 80 }}>
          <h2 className="h2 gradient-text" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "22px", lineHeight: "1.6", letterSpacing: "0.08em", textShadow: "2px 2px 0 rgba(0,0,0,0.35)", marginBottom: 10 }}>
            Projects
          </h2>
          <p style={{ margin: "0 0 18px 0", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#b7c9c4", letterSpacing: "0.06em", textShadow: "2px 2px 0 rgba(0,0,0,0.35)", lineHeight: "1.8" }}>
            click the white arrow to learn more...
          </p>

          <div className="grid3">
            {projects.map((project, idx) => (
              <div key={idx} className="win">
                <div className="winHeader">
                  <span>{project.title}.exe</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label="Open project" style={{ display: "inline-flex" }}>
                      <ExternalLink size={18} style={{ color: "#fff" }} />
                    </a>
                    <div className="winBtns">
                      <div className="winBtn" />
                      <div className="winBtn" />
                      <div className="winBtn winBtnClose" />
                    </div>
                  </div>
                </div>

                <div className="winBody">
                  {project.img ? <img src={project.img} alt={project.title} className="projImg" /> : null}
                  <h3 className="projTitle">{project.title}</h3>
                  <p className="projDesc">{project.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {project.tech?.map((t, i) => (
                      <span key={i} className="techTag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* CREATIVE */}
        <section className="slide-in" style={{ marginBottom: 80 }}>
          <h2 className="h2 gradient-text" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "22px", lineHeight: "1.6", letterSpacing: "0.08em", textShadow: "2px 2px 0 rgba(0,0,0,0.35)", marginBottom: 18 }}>
            Creative :P
          </h2>

          <p style={{ margin: "0 0 18px 0", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#b7c9c4", letterSpacing: "0.06em", textShadow: "2px 2px 0 rgba(0,0,0,0.35)", lineHeight: "1.8" }}>
            all visual edits made with Adobe After Effects
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12, alignItems: "center" }}>
            {edits.map((e) => {
              const active = e.id === activeEditId;
              return (
                <button
                  key={e.id}
                  onClick={() => setActiveEditId(e.id)}
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    padding: "10px 12px",
                    border: "3px solid #000",
                    boxShadow: "3px 3px 0 #000",
                    cursor: "pointer",
                    background: active ? "#014c86ff" : "#c9cce0",
                    color: active ? "#fff" : "#111",
                  }}
                >
                  {e.title}
                </button>
              );
            })}

            <button
              onClick={() => setSoundOn((s) => !s)}
              style={{
                marginLeft: "auto",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 10,
                letterSpacing: "0.06em",
                padding: "10px 12px",
                border: "3px solid #000",
                boxShadow: "3px 3px 0 #000",
                cursor: "pointer",
                background: soundOn ? "#edac8f" : "#b7c9c4",
                color: "#111",
              }}
            >
              Sound: {soundOn ? "ON" : "OFF"}
            </button>
          </div>

          <div className="creativeGrid">
            {/* LEFT */}
            <div className="win" style={{ maxWidth: 680 }}>
              <div className="winHeader">
                <span>{(activeEdit?.title || "Edit")}.mp4 — Player</span>
                <div className="winBtns">
                  <div className="winBtn" />
                  <div className="winBtn" />
                  <div className="winBtn winBtnClose" />
                </div>
              </div>

              <div className="winBody">
                {activeEdit ? (
                  <video
                    key={activeEdit.id}
                    src={activeEdit.src}
                    controls
                    autoPlay
                    loop
                    muted={!soundOn}
                    playsInline
                    style={{
                      width: "100%",
                      border: "4px solid #000",
                      boxShadow: "4px 4px 0 #000",
                      imageRendering: "pixelated",
                    }}
                  />
                ) : (
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#6b7c7a" }}>
                    No edits found. Check your MP4 imports/filenames.
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="win">
              <div className="winHeader">
                <span>Current_Stats.exe</span>
                <div className="winBtns">
                  <div className="winBtn" />
                  <div className="winBtn" />
                  <div className="winBtn winBtnClose" />
                </div>
              </div>

              <div className="winBody" style={{ fontFamily: "'Press Start 2P', monospace", color: "#111", WebkitTextFillColor: "#111" }}>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    textDecoration: "none",
                    color: "#111",
                    marginBottom: 10,
                    WebkitTextFillColor: "#111",
                  }}
                >
                  <img
                    src={tiktokPfp}
                    alt="TikTok profile"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      border: "3px solid #000",
                      boxShadow: "3px 3px 0 #000",
                      imageRendering: "pixelated",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ lineHeight: 1.6 }}>
                    <div style={{ fontSize: 10, color: "#6b7c7a", WebkitTextFillColor: "#6b7c7a" }}>TikTok</div>
                    <div style={{ fontSize: 12, fontWeight: 900, color: "#111", WebkitTextFillColor: "#111" }}>
                      @{tiktokStats.username}
                    </div>
                    <div style={{ fontSize: 9, color: "#014c86", WebkitTextFillColor: "#014c86" }}>(click to open)</div>
                  </div>
                </a>

                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    ["Followers", tiktokStats.followers],
                    ["Likes", tiktokStats.likes],
                    ["Total Views", tiktokStats.views],
                  ].map(([label, value]) => (
                    <div key={label} style={{ border: "3px solid #000", padding: 10, boxShadow: "3px 3px 0 #000" }}>
                      <div style={{ fontSize: 9, color: "#6b7c7a", WebkitTextFillColor: "#6b7c7a" }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 900, color: "#111", WebkitTextFillColor: "#111" }}>
                        {Number(value ?? 0).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "30px 0 60px 0" }} />
      </div>
    </div>
  );
}