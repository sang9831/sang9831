import "./App.css";
import profilePhoto from "./assets/profile.jpg";
import {
  certificates,
  education,
  profile,
  projects,
  skillGroups,
  summary,
} from "./resumeData";

const currentYear = new Date().getFullYear();

function App() {
  return (
    <div className="page">
      <button className="print-btn" onClick={() => window.print()}>
        PDF로 저장 / 인쇄
      </button>

      <main className="sheet">
        <header className="id">
          <div className="id-left">
            <img className="avatar" src={profilePhoto} alt={`${profile.name} 증명사진`} />
            <div>
              <h1 className="name">{profile.name}</h1>
              <p className="role">{profile.role}</p>
            </div>
          </div>
          <div className="contact">
            <span>
              <span className="contact-label">Birth</span>
              {profile.birth}
            </span>
            <span>
              <span className="contact-label">Email</span>
              {profile.email}
            </span>
            <span>
              <span className="contact-label">Tel</span>
              {profile.tel}
            </span>
            <span>
              <span className="contact-label">GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {profile.githubLabel}
              </a>
            </span>
          </div>
        </header>

        <section>
          <SectionHead title="자기소개" />
          <div className="summary-group">
            {summary.map((line) => (
              <p className="summary" key={line}>
                {line}
              </p>
            ))}
          </div>
        </section>

        <section>
          <SectionHead title="기술 스택" />
          {skillGroups.map((group) => (
            <div className="tag-group" key={group.label}>
              <span className="tag-label">{group.label}</span>
              <span className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </section>

        <section>
          <SectionHead title="프로젝트" />
          {projects.map((project) => (
            <article className="entry" key={project.title}>
              <div className="entry-title">{project.title}</div>
              <div className="entry-date">{project.date}</div>
              <div className="entry-sub">{project.sub}</div>
              <div className="entry-links">
                <a
                  className="entry-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
              <ul className="entry-body">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="stack-line">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid-2">
          <div>
            <SectionHead title="학력 · 교육" />
            {education.map((item) => (
              <div className="edu-item" key={item.title}>
                <div className="edu-title">{item.title}</div>
                <div className="edu-sub">{item.sub}</div>
              </div>
            ))}
          </div>
          <div>
            <SectionHead title="자격" />
            {certificates.map((item) => (
              <div className="edu-item" key={item.title}>
                <div className="edu-title">{item.title}</div>
                <div className="edu-sub">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <p className="hint">© {currentYear} {profile.name}</p>
    </div>
  );
}

function SectionHead({ title }: { title: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <span className="rule" />
    </div>
  );
}

export default App;
