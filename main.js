
import step1Image from './images/Step 1.jpg';
import step2Image from './images/Step 2.jpg';
import step3Image from './images/Step 3.jpg';
import step4Image from './images/Step 4.jpg';

const stepImages = [
  step1Image,
  step2Image,
  step3Image,
  step4Image
];

const steps = [];    // one state object per step

// DEV NOTE: temporary test content for the BRIEF and MATERIALS actions.
// Replace with real per-project content once the brief/materials data
// source is decided.

const materialsColumns = ['MATERIAL', 'LENGTH', 'WIDTH', 'QUANTITY'];
const materialsRows = [
  ['Bamboo', '50 cm', '1 cm', 2],
  ['Bamboo', '45 cm', '1 cm', 2],
  ['Bamboo', '40 cm', '1 cm', 2]
];

const briefPage = document.createElement('div');
briefPage.className = 'step'; // uses the same show/hide animation as a step
briefPage.append(Object.assign(document.createElement('p'), {
  className: 'brief-text',
  textContent: '\nThe project is making bamboo stakes for farming.\n\nYou will be making 6 stakes, in shaa Allah:\n\n\n2 X 40 cm\n\n2 X 45 cm\n\n2 X 50 cm'
}));

const materialsPage = document.createElement('div');
materialsPage.className = 'step';

const materialsTable = document.createElement('table');
materialsTable.className = 'materials-table';

const materialsHeadRow = document.createElement('tr');
materialsColumns.forEach(label => {
  const th = document.createElement('th');
  th.textContent = label;
  materialsHeadRow.append(th);
});
materialsTable.append(materialsHeadRow);

materialsRows.forEach(row => {
  const tr = document.createElement('tr');
  row.forEach(value => {
    const td = document.createElement('td');
    td.textContent = value;
    tr.append(td);
  });
  materialsTable.append(tr);
});

materialsPage.append(materialsTable);

let current = null;  // the step on show

/* Builds one step's empty page and its state. */

function buildStep(index){
  const step = {
    index: index
  };

  step.el = document.createElement('div');
  step.el.className = 'step';

  const image = document.createElement('img');
  image.className = 'step-image';
  image.src = stepImages[index];
  image.alt = 'Step ' + (index + 1) + ' diagram';
  step.el.append(image);

  const divider = document.createElement('hr');
  divider.className = 'divider';
  const stepMessage = document.createElement('p');
  stepMessage.className = 'step-message';
  stepMessage.textContent = index === 0 ? 'Get some bamboo.' : index === 1 ? 'Cut the bamboo to the right length with a saw.' : index === 2 ? 'Split each piece of bamboo into four stakes. Use a machete.\n\nLook at the twelve rough stakes. Select the best six.' : 'Shape the stakes using a wood carving knife.';
  step.el.append(divider);
  step.el.append(stepMessage);

  return step;
}

/* ---- Panel: always shows the state of the page on show. ---- */

function showPanelState(page){
  document.querySelectorAll('.step-button').forEach((button, i) => {
    button.classList.toggle('current', page === steps[i].el);
  });

  document.getElementById('read-brief-button').classList.toggle(
    'current',
    page === briefPage
  );

  document.getElementById('view-materials-button').classList.toggle(
    'current',
    page === materialsPage
  );
}

/* Fades the step on show into the centre and brings the requested step
   up in its place (the animation is in the .step CSS). */

let activePage = null; // whichever page - a step, brief, or materials - is on show

function showPage(el){
  if (el === activePage) return;
  if (activePage) activePage.classList.remove('active');
  el.classList.add('active');
  activePage = el;
}

const stepButtonCount = document.querySelectorAll('.step-button').length;
for (let i = 0; i < stepButtonCount; i++) steps.push(buildStep(i));
document.getElementById('container').append(...steps.map(step => step.el), briefPage, materialsPage);current = steps[0];
showPage(current.el);
showPanelState(current.el);

document.getElementById('read-brief-button').addEventListener('click', () => {
  showPage(briefPage);
  showPanelState(briefPage);
});

document.getElementById('view-materials-button').addEventListener('click', () => {
  showPage(materialsPage);
  showPanelState(materialsPage);
});

document.querySelectorAll('.step-button').forEach((button, i) => {
  button.addEventListener('click', () => {
    current = steps[i];
    showPage(current.el);
    showPanelState(current.el);
  });
});
