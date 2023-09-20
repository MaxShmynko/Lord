import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import { DATA } from "./data";
// import { Test } from "./test";

// const test = new Test(DATA);

$(() => {
	svg4everybody();

	$(".questions__answer").on("click", function () {
		$(".answer").css({"display":"block"});
		$(".questions").css({"display":"none"});
	});

	$(".answer__button").on("click", function () {
		$(".answer").css({"display":"none"});
		$(".questions").css({"display":"block"});
	});
});
