<template>
    <CContainer class="position-relative vh-100">
      <div class="d-flex mb-2">
        <CCol>
          <input class="div-control me-2" type="search" placeholder="Search" />
          <CButton class="btn btn-outline-success">
            <CIcon icon="cil-search" size="lg" />
          </CButton>
        </CCol>
        <button
          class="btn btn-outline-success"
          @click="
            () => {
              addEmployeeModal = true
            }
          "
        >
          Add Employee
        </button>
      </div>

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
        size="xl"
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
          <div class="row flex-lg-nowrap">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <div class="row">
                      <div class="col-12 col-sm-auto mb-3">
                        <div class="mx-auto" style="width: 140px">
                          <div
                            class="d-flex justify-content-center align-items-center rounded"
                            style="
                              height: 140px;
                              background-color: rgb(233, 236, 239);
                            "
                          >
                            <span
                              style="
                                color: rgb(166, 168, 170);
                                font: bold 8pt Arial;
                              "
                              >140x140</span
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="col d-flex flex-column flex-sm-row justify-content-between mb-3"
                      >
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                            John Smith
                          </h4>
                          <p class="mb-0">@johnny.s</p>
                          <div class="text-muted">
                            <small>Last seen 2 hours ago</small>
                          </div>
                          <div class="mt-2">
                            <button class="btn btn-primary" type="button">
                              <i class="fa fa-fw fa-camera"></i>
                              <span>Change Photo</span>
                            </button>
                          </div>
                        </div>
                        <div class="text-center text-sm-right">
                          <span class="badge badge-secondary">administrator</span>
                          <div class="text-muted">
                            <small>Joined 09 Dec 2017</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a href="" class="active nav-link">Settings</a>
                      </li>
                    </ul>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" novalidate="">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Full Name</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      placeholder="John Smith"
                                      value="John Smith"
                                    />
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Username</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="username"
                                      placeholder="johnny.s"
                                      value="johnny.s"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Email</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      placeholder="user@example.com"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>About</label>
                                    <textarea
                                      class="form-control"
                                      rows="5"
                                      placeholder="My Bio"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2"><b>Change Password</b></div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Current Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label
                                      >Confirm
                                      <span class="d-none d-xl-inline"
                                        >Password</span
                                      ></label
                                    >
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit">
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
      </CModal>
  
      <!-- add student Modal -->
      <CModal
        scrollable
        size="xl"
        :visible="addStudentModal"
        @close="
          () => {
            addEmployeeModal = false
          }
        "
      >
        <CModalHeader>
          <CModalTitle>Add new employee</CModalTitle>
        </CModalHeader>
        <CModalBody style="background-color: #f8f8f8">
          <div class="row flex-lg-nowrap">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <div class="row">
                      <div class="col-12 col-sm-auto mb-3">
                        <div class="mx-auto" style="width: 140px">
                          <div
                            class="d-flex justify-content-center align-items-center rounded"
                            style="
                              height: 140px;
                              background-color: rgb(233, 236, 239);
                            "
                          >
                            <span
                              style="
                                color: rgb(166, 168, 170);
                                font: bold 8pt Arial;
                              "
                              >140x140</span
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="col d-flex flex-column flex-sm-row justify-content-between mb-3"
                      >
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                            John Smith
                          </h4>
                          <p class="mb-0">@johnny.s</p>
                          <div class="mt-2">
                            <button class="btn btn-primary" type="button">
                              <i class="fa fa-fw fa-camera"></i>
                              <span>Change Photo</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a href="" class="active nav-link">Settings</a>
                      </li>
                    </ul>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" novalidate="">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Full Name</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      placeholder="John Smith"
                                      value="John Smith"
                                    />
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Username</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="username"
                                      placeholder="johnny.s"
                                      value="johnny.s"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Email</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      placeholder="user@example.com"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>About</label>
                                    <textarea
                                      class="form-control"
                                      rows="5"
                                      placeholder="My Bio"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2"><b>Change Password</b></div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Current Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label
                                      >Confirm
                                      <span class="d-none d-xl-inline"
                                        >Password</span
                                      ></label
                                    >
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit">
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        addEmployeeModal: false,
        visibleScrollableDemo: false,
        visibleVerticallyCenteredDemo: false,
      }
    },
  }
  </script>
  