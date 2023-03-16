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
                <img
                  src="@/assets/images/logo.png"
                  alt=""
                  height="55"
                  class="d-inline-block align-top"
                />
                <span class="h1 fw-bold mb-0">Yambaya-mo</span>
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
                <router-link to="/dashboard" style="color: #393f81"
                  ><button class="btn btn-dark btn-lg btn-block" type="button">
                    Register
                  </button></router-link
                >
              </div>

              <p class="mb-1 mt-2" style="color: #393f81">
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
        </div>
      </div>
    </CCard>
  </CCol>
</template>
