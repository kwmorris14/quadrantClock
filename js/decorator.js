function colorArc(arc){
  //TODO Correct colors
  switch(percentage){
    case (percentage <= 25 ):
    return "blue";
    break;
    case (percentage > 25 && percentage <= 50):
    return "green";
    break;
    case (percentage > 50 && percentage <= 75):
    return "yellow";
    break;
    case (percentage < 75):
    return "yellow";
    break;
  }
}