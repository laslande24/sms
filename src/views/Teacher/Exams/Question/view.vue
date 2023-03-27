<template>
  <h4 class="head">Application</h4>
  <div class="container">
    <table
      class="table-responsive bordered highlight centered hoverable z-depth-2"
      v-show="persons.length"
    >
      <thead>
        <tr>
          <th v-for="column in columns">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in persons">
          <td>{{ index }}</td>
          <td>
            {{ person.competence }}
          </td>
          <td>
            {{ person.question }}
          </td>
          <td>{{ person.level }}</td>
          <td>
            {{ person.type }}
          </td>
          <td>
            {{ person.answer }}
          </td>
          <td style="width: 18%">
            <a
              href="#modal"
              @click="edit(index)"
              class="btn waves-effect waves-light yellow darken-2"
              ><i class="material-icons">edit</i>
            </a>
            <a
              href="#!"
              class="btn waves-effect waves-light red darken-2"
              @click="archive(index)"
              ><i class="material-icons">archive</i>
            </a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="input-field">
              <input
                placeholder="Placeholder"
                ref="competence"
                v-model="input.competence"
                id="competence"
                type="text"
              />
              <label for="competence">Competance</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input
                placeholder="Placeholder"
                v-model="input.question"
                id="question"
                type="text"
              />
              <label for="question">Question</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input
                placeholder="Placeholder"
                v-model="input.level"
                id="level"
                type="text"
              />
              <label for="level">level</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input
                placeholder="Placeholder"
                v-model="input.type"
                id="type"
                type="text"
              />
              <label for="type">type</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input
                placeholder="Placeholder"
                v-model="input.answer"
                id="answer"
                type="text"
              />
              <label for="answer">answer</label>
            </div>
          </td>
          <td>
            <a href="#!" @click="add" class="btn btn-waves green darken-2"
              ><i class="material-icons">add</i></a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <table
      class="table-responsive centered bordered striped highlight z-depth-1 hoverable"
      v-show="bin.length"
    >
      <thead>
        <tr>
          <th v-for="column in columns">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="(person, index) in bin">
          <td>{{ index }}</td>
          <td>
            {{ person.competence }}
          </td>
          <td>
            {{ person.question }}
          </td>
          <td>{{ person.level }}</td>
          <td>
            {{ person.type }}
          </td>
          <td>
            {{ person.answer }}
          </td>
          <td>
            <a
              href="#!"
              @click="restore(index)"
              class="btn waves-effect waves-light blue darken-2"
              ><i class="material-icons">restore</i>
            </a>
            <a
              href="#!"
              @click="deplete(index)"
              class="btn waves-effect waves-light red darken-2"
              ><i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="modal" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 class="center-align">Edit</h4>
      <p class="center-align">Edition form. Update informations</p>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="John"
                id="last_name"
                type="text"
                v-model="editInput.competence"
              />
            </div>
            <div class="input-field col s6">
              <input
                placeholder="Doe"
                id="first_name"
                type="text"
                v-model="editInput.question"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="26"
                id="edit_level"
                type="text"
                v-model="editInput.level"
              />
              <label for="edit_level">level</label>
            </div>
            <div class="input-field col s6">
              <input
                placeholder="Teacher"
                id="edit_type"
                type="text"
                v-model="editInput.type"
              />
              <label for="edit_type">type</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                placeholder="answer"
                id="edit_answer"
                type="text"
                v-model="editInput.answer"
              />

            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
      <a
        href="#!"
        class="modal-action modal-close waves-effect waves-green btn-flat"
        >Close</a
      >
      <a href="#!" @click="update" class="btn waves-effect waves-light"
        ><i class="material-icons">edit</i></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line prettier/prettier
      columns: ['#', 'competence', 'question', 'level', 'type','answer', 'Actions '],
      persons: [
        {
          competence: 'ADIASSA',
          text: 'Ethiel',
          level: 20,
          type: 'Web Developer',
          answer: 'Lome-Togo',
        },
      ],
      bin: [],
      input: {
        competence: 'WADE',
        question: 'Johnson',
        level: 38,
        type: 'Comedian',
        answer: 'Roma/Italia',
      },
      editInput: {
        competence: '',
        question: '',
        level: 0,
        type: '',
        answer: '',
      },
    }
  },
  methods: {
    //function to add data to table

    add: function () {
      this.persons.push({
        competence: this.input.competence,
        question: this.input.question,
        level: this.input.level,
        type: this.input.type,
        answer: this.input.answer,
      })

      for (var key in this.input) {
        this.input[key] = ''
      }
      // this.persons.sort(ordonner)
      this.$refs.competence.focus()
    },
    //function to handle data edition
    edit: function (index) {
      this.editInput = this.persons[index]
      console.log(this.editInput)
      this.persons.splice(index, 1)
    },
    //function to send data to bin
    archive: function (index) {
      this.bin.push(this.persons[index])
      this.persons.splice(index, 1)
      // this.bin.sort(ordonner)
    },
    //function to restore data
    restore: function (index) {
      this.persons.push(this.bin[index])
      this.bin.splice(index, 1)
      // this.bin.sort(ordonner)
    },
    //function to update data
    update: function () {
      // this.persons.push(this.editInput);
      this.persons.push({
        competence: this.editInput.competence,
        question: this.editInput.question,
        level: this.editInput.level,
        type: this.editInput.type,
        answer: this.editInput.answer,
      })
      for (var key in this.editInput) {
        this.editInput[key] = ''
      }
      // this.persons.sort(ordonner)
    },
    //function to defintely delete data
    deplete: function (index) {
      // console.log(this.bin[index]);
      this.bin.splice(index, 1)
    },
  },
}
</script>
<style lang="scss"></style>
