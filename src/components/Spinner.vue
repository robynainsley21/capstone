<template>
  <div>
    <div class="running text-center">
      <div class="outer">
        <div class="body">
          <div class="arm behind"></div>
          <div class="arm front"></div>
          <div class="leg behind"></div>
          <div class="leg front"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpinnerComp",
};
</script>

<style>
.running {
  --color: #f2613f;
  --duration: 0.7s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin: auto;
  text-align: center;
}
.running .outer {
  -webkit-animation: outer var(--duration) linear infinite;
  animation: outer var(--duration) linear infinite;
  margin: auto;
  text-align: center;
}
.running .outer .body {
  background: var(--color);
  height: 15px;
  margin: auto;
  width: 8px;
  border-radius: 4px;
  transform-origin: 4px 11px;
  position: relative;
  transform: rotate(32deg);
  -webkit-animation: body var(--duration) linear infinite;
  animation: body var(--duration) linear infinite;
}
.running .outer .body:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 4px;
  bottom: 16px;
  left: 0;
  position: absolute;
  background: var(--color);
}
.running .outer .body .arm,
.running .outer .body .arm:before,
.running .outer .body .leg,
.running .outer .body .leg:before {
  content: "";
  width: var(--w, 11px);
  height: 4px;
  top: var(--t, 0);
  left: var(--l, 2px);
  border-radius: 2px;
  transform-origin: 2px 2px;
  position: absolute;
  background: var(--c, var(--color));
  transform: rotate(var(--r, 0deg));
  -webkit-animation: var(--name, arm-leg) var(--duration) linear infinite;
  animation: var(--name, arm-leg) var(--duration) linear infinite;
}
.running .outer .body .arm:before {
  --l: 7px;
  --name: arm-b;
}
.running .outer .body .arm.front {
  --r: 24deg;
  --r-to: 164deg;
}
.running .outer .body .arm.front:before {
  --r: -48deg;
  --r-to: -36deg;
}
.running .outer .body .arm.behind {
  --r: 164deg;
  --r-to: 24deg;
}
.running .outer .body .arm.behind:before {
  --r: -36deg;
  --r-to: -48deg;
}
.running .outer .body .leg {
  --w: 12px;
  --t: 11px;
}
.running .outer .body .leg:before {
  --t: 0;
  --l: 8px;
}
.running .outer .body .leg.front {
  --r: 10deg;
  --r-to: 108deg;
}
.running .outer .body .leg.front:before {
  --r: 18deg;
  --r-to: 76deg;
}
.running .outer .body .leg.behind {
  --r: 108deg;
  --r-to: 10deg;
  --c: none;
}
.running .outer .body .leg.behind:before {
  --c: var(--color);
  --r: 76deg;
  --r-to: 18deg;
}
.running .outer .body .leg.behind:after {
  content: "";
  top: 0;
  right: 0;
  height: 4px;
  width: 6px;
  -webkit-clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
  clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
  border-radius: 0 2px 2px 0;
  position: absolute;
  background: var(--color);
}

@-webkit-keyframes outer {
  50% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(4px);
  }
}

@keyframes outer {
  50% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(4px);
  }
}
@-webkit-keyframes body {
  50% {
    transform: rotate(16deg);
  }
  25%,
  75% {
    transform: rotate(24deg);
  }
}
@keyframes body {
  50% {
    transform: rotate(16deg);
  }
  25%,
  75% {
    transform: rotate(24deg);
  }
}
@-webkit-keyframes arm-leg {
  50% {
    transform: rotate(var(--r-to));
  }
}
@keyframes arm-leg {
  50% {
    transform: rotate(var(--r-to));
  }
}
@-webkit-keyframes arm-b {
  30%,
  70% {
    transform: rotate(var(--r-to));
  }
}
@keyframes arm-b {
  30%,
  70% {
    transform: rotate(var(--r-to));
  }
}

body .running {
  zoom: 2;
  margin-top: -32px;
}
body .dribbble {
  position: fixed;
  display: block;
  right: 20px;
  bottom: 20px;
}

</style>
