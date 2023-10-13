import React from "react";
import img1 from "../Page/pexel1.jpg";
import img2 from "../Page/pexel2.jpg";
import img3 from "../Page/pexel3.jpg";
import img4 from "../Page/pexel4.jpg";
import img5 from "../Page/pexel5.jpg";
import { Facebook, Twitter, Aperture } from "lucide-react";

function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            className="bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            className="bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              style={{ height: "65vh", objectFit: "cover" }}
              src={img5}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              style={{ height: "65vh", objectFit: "cover" }}
              src={img2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "65vh", objectFit: "cover" }}
              src={img3}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "65vh", objectFit: "cover" }}
              src={img4}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "65vh", objectFit: "cover" }}
              src={img1}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/** card style  Name card First row */}
      <h1 className="title text-light my-3">
        Our awesome team
        <br />
        <small style={{ fontSize: "17px", textTransform: "uppercase" }}>
          Members became family{" "}
        </small>
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div
          className="card card-cascade"
          style={{ width: "20rem", margin: "2rem" }}
        >
          <div className="view view-cascade overlay">
            <img
              className="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/men.webp"
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>Billy Coleman</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">CEO</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
            </p>

            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-fb waves-effect waves-light"
            >
              <Facebook />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-tw waves-effect waves-light"
            >
              <Twitter />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-dribbble waves-effect waves-light"
            >
              <Aperture />
            </a>
          </div>
        </div>
        <div
          className="card card-cascade"
          style={{ width: "20rem", margin: "2rem" }}
        >
          <div className="view view-cascade overlay">
            <img
              className="card-img-top"
              style={{ height: "12rem", objectFit: "cover" }}
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp"
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>Hande Hadson</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
            </p>

            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-fb waves-effect waves-light"
            >
              <Facebook />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-tw waves-effect waves-light"
            >
              <Twitter />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-dribbble waves-effect waves-light"
            >
              <Aperture />
            </a>
          </div>
        </div>
      </div>
      {/**Second row */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div
          className="card card-cascade"
          style={{ width: "20rem", margin: "2rem" }}
        >
          <div className="view view-cascade overlay">
            <img
              className="card-img-top"
              style={{ width: "12rem" }}
              src="https://www.richardtmoore.co.uk/wp-content/uploads/2016/10/btx-avatar-placeholder-01-2.jpg"
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>John Legend</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">HR Manager</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
            </p>

            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-fb waves-effect waves-light"
            >
              <Facebook />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-tw waves-effect waves-light"
            >
              <Twitter />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-dribbble waves-effect waves-light"
            >
              <Aperture />
            </a>
          </div>
        </div>
        <div
          className="card card-cascade"
          style={{ width: "20rem", margin: "2rem" }}
        >
          <div className="view view-cascade overlay">
            <img
              className="card-img-top"
              style={{ height: "12rem", objectFit: "cover" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3s-MLaJVmbY0-DvOYyD6-j_KgrsmAXLlMOd57N7b3GXDBhk16yFa0oq2L-Gz3m0h0dQ&usqp=CAU"
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>Harry Smith</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">
              FullStack Developer
            </h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
            </p>

            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-fb waves-effect waves-light"
            >
              <Facebook />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-tw waves-effect waves-light"
            >
              <Twitter />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-dribbble waves-effect waves-light"
            >
              <Aperture />
            </a>
          </div>
        </div>
      </div>
      {/**Third row */}

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div
          className="card card-cascade"
          style={{ width: "20rem", margin: "2rem" }}
        >
          <div className="view view-cascade overlay">
            <img
              className="card-img-top"
              style={{ width: "12rem" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUZMI3vsnKTW34H0s0v75ErDFV70T3PLKfygxnhNALdNeYnjgkjZe71pCRnnVnNOutVo&usqp=CAU"
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>Carter Hood</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">
              Business Analyst
            </h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
            </p>

            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-fb waves-effect waves-light"
            >
              <Facebook />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-tw waves-effect waves-light"
            >
              <Twitter />
            </a>
            <a
              style={{ margin: "5px" }}
              type="button"
              className="btn-floating btn-small btn-dribbble waves-effect waves-light"
            >
              <Aperture />
            </a>
          </div>
        </div>
      </div>
      {/**  NASA*/}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          style={{ width: "100%", height: "65vh", objectFit: "cover" }}
          src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=60000"
          alt="nasa"
        />
      </div>
    </>
  );
}

export default Home;
