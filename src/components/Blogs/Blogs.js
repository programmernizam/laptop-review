import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <h2>BLOGS</h2>
      <div className="container px-4 mt-4">
          <div className="shadow p-5">
            <h3>What is Semantic tag?</h3>
            <p>
              For creating different section in our webpage we use the div tag,
              but when it comes to readability div tag does fails. So we use
              semantic tags. For example if we have a navigation bar in our
              website we can use the nav tag, for sidebar we can use the aside
              tag and for posts we can use the article tag and by this way it
              becomes meaningful in both user and machine.
            </p>
          </div>
          <div className="shadow p-5 mt-4">
            <h3>What is context API?</h3>
            <p>
              Context API is a react structure that helps us reduce amount of
              props drilling. Normally if we want to pass a props from one
              component to its child component we need to pass it using props.
              For 1 or 2 components its okay, but if the level increases that
              becomes ugly and unmaintainable over time. In such scenario
              context api helps us. Where we can create a context and wrap the
              parent component with the context provider then we can access the
              context in any child component.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Blogs;
