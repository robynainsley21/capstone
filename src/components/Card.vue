<template>
  <div>
    <div class="card-comp col m-auto" data-aos="fade-up">
      <div class="main">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div>
          <div class="card-body">
            <slot name="body"></slot>
          </div>
          <div class="card-footer wrapper">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  font-family: "Moderustic", sans-serif;
}

.card-header {
  margin: auto;
  padding-bottom: 1rem;
}

.card-comp {
  display: flex;
  flex-direction: column;
  user-select: none;
  max-width: 250px;
  margin: 5rem auto;
  background-color: #0c0c0c;
  background: linear-gradient(0deg, #f2613f 0%, rgba(17, 0, 32, 0.5) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  height: 35rem;
}

.card-comp .main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  padding: 1rem;
  height: 100%;
}

.card-comp .main .card-body {
  display: flex;
}
.card-comp .main .card-body .price {
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;
}

.card-comp .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid #ffffff22; */
  padding: 0.7rem 0.5rem;
  margin: 0;
  margin-right: 0.5rem;
  border-radius: 10%;
}

.card-comp ::before {
  position: fixed;
  content: "";
  box-shadow: 0 0 100px 40px #ffffff08;
  top: -10%;
  left: -100%;
  transform: rotate(-45deg);
  height: 60rem;
  transition: 0.7s all;
}
.card-comp:hover {
  box-shadow: 0 7px 50px 10px #000000aa;
  transform: scale(1.015);
  filter: brightness(1.3);
}
.card-comp:hover ::before {
  filter: brightness(0.5);
  top: -100%;
  left: 200%;
}
</style>
