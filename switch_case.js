// // The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
// // If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
// // If no case is matched then the default code is executed (if it exists).

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
} 
