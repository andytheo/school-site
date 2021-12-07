import React from "react";

function Motto() {
  return (
    <div style={{ backgroundColor: "#faf8f8", height: "900px" }}>
      <div className="d-flex justify-content-center">
        <div className="circle">
          <p className="circle-content">
            <button className="btn btn-danger">Vision statement</button>
            <ul className="vision-statement">
              <li>Total commitment to knowledge and excellence.</li>
              <li>To bring out the best of every child.</li>
              <li>To inculcate discipline and respect.</li>
              <li>
                To build and maintain love, peace and integrity in every child.
              </li>
              <li>To inculcate confidence and self reliance in every child.</li>
              <li>To bring out talent(s) imbedded in every child.</li>
              <li>
                To eradicate inferiority complex in individual child so as to
                face challenge with boldness and confidence.
              </li>
            </ul>
          </p>
        </div>

        <div className="circle-2">
          <p className="circle-content-2">
            <button className="btn btn-primary">Mission statement</button>
            <ul className="mission-statement">
              <li>Utmost discipline.</li>
              <li>To raise good leaders of tomorrow with integrity.</li>
              <li>
                Organizing seminar(s) and excursion(s) to improve imbeded
                talent(s) of every child.
              </li>
              <li>Personal and academic integrity; eradicating dishonesty.</li>
              <li>
                Respect ethical standards of the school and the nation at large.
              </li>
            </ul>
          </p>
        </div>

        <div className="circle-3">
          <p className="circle-content-3">
            <button className="btn btn-primary">Core values</button>
            <ul className="core-values">
              <li>Utmost discipline.</li>
              <li>To raise good leaders of tomorrow with integrity.</li>
              <li>
                Organizing seminar(s) and excursion(s) to improve imbeded
                talent(s) of every child.
              </li>
              <li>Personal and academic integrity; eradicating dishonesty.</li>
              <li>
                Respect ethical standards of the school and the nation at large.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Motto;
