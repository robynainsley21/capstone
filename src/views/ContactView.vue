<template>
  <h1 class="display-1 text-center m-4">Contact us.</h1>
  <div class="contact-container">
    <div class="contact-info" data-aos="fade-right">
      <h3 class="display-6 fw-bold">Let's discuss fitness.</h3>
      <div class="contact-box">
        <p>Address:</p>
        <p class="fw-bold">Cape Town, 7100</p>
      </div>
      <div class="contact-box">
        <p>Email:</p>
        <p class="fw-bold">fitmatchTM@gmail.com</p>
      </div>
      <div class="contact-box">
        <p>Call us:</p>
        <p class="fw-bold">012 345 6789</p>
      </div>
    </div>

    <span class="divider"></span>

    <div class="contact-form" data-aos="fade-left">
      <form
        action="https://formspree.io/f/meojdzza"
        method="POST"
        target="_blank"
      >
        <div class="form-group">
          <input
            type="text"
            name="name"
            id="name"
            v-model="form.name"
            required
            placeholder="Name*"
          />
        </div>

        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            required
            placeholder="Email*"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            name="location"
            id="location"
            v-model="form.location"
            required
            placeholder="Location"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            name="subject"
            id="subject"
            v-model="form.subject"
            required
            placeholder="Subject*"
          />
        </div>

        <div class="form-group">
          <textarea
            id="message"
            name="message"
            v-model="form.message"
            rows="2"
            required
            placeholder="Message*"
          ></textarea>
        </div>
        <div class="button-container">
          <button class="login-btn" type="submit">Submit</button>
          <button class="login-btn" type="reset">Reset</button>
        </div>
      </form>

      <div v-if="submitted" class="confirmation-message">
        <p>
          Thank you for your message, {{ form.name }}! We will get back to you
          soon.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import ContactComp from "@/components/Contact.vue";
export default {
  name: "ContactView",
  //   components: {
  //     ContactComp,
  //   }
  data() {
    return {
      form: {
        name: "",
        email: "",
        location: "",
        subject: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted:", this.form);

      this.form = {
        name: "",
        email: "",
        location: "",
        subject: "",
        message: "",
      };

      this.submitted = true;

      /**hiding the confirmation message after 5 seconds */
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-around;
}

.contact-container {
  display: flex;
  font-family: "Moderustic", sans-serif;
  margin: auto;
}

.contact-info {
  width: 50%;

  & h3 {
    padding-left: 0.7rem;
    margin: 1rem;
  }
}

.contact-box {
  padding: 0.7rem;
  margin: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 7px;
    transform: translateY(-5px);
  }
}

.contact-form {
  align-items: center;
  width: 30rem;
  margin: auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.login-btn {
  width: 7rem;
  padding: 10px;
  background: #9b3922;
  color: #fffbfe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f2613f;
  }
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 100%;
  background: transparent;
  transition: all 0.25s ease;
}

.confirmation-message {
  margin-top: 20px;
  padding: 10px;
  background: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .contact-form {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .contact-container {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .contact-info {
    width: 100%;
    & h3 {
      text-align: center;
      margin-top: 2rem;
    }
  }
  .contact-box {
    width: 90%;
  }
}
</style>
