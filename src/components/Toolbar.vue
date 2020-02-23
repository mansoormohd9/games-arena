<template>
  <section class="section">
    <b-field>
      <b-input placeholder="Search..." type="search" icon="magnify"></b-input>
      <p class="control">
        <button class="button is-primary">Search</button>
      </p>
      
      <b-select placeholder="Currency">
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </b-select>
      <p class="control">
        <button class="button is-primary">Button</button>
      </p>
      <p class="control">
        <b-dropdown>
          <button class="button is-primary" slot="trigger">
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>
      </p>
    </b-field>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {}
</script>