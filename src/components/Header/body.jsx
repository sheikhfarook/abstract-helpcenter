import React from "react";
import "./body.css";
import bill from "../../assets/icons/billing.png";
import auth from "../../assets/icons/authg.png";
import manage from "../../assets/icons/manage.png";
import projects from "../../assets/icons/projects.png";
import using from "../../assets/icons/using-abstract.png";
import image from "../../assets/icons/image.png";

export default function BodyPart() {
  return (
    <div class="body-container">
      <div>
        {/* first */}
        <div className="single_div">
          <img className="icons" src={using} alt="" />
          <div>
            <h2> USing Abstract</h2>
            <p className="para">
              Abstract lets you manage, version, and document <br /> your
              designs in one place.
            </p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract"
            >
              Learn More{" "}
            </a>
          </div>
        </div>

        {/* first */}

        <div className="single_div">
          <img className="icons" src={manage} alt="" />
          <div>
            <h2>Manage your account</h2>
            <p className="para">
              Configure your account settings, such as your email, <br />{" "}
              profile details, and password.
            </p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* first */}
        <div className="single_div">
          <img className="icons" src={projects} alt="" />
          <div>
            <h2>Manage organizations, teams, and projects</h2>
            <p className="para">
              Use Abstract organizations, teams, and projects to <br /> organize
              your people and your work.
            </p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects"
            >
              {" "}
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* second */}

      <div >
        <div className="single_div2">
          <img className="icons" src={bill} alt="" />
          <div>
            <h2>Manage billing</h2>
            <p className="para">Change subscriptions and payment details.</p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* second */}
        <div className="single_div2">
          <img className="icons" src={auth} alt="" />
          <div>
            <h2>Authenticate to Abstract</h2>
            <p className="para">
              Set up and configure SSO, SCIM, and Just-in-Time <br />{" "}
              provisioning.
            </p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* second */}

        
        <div className="single_div2">
          <img className="icons" src={image} alt="" />
          <div>
            <h2>Abstract support</h2>
            <p className="para">Get in touch with a human.</p>
            <a
              className="bo-l"
              href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support"
            >
              Learn More
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
