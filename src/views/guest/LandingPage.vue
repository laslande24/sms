<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="hero" class="d-flex justify-content-center align-items-center">
    <div class="container position-relative">
      <h1>Learning Today,<br />Leading Tomorrow</h1>
      <h2>Open your minds with the help of talented teachers</h2>
      <router-link to="/login" class="btn-get-started">Get Started</router-link>
    </div>
  </section>
  <main id="main">
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2">
            <img src="@/assets/img/about.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i class="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts section-bg">
      <div class="container">
        <div class="row counters">
          <div class="col-lg-3 col-6 text-center">
            <span>1232</span>
            <p>Students</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span>64</span>
            <p>Courses</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span>42</span>
            <p>Events</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span>15</span>
            <p>Trainers</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Counts Section -->

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Yambaya-mo?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn"
                  >Learn More <i class="bx bx-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End .content-->
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->

    <!-- ======= Popular Courses Section ======= -->
    <section id="popular-courses" class="courses">
      <div class="container">
        <div class="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="course-item">
              <img
                src="@/assets/img/course-1.jpg"
                class="img-fluid"
                alt="..."
              />
              <div class="course-content">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4>Web Development</h4>
                  <p class="price">$169</p>
                </div>

                <h3><a href="#">Website Design</a></h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div
                  class="trainer d-flex justify-content-between align-items-center"
                >
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="@/assets/img/trainers/trainer-1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span>Antonio</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Course Item-->

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          >
            <div class="course-item">
              <img
                src="@/assets/img/course-2.jpg"
                class="img-fluid"
                alt="..."
              />
              <div class="course-content">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4>Marketing</h4>
                  <p class="price">$250</p>
                </div>

                <h3>
                  <a href="#">Search Engine Optimization</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div
                  class="trainer d-flex justify-content-between align-items-center"
                >
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="@/assets/img/trainers/trainer-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span>Lana</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Course Item-->

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          >
            <div class="course-item">
              <img
                src="@/assets/img/course-3.jpg"
                class="img-fluid"
                alt="..."
              />
              <div class="course-content">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4>Content</h4>
                  <p class="price">$180</p>
                </div>

                <h3><a href="#">Copywriting</a></h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div
                  class="trainer d-flex justify-content-between align-items-center"
                >
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="@/assets/img/trainers/trainer-3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <span>Brandon</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Course Item-->
        </div>
      </div>
    </section>
    <!-- End Popular Courses Section -->
  </main>
  <!-- End #main -->
</template>

<style scoped>
a {
  color: #5fcf80;
  text-decoration: none;
}

a:hover {
  color: #86db9f;
  text-decoration: none;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 80vh;
  background: url('@/assets/img/student-hero.jpg') top center;
  background-size: cover;
  position: relative;
}

#hero:before {
  content: '';
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  padding-top: 72px;
}

@media (max-width: 992px) {
  #hero .container {
    padding-top: 62px;
  }
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#hero h2 {
  color: #eee;
  margin: 10px 0 0 0;
  font-size: 24px;
}

#hero .btn-get-started {
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 35px;
  border-radius: 50px;
  transition: 0.5s;
  margin-top: 30px;
  border: 2px solid #fff;
  color: #fff;
}

#hero .btn-get-started:hover {
  background: #5fcf80;
  border: 2px solid #5fcf80;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero {
    height: 100vh;
  }

  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #hero h2 {
    font-size: 18px;
    line-height: 24px;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f6f7f6;
}

.section-title {
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: 'Poppins', sans-serif;
}

.section-title h2::after {
  content: '';
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #9ae1af;
  margin: 4px 10px;
}

.section-title p {
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  color: #37423b;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #5fcf80;
}

.about .content .learn-more-btn {
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.about .content .learn-more-btn:hover {
  background: #3ac162;
  color: #fff;
}

@media (max-width: 768px) {
  .about .content .learn-more-btn {
    margin: 0 48px 0 0;
    padding: 6px 18px;
  }
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding: 30px 0;
}

.counts .counters span {
  font-size: 48px;
  display: block;
  color: #5fcf80;
  font-weight: 700;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #37423b;
}

/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us .content {
  padding: 30px;
  background: #5fcf80;
  border-radius: 4px;
  color: #fff;
}

.why-us .content h3 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
}

.why-us .content p {
  margin-bottom: 30px;
}

.why-us .content .more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 30px 8px 30px;
  color: #fff;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}

.why-us .content .more-btn i {
  font-size: 14px;
}

.why-us .content .more-btn:hover {
  color: #5fcf80;
  background: #fff;
}

.why-us .icon-boxes .icon-box {
  text-align: center;
  background: #fff;
  padding: 40px 30px;
  width: 100%;
  border: 1px solid #eef0ef;
}

.why-us .icon-boxes .icon-box i {
  font-size: 32px;
  padding: 18px;
  color: #5fcf80;
  margin-bottom: 30px;
  background: #ecf9f0;
  border-radius: 50px;
}

.why-us .icon-boxes .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 30px 0;
}

.why-us .icon-boxes .icon-box p {
  font-size: 15px;
  color: #848484;
}

/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features {
  padding-top: 0px;
}

.features .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
  border: 1px solid #eef0ef;
}

.features .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}

.features .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}

.features .icon-box h3 a {
  color: #37423b;
  transition: 0.3s;
}

.features .icon-box:hover {
  border-color: #5fcf80;
}

.features .icon-box:hover h3 a {
  color: #5fcf80;
}

/*--------------------------------------------------------------
# Courses
--------------------------------------------------------------*/
.courses .course-item {
  border-radius: 5px;
  border: 1px solid #eef0ef;
}

.courses .course-content {
  padding: 15px;
}

.courses .course-content h3 {
  font-weight: 700;
  font-size: 20px;
}

.courses .course-content h3 a {
  color: #37423b;
  transition: 0.3s;
}

.courses .course-content h3 a:hover {
  color: #5fcf80;
}

.courses .course-content p {
  font-size: 14px;
  color: #777777;
}

.courses .course-content h4 {
  font-size: 14px;
  background: #5fcf80;
  padding: 7px 14px;
  color: #fff;
  margin: 0;
}

.courses .course-content .price {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #37423b;
}

.courses .trainer {
  padding-top: 15px;
  border-top: 1px solid #eef0ef;
}

.courses .trainer .trainer-profile img {
  max-width: 50px;
  border-radius: 50px;
}

.courses .trainer .trainer-profile span {
  padding-left: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #5a6c60;
}

.courses .trainer .trainer-rank {
  font-size: 18px;
  color: #657a6d;
}

/*--------------------------------------------------------------
# Cource Details
--------------------------------------------------------------*/
.course-details h3 {
  font-size: 24px;
  margin: 30px 0 15px 0;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;
}

.course-details h3:before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  background: #eef0ef;
  bottom: 0;
  left: 0;
}

.course-details h3:after {
  content: '';
  position: absolute;
  display: block;
  width: 60px;
  height: 1px;
  background: #5fcf80;
  bottom: 0;
  left: 0;
}

.course-details .course-info {
  background: #f6f7f6;
  padding: 10px 15px;
  margin-bottom: 15px;
}

.course-details .course-info h5 {
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.course-details .course-info p {
  margin: 0;
  font-weight: 600;
}

.course-details .course-info a {
  color: #657a6d;
}

/*--------------------------------------------------------------
# Cource Details Tabs
--------------------------------------------------------------*/
.cource-details-tabs {
  overflow: hidden;
  padding-top: 0;
}

.cource-details-tabs .nav-tabs {
  border: 0;
}

.cource-details-tabs .nav-link {
  border: 0;
  padding: 12px 15px 12px 0;
  transition: 0.3s;
  color: #37423b;
  border-radius: 0;
  border-right: 2px solid #e2e7e4;
  font-weight: 600;
  font-size: 15px;
}

.cource-details-tabs .nav-link:hover {
  color: #5fcf80;
}

.cource-details-tabs .nav-link.active {
  color: #5fcf80;
  border-color: #5fcf80;
}

.cource-details-tabs .tab-pane.active {
  -webkit-animation: fadeIn 0.5s ease-out;
  animation: fadeIn 0.5s ease-out;
}

.cource-details-tabs .details h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #37423b;
}

.cource-details-tabs .details p {
  color: #777777;
}

.cource-details-tabs .details p:last-child {
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .cource-details-tabs .nav-link {
    border: 0;
    padding: 15px;
  }

  .cource-details-tabs .nav-link.active {
    color: #fff;
    background: #5fcf80;
  }
}

/*--------------------------------------------------------------
# Events
--------------------------------------------------------------*/
.events .card {
  border: 0;
  padding: 0 30px;
  margin-bottom: 60px;
  position: relative;
}

.events .card-img {
  width: calc(100% + 60px);
  margin-left: -30px;
  overflow: hidden;
  z-index: 9;
  border-radius: 0;
}

.events .card-img img {
  max-width: 100%;
  transition: all 0.3s ease-in-out;
}

.events .card-body {
  z-index: 10;
  background: #fff;
  border-top: 4px solid #fff;
  padding: 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  margin-top: -60px;
  transition: 0.3s;
}

.events .card-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.events .card-title a {
  color: #37423b;
  transition: 0.3s;
}

.events .card-text {
  color: #5e5e5e;
}

.events .read-more a {
  color: #777777;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  transition: 0.3s;
}

.events .read-more a:hover {
  color: #5fcf80;
}

.events .card:hover img {
  transform: scale(1.1);
}

.events .card:hover .card-body {
  border-color: #5fcf80;
}

.events .card:hover .card-body .card-title a {
  color: #5fcf80;
}

/*--------------------------------------------------------------
# Pricing
--------------------------------------------------------------*/
.pricing .box {
  padding: 20px;
  background: #fff;
  text-align: center;
  border: 1px solid #eef0ef;
  border-radius: 0;
  position: relative;
  overflow: hidden;
}

.pricing h3 {
  font-weight: 400;
  margin: -20px -20px 20px -20px;
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 600;
  color: #777777;
  background: #f8f8f8;
}

.pricing h4 {
  font-size: 36px;
  color: #5fcf80;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

.pricing h4 sup {
  font-size: 20px;
  top: -15px;
  left: -3px;
}

.pricing h4 span {
  color: #bababa;
  font-size: 16px;
  font-weight: 300;
}

.pricing ul {
  padding: 0;
  list-style: none;
  color: #444444;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.pricing ul li {
  padding-bottom: 16px;
}

.pricing ul i {
  color: #5fcf80;
  font-size: 18px;
  padding-right: 4px;
}

.pricing ul .na {
  color: #ccc;
  text-decoration: line-through;
}

.pricing .btn-wrap {
  margin: 20px -20px -20px -20px;
  padding: 20px 15px;
  background: #f8f8f8;
  text-align: center;
}

.pricing .btn-buy {
  background: #5fcf80;
  display: inline-block;
  padding: 8px 35px;
  border-radius: 50px;
  color: #fff;
  transition: none;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  transition: 0.3s;
}

.pricing .btn-buy:hover {
  background: #3ac162;
}

.pricing .featured h3 {
  color: #fff;
  background: #5fcf80;
}

.pricing .advanced {
  width: 200px;
  position: absolute;
  top: 18px;
  right: -68px;
  transform: rotate(45deg);
  z-index: 1;
  font-size: 14px;
  padding: 1px 0 3px 0;
  background: #5fcf80;
  color: #fff;
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact {
  padding-top: 5px;
}

.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 20px;
  color: #5fcf80;
  float: left;
  width: 44px;
  height: 44px;
  background: #ecf9f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #37423b;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #657a6d;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: #5fcf80;
  color: #fff;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: '';
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #5fcf80;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type='submit'] {
  background: #5fcf80;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type='submit']:hover {
  background: #3ac162;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
