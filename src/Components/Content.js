import React from "react";

function Content() {
  return (
    <div>
      <section class="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="Images/banner-1.jpg"
                alt="First slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 "
                src="Images/banner-12.jpg"
                alt="Second slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Images/banner-13.jpg"
                alt="Third slide"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Know about us</h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">
              Founded in 2010 as As Shikha Dance Academy then launce in 2020 as
              Kalaagan Future School founded by Guru Maa Shikha Soni. As
              Kalaagan we commit and dedicate ourselves tonour core value & best
              services to humanity with respect to every individual and the
              entire existence . We believe in achievements through Constant
              process of accepting challenges , learning , basic education,
              maximum utilisation of available resources with trust in a
              universal culture and social responsibility which always
              ultimately contributes to a constant ovarall in personal ,
              institutional and social spheres . Our faith in our vision and
              your trust is our driving force to dream , to deliver better
              solutions with greater benefits, more effectively . Our aim is
              benefit the entire community in general and to provide an easy
              access to performing art – Music & Dance intrested and prepare to
              explore . We are specially dedicated to nurturing the young
              talents between the age group 4 to 25 years . We believe that the
              performing arts should be available to everyone , and we are
              working hard to make it a reality with your valuable support .
            </p>
          </div>
        </div>
      </section>

      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Courses Offered</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Singing</h4>
                  <p class="card-text text-secondary">
                    We offer <b>Classical Singing</b> and{" "}
                    <b>Bollywood Singing</b> courses with one of the finest and
                    experienced teachers.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Dancing</h4>
                  <p class="card-text text-secondary">
                    We offer <b>Kathak</b>, <b>Kuchipudi</b>,{" "}
                    <b>Bollywood Dance</b>, <b>Garba</b>, <b>Bharatanatyam </b>
                    dancing courses with the best mentors in this field.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-3.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Music</h4>
                  <p class="card-text text-secondary">
                    We teach <b>Basuri</b>, <b>Guitar</b>, <b>Tabla</b>,
                    <b>Violin</b>, <b>Piano </b> instruments in our academy with
                    the best teachers you can find nowhere. We offer courses
                    from beginner to master level which allows you to choose
                    based on the level you are in the instrument.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4">
              FAQs
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Bollywood vs Classical Dancing
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to select the instrument that suits our style?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Should we select our area of singing based on our voice?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">Student Reviews</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Dance Student</h6>
                <p class="font-weight-normal dark-grey-text">
                  I really had a great experience. Kalaagan is not just about
                  learning is about tuning ourselves to get better in the skill.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                <h6 class="font-weight-bold blue-text my-3">Singing Student</h6>
                <p class="font-weight-normal dark-grey-text">
                I really had a great experience. Kalaagan is not just about
                  learning is about tuning ourselves to get better in the skill.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                <h6 class="font-weight-bold blue-text my-3">Flutist</h6>
                <p class="font-weight-normal dark-grey-text">
                I really had a great experience. Kalaagan is not just about
                  learning is about tuning ourselves to get better in the skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
