<template>

    <div class="title">

      <h1>First Milestone</h1>
      <p>
        10/100 Tasks done - 10% done | responsinle: Cosima Kroll | Start Date:
        17/07/2021 | Due Date: 17/07/2022
      </p>

    </div>

    <div class="menu">

      <button class="menuEditButton">
        <font-awesome-icon :icon="['fas', 'pen']" />
        <h5>EDIT MILESTONE</h5>
      </button>

      <button class="menuMoreButton">...</button>
      <button class="menuXButton"><font-awesome-icon :icon="['far', 'times-circle']" size="lg" /></button>
    </div>

</template>

<style scoped>

.title {
  padding-left: 1rem;
}

.title::after {
  content: "";
  width: 85%;
  height: 8px;
  background-color: rgb(239, 223, 0);
  position: absolute;
  bottom: -5px;
  left: -0.4rem;
  border: 1px solid #d3d3d3;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

h1 {
  font-weight: 500;
  margin-bottom: 0;
}

p {
  margin-top: 0;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  right: 1.5rem;
}

button {
  background-color: #fff;
  border: none;
  cursor: pointer;
}
.menu > * {
  margin-right: 1rem;
}

.menuEditButton {
  display: flex;
  align-items: center;
  height: 40px;
  color: var(--blue);
  background-color: rgb(207, 233, 255);
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  white-space: nowrap;
}

.menuEditButton > * {
  margin-left: 15px;
}

h5 {
  font-size: 16px;
  font-weight: 600;
  margin-right: 15px;
}

.menuMoreButton {
  height: 40px;
  color: #d3d3d3;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  padding: 0 20px;
}

.menuXButton {
  position: relative;
  top: -20px;
}

</style>