document.getElementById('submit').addEventListener('click', function() {
  var comment = document.getElementById('comment').value;
  var language = document.getElementById('language').value;

  // Replace this part with actual classification logic
  var classification = Math.random() < 0.5 ? 'Toxic' : 'Non-toxic';
  var progressWidth = classification === 'Toxic' ? '100%' : '0%';

  document.getElementById('classification').textContent = 'Classification: ' + classification;
  document.getElementById('progress-bar-fill').style.width = progressWidth;

  // Show the result section
  document.getElementById('result').classList.remove('hidden');
});

document.getElementById('clear').addEventListener('click', function() {
  // Clear the text area
  document.getElementById('comment').value = '';

  // Hide the result section
  document.getElementById('result').classList.add('hidden');
});
