<template>
  <div class="row" style="background-color: #ebedef">
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
      class="col-sm-12 col-md-9 col-lg-8 col-xl-8 mx-auto shadow-sm px-5 pt-4 pb-5 my-4 bg-white creat"
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
          School Creation
        </h5>
        <div class="row mb-4">
          <div class="form-floating col-lg-6 mb-4 mb-lg-0">
            <input
              v-model="school.name"
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
              v-model="school.matricule"
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
          <div class="form-floating col-lg-6 mb-4 mb-lg-0">
            <select
              v-model="school.region"
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
              v-model="school.town"
              type="text"
              placeholder="Matricule"
              required
            />
            <label for="floatingInput" class="m-2 mt-0 mb-0">Town</label>
          </div>
        </div>
        <div class="row mb-4">
          <div class="form-floating col-lg-6 mb-4 mb-lg-0">
            <input
              v-model="school.address"
              class="form-control"
              id="lastName"
              type="text"
              placeholder="Address"
              required
            />
            <label for="floatingInput" class="m-2 mt-0 mb-0">Address</label>
          </div>
          <div class="form-floating col-lg-6">
            <select
              class="form-control"
              id="email"
              v-model="school.subSytem"
              name="region"
              type="type"
              required
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="englishandfrench">English and French</option>
            </select>
            <label for="floatingInput" class="m-2 mt-0 mb-0"
              >School Subsystem</label
            >
          </div>
        </div>
        <div class="pt-5 mb-2 d-flex justify-content-center">
          <button
            @click="goSetting"
            class="w-50 btn btn-dark btn-lg btn-block"
            type="button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
    <div
      class="col-sm-12 col-md-9 col-lg-8 col-xl-8 mx-auto shadow-sm px-5 pt-4 pb-5 my-4 bg-white config d-none"
    >
      <div class="">
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
        <div
          v-if="
            school.subSytem == 'english' ||
            school.subSytem == 'englishandfrench'
          "
        >
          <div
            class="d-flex justify-content-between pb-1"
            style="border-bottom: 1px solid lightgray"
          >
            <h4>English</h4>
            <button
              @click="
                () => {
                  list.system = 'ENGLISH'
                  selectList = []
                  list.value = baseSetting.ENGLISH
                  optionVal = 'School Type'
                  visibleScrollableDemo = true
                }
              "
              class="btn btn-sm btn-primary"
            >
              Add Type
            </button>
          </div>

          <div
            class="my-3 ms-4"
            v-for="(type, key) in userSetting['ENGLISH']"
            :key="key"
          >
            <div class="d-flex justify-content-between">
              <h5>{{ type.name }}</h5>
              <button
                @click="
                  () => {
                    list.system = 'ENGLISH'
                    list.type = type.name
                    selectList = []
                    list.value = baseSetting.ENGLISH[type.name]
                    optionVal = 'Departments'
                    visibleScrollableDemo = true
                  }
                "
                class="btn btn-sm btn-primary"
              >
                Add Department
              </button>
            </div>

            <div
              class="ms-2 my-2 p-2"
              v-for="(value, dept) in type.departments"
              :key="dept"
              style="border: 1px solid lightgray"
            >
              <div class="d-flex justify-content-between">
                <h5>{{ value.name }}</h5>
                <button
                  @click="
                    () => {
                      list.system = 'ENGLISH'
                      list.type = type.name
                      list.dept = value.name
                      selectList = []
                      list.value = baseSetting.ENGLISH[type.name][value.name]
                      optionVal = 'Options'
                      visibleScrollableDemo = true
                    }
                  "
                  class="btn btn-sm btn-primary"
                >
                  Add Options
                </button>
              </div>
              <div class="d-flex">
                <div
                  style="border: 1px solid lightgray"
                  class="m-1 p-1"
                  v-for="(opt, i) in value.options"
                  :key="i"
                >
                  {{ opt['MEANING'] + ' (' + opt['OPTION'] + ')' }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-3"
          v-if="
            school.subSytem == 'french' || school.subSytem == 'englishandfrench'
          "
        >
          <div
            class="d-flex justify-content-between pb-1"
            style="border-bottom: 1px solid lightgray"
          >
            <h4>French</h4>
            <button
              @click="
                () => {
                  list.system = 'FRENCH'
                  selectList = []
                  list.value = baseSetting.FRENCH
                  optionVal = 'School Type'
                  visibleScrollableDemo = true
                }
              "
              class="btn btn-sm btn-primary"
            >
              Add Type
            </button>
          </div>

          <div
            class="my-3 ms-4"
            v-for="(type, key) in userSetting['FRENCH']"
            :key="key"
          >
            <div class="d-flex justify-content-between">
              <h5>{{ type.name }}</h5>
              <button
                @click="
                  () => {
                    list.system = 'FRENCH'
                    list.type = type.name
                    selectList = []
                    list.value = baseSetting.FRENCH[type.name]
                    optionVal = 'Departments'
                    visibleScrollableDemo = true
                  }
                "
                class="btn btn-sm btn-primary"
              >
                Add Department
              </button>
            </div>

            <div
              class="ms-2 my-2 p-2"
              v-for="(value, dept) in type.departments"
              :key="dept"
              style="border: 1px solid lightgray"
            >
              <div class="d-flex justify-content-between">
                <h5>{{ value.name }}</h5>
                <button
                  @click="
                    () => {
                      list.system = 'FRENCH'
                      list.type = type.name
                      list.dept = value.name
                      selectList = []
                      list.value = baseSetting.FRENCH[type.name][value.name]
                      optionVal = 'Options'
                      visibleScrollableDemo = true
                    }
                  "
                  class="btn btn-sm btn-primary"
                >
                  Add Options
                </button>
              </div>
              <div class="d-flex">
                <div
                  style="border: 1px solid lightgray"
                  class="m-1 p-1"
                  v-for="(opt, i) in value.options"
                  :key="i"
                >
                  {{ opt['MEANING'] + ' (' + opt['OPTION'] + ')' }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-5 mb-2 d-flex justify-content-center">
          <button
            @click="goCreat"
            class="btn btn-dark btn-lg btn-block me-5"
            type="button"
          >
            Back
          </button>
          <button
            @click="CreateSchool"
            class="btn btn-primary btn-lg btn-block"
            type="button"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- personnel Modal -->
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
      <CModalTitle>{{ optionVal.toUpperCase() }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <table class="table table-hover">
        <tbody>
          <tr v-for="(type, key) in list.value" :key="key">
            <td>
              <h5 class="mb-0">
                {{
                  optionVal == 'Options'
                    ? type['MEANING'] + ' (' + type['OPTION'] + ')'
                    : key
                }}
              </h5>
            </td>
            <td>
              <div class="form-check">
                <input
                  v-if="optionVal == 'Options'"
                  @click="selectItem(type)"
                  class="form-check-input"
                  type="checkbox"
                />
                <input
                  v-else
                  @click="selectItem(key)"
                  class="form-check-input"
                  type="checkbox"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </CModalBody>
    <CModalFooter>
      <div class="d-flex justify-content-between">
        <!--        <CButton-->
        <!--          color="dark"-->
        <!--          @click="-->
        <!--            () => {-->
        <!--              visibleScrollableDemo = false-->
        <!--            }-->
        <!--          "-->
        <!--        >-->
        <!--          Close-->
        <!--        </CButton>-->
        <CButton @click="addItems" color="primary">Add to Setting</CButton>
      </div>
    </CModalFooter>
  </CModal>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SchoolForm',

  setup() {
    const school = ref({
      name: '',
      address: '',
      region: 'littoral',
      town: '',
      subSytem: '',
      matricule: '',
    })
    const userSetting = ref({})
    const visibleScrollableDemo = ref(false)
    const list = ref({
      system: '',
      type: '',
      dept: '',
      value: [],
    })
    const optionVal = ref('')
    const selectSystem = ref('')
    const selectList = ref([])

    const baseSetting = ref({
      ENGLISH: {
        'Technical and Vocational Education': {
          COMMERCIAL: [
            {
              OPTION: 'ACA',
              MEANING: 'Secretariat   Administration And Communication',
            },
            { OPTION: 'ACC', MEANING: 'Marketing' },
            { OPTION: 'CG', MEANING: 'Accounting' },
            { OPTION: 'ESF', MEANING: 'Home Economics' },
          ],
          'MECHANICAL ENGINEERING TECHNIQUES': [
            { OPTION: 'CAPA', MEANING: 'Automobile Body Work And Spraying' },
            { OPTION: 'COOM', MEANING: 'Metallic Framework Construction' },
            { OPTION: 'MAEL', MEANING: 'Automobile Electrical Works' },
            { OPTION: 'MAIN', MEANING: 'Duesel(Injection) Engine Mechanics' },
            { OPTION: 'MARE', MEANING: 'Automobile Repair Mechanics' },
            { OPTION: 'MEFA', MEANING: 'Manufacturing Mechanics' },
            { OPTION: 'MEFE', MEANING: 'Sheet Metal Work' },
            { OPTION: 'BIJO', MEANING: 'Jewelery' },
            { OPTION: 'E', MEANING: 'Mathematics And Mechanics' },
            { OPTION: 'F1', MEANING: 'Manufacturing Mechanics' },
            { OPTION: 'MA', MEANING: 'Automobile Mechanics' },
            { OPTION: 'MEM', MEANING: 'Electro-Mechanical Maintenance' },
            {
              OPTION: 'MF/CM',
              MEANING: 'Sheet Metal Work And Metallic Construction',
            },
          ],
          'ELECTRICAL ENGINEERING TECHNIQUES': [
            { OPTION: 'AICB', MEANING: 'Bio-CHEMICAL Industry Assistant' },
            { OPTION: 'AICI', MEANING: 'Chemical Industry Assistant' },
            { OPTION: 'ELEQ', MEANING: 'Electrical Installation' },
            { OPTION: 'ELME', MEANING: 'Electro-Mechanics' },
            { OPTION: 'ELNI', MEANING: 'Electronics' },
            { OPTION: 'FRCL', MEANING: 'Refrigeration And Air Conditioning' },
            { OPTION: 'CI', MEANING: 'Industry Chemistry' },
            { OPTION: 'F2', MEANING: 'Electronics' },
            { OPTION: 'F3', MEANING: 'Electrical Technology' },
            { OPTION: 'F5', MEANING: 'Refrigeration And Air Conditioning' },
            {
              OPTION: 'F7',
              MEANING: 'Biological And Medico-Sanitary Science And Technology',
            },
            {
              OPTION: 'F8',
              MEANING: 'Social health Sciences And Technology',
            },
            {
              OPTION: 'MEHB',
              MEANING: 'Hospital And Biomedical Equipment Maintenance',
            },
            {
              OPTION: 'MISE',
              MEANING: 'Maintenace And Installation Of  Electronics Systems',
            },
          ],
          'CIVIL ENGINEERING TECHNIQUES': [
            { OPTION: 'CARR', MEANING: 'Tile Laying' },
            { OPTION: 'DEBA', MEANING: 'Draftsmanship' },
            { OPTION: 'MACO', MEANING: 'Masonry(Building Construction)' },
            { OPTION: 'MENU', MEANING: 'Wood Work' },
            { OPTION: 'EF', MEANING: 'Forestry Exploitation' },
            { OPTION: 'F4BC', MEANING: 'Building Construction' },
            { OPTION: 'F4BA', MEANING: 'Draftsmanship' },
            { OPTION: 'F4TP', MEANING: 'Public Works' },
            { OPTION: 'GTTO', MEANING: 'Surveys-Topography Option' },
            { OPTION: 'IB', MEANING: 'Wood Processing Industry' },
            { OPTION: 'IS', MEANING: 'Sanitary Equipment Installation' },
            { OPTION: 'MEB', MEANING: 'Carpentry/Furniture(Wood Work)' },
          ],
          'ART AND FASHION TECHNIQUES': [
            { OPTION: 'COME', MEANING: 'Bespoke Tailoring' },
            { OPTION: 'DECOR', MEANING: 'Decoration' },
            { OPTION: 'ESCO', MEANING: 'Esthetics And Hair Dressing' },
            { OPTION: 'IH', MEANING: 'Clothing Industry' },
          ],
        },
        'General Education': {
          ARTS: [
            { OPTION: 'A1', MEANING: 'French, Literature and History' },
            { OPTION: 'A2', MEANING: 'Geography, Economics and History' },
            { OPTION: 'A3', MEANING: 'Literature, History and Economics' },
            { OPTION: 'A4', MEANING: 'Geography, Economics and Mathematics' },
            {
              OPTION: 'A5',
              MEANING: 'Literature, Philosophy and Mathematics',
            },
            {
              OPTION: 'A6',
              MEANING: 'Literature, French and one(1) Foreign Lang',
            },
            {
              OPTION: 'A7',
              MEANING: 'Literature,Cinematography and Computerscience',
            },
            {
              OPTION: 'A8',
              MEANING: 'Arts and Craft and National language and Culture',
            },
          ],
          SCIENCES: [
            { OPTION: 'S1', MEANING: 'Chemistry, Physics and Maths' },
            { OPTION: 'S2', MEANING: 'Chemistry, Physics and Biology' },
            { OPTION: 'S3', MEANING: 'Biology, Chemistry and Physics' },
            {
              OPTION: 'S4',
              MEANING: 'Biology, Chemistry and Geology/Geography',
            },
          ],
        },
        'Teacher Training': {
          GTTC: [
            {
              OPTION: '',
              MEANING:
                "Didactiques des disciplines de l'Ecole Primaire et de l'Ecole Maternelle",
            },
            {
              OPTION: '',
              MEANING: 'Sciences of Education',
            },
            {
              OPTION: '',
              MEANING: 'Bilingual Studiese',
            },
          ],
          'GTTC(IT)': [
            {
              OPTION: 'CMBE',
              MEANING: 'Building Construction and Reinforced concrete',
            },
            { OPTION: 'ELEQ', MEANING: 'Electricity' },
            { OPTION: 'MENA', MEANING: 'Woodwork and Cabinet making' },
            { OPTION: 'MIND', MEANING: 'Industrial Maintenance' },
            { OPTION: 'FRCL', MEANING: 'Refrigeration and Air Conditioning' },
            { OPTION: 'INSA', MEANING: 'Plumbing' },
            { OPTION: 'COUF', MEANING: 'Sewing' },
          ],
          'GTTC(STTC)': [
            {
              OPTION: 'BCA',
              MEANING: 'Office Automation and Administrative Communications',
            },
            { OPTION: 'CG', MEANING: 'Accounting and Management' },
            { OPTION: 'ESF', MEANING: 'Home Economics' },
          ],
        },
      },
      FRENCH: {
        'ENSEIGNEMENT SECONDAIRE GENERAL': {
          LITTERATURE: [
            { OPTION: 'A1', MEANING: 'Lettres,Latin,et Grec' },
            {
              OPTION: 'A2',
              MEANING: 'lettres,latin et langue Vivante II',
            },
            { OPTION: 'A3', MEANING: 'Lettres et latin' },
            {
              OPTION: 'A4',
              MEANING: 'Lettres,langue Vivante II et philosophie',
            },
            { OPTION: 'A5', MEANING: 'Langues Vivante II et III' },
            { OPTION: 'AC', MEANING: 'Art Cinematographique' },
            {
              OPTION: 'BIL',
              MEANING: 'Bilingue(Francais-Anglais et English-French',
            },
          ],
          SCIENCES: [
            {
              OPTION: 'D',
              MEANING: 'Sciences de la vie de la terre et Mathematique',
            },
            { OPTION: 'C', MEANING: 'Mathematique et Physique' },
            { OPTION: 'TI', MEANING: "Technologie de L'information" },
          ],
        },
        'Enseignement Secondaire Technique et Professionnel': {
          'FILIERES DES  SCIENCES ET TECHNOLOGIES DU TERTIAIRE(STT)': [
            {
              OPTION: 'AAT',
              MEANING: 'ACCEUIL ET ANIMATION TOURISTIQUE',
            },
            {
              OPTION: 'ACA',
              MEANING: 'ACTION ET COMMUNICATION ADMINISTRATIVE',
            },
            {
              OPTION: 'ACC',
              MEANING: 'ACTION ET COMMUNICATION COMMERCIALE',
            },
            { OPTION: 'AV', MEANING: 'AGENCE DE VOYAGE' },
            { OPTION: 'BPA', MEANING: 'BOULANGEFRIE PATISSERIE' },
            { OPTION: 'CG', MEANING: 'COMPTABILITE DE GESTION' },
            { OPTION: 'CU', MEANING: 'CUISINE' },
            {
              OPTION: 'ESCOM',
              MEANING: 'EMPLOYE DES SERVICES COMPATIBLES',
            },
            { OPTION: 'ESF', MEANING: 'ECONOMIE SOCIALE ET FAMILIALE' },
            {
              OPTION: 'ESFI',
              MEANING: 'EMPLOYE DES SERVICES FINANCIERS',
            },
            {
              OPTION: 'FIG',
              MEANING: 'FISCALE ET INFORMATIQUE DE GESTION',
            },
            { OPTION: 'HE', MEANING: 'HEBERGEMENT' },
            { OPTION: 'HO', MEANING: 'HOTELLERIE' },
            { OPTION: 'RE', MEANING: 'RESTAURATION' },
            { OPTION: 'SEBU', MEANING: 'SECRETARIAT ET BUREAUTIQUE' },
            { OPTION: 'SEME', MEANING: 'SECRETARIAT MEDICAL' },
            {
              OPTION: 'SES',
              MEANING: 'SCIENCES  ECONOMIQUES ET SOCIALES',
            },
            { OPTION: 'SH', MEANING: 'SERVICE HOTELIER' },
            { OPTION: 'TO', MEANING: 'TOURISME' },
            { OPTION: 'VENTE', MEANING: 'VENDEUR' },
          ],
          'FILIERES DES SCIENCES ET TECHNIQUES INDUSTRIELLES': [
            { OPTION: 'AFSCI', MEANING: 'AFFUTEUR SCIER' },
            { OPTION: 'AJUS', MEANING: 'AJUSTAGE' },
            {
              OPTION: 'CAPA',
              MEANING: 'CARROSSERIE PEINTURE AUTOMOBILE',
            },
            {
              OPTION: 'COOM',
              MEANING: 'CONSTRUCTION ET OUVRAGE METALLIQUE',
            },
            {
              OPTION: 'MAEL',
              MEANING: 'MECANIQUE AUTOMOBILE ELECTRICITE',
            },
            {
              OPTION: 'MARE',
              MEANING: 'MECANIQUE AUTOMOBILE  DE REPARATION',
            },
            { OPTION: 'MEFA', MEANING: 'MECANIQUE DE FABRICATION' },
            { OPTION: 'MEFE', MEANING: 'METAUX EN FEUILLES' },
            {
              OPTION: 'RECA',
              MEANING: 'REPARATION CARROSSERIE AUTOMOBILE',
            },
            { OPTION: 'BIJO', MEANING: 'BIJOUTERIE' },
            { OPTION: 'CM', MEANING: 'CONSTRUCTION MECANIQUE' },
            {
              OPTION: 'CMA-MVPL',
              MEANING:
                'CONSTRUCTION ET MAINTENANCE AUTOMOBILE OPTION  MAINTENANCE VEHICULES POIDS LOURDS',
            },
            {
              OPTION: 'CMA-MVT',
              MEANING:
                'CONSTRUCTION ET MAINTENANCE AUTOMOBILE OPTION  MAINTENANCE VEHICULES DE TOURISME',
            },
            { OPTION: 'E', MEANING: 'TECHNIQUE ET MATHEMATIQUE' },
            { OPTION: 'F1', MEANING: 'FABRICATION MECANIQUE' },
            { OPTION: 'MA', MEANING: 'MECANIQUE AUTOMOBILE' },
            { OPTION: 'MEM', MEANING: 'MAINTENANCE ELECTROMECANIQUE' },
            {
              OPTION: 'MF/CM',
              MEANING: 'METAUX EN FEUILLES ET CONSTRUCTION METALLIQUE',
            },
            { OPTION: 'MAIN', MEANING: 'MECANIQUE AUTOMOBILE INJECTION' },
          ],
          'SECTION DU GENIE ELECTRIQUE, DE CHIMIE INDUSTRIELLE ET DE SCIENCES BIOMEDICAL':
            [
              { OPTION: 'AICB', MEANING: 'AIDE CHIMIQUE BIOLOGISTE' },
              { OPTION: 'AICI', MEANING: 'AIDE CHIMIQUE INDUSTRIELLE' },
              { OPTION: 'ELAU', MEANING: 'ELECTTRICITE AUTOMOBILE' },
              { OPTION: 'ELBA', MEANING: 'ELECTRICITE BATIMENT' },
              { OPTION: 'ELEQ', MEANING: "ELECTRICITED'EQUIPEMENT" },
              { OPTION: 'ELME', MEANING: 'ELECTRO MECCANIQUE' },
              { OPTION: 'ELNI', MEANING: 'ELECTRONIQUE' },
              { OPTION: 'FRCL', MEANING: 'FROID ET CLIMATISATION' },
              { OPTION: 'CI', MEANING: 'CHIMIE INDUSTRIELLE' },
              { OPTION: 'F2', MEANING: 'ELECTRONIQUE' },
              { OPTION: 'F3', MEANING: 'ELECTROTECHNIQUE' },
              { OPTION: 'F5', MEANING: 'FROID  ET CLIMATISATION' },
              {
                OPTION: 'F6-BIPE',
                MEANING: 'GENIE CHIMIQUE OPT BIOPROCEDES ET PETROCHIMIE',
              },
              {
                OPTION: 'F6-COPH',
                MEANING: 'GENIE CHIMIQUE OPT COSMETIQUE ET  PHARMARCIE',
              },
              {
                OPTION: 'F6-MIPE',
                MEANING: 'GENIE CHIMIQUE OPT MINE ET PETROLES',
              },
              {
                OPTION: 'F7',
                MEANING: 'SCIENCE ET TECHNIQUE BIOLOGIQUE',
              },
              {
                OPTION: 'F8',
                MEANING: 'SCIENCE ET TECHNOLOGIE DE LE SANTE ET DU SOUCI',
              },
              { OPTION: 'MAV', MEANING: 'MAINTENANCE AUDIOVISUELLE' },
              {
                OPTION: 'MEHB',
                MEANING:
                  'MAINTENANCE DES EQUIPEMENTS HOSPITALIERS ET BIOMEDICAUX',
              },
              {
                OPTION: 'MISE',
                MEANING:
                  'MAINTENANCE ET INSTALLATION DES SYSTEMES ELECTRONIQUES',
              },
            ],
          'SECTION DE GENIE CIVIL, DU GENIE DU BOIS ET DES TECHNIQUE AGRICOLES':
            [
              { OPTION: 'CARR', MEANING: 'CARRELAGE' },
              { OPTION: 'CERAM', MEANING: 'CERAMIQUE' },
              { OPTION: 'DEBA', MEANING: 'DESSIN EN BATIMENT' },
              { OPTION: 'INSA', MEANING: 'INSTALLATION SANITAIRE' },
              { OPTION: 'MACO', MEANING: 'MACONNERIE' },
              { OPTION: 'MENU', MEANING: 'MENUSERIE' },
              { OPTION: 'PA', MEANING: 'PRODUCTION ANIMALE' },
              {
                OPTION: 'PA-PPO',
                MEANING: 'PRODUCTION ANIMALE OPTION PRODUCTEUR DE PORC',
              },
              {
                OPTION: 'PA-PV',
                MEANING: 'PRODUCTION ANIMALE OPTION PRODUCTEUR DE VOLAILLE',
              },
              { OPTION: 'PV', MEANING: 'PRODUCTION VEGETALE' },
              {
                OPTION: 'PV-PC',
                MEANING: 'PRODUCTION ANIMALE OPTION PRODUCTION DE CEREALS',
              },
              {
                OPTION: 'PV-PM',
                MEANING: 'PRODUCTION ANIMALE OPTION PRODUCTION MARAICHER',
              },
              { OPTION: 'CERAM', MEANING: 'CERAMIQUE' },
              { OPTION: 'CH', MEANING: 'CHAUDRONNERIE' },
              {
                OPTION: 'CH-TI',
                MEANING: 'CHAUDRONNERIE ET TUYAUTERIE INDUSTRIELLE',
              },
              { OPTION: 'EF', MEANING: 'EXPLOITATION FORESTIERE' },
              { OPTION: 'F4BA', MEANING: 'GENIE CIVIL BATIMENT' },
              { OPTION: 'F4BE', MEANING: "BUREAU D'ETUDES" },
              { OPTION: 'F4TP', MEANING: 'TRAVAUX PUBLICS' },
              { OPTION: 'GTTO', MEANING: 'EOMETRE TOPOGRAPHE' },
              { OPTION: 'IB', MEANING: 'INDUSTRIE DU BOIS' },
              { OPTION: 'IS', MEANING: 'INSTALLATION SANITAIRE' },
              {
                OPTION: 'MEA',
                MEANING: 'MAITENANCE DES EQUIPEMENTS AGRICOLES',
              },
              { OPTION: 'MEB', MEANING: 'MENUSERIE EBENISTERIE' },
              { OPTION: 'PA', MEANING: 'PRODUCTION ANIMALE' },
              {
                OPTION: 'PA-AQ',
                MEANING: 'PRODUCTION ANIMALE OPTION AQUACULTURE',
              },
              {
                OPTION: 'PA-PM',
                MEANING:
                  'PRODUCTION ANIMALE OPTION PRODUCTION DE MONOASTRIQURS',
              },
              {
                OPTION: 'PA-PP',
                MEANING:
                  'PRODUCTION ANIMAL OPTION PRODUCTION DE POLYGASTRIQUES',
              },
              { OPTION: 'PV', MEANING: 'PRODUCTION VEGETALE' },
              {
                OPTION: 'PV-PCLGC',
                MEANING:
                  'PRODUCTION VEGETALE OPTION PRODUCTION DE  CEREALES,DE LEGUMINEUSES A GRAINES ET DE CHAMPIGNION',
              },
              {
                OPTION: 'PV-PCP',
                MEANING:
                  'PRODUCTION VEGETALE OPTION PRODUCTION DE CULTURES PERENNES',
              },
              {
                OPTION: 'PV-PMF',
                MEANING:
                  'PRODUCTION VEGETALE OPTION PRODUCTION DE MARAICHERS ET FOURRAGE',
              },
              {
                OPTION: 'PV-PS',
                MEANING:
                  'PRODUCTION VEGETALE OPTION PRODUCTION PLANS ET SEMENCE',
              },
              {
                OPTION: 'TC-PA',
                MEANING:
                  'TRANSFORMATION ET CONSERVATION DES PRODUITS AGROPASTOTAUX',
              },
              {
                OPTION: 'TGF',
                MEANING: 'TECHNIQUES ET GESTION FORESTIERES',
              },
              { OPTION: 'TP', MEANING: 'TRANSFORMATEUR DES PRODUITS' },
            ],
          'SECTION ARTS MODES': [
            { OPTION: 'COME', MEANING: 'COUTURE SUR MESURE' },
            { OPTION: 'DECOR', MEANING: 'DECORATION' },
            { OPTION: 'ESCO', MEANING: 'ESTHETIQUE COIFFURE' },
            { OPTION: 'PEINT', MEANING: 'PEINTURE' },
            { OPTION: 'SCULP', MEANING: 'SCULPTURE' },
            { OPTION: 'BP CF', MEANING: 'BP COUTURE FLOU' },
            { OPTION: 'I H', MEANING: "INDUSTRIE D'HABILLEMENT" },
            { OPTION: 'PEINT', MEANING: 'PEINTURE' },
            { OPTION: 'SCULP', MEANING: 'SCULPTURE' },
          ],
        },
        'Enseignement Normal': {
          ENIEG: [
            "Didactiques des discipline de l'Ecole Primaire et Maternelle",
            "Discipline des Sciences de l'education",
            'Formation bilingue',
          ],
          'ENIET (TI)': [
            {
              OPTION: 'CMBA',
              MEANING: 'Construction en Maconnerie et Beton Arme',
            },
            { OPTION: 'ELEQ', MEANING: 'Electricite' },
            { OPTION: 'MENA', MEANING: 'Menuiserie-Ameublement' },
            { OPTION: 'MIND', MEANING: 'Maintenance Industrielle' },
            { OPTION: 'FRCL', MEANING: 'Froid et  Climatisation' },
            { OPTION: 'INSA', MEANING: 'Installation Sanitaire' },
            { OPTION: 'COUF', MEANING: 'Couture Flou' },
          ],
          'ENIET (STT)': [
            {
              OPTION: 'BCA',
              MEANING: 'Bureautiques et Communications Administratives',
            },
            { OPTION: 'CG', MEANING: 'Comptabilite et Gestion' },
            { OPTION: 'ESF', MEANING: 'Economie Sociale et Familiale' },
          ],
        },
      },
    })

    const goSetting = () => {
      document.querySelector('.creat').classList.add('d-none')
      document.querySelector('.config').classList.remove('d-none')
    }
    const goCreat = () => {
      document.querySelector('.config').classList.add('d-none')
      document.querySelector('.creat').classList.remove('d-none')
    }
    const addItems = () => {
      if (optionVal.value == 'School Type') {
        let deptlist = []
        selectList.value.forEach((elt) => {
          deptlist.push({
            name: elt,
            departments: [],
          })
        })

        userSetting.value[list.value.system] = deptlist
      } else if (optionVal.value == 'Departments') {
        let deptlist = []
        selectList.value.forEach((elt) => {
          deptlist.push({
            name: elt,
            options: [],
          })
        })
        let schoolType = userSetting.value[list.value.system].filter((elt) => {
          if (elt.name == list.value.type) {
            return true
          } else {
            return false
          }
        })[0]
        schoolType['departments'] = deptlist
      } else if (optionVal.value == 'Options') {
        let schoolType = userSetting.value[list.value.system].filter((elt) => {
          if (elt.name == list.value.type) {
            return true
          } else {
            return false
          }
        })[0]
        console.log('School Type', schoolType)
        let department = schoolType.departments.filter((elt) => {
          if (elt.name == list.value.dept) {
            return true
          } else {
            return false
          }
        })[0]
        console.log('Department', department)
        department.options = selectList.value
        console.log(userSetting.value)
      }
      visibleScrollableDemo.value = false
      selectList.value = []
    }
    const selectItem = (item) => {
      if (selectList.value.includes(item)) {
        selectList.value.splice(selectList.value.indexOf(item), 1)
      } else {
        selectList.value.push(item)
      }
    }
    return {
      goSetting,
      goCreat,
      selectItem,
      addItems,
      selectSystem,
      baseSetting,
      school,
      list,
      userSetting,
      optionVal,
      selectList,
      visibleScrollableDemo,
    }
  },
}
</script>

<style>
body {
  background-color: #ebedef;
}
</style>
