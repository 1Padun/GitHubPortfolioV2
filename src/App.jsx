import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  DownloadSimple,
  EnvelopeSimple,
  GameController,
  GithubLogo,
  GridFour,
  LinkedinLogo,
  Play,
  TelegramLogo,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";

const projects = [
  {
    id: "growshi",
    category: "Commercial",
    title: "GROWSHI",
    subtitle: "Commercial multiplayer WebGL board game",
    color: "red",
    description:
      "A commercial multiplayer WebGL board game for 2-8 players. Build an empire, trade assets and compete for the best result.",
    image: "/projects/Growshi5PlayerBudgetInfo.png",
    gallery: [
      "/projects/Growshi1Dashboard.png",
      "/projects/Growshi2MainMenu.png",
      "/projects/Growshi3LobbyWaiting.png",
      "/projects/Growshi4PlayerLifeStyleCard.png",
      "/projects/Growshi5PlayerBudgetInfo.png",
      "/projects/Growshi6PlayerPlayground.png",
      "/projects/Growshi7PlayerPlayground2.png",
      "/projects/Growshi8HostPanel.png",
    ],
    tags: ["Unity", "Photon PUN 2", "ASP.NET Core", "WebGL"],
    responsibilities: [
      [
        "Gameplay Systems",
        "Turn flow, dice roll, board and tile movement, and game state.",
      ],
      [
        "Multiplayer",
        "Lobby, rooms, RPC, player properties and host/client logic.",
      ],
      [
        "Voice & Chat",
        "Photon Voice and Chat integrated into the session flow.",
      ],
      [
        "Reconnect",
        "Hydration flow that restores a player after reconnecting.",
      ],
      ["Economy", "Portfolio, cash flow, stocks, crypto, assets and trading."],
      ["Game UI", "Lobby, market, trade, HUD, toasts and turn announcements."],
    ],
    challenges: [
      [
        "State synchronization",
        "Problem: complex game state needs to remain consistent for every player.",
        "Solution: RPC, room/player properties and explicit state recovery events.",
      ],
      [
        "Reconnect flow",
        "Problem: a player can lose their session after a connection drop.",
        "Solution: hydration logic restores the player into the active room.",
      ],
    ],
    architecture: ["Unity WebGL", "Photon PUN 2", "ASP.NET Core API"],
    video: "/projects/growshi-gameplay.mp4",
    links: [{ label: "Website", href: "https://growshigame.com.ua" }],
  },
  {
    id: "forest",
    category: "Personal",
    title: "FOREST OF DESPAIR",
    subtitle: "Horror game prototype",
    color: "violet",
    description:
      "A personal horror-game prototype focused on atmosphere, exploration and a readable enemy state machine.",
    image:
      "projects/FOD1Logo.png",
    gallery:[
    "projects/FOD2.jpg"
    ],
    tags: ["Unity", "C#", "Post-processing", "PC"],
    responsibilities: [
      [
        "Player Movement",
        "Movement and interaction foundation for exploration.",
      ],
      ["Terrain", "Playable outdoor space and traversal setup."],
      ["Inventory", "Item storage and gameplay-facing inventory behavior."],
      ["Flashlight", "A key tension mechanic with an in-game light source."],
      ["Monster AI", "State-machine driven monster behavior."],
      ["Atmosphere", "Post-processing for a focused horror mood."],
    ],
    challenges: [
      [
        "Enemy behavior",
        "Problem: an enemy needs readable, extensible behavior.",
        "Solution: a state machine separates its states and transitions.",
      ],
      [
        "Atmosphere",
        "Problem: create tension without overloading the scene.",
        "Solution: post-processing and controlled lighting support the core mood.",
      ],
    ],
    architecture: [
      "Unity",
      "C# Gameplay",
      "State Machine",
      "Scriptable Objects",
    ],
    video: null,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/1Padun/Forest_of_Despair",
        icon: "github",
      },
    ],
  },
  {
    id: "cuberacer",
    category: "Personal",
    title: "CUBERACER",
    subtitle: "Arcade runner mini game",
    color: "violet",
    description:
      "A compact arcade runner built around level progression, precise control and player skin selection.",
    image:
      "/public/projects/Cuberacer1Logo.jpg",
      gallery: [
        "/projects/Cuberacer1Logo.jpg",
        "/projects/Cuberacer2.png",
        "/projects/Cuberacer3.png",
        "/projects/Cuberacer4.png",
        "/projects/Cuberacer5.png",
        "/projects/Cuberacer6.png",
      ],
    tags: ["Unity", "C#", "PC"],
    responsibilities: [
      ["Runner Gameplay", "Core movement, obstacles and arcade game loop."],
      ["Level Flow", "Progression and completion states across levels."],
      ["Skin Selection", "Player-facing cosmetic selection flow."],
      ["Game Feel", "Control response tuned for fast, readable play."],
      ["UI", "Clear menu and gameplay feedback states."],
      ["Build", "Playable browser demo published on itch.io."],
    ],
    challenges: [
      [
        "Control response",
        "Problem: an arcade runner immediately feels wrong when controls are vague.",
        "Solution: focus the gameplay loop on readable movement and obstacles.",
      ],
      [
        "Compact scope",
        "Problem: a small game must still have a complete player journey.",
        "Solution: combine levels, progression and skin selection into a focused loop.",
      ],
    ],
    architecture: ["Unity", "C# Gameplay", "Level Flow"],
    video: "/projects/cuberacer-gameplay.mp4",
    links: [{ label: "Play demo", href: "https://1padun.itch.io/cuberacer" }],
  },
];

function Sidebar({ screen, setScreen }) {
  return (
    <aside className="sidebar">
      <button
        className="mark"
        onClick={() => setScreen("library")}
        aria-label="Open main menu"
      >
        A
      </button>
      <div className="identity">
        <span>JUNIOR UNITY DEVELOPER</span>
        <h1>
          ANDRIY
          <br />
          KOVALCHUK
        </h1>
        <p>
          I build gameplay systems, multiplayer experiences and interactive
          worlds.
        </p>
      </div>
      <nav className="menu" aria-label="Primary navigation">
        <button
          className={screen === "about" ? "" : "active"}
          onClick={() => setScreen("library")}
        >
          <GameController size={19} />
          <span>Projects</span>
          <CaretRight className="menu-arrow" size={16} />
        </button>
        <button
          className={screen === "about" ? "active" : ""}
          onClick={() => setScreen("about")}
        >
          <UserCircle size={19} />
          <span>About</span>
        </button>
      </nav>
      <a
        className="cv"
        href="/Andriy_Kovalchuk_Junior_Unity_Developer_CV2.pdf"
        download
      >
        <DownloadSimple size={18} /> Download resume
      </a>
      <div className="socials">
        <a
          href="https://github.com/1Padun"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubLogo size={21} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrii-kovalchuk-428a09234/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={21} />
        </a>
        <a
          href="https://t.me/1Padun"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <TelegramLogo size={21} />
        </a>
        <a href="mailto:PadunHzxc@gmail.com" aria-label="Email">
          <EnvelopeSimple size={21} />
        </a>
      </div>
    </aside>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      className={`project-card ${project.color}`}
      onClick={() => onOpen(project)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="card-image"
        style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 52%, #0b0d10 100%),
            url(${project.image})
          `,
        }}
      >
        <span className="category-pill">{project.category}</span>
      </div>

      <div className="card-copy">
        <h3>{project.title}</h3>

        <p>{project.subtitle}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <ArrowUpRight className="card-arrow" size={25} weight="light" />
      </div>
    </motion.button>
  );
}

function Library({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );
  const featured = projects[0];
  return (
    <motion.section
      className="library page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="featured"
        style={{
          backgroundImage: featured.video
            ? undefined
            : `linear-gradient(90deg, #090b0e 0%, rgba(9,11,14,.28) 64%, #090b0e 100%), linear-gradient(0deg, #090b0e 0%, transparent 60%), url(${featured.image})`,
        }}
      >
        {featured.video && (
          <video
            className="featured-video"
            src={featured.video}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="featured-copy">
          <span>FEATURED PROJECT</span>
          <h2>{featured.title}</h2>
          <p>{featured.subtitle}</p>
          <div className="tag-row">
            {featured.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <button className="featured-cta" onClick={() => onOpen(featured)}>
            Explore case study <ArrowUpRight size={19} />
          </button>
        </div>
      </div>
      <div className="project-pane">
        <div className="pane-heading">
          <div>
            <h2>PROJECTS</h2>
            <div className="filters">
              {["All", "Commercial", "Personal"].map((f) => (
                <button
                  onClick={() => setFilter(f)}
                  className={filter === f ? "selected" : ""}
                  key={f}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <button className="grid-button" aria-label="Grid view">
            <GridFour size={21} />
          </button>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Detail({ project, onBack }) {
  const [openMedia, setOpenMedia] = useState(null);
  const [galleryPage, setGalleryPage] = useState(0);
  const galleryImages = project.gallery?.length
    ? project.gallery
    : Array.from({ length: 6 }, () => project.image);
  const imagesPerPage = 6;
  const galleryPages = Math.ceil(galleryImages.length / imagesPerPage);
  const visibleGalleryImages = galleryImages.slice(
    galleryPage * imagesPerPage,
    galleryPage * imagesPerPage + imagesPerPage,
  );
  const mediaStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(4,5,7,.48), rgba(4,5,7,.03)), url(${project.image})`,
  };
  return (
    <motion.section
      className="detail page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="detail-top">
        <header className="detail-intro">
          <button className="back" onClick={onBack}>
            <ArrowLeft size={17} /> Back to projects
          </button>
          <h2>{project.title}</h2>
          <span>{project.category} - Unity Game Development</span>
          <p>{project.description}</p>
          <div className="intro-actions">
            {project.links.map((link) => (
              <a
                key={link.label}
                className={
                  link.icon === "github" ? "secondary-link" : "primary-link"
                }
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon === "github" ? (
                  <GithubLogo size={17} />
                ) : (
                  <ArrowUpRight size={17} />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </header>
        <div className="media-layout">
          <div className="showcase">
            <div
              className="showcase-image"
              style={project.video ? undefined : mediaStyle}
              onClick={() => project.video && setOpenMedia({ type: "video" })}
            >
              {project.video && (
                <video
                  className="showcase-video"
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {project.video && (
                <div className="play-button">
                  <Play size={28} weight="fill" />
                </div>
              )}

              <span>Gameplay reel</span>
            </div>
          </div>
          <div className="gallery-wrapper">
            <div className="gallery case-gallery">
              {visibleGalleryImages.map((image, index) => (
                <button
                  className="gallery-shot"
                  key={image}
                  onClick={() => setOpenMedia({ type: "image", src: image })}
                  style={{ backgroundImage: `url(${image})` }}
                  aria-label={`Open gallery image ${galleryPage * imagesPerPage + index + 1}`}
                />
              ))}
            </div>
            {galleryPages > 1 && (
              <div className="gallery-pagination">
                <button
                  onClick={() => setGalleryPage((page) => Math.max(0, page - 1))}
                  disabled={galleryPage === 0}
                  aria-label="Previous gallery images"
                >
                  <CaretLeft size={17} />
                </button>
                <span>{galleryPage + 1} / {galleryPages}</span>
                <button
                  onClick={() => setGalleryPage((page) => Math.min(galleryPages - 1, page + 1))}
                  disabled={galleryPage === galleryPages - 1}
                  aria-label="Next gallery images"
                >
                  <CaretRight size={17} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="case-grid">
        <article>
          <h3>Responsibilities</h3>
          <div className="responsibility-list">
            {project.responsibilities.map(([title, text]) => (
              <div key={title}>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </article>
        <article>
          <h3>Challenges & solutions</h3>
          {project.challenges.map(([title, problem, solution]) => (
            <div className="solution" key={title}>
              <b>{title}</b>
              <p>{problem}</p>
              <p>{solution}</p>
            </div>
          ))}
        </article>
        <article>
          <h3>Architecture</h3>
          <div className="architecture">
            {project.architecture.map((node, index) => (
              <div className="architecture-step" key={node}>
                <span>{node}</span>
                {index < project.architecture.length - 1 && <i>→</i>}
              </div>
            ))}
          </div>
        </article>
        <article>
          <h3>Tech stack</h3>
          <div className="stack">
            {project.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
      {openMedia && (
        <motion.div
          className="media-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenMedia(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project media"
        >
          <div
            className="media-modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setOpenMedia(null)}
              aria-label="Close media"
            >
              <X size={22} />
            </button>
            {openMedia.type === "video" && project.video ? (
              <video
                className="modal-video"
                src={project.video}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <div
                className="modal-image"
                style={{
                  backgroundImage: `url(${openMedia.src || project.image})`,
                }}
              >
                {openMedia.type === "video" && (
                  <p>Video will appear here after its MP4 is added.</p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}

function About() {
  return (
    <motion.section
      className="about page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span>ABOUT</span>
      <h2>
        Game development,
        <br />
        built with intent.
      </h2>
      <p>
        Junior Unity Developer with hands-on experience building a commercial
        multiplayer WebGL project. I enjoy clear gameplay systems, practical
        multiplayer engineering and collaborative growth.
      </p>
      <p>Based in Lviv, Ukraine. Ukrainian native, English B1.</p>
    </motion.section>
  );
}

export function App() {
  const [screen, setScreen] = useState("library");
  const [activeProject, setActiveProject] = useState(projects[0]);
  const openProject = (project) => {
    setActiveProject(project);
    setScreen("detail");
  };
  return (
    <div className="app-shell">
      <Sidebar screen={screen} setScreen={setScreen} />
      <main className="content">
        <AnimatePresence mode="wait">
          {screen === "library" && (
            <Library key="library" onOpen={openProject} />
          )}
          {screen === "detail" && (
            <Detail
              key="detail"
              project={activeProject}
              onBack={() => setScreen("library")}
            />
          )}
          {screen === "about" && <About key="about" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
