$(document).ready(start);

let divCounter = 1;

function start(){
  $('#generate').click(generateClicked);
  $('.container').on('click', '.sd', sordClicked);
}


function generateClicked(){
  console.log('fdfdf');
  let generateCounterTag = $(`<p>${divCounter++}</p>`);

  let swapButton = $('<button id="swap"  class="sd">Swap</button>');
  let deleteButton = $('<button id="delete"  class="sd">Delete</button>');

  let newDiv = $('<div class="generated"></div>');

  $(".container").append(newDiv.append([generateCounterTag,deleteButton,swapButton]));
}


function sordClicked(){
  if($(this).attr('id') == 'swap'){
    $(this).parentsUntil('.container').toggleClass('swap');
  }else{
    $(this).parentsUntil('.container').remove();
  }
}
