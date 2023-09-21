import $ from "jquery";
import DATA from "./data";

let activeIndex = 0;

const { questions } = DATA;

$(() => {
	function showQuestion() {
		$(".test").attr("data-id", activeIndex);
		$(".test__item").each((id,item) => {
			$(item).attr("data-id", id);
			$(item)
				.find(".test__text")
				.html(questions[activeIndex].answers[id].text);
		})
		$(".test__counter span").html(activeIndex + 1);
		$(".popup__text").html(questions[activeIndex].text);
		$(".test__title").html(questions[activeIndex].title);
	}

	$(".test").on("click", ".test__item", function () {
		$(".popup").addClass("is-active");
	});

	$(".popup__button").on("click", function () {
		$(".popup").removeClass("is-active");
		activeIndex += 1;
		if (activeIndex === questions.length - 1){
			$('.popup__button').text('пройти еще раз');
		}
		else {
			$('.popup__button').text('далее');
		}
		if (activeIndex >= questions.length) {
			activeIndex = 0;
		}
		showQuestion();
	});
});
