function checkAge() {
  console.log('my age is 40 !!');
  const ageField = document.getElementById('age');
  const ageText = ageField.value;
  const errorTag = document.getElementById('error');
}
try {
  // const age =parseInt(ageText);
  // if (isNaN(age)){
  //   throw ("please enter a number");
  console.log('azir');
} catch (err) {
  console.log('error', err)
  errorTag.innerHTML

}