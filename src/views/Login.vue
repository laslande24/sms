<script setup>
import { RouterLink } from 'vue-router';
//login vue
</script>

<template>
  <CCol>
    <CCard>
      <div class="row g-0 p-5">
        <div class="col-md-6 col-lg-6">
          <div
            class="p-4 p-lg-4 text-black align-items-center"
            style="background-color: #ebedeb; border-radius: 1rem 0 0 1rem">
            <form @submit.prevent="submit">
              <div class="d-flex align-items-center mb-3 pb-1">
                <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>

                <img
                  src="@/assets/images/logo.png"
                  alt=""
                  height="55"
                  class="d-inline-block align-top" />
                <span class="h1 fw-bold mb-0">Yambaya-mo</span>
              </div>

              <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                Sign into your account
              </h5>

              <div class="form-floating mb-4">
                <input
                  v-model="email"
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Enter your last name"
                  required />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-4">
                <input
                  class="form-control"
                  v-model="password"
                  id="password"
                  type="password"
                  placeholder="Enter your last name"
                  required />
                <label for="floatingInput">password</label>
              </div>

              <div
                class="form-outline mb-4 d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <router-link to="/register" class="text-body"
                  >Forgot password?</router-link
                >
                <!-- <a href="/register" class="text-body">Forgot password?</a> -->
              </div>

              <div class="pt-1 mb-2">
                <button
                  type="submit"
                  @click="submit"
                  class="btn btn-dark btn-block">
                  Login
                </button>
              </div>
              <p class="mb-2 pb-lg-2" style="color: #393f81">
                Don't have an account?
                <router-link to="/register" style="color: #393f81"
                  >Register here</router-link
                >
                <!-- <a href="/signup" style="color: #393f81">Register here</a> -->
              </p>
              <a href="#!" class="small text-muted">Terms of use.</a>
              <a href="#!" class="small text-muted">Privacy policy</a>
            </form>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 d-none d-md-block">
          <img
            src="https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="login form"
            class="img-fluid"
            style="border-radius: 0 1rem 1rem 0; height: 100%" />
        </div>
      </div>
    </CCard>
  </CCol>
</template>

<script>
import { ref } from 'vue';
import { logoNegative } from '@/assets/brand/logo-negative';

export default {
  data() {
    return {};
  },

  setup() {
    const user = [
      {
        username: 'Kegne Loic',
        email: 'kegne@gmail.com',
        password: 'word',
        role: 'student',
      },
      {
        username: 'Martin Collins',
        email: 'collins@gmail.com',
        password: 'word',
        role: 'lecturer',
      },
      {
        username: 'Pollin justin',
        email: 'pollin@gmail.com',
        password: 'word',
        role: 'admin',
      },
    ];
    const email = ref('');
    const error = ref({
      user: false,
      password: false,
    });
    const password = ref('');
    const but = ref(null);

    const submit = () => {
      console.log(email.value, password.value);
      let logUser = user.value.filter((elt) => {
        if (elt.email == email.value) {
          if (elt.password == password.value) {
            return true;
          }
          error.value.password = true;
          return false;
        }
        error.value.user = true;
        return false;
      });
      if (logUser.count == 1) {
        if (logUser[0].type == 'admin') {
          this.push({ name: 'Admin Dashboard' });
        } else if (logUser[0].type == 'lecturer') {
          this.push({ name: 'Teacher Dashboard' });
        } else {
          this.push({ name: 'My Courses' });
        }
      }
    };

    return {
      submit,
      email,
      password,
      but,
      user,
      logoNegative,
    };
  },
};
</script>

