
if (choice === 'Metric') {
    document.getElementById('submit').addEventListener('click', calculateBmrMetric, false);
  } else {
    document.getElementById('submit').addEventListener('click', calculateBmrImperial, false);
}



function calculateBmrMetric() {
  var bmr;
  var calories = 0;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  gender == 'male'
    ? (bmr = 66.5 + 13.75 * weight + 5.003 * height * 100 - 6.755 * age)
    : (bmr = 655 + 9.563 * weight + 1.85 * height - 4.676 * age);

  gender == 'female'
    ? (bmr = 655 + 9.563 * weight + 1.85 * height * 100 - 4.676 * age)
    : (bmr = 66.5 + 13.75 * weight + 5.003 * height * 100 - 6.755 * age);

  var activityLevel1 = document.getElementById('activityLevel1');
  var activityLevel2 = document.getElementById('activityLevel2');
  var activityLevel3 = document.getElementById('activityLevel3');
  var activityLevel4 = document.getElementById('activityLevel4');
  var activityLevel5 = document.getElementById('activityLevel5');

  activityLevel1.checked
    ? (calories += parseFloat(activityLevel1.value))
    : (calories += 0);
  activityLevel2.checked
    ? (calories += parseFloat(activityLevel2.value))
    : (calories += 0);
  activityLevel3.checked
    ? (calories += parseFloat(activityLevel3.value))
    : (calories += 0);
  activityLevel4.checked
    ? (calories += parseFloat(activityLevel4.value))
    : (calories += 0);
  activityLevel5.checked
    ? (calories += parseFloat(activityLevel5.value))
    : (calories += 0);

  var totalCalories = calories * bmr;
  var totalCalories = totalCalories.toFixed(1);

  document.getElementById('resultBmr').value = bmr.toFixed(1);

  document.getElementById('resultCalories').value = totalCalories; //change to totalCalories
}

function calculateBmrImperial() {
  var bmr;
  var calories = 0;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  gender == 'male'
    ? (bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age)
    : (bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age);

  gender == 'female'
    ? (bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age)
    : (bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age);

  var activityLevel1 = document.getElementById('activityLevel1');
  var activityLevel2 = document.getElementById('activityLevel2');
  var activityLevel3 = document.getElementById('activityLevel3');
  var activityLevel4 = document.getElementById('activityLevel4');
  var activityLevel5 = document.getElementById('activityLevel5');

  activityLevel1.checked
    ? (calories += parseFloat(activityLevel1.value))
    : (calories += 0);
  activityLevel2.checked
    ? (calories += parseFloat(activityLevel2.value))
    : (calories += 0);
  activityLevel3.checked
    ? (calories += parseFloat(activityLevel3.value))
    : (calories += 0);
  activityLevel4.checked
    ? (calories += parseFloat(activityLevel4.value))
    : (calories += 0);
  activityLevel5.checked
    ? (calories += parseFloat(activityLevel5.value))
    : (calories += 0);

  var totalCalories = calories * bmr;
  var totalCalories = totalCalories.toFixed(1);

  document.getElementById('resultBmr').value = bmr.toFixed(1);

  document.getElementById('resultCalories').value = totalCalories; //change to totalCalories
}

function choice() {
    var choice = document.getElementById('MetricImperial').value;
    if (choice === "Metric") {
        calculateBmrMetric();
    } else {
        calculateBmrImperial;
    }

}


document.getElementById('submit').addEventListener('click', choice, false);


/*Formulas used from wikipedia assingment link:
Men	Metric	BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
Imperial	BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
Women	Metric	BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )
Imperial	BMR = 655 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years ) */