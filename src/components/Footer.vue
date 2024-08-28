<template>
  <div class="d-flex justify-content-center align-items-center fixed-bottom" id="footer">
    <div class="col-md-6 d-flex justify-content-center align-items-center">
      <img
        class=" "
        src="https://robynainsley21.github.io/images/capstone/FitMatch-logo-removebg-preview.png"
        alt="footer-logo"
        loading="lazy"
      />
    </div>
    <div class="socials-box col-md-6">
      <ul>
        <li><i class="bi bi-telephone-fill"></i><span>012 345 6789</span></li>
        <li><i class="bi bi-envelope-fill"></i><span>fitmatchTM@gmail.com</span></li>
        <li><i class="bi bi-twitter-x"></i><span>@fitmatchTM</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
#footer {
  /* background-color: #fffbfe; */
  backdrop-filter: blur(10px);
  z-index: 1;
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
    margin-right: .5rem;
  }
}

@media screen and (max-width: 425px) {
    #footer{
        display: flex;
        flex-direction: column;
    }
}
</style>
