<script setup lang="ts">
import {ref} from 'vue'

  const NeedleAnglePercent = 3.6;
  const GoodPercentage = 30;
  const GreatPercentage = 70;
  const FullPercentage = 100;
  const EmptyPercentage = 0;

  class Index {
    score = ref(0);
    progressBar1 = ref(90)
    progressBar2 = ref(90)
    Evalutaion = ref('Bad!');
    NeedleAngle = ref(-90);
    EvalutaionColor = ref('red')
    
    // increase Score function triggered by + button
    increase() {
      if(this.score.value < FullPercentage) {
        this.score.value += 2;
        // increase needle angle
        this.NeedleAngle.value += NeedleAnglePercent;
        // increase progress bar
        this.score.value < 51 ? this.progressBar1.value -=  NeedleAnglePercent : this.progressBar2.value -=  NeedleAnglePercent;
        // change displayed Evalutaion text and color
        this.Evalutaion.value = 'Great!';
        this.EvalutaionColor.value = "green";
        if(this.score.value < GoodPercentage) {
          this.Evalutaion.value = 'Bad!'
          this.EvalutaionColor.value = "red";
        }else if(this.score.value < GreatPercentage) {
          this.Evalutaion.value = 'Good'
          this.EvalutaionColor.value = "blue";
        }
      }
    }

    // decrease Score funtion triggered by - button
    decrease() {
      if(this.score.value > EmptyPercentage) {
        this.score.value -= 2;
        // decrease needle angle
        this.NeedleAngle.value -= NeedleAnglePercent;
        // decrease progress bar
        this.score.value > 49 ? this.progressBar2.value +=  NeedleAnglePercent : this.progressBar1.value +=  NeedleAnglePercent;
        // change displayed Evalutaion text and color
        this.Evalutaion.value = 'Bad!'
        this.EvalutaionColor.value = "red";
        if(this.score.value > GreatPercentage) {
          this.Evalutaion.value = 'Great!'
          this.EvalutaionColor.value = "green";
        } else if(this.score.value > GoodPercentage) {
          this.Evalutaion.value = 'Good'
          this.EvalutaionColor.value = "blue";
        }
      }
    }
  }
  
  let meter = new Index();

</script>

<template>
  <main>
    <div class="outerCircle">
      <div class="segment segment1" :style="{  transform: 'rotate(180deg) skew('+meter.progressBar1.value+'deg)' }"></div>
      <div class="segment segment2" :style="{  transform: 'rotate(270deg) skew('+meter.progressBar2.value+'deg)' }"></div>
      <div class="bigCircle">
        <div class="neddle" :style="{ transform: 'rotate('+meter.NeedleAngle.value+'deg)' }"></div>
        <div class="smallCircle">
          <h1>{{ meter.score }}%</h1>
          <h2 :class="meter.EvalutaionColor.value">{{ meter.Evalutaion.value }}</h2>
        </div>
        <div class="whiteBottom"></div>
      </div>
    </div>
      <div class="buttons">
        <button @click="meter.increase">+</button>
        <button @click="meter.decrease">-</button>
      </div>
  </main>
</template>

<style scoped>

.bigCircle {
  position: relative;
  display: flex;
  place-items: center;
  justify-content: center;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  border: 1px solid #cdcdcd;
  background-color: #f1f1f1;
  background-image: linear-gradient(45deg, #f1f1f1 50%, #f9f9f9 60%);
  overflow: hidden;
}

.smallCircle {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 40px 6px #cdcdcd;
  z-index: 3;
}

/* outer transparent circle for the progress bar */
.outerCircle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 520px;
  background: transparent;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

.neddle {
  top: 0;
  width: 0;
  height: 0;
  position: absolute;
  transform-origin: bottom center;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 250px solid #58CD36;
  z-index: 2;
}

/* Progress Bar in 2 parts */
.segment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 260px;
  transform-origin: 0 0;
}
.segment1 {
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(to top, blue 10%, red 60%);
}
.segment2 {
  background-color: #008000; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom, blue 10%, green 90%);
}


/* Text inside the meter */
h1 {
  color: rgb(116, 115, 122);
  font-size: 52px;
  font-weight: 900;
  margin-bottom: 0;
}

h2 {
  margin-top: 0;
  font-size: 40px;
  font-weight: 100;
}

/* evaluation colors classes */

.red {color: rgb(112, 0, 0);}
.blue{color: rgb(0, 27, 101);}
.green{color: rgb(45, 136, 0)}

/* white part of the big circle */
.whiteBottom {
  position: absolute;
  top: 60%;
  background-color: transparent;
  border-bottom: 400px solid #fff;
	border-left: 900px solid transparent;
	border-right: 900px solid transparent;
	height: 0;
	width: 200px;

}

/* control buttons */
.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

button {
  height: 50px;
  width: 50px;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
}

</style>
