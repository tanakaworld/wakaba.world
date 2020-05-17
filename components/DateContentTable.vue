<template>
  <table class="Table">
    <tr
      v-for="(p, index) in contents"
      :key="index"
      class="Table__Row">
      <td class="Table__Column Table__ColumnDate">
        {{ p.date }}
      </td>
      <td class="Table__Column Table__ColumnName">
        <a
          :href="p.url"
          target="_blank">{{ p.name }}</a>
      </td>
      <td class="Table__Column Table__ColumnRole">
        {{ p.role }}
      </td>
    </tr>
  </table>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
.Table {
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 16px;
}

.Table__Column {
  text-align: left;
  padding-right: 24px;
  white-space: nowrap;
}

.Table__Column:last-child {
  padding-right: 0;
  white-space: normal;
}

.Table__ColumnDate {
  line-height: 1;
  min-width: 130px;
}

.Table__ColumnName,
.Table__ColumnRole {
  line-height: 1.5;
}

.Table__ColumnRole {
  min-width: 200px;
}

@media only screen and (max-width: 700px) {
  .Table {
    border-spacing: 8px;
    font-size: 1.2rem;
  }

  .Table__Column {
    white-space: normal;
    min-width: auto;
  }
}
</style>
