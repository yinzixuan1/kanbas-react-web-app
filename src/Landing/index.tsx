
export default function Landing() {
  return (
    <div>
      {/* Full name and section number */}
      <div style={{ marginBottom: "20px" }}>
        <h1>Zixuan Yin - CS5610 - Section 01</h1>
      </div>

      {/* Heading for GitHub link */}
      <h1>Repositories Link</h1>
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/yinzixuan1/kanbas-react-web-app/tree/a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Source Code Repositories on GitHub
        </a>
      </div>

      <h1>Labs</h1>

      <ul>
        <li>
          <a href="/#/Labs" rel="noopener noreferrer">
            Labs
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab1" rel="noopener noreferrer">
            Lab1
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab2" rel="noopener noreferrer">
            Lab2
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab3" rel="noopener noreferrer">
            Lab3
          </a>
        </li>
      </ul>

      <h1>Kanbas</h1>

      <ul>
        <li>
          <a href="/#/Kanbas" rel="noopener noreferrer">
            Kanbas
          </a>
        </li>
      </ul>
    </div>
  );
}
