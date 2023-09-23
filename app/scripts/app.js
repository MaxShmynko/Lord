import $ from "jquery";
import DATA from "./data";

let activeIndex = 0;
let correctAnswers = 0;

const { questions } = DATA;

$(() => {
	function showQuestion() {
		$(".test").attr("data-id", activeIndex);
		$(".test__item").each((id, item) => {
			$(item).attr("data-id", id);
			$(item)
				.find(".test__text")
				.html(questions[activeIndex].answers[id].text);
    });
	$(".test__counter span").html(activeIndex + 1);
	$(".popup__text").html(questions[activeIndex].text);
	$(".test__title").html(questions[activeIndex].title);
}

	$(".test").on("click", ".test__item", function (e) {
		$(".popup").addClass("is-active");
		const id = $(e.target).closest(".test__item").data("id");
		const isRightAnswer = questions[activeIndex].answers[id].isRightAnswer;
		if (isRightAnswer) {
			correctAnswers++;
    	}
	});

	$(".popup__button").on("click", function () {
		$(".popup").removeClass("is-active");
		activeIndex += 1;
		if (activeIndex >= questions.length) {
			$(".result").addClass("is-active");
			$(".result__text").text(
				"Вы правильно ответили на " + correctAnswers + " из " + questions.length + " вопросов"
		);
		$(".result__button").on("click", function () {
			$(".result").removeClass("is-active");
			resetQuiz();
		});
		} else {
			$('.popup__button').text('далее');
		}
		if (activeIndex >= questions.length) {
			activeIndex = 0;
		}
		showQuestion();
  	});

	function resetQuiz() {
		activeIndex = 0;
		correctAnswers = 0;
		showQuestion();
	}

	showQuestion();
});
