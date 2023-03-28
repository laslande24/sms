<template>
  <CContainer class="position-relative vh-100">
    <table class="table table-hover table-striped" color="dark">
      <thead>
        <tr class="table-primary">
          <th scope="col">id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">role</th>
          <th scope="col">Phone</th>
          <th scope="row">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Julien</td>
          <td>Kamga</td>
          <td>jkamga</td>
          <td>julienkamga@gmail.com</td>
          <td>3</td>
          <td>675139548</td>
          <td>
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-list"
              size="lg"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
            />
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-pencil"
              size="lg"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
            />
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-trash"
              size="lg"
              @click="
                () => {
                  visibleVerticallyCenteredDemo = true
                }
              "
            />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Julien</td>
          <td>Morales</td>
          <td>jmorales</td>
          <td>julienmorales@gmail.com</td>
          <td>2</td>
          <td>698581236</td>
          <td>
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-list"
              size="lg"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
            />
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-pencil"
              size="lg"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
            />
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-trash"
              size="lg"
              @click="
                () => {
                  visibleVerticallyCenteredDemo = true
                }
              "
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- pagination -->
    <CPagination
      aria-label="Pagination"
      class="position-absolute bottom-0 end-0"
    >
      <CPaginationItem aria-label="Previous" href="#" disabled
        ><span aria-hidden="true">&laquo;</span></CPaginationItem
      >
      <CPaginationItem href="#" active>1</CPaginationItem>
      <CPaginationItem href="#">2</CPaginationItem>
      <CPaginationItem href="#">3</CPaginationItem>
      <CPaginationItem aria-label="Next" href="#"
        ><span aria-hidden="true">&raquo;</span></CPaginationItem
      >
    </CPagination>

    <!-- employee Modal -->
    <CModal
      scrollable
      :visible="visibleScrollableDemo"
      @close="
        () => {
          visibleScrollableDemo = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Employee Information</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CCol>
          <CRow class="mb-4 d-flex justify-content-center align-items-center">
            <CAvatar color="primary" text-color="white" size="xl">JJ</CAvatar>
          </CRow>
          <div class="row mb-4">
            <div class="form-floating col-lg-6">
              <input
                class="form-control"
                id="firstName"
                type="text"
                placeholder="Julien"
                disabled
              />
              <label for="floatingInput" class="text-center">Julien</label>
            </div>
            <div class="form-floating col-lg-6">
              <input
                class="form-control"
                id="lastName"
                type="text"
                placeholder="Kamga"
                disabled
              />
              <label for="floatingInput" class="text-center">Kamga</label>
            </div>
          </div>
          <input
            class="form-control mb-4"
            id="username"
            type="text"
            placeholder="jkamga"
          />
          <input
            class="form-control mb-4"
            id="email"
            type="text"
            placeholder="julienkamga@gmail.com"
            disabled
          />
          <input class="form-control mb-4" id="date" type="date" disabled />
          <input class="form-control mb-4" id="phone" type="number" disabled />
          <CFormSelect
            aria-label="Gender"
            :options="[
              'Open this to select gender',
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]"
          >
          </CFormSelect>
        </CCol>
      </CModalBody>
    </CModal>

    <!-- Delete employee Modal -->
    <CModal
      :visible="visibleVerticallyCenteredDemo"
      @close="
        () => {
          visibleVerticallyCenteredDemo = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Delete Employee</CModalTitle>
      </CModalHeader>
      <CModalBody class="d-flex justify-content-center align-items-center">
        Do you really want to delete this employee?
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              visibleVerticallyCenteredDemo = false
            }
          "
        >
          No
        </CButton>
        <CButton color="primary">Yes</CButton>
      </CModalFooter>
    </CModal>
  </CContainer>
</template>

<style>
.hover-effect:hover {
  opacity: 0.5;
  color: #0d6efd;
}
</style>

<script>
export default {
  name: 'Settings',
  components: {},
  data() {
    return {
      visibleScrollableDemo: false,
      visibleVerticallyCenteredDemo: false,
    }
  },
}
</script>
