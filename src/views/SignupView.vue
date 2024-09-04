<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
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
        <button class="login-btn" type="submit">Submit</button>
        <router-link to="/login"><button class="login-btn" type="submit">Login</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      emailAdd: "",
      userPass: "",
      userRole: "user",
    };
  },
  methods: {
    handleSignup() {
      const payload = {
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        userRole: this.userRole,
      };
      this.$store.dispatch("registerUser", payload);
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
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

h2 {
  text-align: center;
}

form {
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
  border-bottom: 1px solid #b0b5b3;
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
