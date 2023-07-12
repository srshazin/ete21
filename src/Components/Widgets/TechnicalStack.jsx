import { BiLogoFirebase } from "react-icons/bi";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiBabel, SiVite } from "react-icons/si";
import { FaCloudflare, FaPython } from "react-icons/fa";
import RUET_logo from "../../assets/RUET_logo.png"; //vite
const TechnicalStacks = () => {
  return (
    <div className="stack-widget">
      <h1 className="lab-2">Powered By</h1>
      <div className="ic_ruet">
        <img src={RUET_logo} />
      </div>
      <div className="stack-listsdspdhty22">
        <a
          href="https://firebase.google.com/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <BiLogoFirebase className="ic_stack_ic" />
          <div className="stack-widget-lab">Firebase</div>
        </a>
        <a
          href="https://www.cloudflare.com/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <FaCloudflare className="ic_stack_ic" />
          <div className="stack-widget-lab">CloudFlare</div>
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <FaPython className="ic_stack_ic" />
          <div className="stack-widget-lab">Python</div>
        </a>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <FaReact className="ic_stack_ic" />
          <div className="stack-widget-lab">React</div>
        </a>
        <a
          href="https://vite.dev/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <SiVite className="ic_stack_ic" />
          <div className="stack-widget-lab">Vite</div>
        </a>
        <a
          href="https://babeljs.io/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <SiBabel className="ic_stack_ic" />
          <div className="stack-widget-lab">BabelJs</div>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="stack-parent"
        >
          <FaGithub className="ic_stack_ic" />
          <div className="stack-widget-lab">GitHub</div>
        </a>
      </div>
    </div>
  );
};

export default TechnicalStacks;
