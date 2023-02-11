<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <CCol>
    <CCard>
      <div class="row g-0">
        <div class="col-md-6 col-lg-5 d-none d-md-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="login form"
            class="img-fluid"
            style="height: 100%; position: fixed"
          />
        </div>
        <div class="col-md-6 col-lg-7">
          <div class="px-4 px-lg-3 text-black align-items-center">
            <form>
              <div class="d-flex align-items-center mb-3 pb-1">
                <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>
                <span class="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                Registration Form
              </h5>
              <div class="row mb-4">
                <div class="form-floating col-lg-6">
                  <input
                    class="form-control"
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                  <label for="floatingInput" class="m-2 mt-0 mb-0"
                    >First Name</label
                  >
                </div>
                <div class="form-floating col-lg-6">
                  <input
                    class="form-control"
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                  <label for="floatingInput" class="m-2 mt-0 mb-0"
                    >Last Name</label
                  >
                </div>
              </div>

              <!-- Email input -->
              <div class="form-floating mb-4">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email</label>
              </div>

              <!-- Password input -->
              <div class="form-floating mb-4">
                <input
                  class="form-control"
                  id="password"
                  type="password"
                  placeholder="*******"
                  required
                />
                <label for="floatingInput">Password</label>
              </div>

              <!-- Terms and Condition -->
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="agree"
                  id="agree"
                />
                <label class="form-check-label fs-6 fw-lighter" for="agree"
                  >I agree with the <a href="#">Terms & Conditions</a>.</label
                >
              </div>

              <div class="pt-1 mb-2">
                <button class="btn btn-dark btn-lg btn-block" type="button">
                  Register
                </button>
              </div>

              <a class="small text-muted" href="#!">Forgot password?</a>
              <p class="mb-1" style="color: #393f81">
                Already have an account?
                <router-link to="/" style="color: #393f81; font-size: large"
                  >Signin to your account</router-link
                >
                <!-- <a href="/signin" style="color: #393f81; font-size: large"
                        >Sigin here</a
                      > -->
              </p>
            </form>
          </div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-3 px-xl-4"
            style="border-radius: 0 0 1rem 0 background-color: #f19e10"
          >
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
              Copyright © 2020. All rights reserved.
            </div>
            <!-- Copyright -->

            <!-- Right -->
            <div>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-google"></i>
              </a>
              <a href="#!" class="text-white">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
            <!-- Right -->
          </div>
        </div>
      </div>
    </CCard>
  </CCol>
</template>
