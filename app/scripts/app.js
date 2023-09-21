import $ from 'jquery';
import { DATA } from "./data";
import { Test } from "./test";
console.log(DATA)

const test = new Test(DATA);

$(() => {
	test.init();

	// $(".questions__answer").on("click", function () {
	// 	$(".answer").css({"display":"block"});
	// 	$(".questions").css({"display":"none"});
	// });

	// $(".answer__button").on("click", function () {
	// 	$(".answer").css({"display":"none"});
	// 	$(".questions").css({"display":"block"});
	// });
});
