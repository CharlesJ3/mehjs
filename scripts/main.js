let final = document.getElementById("final");

const checkColor = () => {
  // For when this is updated
  let color = document.getElementById("background").value;

  if (color === "Green"){
    final.className += "green ";

  } else if (color === "Red"){
    final.className += "red ";

  } else {
    final.className += "blue ";
  }
}

const checkHeight = () => {

  let height = document.getElementById("height").value;

  if (height === "100px"){
    final.className += "height100 ";

  } else if (height === "200px"){
    final.className += "height200 ";

  } else {
    final.className += "height300 ";

  }
}

const checkWidth = () => {

  let width = document.getElementById("width").value;

  if (width === "100px"){
    final.className += "width100";
    console.log("test");

  } else if (width === "200px"){
    final.className += "width200";

  } else {
    final.className += "width300";

  }
}

const checkAll = () => {

  final.className = '';

  checkColor();
  checkHeight();  
  checkWidth();  
}
