<template>
  <div id="footer">
    <div
      class="d-flex justify-content-center align-items-center"
      id="footer-items"
    >
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src="https://robynainsley21.github.io/images/capstone/FitMatch-logo-removebg-preview.png"
          alt="footer-logo"
          loading="lazy"
        />
      </div>
      <div class="socials-box col-md-6">
        <ul>
          <li><i class="bi bi-telephone-fill"></i><span>012 345 6789</span></li>
          <li>
            <i class="bi bi-envelope-fill"></i><span>fitmatchTM@gmail.com</span>
          </li>
          <li><i class="bi bi-twitter-x"></i><span>@fitmatchTM</span></li>
        </ul>
      </div>
    </div>
    <p class="text-center">Robyn Carnow &copy; Copyright {{ cYear }}</p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  /* background-color: #fffbfe; */
  padding-top: 2rem;

  backdrop-filter: blur(10px);
  z-index: 1;
  position: sticky;
  display: flex;
  flex-direction: column;

  &::before{
    content: '';
    width: 70%;
    height: 1px;
    background-color: #B0B5B3;
    margin: auto;
  }
  &:last-child {
    color: #9b3922;
  }
}

img[alt="footer-logo"] {
  width: 8rem;
}

ul li {
  list-style: none;
  color: #9b3922;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;

  & i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
}

@media screen and (max-width: 425px) {
  #footer {
    display: flex;
    flex-direction: column;
  }

  #footer-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
