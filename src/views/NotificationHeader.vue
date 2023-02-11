<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CIcon icon="cil-bell" size="lg" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Notification
      </CDropdownHeader>
      <CDropdownItem>
        <CCardText>No Notification</CCardText>
      </CDropdownItem>
      <CDropdownDivider />
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
export default {
  name: 'NotificationHeader',
  setup() {
    return {}
  },
}
</script>
