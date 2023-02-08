import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import man from "./assets/cover.png";
import "./App.css";

const BgImage = () => {
  return (
    <img
      src={man}
      alt="man"
      style={{ width: "350px", marginRight: "50px", marginLeft: "20px" }}
    />
  );
};

const CopyFromClipboard = (props) => {
  const { text } = props;
  return (
    <CopyToClipboard text={text}>
      <button className="clipboard">Copy to Clipboard</button>
    </CopyToClipboard>
  );
};

const InputBox = (props) => {
  const { link, setLink } = props;
  return (
    <input
      onChange={(event) => {
        setLink(event.target.value);
      }}
      placeholder="Share a link here..."
    />
  );
};

const Button = (props) => {
  const { link, shortLinks, setShortLinks } = props;

  return (
    <button
      onClick={async () => {
        try {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${link}`
          );
          const data = await res.json();
          const dataLink = data.result.short_link2;
          shortLinks.push({ oldLink: link, newLink: dataLink });
          setShortLinks([...shortLinks]);
        } catch (err) {
          console.log(err);
        }
      }}
    >
      Shorten It!
    </button>
  );
};

function App() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  console.log(shortLinks);
  return (
    <div className="main">
      <div className="header">
        <div>
          <h1>[ shortify ] </h1>
        </div>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div>
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
      <div className="main-body">
        <div className="main-body-top">
          <div className="main-body-texts">
            <p>More than just shorter links</p>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
          </div>
          <BgImage />
        </div>
        <div className="input-container">
          <InputBox link={link} setLink={setLink} />
          <Button
            link={link}
            shortLinks={shortLinks}
            setShortLinks={setShortLinks}
          />
        </div>

        <div
          className={`${
            shortLinks.length !== 0
              ? `links-container`
              : `links-container-empty`
          }`}
        >
          {shortLinks.map((links, i) => {
            return (
              <div className="link-container" key={i}>
                <div className="left">
                  {links.oldLink.length > 30
                    ? `${links.oldLink.slice(0, 30)}...`
                    : links.oldLink}
                </div>

                <div className="right">
                  <a href={`https://www.${links.newLink}`}>{links.newLink}</a>
                  <CopyFromClipboard text={links.newLink} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <p>Connect with me on</p>
        <p>
          <a
            href="https://www.linkedin.com/in/dhruvjyotiray/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin,
          </a>
          <a
            href="https://github.com/dhruvjyotiray"
            target="_blank"
            rel="noreferrer"
          >
            Github,
          </a>
          or
          <a
            href="https://www.fiverr.com/rayartistic"
            target="_blank"
            rel="noreferrer"
          >
            Fiverr
          </a>
        </p>
        <p>@Dhruvjyoti Ray. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
