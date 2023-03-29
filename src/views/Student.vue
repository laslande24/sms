<template>
  <div
    class="d-flex justify-content-center align-items-center vh-80 mt-5"
    v-if="students == null && error == null"
  >
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div v-if="students != null" class="mx-2 mx-lg-2 p-0 position-relative">
    <div class="d-flex mb-3 w-100 justify-content-between">
      <div class="d-flex justify-content-between">
        <div class="me-2" style="width: 150px">
          <input
            class="me-2 form-control"
            v-model="filter.search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div style="width: 150px">
          <select class="form-control" v-model="filter.klass">
            <option value="">All</option>
            <option value="form 1">Form 1</option>
            <option value="form 2">Form 2</option>
            <option value="form 3">Form 3</option>
            <option value="form 4">Form 4</option>
            <option value="form 5">Form 5</option>
            <option value="upper six science">Lower Six Science</option>
            <option value="upper six art">Lower Six Art</option>
            <option value="lower six art">Lower Six Science</option>
            <option value="lower six science">Lower Six Science</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <button
          class="btn btn-dark me-2"
          @click="
            () => {
              uploadStudentModal = true
            }
          "
        >
          <CIcon icon="cilArrowThickToTop" />
        </button>
        <button
          class="btn btn-primary"
          @click="
            () => {
              addStudentModal = true
            }
          "
        >
          Add Student
        </button>
      </div>
    </div>

    <table class="table table-hover table-striped" color="dark">
      <thead>
        <tr class="table-primary">
          <th scope="col">no</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Class</th>
          <th scope="col">Gender</th>
          <th scope="row">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, key) in filterList" :key="key">
          <th scope="row">{{ key + 1 }}</th>
          <td>{{ student['first_name'] }}</td>
          <td>{{ student['last_name'] }}</td>
          <td>{{ student['email'] }}</td>
          <td>{{ student['phone'] }}</td>
          <td>{{ student['klass'] }}</td>
          <td>{{ student['sex'] }}</td>
          <td>
            <CIcon
              class="mx-2 hover-effect"
              icon="cil-list"
              size="lg"
              @click="
                () => {
                  selectedUser = student
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
                  selectedUser = student
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
      class="position-absolute bottom--50 end-0"
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

    <!-- Student information Modal -->
    <CModal
      scrollable
      :visible="visibleScrollableDemo"
      size="lg"
      @close="
        () => {
          visibleScrollableDemo = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Student Information</CModalTitle>
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
                          {{
                            selectedUser.first_name +
                            ' ' +
                            selectedUser.last_name
                          }}
                        </h4>
                        <p class="mb-0">{{ selectedUser.email }}</p>
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
                          -
                          <small v-if="selectedUser.join_date != null"
                            >Joined
                            {{ startFormat(selectedUser.join_date) }}</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="row mb-3">
                      <div class="col">
                        <div class="form-floating">
                          <input
                            disabled
                            v-model="selectedUser.first_name"
                            class="form-control"
                            id="first"
                            type="text"
                            placeholder="Enter your First name"
                            required
                          />
                          <label for="floatingInput">First Name</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-floating">
                          <input
                            disabled
                            v-model="selectedUser.last_name"
                            class="form-control"
                            id="last"
                            type="text"
                            placeholder="Enter your last name"
                            required
                          />
                          <label for="floatingInput">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        disabled
                        v-model="selectedUser.email"
                        class="form-control"
                        id="email"
                        type="email"
                        placeholder="Enter your last name"
                        required
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <div class="form-floating">
                          <select
                            class="form-control"
                            disabled
                            v-model="selectedUser.klass"
                          >
                            <option value="form 1">Form 1</option>
                            <option value="form 2">Form 2</option>
                            <option value="form 3">Form 3</option>
                            <option value="form 4">Form 4</option>
                            <option value="form 5">Form 5</option>
                            <option value="upper six science">
                              Lower Six Science
                            </option>
                            <option value="upper six art">Lower Six Art</option>
                            <option value="lower six art">
                              Lower Six Science
                            </option>
                            <option value="lower six science">
                              Lower Six Science
                            </option>
                          </select>
                          <label for="floatingInput">Class</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-floating">
                          <input
                            disabled
                            v-model="selectedUser.phone"
                            class="form-control"
                            id="phone"
                            type="number"
                            placeholder="Enter your phone Number"
                            required
                          />
                          <label for="floatingInput">Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <div class="form-floating">
                          <select
                            disabled
                            class="form-control"
                            v-model="selectedUser.sex"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <label for="floatingInput">Sex</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-floating">
                          <input
                            disabled
                            v-model="selectedUser.dob"
                            class="form-control"
                            id="phone"
                            type="date"
                            placeholder="Enter DOB"
                            required
                          />
                          <label for="floatingInput">DOB</label>
                        </div>
                      </div>
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
      :visible="addStudentModal"
      @close="
        () => {
          addStudentModal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Add new student</CModalTitle>
      </CModalHeader>
      <CModalBody style="background-color: #f8f8f8">
        <div class="row">
          <div class="col">
            <div class="row mb-3">
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.first_name"
                    class="form-control"
                    id="first"
                    type="text"
                    placeholder="Enter your First name"
                    required
                  />
                  <label for="floatingInput">First Name</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.last_name"
                    class="form-control"
                    id="last"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                  <label for="floatingInput">Last Name</label>
                </div>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="newStudent.email"
                @change="
                  () => {
                    v$.email.$touch()
                  }
                "
                class="form-control"
                id="email"
                type="email"
                placeholder="Enter your last name"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div>
              <div v-if="!v$.email.required" class="invalid-feedback">
                Email is required
              </div>
              <div v-if="!v$.email.email" class="invalid-feedback">
                Invalid email address
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <div class="form-floating">
                  <select class="form-control" v-model="newStudent.klass">
                    <option value="form 1">Form 1</option>
                    <option value="form 2">Form 2</option>
                    <option value="form 3">Form 3</option>
                    <option value="form 4">Form 4</option>
                    <option value="form 5">Form 5</option>
                    <option value="upper six science">Lower Six Science</option>
                    <option value="upper six art">Lower Six Art</option>
                    <option value="lower six art">Lower Six Science</option>
                    <option value="lower six science">Lower Six Science</option>
                  </select>
                  <label for="floatingInput">Class</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.phone"
                    class="form-control"
                    id="phone"
                    type="number"
                    placeholder="Enter your phone Number"
                    required
                  />
                  <label for="floatingInput">Phone Number</label>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="form-floating">
                  <select class="form-control" v-model="newStudent.sex">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label for="floatingInput">Sex</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.dob"
                    class="form-control"
                    id="phone"
                    type="date"
                    placeholder="Enter DOB"
                    required
                  />
                  <label for="floatingInput">DOB</label>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.password"
                    class="form-control"
                    id="password"
                    type="text"
                    placeholder="Enter DOB"
                    required
                  />
                  <label for="floatingInput">Password</label>
                  <div v-if="!v$.password.required" class="invalid-feedback">
                    Password is required
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-floating">
                  <input
                    v-model="newStudent.password"
                    class="form-control"
                    id="password"
                    type="text"
                    placeholder="Enter DOB"
                    required
                  />
                  <label for="floatingInput">Confirm Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CModalBody>
      <CModalFooter>
        <div class="d-flex justify-content-between">
          <CButton @click="saveStudent" color="primary">Save</CButton>
        </div>
      </CModalFooter>
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
        <CModalTitle>Delete Student</CModalTitle>
      </CModalHeader>
      <CModalBody class="d-flex justify-content-center align-items-center">
        Do you really want to delete
        {{ selectedUser.first_name + '' + selectedUser.last_name }}?
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
        <CButton @click="delStudent" color="primary">Yes</CButton>
      </CModalFooter>
    </CModal>
    <!-- Delete employee Modal -->
    <CModal
      :visible="uploadStudentModal"
      @close="
        () => {
          uploadStudentModal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Upload CSV</CModalTitle>
      </CModalHeader>
      <CModalBody class="d-flex justify-content-center align-items-center">
        <input
          type="file"
          :ref="file"
          @change="handleFile"
          class="form-control"
        />
      </CModalBody>
      <CModalFooter>
        <CButton @click="uploadFile" color="primary">Upload</CButton>
      </CModalFooter>
    </CModal>
  </div>
  <div v-if="error != null">
    <p>ERRORS : {{ error }}</p>
  </div>

  <CToaster placement="top-end" visible>
    <CToast class="bg-danger" v-if="saveError != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">ERROR</span>
      </CToastHeader>
      <CToastBody>
        <div class="" v-for="(elt, key) in saveError" :key="key">
          <p>{{ key }}</p>
          <p class="ms-3" v-for="(val, i) in elt" :key="i">{{ val }}</p>
        </div>
      </CToastBody>
    </CToast>
    <CToast class="bg-danger" v-if="deleteError != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">ERROR</span>
      </CToastHeader>
      <CToastBody>
        <div class="" v-for="(elt, key) in saveError" :key="key">
          <p>{{ key }}</p>
          <p class="ms-3" v-for="(val, i) in elt" :key="i">{{ val }}</p>
        </div>
      </CToastBody>
    </CToast>
    <CToast class="bg-success" v-if="message != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">SUCCESS</span>
      </CToastHeader>
      <CToastBody>
        {{ message }}
      </CToastBody>
    </CToast>
    <CToast class="bg-success" v-if="msgFile != null">
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">SUCCESS</span>
      </CToastHeader>
      <CToastBody>
        {{ msgFile }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<style>
.hover-effect:hover {
  opacity: 0.5;
  color: #0d6efd;
}
</style>

<script>
import {
  addStudent,
  deleteStudent,
  getStudent,
  uploadStudent,
} from '@/composables/Student'
import { computed, ref, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { dateFormat } from '@/utils/dateFormat'
export default {
  name: 'Settings',
  components: {},
  data() {
    return {}
  },

  setup() {
    const newStudent = ref({
      first_name: '',
      last_name: '',
      email: '',
      klass: 'form 1',
      phone: ' ',
      school: 'GBHS',
      sex: 'Male',
      dob: null,
      password: '12345678',
    })
    const rules = {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      klass: { required },
      phone: { required },
      school: { required },
      sex: { required },
      dob: { required },
      password: { required },
    }
    //sameAsPassword: sameAs(this.password),
    const { students, load, error } = getStudent()
    const { message, saveError, save } = addStudent()
    const { msg, deleteError, loadDelete } = deleteStudent()
    const { msgFile, errorFile, upload } = uploadStudent()
    const v$ = useVuelidate(rules, newStudent.value)
    const file = ref(null)
    const uploadFile = () => {
      let formData = new FormData()
      formData.append('file', file.value)
      upload(formData)
    }
    const handleFile = (e) => {
      file.value = e.target.files[0]
    }
    const addStudentModal = ref(false)
    const visibleScrollableDemo = ref(false)
    const uploadStudentModal = ref(false)
    const visibleVerticallyCenteredDemo = ref(false)
    const saveStudent = () => {
      saveError.value = null
      save(newStudent.value)
    }

    const filter = ref({
      search: '',
      klass: '',
    })
    const startFormat = (date) => {
      let d = new Date(date)
      return dateFormat(d, 'd mmm yyyy')
    }
    //filter.value.klass.
    const selectedUser = ref({})
    const filterList = computed(() => {
      if (students != null) {
        return students.value.filter((elt) => {
          if (
            elt.klass
              .toLowerCase()
              .includes(filter.value.search.toLowerCase()) ||
            elt.first_name
              .toLowerCase()
              .includes(filter.value.search.toLowerCase()) ||
            elt.last_name
              .toLowerCase()
              .includes(filter.value.search.toLowerCase()) ||
            elt.email.toLowerCase().includes(filter.value.search.toLowerCase())
          ) {
            if (elt.klass == filter.value.klass || filter.value.klass == '') {
              return true
            }
            return false
          }
          return false
        })
      }
      return []
    })

    const delStudent = () => {
      loadDelete(selectedUser.value.id)
    }
    watch(msg, () => {
      visibleVerticallyCenteredDemo.value = false
      load()
    })

    watch(message, () => {
      load()
      addStudentModal.value = false
    })
    load()
    return {
      students,
      startFormat,
      error,
      newStudent,
      saveError,
      message,
      saveStudent,
      filter,
      filterList,
      selectedUser,
      v$,
      deleteError,
      msg,
      file,
      handleFile,
      delStudent,
      visibleScrollableDemo,
      addStudentModal,
      visibleVerticallyCenteredDemo,
      uploadStudentModal,
      msgFile,
      errorFile,
      uploadFile,
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
      console.log(isFormCorrect)
      if (!isFormCorrect) return
      this.save(this.newStudent)
    },
  },
}
</script>
