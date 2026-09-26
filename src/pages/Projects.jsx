import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const projects = [
  {
    id: 'abyss-chat',
    label: '01',
    name: 'AbyssChat',
    stack: 'MERN / REAL-TIME',
    description: 'Ephemeral chat rooms that vanish when empty. No backend persistence — privacy by design.',
    tags: ['React', 'Node.js', 'Express', 'Socket.io'],
    github: 'https://github.com/sandeepnau80yal/AbyssChat',
    live: 'https://abyss.nau80yal.in/',
    media: {
      type: 'gallery',
      images: [
        { src: '/images/projects/abyss-chat/01home.png', alt: 'AbyssChat home screen with options to create or join a room' },
        { src: '/images/projects/abyss-chat/02join.png', alt: 'AbyssChat joining a room with a room code' },
        { src: '/images/projects/abyss-chat/03pass.png', alt: 'AbyssChat room password prompt' },
        { src: '/images/projects/abyss-chat/04interface.png', alt: 'AbyssChat live room with messages and participant status' },
      ],
    },
  },

  {
    id: 'mc-ec2',
    label: '02',
    name: 'Minecraft EC2',
    stack: 'AWS / EC2',
    description: 'A self-hosted Minecraft server on AWS, configured for ten concurrent players with mods and server tuning.',
    tags: ['AWS', 'Linux', 'EC2', 'DevOps'],
    github: '',
    media: { type: 'single', image: null },
  },

  {
    id: 'saycaster',
    label: '03',
    name: 'SayCaster',
    stack: 'PYTHON / PYGAME',
    description: 'A pseudo-3D raycasting engine built with custom vector math, trigonometric rendering, and fisheye correction.',
    tags: ['Python', 'PyGame', 'Vector Math'],
    github: 'https://github.com/sandeepnau80yal/SayCaster',
    media: {
      type: 'playable',
      poster: { src: '/images/projects/saycaster/preview-still.png', alt: 'Still frame of the SayCaster raycasting demo' },
      animation: '/images/projects/saycaster/preview.gif',
    },
  },

  {
    id: 'oryn-reader',
    label: '04',
    name: 'OrynReader',
    stack: 'JAVASCRIPT / EPUB',
    description: 'A lightweight EPUB reader built in vanilla JavaScript, with a React + Pretext rebuild in progress.',
    tags: ['JavaScript', 'epub.js', 'React'],
    github: 'https://github.com/sandeepnau80yal/OrynReader',
    live: 'https://oryn.nau80yal.in/',
    media: {
      type: 'gallery',
      images: [
        { src: '/images/projects/oryn-reader/01home.png', alt: 'Oryn Reader sign-in screen' },
        { src: '/images/projects/oryn-reader/02library.png', alt: 'Oryn Reader library view with uploaded books' },
        { src: '/images/projects/oryn-reader/03dark.png', alt: 'Oryn Reader displaying a book in dark theme' },
        { src: '/images/projects/oryn-reader/04sepia.png', alt: 'Oryn Reader displaying a book in sepia theme' },
      ],
    },
  },
]

const ImageViewer = ({ projectName, slides, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const activeSlide = slides[activeIndex]

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (slides.length > 1 && event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((index) => (index + 1) % slides.length)
      } else if (slides.length > 1 && event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
      } else if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll('button:not([disabled])')
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [onClose, slides.length])

  const move = (direction) => setActiveIndex((index) => (index + direction + slides.length) % slides.length)

  return createPortal(
    <div className="image-viewer" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="image-viewer__dialog" role="dialog" aria-modal="true" aria-label={`${projectName} image viewer`} ref={dialogRef}>
        <button className="image-viewer__close" type="button" onClick={onClose} aria-label="Close image viewer" ref={closeButtonRef}>×</button>
        {slides.length > 1 && <button className="image-viewer__nav image-viewer__nav--previous" type="button" onClick={() => move(-1)} aria-label="Previous image">‹</button>}
        <div className="image-viewer__content">
          {activeSlide.src
            ? <img className="image-viewer__image" src={activeSlide.src} alt={activeSlide.alt} />
            : <div className="image-viewer__custom">{activeSlide.content}</div>}
          {slides.length > 1 && <p className="image-viewer__count" aria-live="polite">{activeIndex + 1} / {slides.length}</p>}
        </div>
        {slides.length > 1 && <button className="image-viewer__nav image-viewer__nav--next" type="button" onClick={() => move(1)} aria-label="Next image">›</button>}
      </section>
    </div>,
    document.body,
  )
}

const ProjectGallery = ({ project, images, onOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const showControls = images.length > 1
  const move = (direction) => setActiveIndex((index) => (index + direction + images.length) % images.length)

  return (
    <div className="project-preview project-preview--media project-gallery">
      <button className="project-gallery__open" type="button" onClick={() => onOpen(images, activeIndex)} aria-label={`Open ${project.name} image: ${activeImage.alt}`}>
        <img className="project-gallery__image" src={activeImage.src} alt="" loading="lazy" />
      </button>
      {showControls && (
        <div className="project-gallery__controls" aria-label={`${project.name} screenshots`}>
          <button type="button" aria-label={`Previous ${project.name} screenshot`} onClick={() => move(-1)}>‹</button>
          <span aria-live="polite">{activeIndex + 1} / {images.length}</span>
          <button type="button" aria-label={`Next ${project.name} screenshot`} onClick={() => move(1)}>›</button>
        </div>
      )}
    </div>
  )
}

const SayCasterPreview = ({ media, onOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  if (media.poster?.src && media.animation) {
    return (
      <div className="project-preview project-preview--media project-preview--saycaster">
        <button className="project-gallery__open" type="button" onClick={() => onOpen([{ src: isPlaying ? media.animation : media.poster.src, alt: media.poster.alt }], 0)} aria-label="Open SayCaster image full screen">
          <img src={isPlaying ? media.animation : media.poster.src} alt="" loading="lazy" />
        </button>
        <button className="project-preview__play" type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? 'Show SayCaster still image' : 'Play SayCaster animation'}>
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>
        <span className="project-preview__hint">{isPlaying ? 'PAUSE' : 'PLAY'} · CLICK IMAGE TO EXPAND</span>
      </div>
    )
  }

  return <ProjectPreviewFallback projectId="saycaster" />
}

const ProjectPreview = ({ project, onOpen }) => {
  const { media } = project
  if (media?.type === 'gallery' && media.images.length > 0) return <ProjectGallery project={project} images={media.images} onOpen={onOpen} />
  if (media?.type === 'single' && media.image?.src) {
    return (
      <div className="project-preview project-preview--media project-gallery">
        <button className="project-gallery__open" type="button" onClick={() => onOpen([media.image], 0)} aria-label={`Open ${project.name} image full screen`}>
          <img className="project-gallery__image" src={media.image.src} alt="" loading="lazy" />
        </button>
      </div>
    )
  }
  if (media?.type === 'playable') return <SayCasterPreview media={media} onOpen={onOpen} />
  return (
    <button className="project-preview project-preview--interactive" type="button" onClick={() => onOpen([{ content: <ProjectPreviewFallback projectId={project.id} /> }], 0)} aria-label={`Open ${project.name} preview full screen`}>
      <span className="project-preview__concept"><ProjectPreviewFallback projectId={project.id} /></span>
      <span className="project-preview__expand-hint">OPEN FULL SCREEN ↗</span>
    </button>
  )
}

const ProjectPreviewFallback = ({ projectId }) => {
  if (projectId === 'abyss-chat') {
    return (
      <div className="project-preview preview-chat" role="img" aria-label="Concept preview of the AbyssChat room interface">
        <div className="preview-window-bar"><i /><i /><i /><span>abyss / room-08</span></div>
        <div className="chat-preview-body"><div className="chat-rail"><b /><b /><b /><b /></div><div className="chat-messages"><span className="chat-line chat-line--short" /><span className="chat-line" /><span className="chat-line chat-line--right" /><span className="chat-line chat-line--short" /><span className="chat-input" /></div></div>
      </div>
    )
  }

  if (projectId === 'mc-ec2') {
    return (
      <div className="project-preview preview-cloud" role="img" aria-label="Concept diagram of a Minecraft server running on an EC2 instance">
        <span className="cloud-node cloud-node--client">PLAYERS <b>10</b></span><span className="cloud-connector" />
        <span className="cloud-node cloud-node--server"><i>◆</i><b>EC2 INSTANCE</b><small>MINECRAFT · MODDED</small></span>
        <span className="cloud-region">AWS / EC2</span>
      </div>
    )
  }

  if (projectId === 'saycaster') {
    return (
      <div className="project-preview preview-raycast" role="img" aria-label="Stylized raycast corridor preview for SayCaster">
        <svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs><linearGradient id="ray-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10231e" /><stop offset="1" stopColor="#050807" /></linearGradient><linearGradient id="ray-glow" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#10231e" /><stop offset=".5" stopColor="#2bd0a9" stopOpacity=".5" /><stop offset="1" stopColor="#10231e" /></linearGradient></defs>
          <rect width="480" height="180" fill="url(#ray-bg)" /><path d="M0 0h480v45H0z" fill="#0a1512" /><path d="M0 45 180 82v98H0zm480 0L300 82v98h180z" fill="#0a1713" stroke="#1b6e5b" strokeOpacity=".65" /><path d="M180 82h120v98H180z" fill="url(#ray-glow)" stroke="#51e8c5" strokeOpacity=".65" /><path d="M0 180 180 82m300 98L300 82M0 135h480M0 105h480M0 83h480" stroke="#35b998" strokeOpacity=".35" /><path d="M60 0v180m60-180v180m300-180v180m-60-180v180" stroke="#35b998" strokeOpacity=".2" />
        </svg>
        <span className="raycast-label">SAYCASTER <i>— LEVEL 01</i></span>
      </div>
    )
  }

  return (
    <div className="project-preview preview-reader" role="img" aria-label="Concept preview of the OrynReader ebook interface">
      <div className="reader-sidebar"><b>ORYN</b><span /><span /><span /><span /></div>
      <div className="reader-page"><small>CHAPTER 04</small><b>Stories live<br />between the lines.</b><i /><i /><i /><i /><i /></div>
      <span className="reader-page-number">042</span>
    </div>
  )
}

const ProjectCard = ({ project }) => {
  const [viewer, setViewer] = useState(null)
  const openViewer = useCallback((slides, initialIndex) => setViewer({ slides, initialIndex }), [])
  const closeViewer = useCallback(() => setViewer(null), [])

  return (
    <>
      <article className="project-card project-card--showcase">
        <div className="project-card__meta"><span className="project-number">PROJECT / {project.label}</span><span className="project-stack">{project.stack}</span></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ProjectPreview project={project} onOpen={openViewer} />
        <div className="project-card__footer">
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-links">
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source ↗</a>}
            {project.id === 'mc-ec2' && (
              <details className="project-details">
                <summary>Server notes <span aria-hidden="true">＋</span></summary>
                <p>Self-hosted on AWS EC2 and configured for ten concurrent players, with mods and server tuning.</p>
              </details>
            )}
          </div>
        </div>
      </article>
      {viewer && <ImageViewer projectName={project.name} slides={viewer.slides} initialIndex={viewer.initialIndex} onClose={closeViewer} />}
    </>
  )
}

const Projects = () => (
  <div className="page-shell content-shell projects-shell">
    <header className="section-heading section-heading--row">
      <div><p className="section-kicker">02 / Selected work</p><h2>Ideas,<br /><span>made real.</span></h2></div>
      <p className="section-intro">A few things I’ve built, learned from, and continue to improve.</p>
    </header>
    <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
  </div>
)

export default Projects
