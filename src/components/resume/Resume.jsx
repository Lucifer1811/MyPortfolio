import "./resume.scss";
const Resume = () => {
  return (
    <div className="about">
      <div className="resume">
        <h1>My Resume</h1>
        <hr/>
        <div class="pdf-container">
          <object
            data="DivyamSingh-Resume.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              It appears your web browser doesn't support displaying PDFs.
              Please
              <a href="DivyamSingh-Resume.pdf">click here to download my resume.</a>
            </p>
          </object>
        </div>
        <p>
          <a href="DivyamSingh-Resume.pdf" download>
            <button>Download CV</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
