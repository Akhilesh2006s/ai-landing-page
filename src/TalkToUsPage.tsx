import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnxaLogo from "../Anxa-assist.png";
import HeroBg from "../bg.png";
import "../styles.css";

const TalkToUsPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSent = new URLSearchParams(window.location.search).get("sent") === "1";

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="page ea-page">
      <div className="nav hero-nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <img src={AnxaLogo} alt="ANXA" className="nav-logo" />
            <span className="nav-wordmark">ANXA</span>
          </div>
          <div className="nav-right">
            <Link to="/" className="nav-cta" style={{ display: "inline-flex", alignItems: "center" }}>
              Back
            </Link>
          </div>
        </div>
      </div>

      <section className="ea-hero">
        <div className="ea-card">
          <img src={HeroBg} alt="" className="ea-card-bg" />
          <div className="ea-card-content">
            <div className="modal ea-panel" aria-label="Talk to us form">
              <div className="modal-head">
                <h3 className="modal-title">Talk to Us</h3>
                <Link to="/" className="modal-close" aria-label="Close" style={{ textDecoration: "none" }}>
                  ×
                </Link>
              </div>

              <div className="modal-body">
                {isSent ? (
                  <div className="ea-success" role="status" aria-live="polite">
                    <h4 className="ea-success-title">Submitted Successfully</h4>
                    <p className="ea-success-text">Thank you. Our team will contact you shortly.</p>
                    <div className="modal-actions">
                      <Link to="/" className="btn btn--ghost modal-cancel">
                        Back to Home
                      </Link>
                      <Link to="/talk-to-us" className="btn btn--primary modal-submit">
                        Submit Another
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form
                    className="modal-form"
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/amenityforge@gmail.com"
                    method="POST"
                  >
                    <input type="hidden" name="_subject" value="ANXA Talk To Us Request" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={`${window.location.origin}/talk-to-us?sent=1`} />

                    <div>
                      <label className="modal-label" htmlFor="tu-name">Name</label>
                      <input id="tu-name" name="name" className="modal-input" required placeholder="Name" />
                    </div>

                    <div>
                      <label className="modal-label" htmlFor="tu-company">Company Name</label>
                      <input
                        id="tu-company"
                        name="company_name"
                        className="modal-input"
                        required
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label className="modal-label" htmlFor="tu-phone">Phone Number</label>
                      <input
                        id="tu-phone"
                        name="phone_number"
                        className="modal-input"
                        type="tel"
                        required
                        placeholder="+1 555 123 4567"
                      />
                    </div>

                    <div className="modal-actions">
                      <Link
                        to="/"
                        className="btn btn--ghost modal-cancel"
                        style={{ opacity: isSubmitting ? 0.65 : 1, pointerEvents: isSubmitting ? "none" : "auto" }}
                      >
                        Cancel
                      </Link>
                      <button type="submit" className="btn btn--primary modal-submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Request"}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkToUsPage;

