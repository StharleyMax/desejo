<template>
  <div class="user">
    <div>User Component</div>
    <ul>
      <li v-for="user in users" :key="user.name">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "./api";

export default {
  name: "App",
  data() {
    return {
      users: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      api
        .get("/user")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


