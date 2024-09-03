<template>
  <div class="login-container">
    <h2 class="text-center">Login</h2>
    
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="emailAdd">Email:</label>
        <input type="email" id="emailAdd" v-model="emailAdd" required />
      </div>
      <div class="form-group">
        <label for="userPass">Password:</label>
        <input type="password" id="userPass" v-model="userPass" required />
      </div>
      <div class="form-group">
        <label for="userRole">Role:</label>
        <select id="userRole" v-model="userRole" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
     <div class="button-container">
        <button class="login-btn" type="submit">Login</button>
        <router-link to="/signup"><button class="login-btn">Signup</button></router-link>
     </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      emailAdd: "",
      userPass: "",
      userRole: "user",
    };
  },
  methods: {
    handleLogin() {
      const payload = {
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        userRole: this.userRole,
      };
      this.$store.dispatch("loginUser", payload);
    },
  },
};
</script>

<style scoped>
.button-container{
    display: flex;
    justify-content: space-between;
}
.login-container {
  margin: 0 auto;
  padding: 20px;
  background: #fffbfe;
  border-radius: 8px;
}

form{
    width: 400px;
    margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #B0B5B3;
  border-radius: 0;
}

.login-btn {
  width: 7rem;
  padding: 10px;
  background: #9b3922;
  color: #fffbfe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-btn:hover {
  background: #f2613f;
}
</style>
