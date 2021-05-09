var number_string = "1"; length_of_black_board
for (var i = 2; i < 2022; i++) {
	number_string += `, 1/${i}`;
}
document.querySelector('#numbers_on_the_blackboard').innerHTML = number_string;
var number_string_array = number_string.split(", ");
var length_of_black_board = number_string_array.length;
i = 0;
while (i < length_of_black_board) {
	if (number_string_array.length == 1) {document.querySelector('#final_answer').append(`${Math.ceil(number_string_array[0])}`);
		break;
	};
	var gotten_number = eval(number_string_array[0]) + eval(number_string_array[1]) + (eval(number_string_array[0]) * eval(number_string_array[1]));
	document.querySelector('#the_values').append(
		`${number_string_array[0]} & ${number_string_array[1]} = (${number_string_array[0]} + ${number_string_array[1]} + ${eval(number_string_array[0]) * eval(number_string_array[1])}) = ${gotten_number}, `,
		document.createElement("br"),
		document.createElement("br")
		);
	number_string_array.splice(0, 2);
	number_string_array.push(gotten_number);
	number_string_array.sort();
	i++;
}