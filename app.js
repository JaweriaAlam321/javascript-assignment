// // Declare an empty array using JS literal notation to store
// // student names in future.

// var student_name=[];


// // Declare an empty array using JS object notation to store
// // student names in future.

// //  //question 2
// student_name[0] = "jaweria";
// student_name[1] = "toba";
// student_name[3] = "ghanva";
// document.write(student_name);
// document.write("<br>");






// // Declare and initialize a strings array.
// // Javascript array declaration can span multiple lines

// let num = [
//     "1",
//     "2",
//     "3"
//   ];
//   document.write(num);
//   document.write("<br>");

// // Initializing while declaring
// var list = ["bio", "chemistry", "math", "science"];
// document.write(list);
// document.write("<br>");


// // 4. Declare and initialize a numbers array.
// var arr=[10,20,30,40];
// document.write(arr[0]);
// document.write("<br>");
// document.write(arr[3]);

// // 5. Declare and initialize a boolean array.
//  //question 5
//  var num = [];
//  var value = 5;
//  for(var i = 0; i > value; i++) {
//        num.push(true);
//  }


// //  // question 6
//  var arr = [04, 'by', 678, 'hello_world']



// // Declare and Initialize an array and store available 
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// // BS, BCOM, MS, M. Phil., PhD). Show the listed 
// // qualifications in your browser like:

//  // question 7
//  var education_array = ['SSC', 'HSC' , 'BCS', 'BS', 'BCOM' , 'MS', 'M. Phill' , 'PhD']
//  document.write('<h3> Qualifications:  </h3> ')
//  document.write("<br> 1)" + education_array[0])
//  document.write("<br> 2)" + education_array[1])
//  document.write("<br> 3)" + education_array[2])
//  document.write("<br> 4)" + education_array[3])
//  document.write("<br> 5)" + education_array[4])
//  document.write("<br> 6)" + education_array[5])
//  document.write("<br> 7)" + education_array[6])
//  document.write("<br> 8)" + education_array[7])
//  document.write("<br> 9)" + education_array[8])

// //  Write a program to store 3 student names in an array.Take
// //  another array to store score of these three students. 
// //  Assume that total marks are 500 for each student, display 
// //  the scores & percentages of students like:

//  var student_names = ['Michael', 'John' , 'Tony']
//  var score = [320 , 230 , 480]
//  var total_marks = 500;

//  document.write("score of " + student_names[0] + " is " + score[0] + ". Percentage " + ((score[0]) / total_marks) * 100 + "% <br>" ) 
//  document.write("score of " + student_names[1] + " is " + score[1] + ". Percentage " + ((score[1]) / total_marks) * 100 + "% <br>" ) 
//  document.write("score of " + student_names[2] + " is " + score[2] + ". Percentage " + ((score[2]) / total_marks) * 100 + "% <br>" )


//  //  // question 9
//  document.write("<h3>Colors</h3>");
//  var color_name = ['blue' , 'yellow' , 'black' ]
//  document.write(color_name);
//  color_name.unshift(prompt("please enter the color name you want to add at the begining"))
//  document.write("<br>" + color_name);
//  color_name.push(prompt("please enter the color name you want to add at the end"))
//  document.write("<br>" + color_name);
//  color_name.unshift('white' , 'browen');
//  document.write("<br>" + color_name);
//  color_name.shift();
//  document.write("<br>" + color_name);
//  color_name.pop();
//  document.write("<br>" + color_name);
//  color_name.splice(prompt('where you want to placed color name'), 0 , prompt('which color you want to add'))
//  document.write("<br>" + color_name);
//  color_name.splice(0 , prompt('which color name you want to delete'))
//  document.write("<br>" + color_name);


// //  10. Write a program to store student scores in an array & 
// // sort the array in ascending order using Array’s sort 
// // method.
//  document.write("<h4>Score:</h4>")
//  var all_student_marks = [320, 230, 480, 120 ]
//  document.write(all_student_marks + "<br>")
//  document.write(all_student_marks.sort())

// //  11. Write a program to initialize an array with city names. 
// // Copy 3 array elements from cities array to selectedCities 
// // array.

//  var city_Pak = ["Karachi", "Lahore,", "Islamabad", "Quetta", "Peshawar"]
//  document.write('<h6> Cities List </h6> <br>' + city_Pak)
//  var selected_city = city_Pak.slice(2 , 4)
//  document.write('<br> <h6> Selected Cities </h6>' + selected_city)



//  //  // question 12
//  var array = ["This", "Is", "My", "Cat"]
//  var string = array.join(" ");
//  document.write(string)
//  // chap 17-20
//  // // task 3
// for (var i = 0; i <= 10; i++ ){
//     document.write(i + "<br>")
// }

// // question 13
// var array_new=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=array_new=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h3> devices: </h3>" + "<br>" + element)

// element.abc(1,3)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.slice(1,2)
// document.write("<br> OUT : <br>" + copyElement)

// var copyElement = element.slice(2,3)
// document.write("<br> OUT : <br>" + copyElement)

// element.splice(0,3)
// document.write("<br> OUT : <br>" + element)

// // question 14

// var array_first=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=array_first=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h3> devices: </h3>" + "<br>" + element)

// element.splice(0,3)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.splice(1,2)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.splice(2,3)
// document.write("<br> OUT : <br>" + element)

// element.splice(1,3)
// document.write("<br> OUT : <br>" + element)



// // question 15

// var phone_series = ["Apple", "Samsung", "Motorola", "Nokia" , "Sony" , "Haier"]
// document.write(`<select>
// <option> ${phone[0]} </option>
// <option> ${phone[1]} </option>
// <option> ${phone[2]} </option>
// <option> ${phone[3]} </option>
// <option> ${phone[4]} </option>
// <option> ${phone[5]} </option>
// </select>`)