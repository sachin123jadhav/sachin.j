import React from "react";

const experiences = [
  {
    id: 1,
    startYear: "2009",
    endYear: "2010",
    duration: "July to Feb",
    title: "Web Designer",
    company: "Remote Control Media INC.",
    description:
      "Worked as a Web Designer at Tech Solutions, creating responsive websites.",
    compClass: "comp-1",
  },
  {
    id: 2,
    startYear: "2011",
    endYear: "2013",
    duration: "Mar to Dec",
    title: "UI Developer",
    company: "Creative Studios",
    description: "Designed and implemented UI components for web applications.",
    compClass: "comp-2",
  },
  {
    id: 3,
    startYear: "2014",
    endYear: "2016",
    duration: "Jan to Sep",
    title: "Frontend Engineer",
    company: "Tech Innovations",
    description: "Built modern frontends with React and Bootstrap.",
    compClass: "comp-3",
  },
  {
    id: 4,
    startYear: "2017",
    endYear: "2019",
    duration: "Apr to Nov",
    title: "Senior Web Developer",
    company: "Pixel Agency",
    description: "Led a small team delivering high-quality web solutions.",
    compClass: "comp-4",
  },
  {
    id: 5,
    startYear: "2020",
    endYear: "2023",
    duration: "Jan to Dec",
    title: "Lead Engineer",
    company: "Global Software Pvt Ltd.",
    description: "Architected and delivered scalable front-end systems.",
    compClass: "comp-5",
  },
];

const Experience = () => {
  return (
    <section className="tp-experience__area p-relative pt-130 pb-130">
      <div className="container">
        <div className="row">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
            >
              <div
                className={`tp-experience__content tp-experience__content-left ${exp.compClass}`}
              >
                <div className="tp-experience__duration">
                  <h2 className="duration__number">{exp.startYear}</h2>
                  <span className="duration__text">{exp.duration}</span>
                  <h2 className="duration__number">{exp.endYear}</h2>
                </div>
                <div className="tp-experience__details">
                  <h3 className="tp-experience__title">{exp.title}</h3>
                  <h4 className="tp-experience__company">{exp.company}</h4>
                  <p>{exp.description}</p>
                  <div className="tp-experience__button">Read More</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
