<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <CCol class="m-0">
    <CCard class="h-100 m-0" style="border: none">
      <div class="row g-0">
        <div class="col-md-5 col-lg-4 d-none d-md-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="login form"
            class="img-fluid img"
            style="height: 100%; width: 100%"
          />
        </div>
        <div class="col-md-7 col-lg-8" style="background-color: #ebedef">
          <div class="d-flex justify-content-center mt-3">
            <div class="d-flex align-items-center mb-3 pb-1">
              <img
                src="@/assets/images/logo.png"
                alt=""
                height="55"
                class="d-inline-block align-top"
              />
              <span class="h1 fw-bold mb-0">Yambaya-mo</span>
            </div>
          </div>

          <div
            class="px-lg-3 text-black align-items-center pt-1 pb-4 mt-xl-1 mx-4 bg-white px-3 shadow-sm"
          >
            <form class="">
              <h5
                class="fw-normal mb-3 pb-4 pt-3"
                style="
                  letter-spacing: 1px;
                  text-align: center;
                  font-size: 2rem;
                  font-weight: bold;
                "
              >
                Welcome to Yambaya-mo register form
              </h5>
              <div class="row mb-4">
                <div class="form-floating col-lg-6 mb-4 mb-lg-0">
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
              <div class="row mb-4">
                <!-- Email input -->
                <div class="form-floating col-lg-6 mb-4 mb-lg-0">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput" class="m-2 mt-0 mb-0">Email</label>
                </div>
                <!-- Email input -->
                <div class="form-floating col-lg-6">
                  <select
                    class="form-control"
                    id="email"
                    name="role"
                    type="type"
                    required
                  >
                    <option value="3">Principal</option>
                    <option value="1">Student</option>
                    <option value="teacher">Student</option>
                  </select>

                  <label for="floatingInput" class="m-2 mt-0 mb-0"
                    >Type of User</label
                  >
                </div>
              </div>

              <div class="row mb-4">
                <!-- Password input -->
                <div class="form-floating col-lg-6 mb-4 mb-lg-0">
                  <input
                    class="form-control"
                    id="userpassword"
                    type="password"
                    placeholder="*******"
                    required
                  />
                  <label for="floatingInput" class="m-2 mt-0 mb-0"
                    >Password</label
                  >
                </div>
                <!-- Password input -->
                <div class="form-floating col-lg-6">
                  <input
                    class="form-control"
                    id="confirmpassword"
                    type="password"
                    placeholder="*******"
                    required
                  />
                  <label for="floatingInput" class="m-2 mt-0 mb-0"
                    >Confirm Password</label
                  >
                </div>
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
              <div class="d-flex justify-content-between mb-1">
                <div class="pt-1 mb-2">
                  <router-link to="/dashboard" style="color: #393f81"
                    ><button
                      class="btn btn-dark btn-lg btn-block"
                      type="button"
                    >
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </CCard>
  </CCol>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style>
body {
  background-color: #ebedef;
}
</style>
