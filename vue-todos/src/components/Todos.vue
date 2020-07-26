<template>
  <!-- Not using shorthand -->
  <div>
    <div v-for="(todo, i) in todos" v-bind:key="todo.id">
      <TodoItem :todo="todo" :index="i" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: { TodoItem },
};
</script>

<style scoped>
</style>