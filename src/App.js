"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var questions_json_1 = require("./questions.json");
var StatBar_1 = require("./components/StatBar");
var Questions_1 = require("./components/Questions");
var Rest_1 = require("./components/Rest");
var Answer_module_scss_1 = require("./components/Answer.module.scss");
var classnames_1 = require("classnames");
var App_module_scss_1 = require("./App.module.scss");
var App = function () {
    var allQuestions = questions_json_1.default;
    var _a = (0, react_1.useState)(0), currentQuestionIdx = _a[0], setCurrentQuestionIdx = _a[1];
    var _b = (0, react_1.useState)(0), correctAnswers = _b[0], setCorrectAnswers = _b[1];
    var _c = (0, react_1.useState)(0), incorrectAnswers = _c[0], setIncorrectAnswers = _c[1];
    var _d = (0, react_1.useState)(false), waitingToAdvance = _d[0], setWaitingToAdvance = _d[1];
    var onSubmit = function (correct) {
        if (correct)
            setCorrectAnswers(correctAnswers + 1);
        else
            setIncorrectAnswers(incorrectAnswers + 1);
        setWaitingToAdvance(true);
    };
    var advance = function () {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };
    var reset = function () {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWaitingToAdvance(false);
    };
    if (currentQuestionIdx >= allQuestions.questions.length)
        return (<Rest_1.default totalQuestions={allQuestions.questions.length} correctQuestions={correctAnswers} onPress={reset}/>);
    return (<div>
            <div className={App_module_scss_1.default.app}>
                <StatBar_1.default currentQuestion={currentQuestionIdx + 1} totalQuestions={allQuestions.questions.length} correct={correctAnswers} incorrect={incorrectAnswers}/>
                <Questions_1.default question={allQuestions.questions[currentQuestionIdx]} onSubmit={onSubmit}/>
                {true && (<button onClick={advance} className={(0, classnames_1.default)(Answer_module_scss_1.default.answer, App_module_scss_1.default['next-button'])}>
                        Next Question...
                    </button>)}
            </div>
        </div>);
};
exports.default = App;
