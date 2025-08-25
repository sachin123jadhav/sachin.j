import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    startYear: "2023",
    endYear: "Present",
    duration: "July to Present",
    title: "Senior Web Designer",
    company: "Metamind Solutions Pvt. Ltd.",
    description: `
      <p>Key responsibilities included:</p>
      <ul>
        <li>Led and managed design and development teams.</li>
        <li>Delivered high-quality products aligned with business goals.</li>
        <li>Ensured responsive and accessible UI/UX designs.</li>
      </ul>
    `,
    compClass: "comp-1",
    positionClass: "left",
  },
  {
    id: 2,
    startYear: "2014",
    endYear: "2023",
    duration: "Nov to June",
    title: "Senior Web Designer",
    company: "EC Infosolutions Pvt Ltd.",
    description: `
      <p>Key responsibilities included:</p>
      <ul>
        <li>Led and managed design and development teams.</li>
        <li>Delivered high-quality products aligned with business goals.</li>
        <li>Ensured responsive and accessible UI/UX designs.</li>
      </ul>
    `,
    compClass: "comp-2",
    positionClass: "left",
  },
  {
    id: 3,
    startYear: "2014",
    endYear: "2014",
    duration: "Aug to Oct",
    title: "Web Designer",
    company: "Techguys247 IT Solution (P) Ltd.",
    description: "Built modern frontends with React and Bootstrap.",
    compClass: "comp-3",
    positionClass: "right",
  },
  {
    id: 4,
    startYear: "2010",
    endYear: "2014",
    duration: "March to Aug",
    title: "Graphic Web Designer",
    company: "Prasanna Purple Mobility Solutions Pvt Ltd.",
    description: `
      <p>Key responsibilities included:</p>
      <ul>
        <li>Led and managed design and development teams.</li>
        <li>Delivered high-quality products aligned with business goals.</li>
        <li>Ensured responsive and accessible UI/UX designs.</li>
      </ul>
    `,
    compClass: "comp-4",
    positionClass: "right",
  },
  {
    id: 5,
    startYear: "2009",
    endYear: "2010",
    duration: "June to Feb",
    title: "Flash Designer",
    company: "Remote Control Media INC.",
    description: `
      <p>Key responsibilities included:</p>
      <ul>
        <li>Led and managed design and development teams.</li>
        <li>Delivered high-quality products aligned with business goals.</li>
        <li>Ensured responsive and accessible UI/UX designs.</li>
      </ul>
    `,
    compClass: "comp-5",
    positionClass: "left",
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const openModal = (exp) => {
    setSelectedExp(exp);
  };

  const closeModal = () => {
    setSelectedExp(null);
  };

  return (
    <section className="tp-experience__area p-relative pt-50 pb-50">
      <div className="container">
        <div className="row">
          {experiences.map((exp, index) => {
            const delay = 0.3 + index * 0.2;
            return (
              <div
                key={exp.id}
                className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${delay}s`}
              >
                <div
                  className={`tp-experience__content tp-experience__content-${exp.positionClass} ${exp.compClass}`}
                >
                  <div className="tp-experience__duration">
                    <h2 className="duration__number">{exp.startYear}</h2>
                    <span className="duration__text">{exp.duration}</span>
                    <h2 className="duration__number">{exp.endYear}</h2>
                  </div>
                  <div className="tp-experience__details">
                    <h3 className="tp-experience__title">{exp.title}</h3>
                    <h4 className="tp-experience__company">{exp.company}</h4>
                    <div className="tp-experience__desc">
                      {exp.description.startsWith("<") ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: exp.description }}
                        />
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>

                    <div className="tp-experience__button">
                      <button
                        className="btn btn-primary"
                        onClick={() => openModal(exp)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <h2>{selectedExp.title}</h2>
            <h4>{selectedExp.company}</h4>
            <p>
              {selectedExp.startYear} - {selectedExp.endYear} (
              {selectedExp.duration})
            </p>
            <div>
              {selectedExp.description.startsWith("<") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: selectedExp.description }}
                />
              ) : (
                <p>{selectedExp.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
