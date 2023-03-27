<template>
  <label>Filter by Name:</label>
  <input class="form-control" v-model="filters.text.value" />

  <v-table :data="question" :filters="filters">
    <thead slot="head">
      <th>competence</th>
      <th>text</th>
      <th>level</th>
      <th>type</th>
      <th>answer</th>
    </thead>
    <tbody slot="body" slot-scope="{ displayData }">
      <tr v-for="row in question" :key="row.id">
        <td>{{ row.competence }}</td>
        <td>{{ row.text }}</td>
        <td>{{ row.level }}</td>
        <td>{{ row.type }}</td>
        <td>
          {{ row.answer }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import question from './test.json'
export default {
  name: 'BasicFiltering',
  data: () => ({
    question,
    filters: {
      name: { value: '', keys: ['name'] },
    },
  }),
}
</script>

<style></style>
