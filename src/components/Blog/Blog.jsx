import React from "react";

export default function Blog() {
  return (
    <div classname="blog">
      <div classname="container">
        <div classname="blog-container has-scrollbar">
          <div classname="blog-card">
            <a href="#">
              <img
                src="./assets/images/blog-1.jpg"
                alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                width="300"
                classname="blog-banner"
              />
            </a>

            <div classname="blog-content">
              <a href="#" classname="blog-category">
                Fashion
              </a>

              <a href="#">
                <h3 classname="blog-title">
                  Clothes Retail KPIs 2021 Guide for Clothes Executives.
                </h3>
              </a>

              <p classname="blog-meta">
                By <cite>Mr Admin</cite> /{" "}
                <time datetime="2022-04-06">Apr 06, 2022</time>
              </p>
            </div>
          </div>

          <div classname="blog-card">
            <a href="#">
              <img
                src="./assets/images/blog-2.jpg"
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                classname="blog-banner"
                width="300"
              />
            </a>

            <div classname="blog-content">
              <a href="#" classname="blog-category">
                Clothes
              </a>

              <h3>
                <a href="#" classname="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>

              <p classname="blog-meta">
                By <cite>Mr Robin</cite> /{" "}
                <time datetime="2022-01-18">Jan 18, 2022</time>
              </p>
            </div>
          </div>

          <div classname="blog-card">
            <a href="#">
              <img
                src="./assets/images/blog-3.jpg"
                alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                classname="blog-banner"
                width="300"
              />
            </a>

            <div classname="blog-content">
              <a href="#" classname="blog-category">
                Shoes
              </a>

              <h3>
                <a href="#" classname="blog-title">
                  EBT vendors: Claim Your Share of SNAP Online Revenue.
                </a>
              </h3>

              <p classname="blog-meta">
                By <cite>Mr Selsa</cite> /{" "}
                <time datetime="2022-02-10">Feb 10, 2022</time>
              </p>
            </div>
          </div>

          <div classname="blog-card">
            <a href="#">
              <img
                src="./assets/images/blog-4.jpg"
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                classname="blog-banner"
                width="300"
              />
            </a>

            <div classname="blog-content">
              <a href="#" classname="blog-category">
                Electronics
              </a>

              <h3>
                <a href="#" classname="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>

              <p classname="blog-meta">
                By <cite>Mr Pawar</cite> /{" "}
                <time datetime="2022-03-15">Mar 15, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
