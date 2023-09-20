export class Test {
	constructor(data) {
		this.data = data;
		console.log(data);
		this.questions = data.questions;
		this.results = data.results;
		this.activeIndex = 0;
		this.answers = {
			А: 0,
			Б: 0,
			В: 0,
		};

		this.$questionTitle = $(".questions__answer-text");
		this.$answerItem = $(".questions__answer");
		this.$answer = $(".questions__answer");
        this.$answerText= $(".questions__title-number");

		this.$resultFrameTitle = $(".answer__text");

		this.$answerButton = $(".answer__button");
		// this.$answerTitle = $(".answer__text");
	}

	init() {
		this.handleEvents();
		this.renderQuestion();
	}

	handleEvents() {
		this.$answer.on("click", (e) => {
			const id = $(e.target).closest(".questions__answer-text").data("id");
			this.answers[id] += 1;
			this.activeIndex += 1;
			if (this.activeIndex === this.questions.length) {
				this.renderResults();
			} 
		});

		this.$answerButton.on("click", (e) => {
			const id = $(e.target).closest(".questions__answer-text").data("id");
			this.answers[id] += 1;
			this.activeIndex += 1;
			if (this.activeIndex === this.questions.length) {
				this.renderQuestion();
			} 
		});

	}


	renderQuestion() {
		const currentQuestion = this.questions[this.activeIndex];
		console.log(123, currentQuestion)
		const { title, answers } = currentQuestion;
		this.$questionTitle.html(title);
		this.$answerItem.each((id, item) => {
			$(item).find(".questions__answer-text").text(answers[id].text);
		});
	}

	getWinner() {
		let count = 0;
		let winner = "";
		for (let key in this.answers) {
			if (this.answers[key] > count) {
				count = this.answers[key];
				winner = key;
			}
		}
		return winner;
	}

	renderResults() {
		const winner = this.getWinner();
		$("body").removeClass("show-test");
		$("body").addClass("show-result");
		const currentResult = this.results.find((item) => item.id === winner);
		const {id,info} = currentResult;
		this.$resultFrameTitle.text(id);
		this.$resultFrameTitle.text(info);
	}

}
