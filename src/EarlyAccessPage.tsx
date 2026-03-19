import React, { useState } from "react";
import AnxaLogo from "../Anxa-assist.png";
import HeroBg from "../bg.png";
import { Link } from "react-router-dom";
import "../styles.css";

const EarlyAccessPage: React.FC = () => {
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
            <div className="modal ea-panel" aria-label="Early access form">
              <div className="modal-head">
                <h3 className="modal-title">Request Early Access</h3>
                <Link to="/" className="modal-close" aria-label="Close" style={{ textDecoration: "none" }}>
                  ×
                </Link>
              </div>

              <div className="modal-body">
                {isSent ? (
                  <div className="ea-success" role="status" aria-live="polite">
                    <h4 className="ea-success-title">Submitted Successfully</h4>
                    <p className="ea-success-text">
                      Thank you. Your early access request has been submitted.
                    </p>
                    <div className="modal-actions">
                      <Link to="/" className="btn btn--ghost modal-cancel">
                        Back to Home
                      </Link>
                      <Link to="/early-access" className="btn btn--primary modal-submit">
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
                  <input type="hidden" name="_subject" value="ANXA Early Access Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/early-access?sent=1`} />

                  <div className="modal-grid">
                    <div>
                      <label className="modal-label" htmlFor="ea2-name">Name</label>
                      <input
                        id="ea2-name"
                        name="name"
                        className="modal-input"
                        required
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="modal-label" htmlFor="ea2-email">Email</label>
                      <input
                        id="ea2-email"
                        name="email"
                        className="modal-input"
                        type="email"
                        required
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="modal-label" htmlFor="ea2-company">Your Company Name</label>
                    <input
                      id="ea2-company"
                      name="company"
                      className="modal-input"
                      required
                      placeholder="Company Inc."
                    />
                  </div>

                  <div>
                    <label className="modal-label" htmlFor="ea2-description">Description</label>
                    <textarea
                      id="ea2-description"
                      name="description"
                      className="modal-textarea"
                      required
                      placeholder="Tell us what you want to automate with ANXA."
                    />
                  </div>

                  <div>
                    <label className="modal-label" htmlFor="ea2-message">Message</label>
                    <textarea
                      id="ea2-message"
                      name="message"
                      className="modal-textarea"
                      required
                      placeholder="Any additional details for the team."
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
                      {isSubmitting ? "Sending…" : "Send Request"}
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

export default EarlyAccessPage;

