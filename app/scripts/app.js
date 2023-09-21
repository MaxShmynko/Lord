import $ from "jquery";
import DATA from "./data";

let rightAnswers = 0;
let activeIndex = 0;

const { questions } = DATA;

$(() => {
	function showQuestion() {
		$(".test").attr("data-id", activeIndex);
		$($(".test__item")[0]).attr("data-id", 0);
		$($(".test__item")[0])
			.find(".test__text")
			.html(questions[activeIndex].answers[0].text);
		$($(".test__item")[1]).attr("data-id", 1);
		$($(".test__item")[1])
			.find(".test__text")
			.html(questions[activeIndex].answers[2].text);
			$($(".test__item")[2]).attr("data-id", 2);
			$($(".test__item")[2])
				.find(".test__text")
				.html(questions[activeIndex].answers[1].text);
		$(".test__counter span").html(activeIndex + 1);
		$(".popup__text").html(questions[activeIndex].text);
		$(".test__title").html(questions[activeIndex].title);
	}

	$(".test").on("click", ".test__item", function (e) {
		$(".popup").addClass("is-active");
		const id = $(e.target).closest(".test__item").data("id");
		const isRightAnswer = questions[activeIndex].answers[id].isRightAnswer;
		if (isRightAnswer) {
			rightAnswers += 1;
			$(".popup__chapter span").hide();
		} else {
			$(".popup__chapter span").show();
		}
	});

	$(".popup__cross, .popup__button").on("click", function (e) {
		$(".popup").removeClass("is-active");
		activeIndex = activeIndex + 1;
		if (activeIndex >= questions.length) {
			//Result
		} else {
			showQuestion();
		}
	});
});
