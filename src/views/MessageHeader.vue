<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CIcon icon="cil-envelope-open" size="lg" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Messages
      </CDropdownHeader>
      <CDropdownItem>
        <CCardText>No new Messages</CCardText>
      </CDropdownItem>
      <CDropdownDivider />
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
export default {
  name: 'MessageHeader',
  setup() {
    return {}
  },
}
</script>
