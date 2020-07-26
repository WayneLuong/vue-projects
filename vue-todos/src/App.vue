<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- Always in root -->
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  components: { Header },
};
</script>

/* 
------------------------v-bind---------------
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a :[key]="url"> ... </a>

-----------------------v-on------------------
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a @[event]="doSomething"> ... </a>

------------------------v-model--------------------
two way binding for form data
 */
  
