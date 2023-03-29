<template>
  <div>
    <CRow class="gx-4 gy-2">
      <CCol :lg="8">
        <CCard>
          <CCardHeader class="header-bg-color">
            <CRow class="align-items-center text-white text-center">
              <CCol xs="4">
                <h5><span>Average: </span><small>16.2/20</small></h5>
              </CCol>
              <CCol xs="4">
                <h3><span>12</span><small>th</small></h3>
              </CCol>
              <CCol xs="4">
                <h5><span>GPA: </span><small>3.2</small></h5>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <div class="mb-2">
              <CCardLink>
                <span class="top-icon rounded-1">
                  <i class="bi bi-download fs-5"></i>
                </span>
              </CCardLink>
            </div>
            <CTable striped responsive>
              <CTableHead class="table-header text-white">
                <CTableRow>
                  <CTableHeaderCell scope="col">Subjects</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S1</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S2</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S3</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S4</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S5</CTableHeaderCell>
                  <CTableHeaderCell scope="col">S6</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow class="table-row">
                  <CTableDataCell>Chemistry</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell>13.5</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>11</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell>12.5</CTableDataCell>
                </CTableRow>
                <CTableRow class="table-row">
                  <CTableDataCell>Physics</CTableDataCell>
                  <CTableDataCell>19</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>17</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>14.5</CTableDataCell>
                </CTableRow>
                <CTableRow class="table-row">
                  <CTableDataCell>History</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>19</CTableDataCell>
                  <CTableDataCell>18</CTableDataCell>
                  <CTableDataCell>17.5</CTableDataCell>
                </CTableRow>
                <CTableRow class="table-row">
                  <CTableDataCell>Mathematics</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>18</CTableDataCell>
                  <CTableDataCell>17</CTableDataCell>
                  <CTableDataCell>17</CTableDataCell>
                  <CTableDataCell>18</CTableDataCell>
                  <CTableDataCell>17.5</CTableDataCell>
                </CTableRow>
                <CTableRow class="table-row">
                  <CTableDataCell>Geography</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>12.5</CTableDataCell>
                </CTableRow>
                <CTableRow class="table-row">
                  <CTableDataCell>Computer Science</CTableDataCell>
                  <CTableDataCell>11</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>12.5</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>14.5</CTableDataCell>
                  <CTableDataCell>11</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell>11.5</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :lg="4" class="mb-4">
        <p>Weighted table here.</p>
      </CCol>
    </CRow>
  </div>
</template>

<style scoped>
.header-bg-color {
  background-color: #625da0;
}
.opale-white {
  color: #378ef8;
}

.table-header {
  background-color: #918ebc;
}
.table-row {
  background-color: #f0f3f6;
}

.table-row:hover {
  background-color: #cbf0ed;
}

.top-icon {
  color: white;
  background-color: #625da0;
  padding: 5px;
  border-radius: 2px solid;
}
.top-icon:hover {
  background-color: #615da0c2;
}
</style>

<script>
export default {
  name: 'Transcript',
}
</script>
