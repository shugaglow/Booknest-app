export default function About() {
  const features = [
    {
      featureTitle: "Track Your Reading",
      featureDescription: "Organize books into categories: Want to Read, Currently Reading, and Finished Reading",
      index: 1,
    },
    {
      featureTitle: "Easy Management",
      featureDescription: "Simple and intuitive interface to manage your entire library.",
      index: 2,
    },
    {
      featureTitle: "Personal Notes",
      featureDescription: "Add personal notes and thoughts about each book as you read",
      index: 3,
    },
  ];

  return (
    <div className="main-content">
      <div className="overlay">
          <div className="about-wrapper">
          <div className="about-container">
          <h1>About BookNest</h1>
          <p>
            BookNest is a free, personal library management app that helps you keep track of your reading habits and organize your books.
            It is designed to be simple and intuitive, making it easy for anyone to use.
          </p>
        </div>

        <div className="features-container">
          {features.map((feature) => (
            <div className="feature" key={feature.index}>
              <h2>{feature.featureTitle}</h2>
              <p>{feature.featureDescription}</p>
            </div>
          ))}
        </div>
          </div>
      </div>
    </div>
  );
}


