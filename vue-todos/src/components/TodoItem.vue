<template>
  <!-- Using shorthand -->
  <div class="todo-item" :class="{'is-complete': todo.completed}">
    <input type="checkbox" @change="markComplete" :checked="todo.completed" />
    <h3>{{todo.title}} - Iteration {{index}}</h3>
    <button class="del" @click="$emit('del-todo',todo.id)">X</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  methods: {
    markComplete() {
      console.log("Changed");
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>