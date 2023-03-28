<template>
  <div class="row" style="background-color: #ebedef">
    <div class="col-sm-12 d-flex justify-content-center mt-4"></div>
    <div class="mx-auto d-flex justify-content-center align-items-center pb-1">
      <img
        src="@/assets/images/logo.png"
        alt=""
        height="55"
        class="d-inline-block align-top"
      />
      <span class="h1 fw-bold mb-0">Yambaya-mo</span>
    </div>
    <div
      class="col-sm-12 col-md-9 col-lg-8 col-xl-8 mx-auto shadow-sm px-5 pt-4 pb-5 my-4 bg-white"
    >
      <form class="">
        <h5
          class="fw-normal mb-3 pb-4"
          style="
            letter-spacing: 1px;
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
          "
        >
          School Configuration
        </h5>
        <div class="row mb-4">
          <div class="form-floating col-lg-6">
            <input
              class="form-control"
              id="firstName"
              type="text"
              placeholder="School name"
              required
            />
            <label for="floatingInput" class="m-2 mt-0 mb-0">School Name</label>
          </div>
          <div class="form-floating col-lg-6">
            <input
              class="form-control"
              id="lastName"
              type="text"
              placeholder="Matricule"
              required
            />
            <label for="floatingInput" class="m-2 mt-0 mb-0">Matricule</label>
          </div>
        </div>

        <!-- Location -->
        <div class="row mb-4">
          <div class="form-floating col-lg-6">
            <select
              class="form-control"
              id="email"
              name="region"
              type="type"
              required
            >
              <option value="littoral">Littoral</option>
              <option value="ouest">Ouest</option>
              <option value="center">Center</option>
              <option value="adamawa">Adamawa</option>
              <option value="north-west">North West</option>
              <option value="south-west">South west</option>
              <option value="north">North</option>
              <option value="far-north">Far North</option>
              <option value="south">South</option>
              <option value="east">East</option>
            </select>
            <label for="floatingInput" class="m-2 mt-0 mb-0">Region</label>
          </div>
          <div class="form-floating col-lg-6">
            <input
              class="form-control"
              id="lastName"
              type="text"
              placeholder="Matricule"
              required
            />
            <label for="floatingInput" class="m-2 mt-0 mb-0">Town</label>
          </div>
        </div>
        <div class="form-floating col-lg-12">
          <input
            class="form-control"
            id="lastName"
            type="text"
            placeholder="Address"
            required
          />
          <label for="floatingInput" class="m-2 mt-0 mb-0">Address</label>
        </div>

        <div class="pt-5 mb-2 d-flex justify-content-end">
          <router-link to="/dashboard" style="color: #393f81" class="w-75"
            ><button class="w-75 btn btn-dark btn-lg btn-block" type="button">
              Continue
            </button></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchoolConfig',
}
</script>

<style>
body {
  background-color: #ebedef;
}
</style>
