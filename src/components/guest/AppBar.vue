<template>
  <CNavbar expand="md" class="bg-white px-5" placement="sticky-top">
    <CContainer fluid>
      <CNavbarBrand>
        <img
          src="@/assets/images/logo.png"
          alt=""
          width="22"
          height="24"
          class="d-inline-block align-top"
        />
        Yambaya-mo
      </CNavbarBrand>
      <CNavbarToggler @click="visible = !visible" />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav class="ms-auto">
          <CNavItem class="mx-2">
            <CNavLink href="#">Home</CNavLink>
          </CNavItem>
          <CNavItem class="mx-2">
            <CNavLink href="#/about">About</CNavLink>
          </CNavItem>
          <CNavItem class="mx-2">
            <CNavLink href="javascript:;">Schedule</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false" class="mx-2">
            <CDropdownToggle color="secondary" href="javascript:;">
              Educational System
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="javascript:;"
                >English Sub-system</CDropdownItem
              >
              <CDropdownDivider />
              <CDropdownItem href="javascript:;"
                >French Sub-system</CDropdownItem
              >
            </CDropdownMenu>
          </CDropdown>
          <CNavItem class="mx-2">
            <CNavLink href="#/login" class="get-started-btn">
              Get Started
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<style scoped>
a {
  text-decoration: none;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 30px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #5fcf80;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

.get-started-btn {
  margin-left: 22px;
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.get-started-btn:hover {
  background: #3ac162;
  color: #fff;
}

@media (max-width: 768px) {
  .get-started-btn {
    margin: 0 15px 0 0;
    padding: 6px 18px;
  }
}
</style>
<script>
export default {
  name: 'AppBar',
  data() {
    return {
      visible: false,
    }
  },
}
</script>
