var currentPosTopScreen2 = 0;
var newPosTopScreen2 = 0;
var currentPosBottomScreen2 = 0;
var newPosBottomScreen2 = 0;
var widthScreen2 = 0;
var maxScreenLegnthScreen2 = 0;
var startedScreen2 = true;

const ignoreDelayScreen2 = 200;
const actualScreenLengthScreen2 = 1592;
const tractWidthScreen2 = 176;
const searchSpeedScreen2 = 30;
const scrollSpeedTopScreen2 = .3;
const scrollSpeedBottomScreen2 = .1;
const textDisplaySpeedScreen2 = 100;

const boxShadowDepthScreen2 = 180;

var leftShadowPositionScreen2 = 0;
var rightShadowPositionScreen2 = 0;

var mainScrollerTopScreen2;
var mainScrollerBottomScreen2;
var waitTimerScreen2;
var textTimerScreen2;
var searchScrollerTopScreen2;
var searchScrollerBottomScreen2;

var backgroundTextScreen2 = "";

const christianPosTopScreen2 = 1497;
const atheistPosTopScreen2 = 1141;
const islamPosTopScreen2 = 1333;
const romanPosTopScreen2 = 966;
const mormonPosTopScreen2 = 615;
const witnessPosTopScreen2 = 790;
const disciplePosTopScreen2 = 82;
const adventPosTopScreen2 = 436;
const scientistPosTopScreen2 = 259;

const christianPosBottomScreen2 = 435;
const atheistPosBottomScreen2 = 80;
const islamPosBottomScreen2 = 979;
const romanPosBottomScreen2 = 1320;
const mormonPosBottomScreen2 = 1147;
const witnessPosBottomScreen2 = 613;
const disciplePosBottomScreen2 = 790;
const adventPosBottomScreen2 = 259;
const scientistPosBottomScreen2 = 1497;

const ChristianText = "Christian?";
const AthiestText = "Athiest?";
const IslamText = "Muslim?";
const RomanText = "Roman Catholic?";
const MormonText = "Latter day saint?";
const WitnessText = "Jehovah Witness?";
const DiscipleText = "Disciple?";
const AdventText = "7th Day Adventist?";
const ScientistText = "Christian Scientist?";

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {

        var Screen2 = $("#tv_screen_2");
        var topScreen2 = $('#tv_screen_2_top');
        var bottomScreen2 = $('#tv_screen_2_bottom');

        Screen2.click(function () {
            if ($(window).width() > 767) {
                var posxScreen2 = event.pageX - Screen2.offset().left;
                var offsetYScreen2 = event.pageY
                var bottomOffsetScreen2 = bottomScreen2.offset().top;
                if (offsetYScreen2 > bottomOffsetScreen2) {
                    offsetScreen2 = currentPosBottomScreen2 - (posxScreen2 * 1.2);
                    if (currentPosBottomScreen2 > actualScreenLengthScreen2) {
                        offsetScreen2 = offsetScreen2 - actualScreenLengthScreen2
                    }
                    if (offsetScreen2 < 0) {
                        offsetScreen2 = offsetScreen2 + actualScreenLengthScreen2;
                    }
                    selectTractBottomScreen2(offsetScreen2);
                } else {
                    offsetScreen2 = currentPosTopScreen2 - (posxScreen2 * 1.2);
                    if (currentPosTopScreen2 > actualScreenLengthScreen2) {
                        offsetScreen2 = offsetScreen2 - actualScreenLengthScreen2
                    }
                    if (offsetScreen2 < 0) {
                        offsetScreen2 = offsetScreen2 + actualScreenLengthScreen2;
                    }
                    selectTractTopScreen2(offsetScreen2);
                }
            }
        });

        function selectTractTopScreen2(pos) {
            pos = pos - (tractWidthScreen2 / 2);
            if (pos < disciplePosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/icc_d.html";
            } else if (pos < scientistPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/science_d.html";
            } else if (pos < adventPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/advent_d.html";
            } else if (pos < mormonPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/mormon_d.html";
            } else if (pos < witnessPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/jw_d.html";
            } else if (pos < romanPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/catholic_d.html";
            } else if (pos < atheistPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/athiesm_d.html";
            } else if (pos < islamPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/islam_d.html";
            } else if (pos < christianPosTopScreen2) {
                window.location.href = "Desktop%20Pages/Religion/christian_d.html";
            }
        }

        function selectTractBottomScreen2(pos) {
            pos = pos - (tractWidthScreen2 / 2);
            if (pos < atheistPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/athiesm_d.html";
            } else if (pos < adventPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/advent_d.html";
            } else if (pos < christianPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/christian_d.html";
            } else if (pos < witnessPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/jw_d.html";
            } else if (pos < disciplePosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/icc_d.html";
            } else if (pos < islamPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/islam_d.html";
            } else if (pos < mormonPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/mormon_d.html";
            } else if (pos < romanPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/catholic_d.html";
            } else if (pos < scientistPosBottomScreen2) {
                window.location.href = "Desktop%20Pages/Religion/science_d.html";
            }
        }

        widthScreen2 = $('#tv_screen_2_top').width();
        tv_screen_2_slider_top = $('#tv_screen_2_slider_top')
        tv_screen_2_slider_bottom = $('#tv_screen_2_slider_bottom')
        maxScreenLegnthScreen2 = widthScreen2 + actualScreenLengthScreen2;
        restart();
        removeShadow();

        $('#Scientist').click(function () {
            window.location.href = "Desktop%20Pages/Religion/science_d.html";
        });

        $('#Christian').click(function () {
            window.location.href = "Desktop%20Pages/Religion/christian_d.html";
        });

        $('#Atheist').click(function () {
            window.location.href = "Desktop%20Pages/Religion/athiesm_d.html";
        });

        $('#Islam').click(function () {
            window.location.href = "Desktop%20Pages/Religion/islam_d.html";
        });

        $('#Roman').click(function () {
            window.location.href = "Desktop%20Pages/Religion/catholic_d.html";
        });

        $('#Mormon').click(function () {
            window.location.href = "Desktop%20Pages/Religion/mormon_d.html";
        });

        $('#Witness').click(function () {
            window.location.href = "Desktop%20Pages/Religion/jw_d.html";
        });

        $('#Disciple').click(function () {
            window.location.href = "Desktop%20Pages/Religion/icc_d.html";
        });

        $('#Advent').click(function () {
            window.location.href = "Desktop%20Pages/Religion/advent_d.html";
        });

        $('#Scientist').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = scientistPosTopScreen2;
                newPosBottomScreen2 = scientistPosBottomScreen2;
                backgroundTextScreen2 = ScientistText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Christian').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = christianPosTopScreen2;
                newPosBottomScreen2 = christianPosBottomScreen2;
                backgroundTextScreen2 = ChristianText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Atheist').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = atheistPosTopScreen2;
                newPosBottomScreen2 = atheistPosBottomScreen2;
                backgroundTextScreen2 = AthiestText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Islam').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = islamPosTopScreen2;
                newPosBottomScreen2 = islamPosBottomScreen2;
                backgroundTextScreen2 = IslamText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Roman').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = romanPosTopScreen2;
                newPosBottomScreen2 = romanPosBottomScreen2;
                backgroundTextScreen2 = RomanText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Mormon').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = mormonPosTopScreen2;
                newPosBottomScreen2 = mormonPosBottomScreen2;
                backgroundTextScreen2 = MormonText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Witness').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = witnessPosTopScreen2;
                newPosBottomScreen2 = witnessPosBottomScreen2;
                backgroundTextScreen2 = WitnessText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Disciple').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = disciplePosTopScreen2;
                newPosBottomScreen2 = disciplePosBottomScreen2;
                backgroundTextScreen2 = DiscipleText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        $('#Advent').hover(function () {
            waitTimerScreen2 = setTimeout(function () {
                newPosTopScreen2 = adventPosTopScreen2;
                newPosBottomScreen2 = adventPosBottomScreen2;
                backgroundTextScreen2 = AdventText;
                startedScreen2 = true;
                stopScrollScreen2()
            }, ignoreDelayScreen2);
        }, function () {
            restart();
        });

        function restart() {
            if (startedScreen2) {
                currentPosTopScreen2 = newPosTopScreen2;
                currentPosBottomScreen2 = newPosBottomScreen2;
                startedScreen2 = false;
            }
            clearInterval(mainScrollerTopScreen2);
            clearInterval(mainScrollerBottomScreen2);
            clearTimeout(waitTimerScreen2);
            clearTimeout(textTimerScreen2);
            clearInterval(searchScrollerTopScreen2);
            clearInterval(searchScrollerBottomScreen2);
            removeShadow()
            startScrollScreen2();
        }

        function addText() {
            var textPadding = $('#tv_screen_2_top').width() / 7;
            $("#tv_screen_2_text").css('padding-left', textPadding);
            $("#tv_screen_2_text").css('padding-right', textPadding);
            tv_screen_2_slider_bottom.css('transition', 'opacity 1s ease');
            tv_screen_2_slider_bottom.css('opacity', '0');
            textTimerScreen2 = setTimeout(function () {
                $("#tv_screen_2_text").show();
                $("#tv_screen_2_text").html(backgroundTextScreen2);
            }, textDisplaySpeedScreen2);
        }

        function addShadow() {
            CalcShadowDim();
            tv_screen_2_slider_top.css('transition', 'box-shadow 1s ease');
            tv_screen_2_slider_top.css('box-shadow', 'inset ' + leftShadowPositionScreen2 + 'px 0px 100px rgba(0,0,0,1), inset ' + rightShadowPositionScreen2 + 'px 0px 100px rgba(0,0,0,1)')

        }

        function removeShadow() {
            -              CalcShadowDim();
            $("#tv_screen_2_text").hide();
            tv_screen_2_slider_top.css('transition', 'box-shadow 1s ease');
            tv_screen_2_slider_top.css('box-shadow', 'inset ' + leftShadowPositionScreen2 + 'px 0px 100px rgba(0,0,0,0), inset ' + rightShadowPositionScreen2 + 'px 0px 100px rgba(0,0,0,0)')

            tv_screen_2_slider_bottom.css('transition', 'opacity 1s ease');
            tv_screen_2_slider_bottom.css('opacity', '1');
        }

        function CalcShadowDim() {
            if ($('#tv_screen_2_top').width() < 450) {
                leftShadowPositionScreen2 = boxShadowDepthScreen2 - ((480 - $('#tv_screen_2_top').width()));
            } else {
                leftShadowPositionScreen2 = boxShadowDepthScreen2;
            }
            rightShadowPositionScreen2 = -12000 + $('#tv_screen_2_top').width() - leftShadowPositionScreen2;
        }

        function startScrollScreen2() {

            mainScrollerTopScreen2 = setInterval(function () {
                if (currentPosTopScreen2 > (maxScreenLegnthScreen2 - 1)) {
                    currentPosTopScreen2 = currentPosTopScreen2 - maxScreenLegnthScreen2;
                } else {
                    currentPosTopScreen2 += scrollSpeedTopScreen2;
                }
                tv_screen_2_slider_top.css('background-position', currentPosTopScreen2 + 'px 0');
            }, 10);

            mainScrollerBottomScreen2 = setInterval(function () {
                if (currentPosBottomScreen2 < 1) {
                    currentPosBottomScreen2 = currentPosBottomScreen2 + maxScreenLegnthScreen2;
                } else {
                    currentPosBottomScreen2 -= scrollSpeedBottomScreen2;
                }
                tv_screen_2_slider_bottom.css('background-position', currentPosBottomScreen2 + 'px 0');
            }, 10);

        }

        function stopScrollScreen2() {
            clearInterval(mainScrollerTopScreen2);
            clearInterval(mainScrollerBottomScreen2);
            widthScreen2 = $('#tv_screen_2_top').width();
            maxScreenLegnthScreen2 = actualScreenLengthScreen2 + widthScreen2;
            newPosTopScreen2 = newPosTopScreen2 + widthScreen2 / 2;
            newPosBottomScreen2 = newPosBottomScreen2 + widthScreen2 / 2;
            search();
        }

        function search() {

            if (currentPosTopScreen2 < newPosTopScreen2) {
                res = newPosTopScreen2 - currentPosTopScreen2;
                if (res > 833) {
                    currentPosTopScreen2 += maxScreenLegnthScreen2;
                    rwdScrollTopScreen2((currentPosTopScreen2 - newPosTopScreen2) / maxScreenLegnthScreen2);
                } else {
                    fwdScrollTopScreen2(res / maxScreenLegnthScreen2);
                }
            } else {
                res = currentPosTopScreen2 - newPosTopScreen2;
                if (res > 833) {
                    currentPosTopScreen2 -= maxScreenLegnthScreen2;
                    fwdScrollTopScreen2((newPosTopScreen2 - currentPosTopScreen2) / maxScreenLegnthScreen2);
                } else {
                    rwdScrollTopScreen2(res / maxScreenLegnthScreen2);
                }
            }

            if (currentPosBottomScreen2 < newPosBottomScreen2) {
                res = newPosBottomScreen2 - currentPosBottomScreen2;
                if (res > 833) {
                    currentPosBottomScreen2 += maxScreenLegnthScreen2;
                    rwdScrollScreen2((currentPosBottomScreen2 - newPosBottomScreen2) / maxScreenLegnthScreen2);
                } else {
                    fwdScrollScreen2(res / maxScreenLegnthScreen2);
                }
            } else {
                res = currentPosBottomScreen2 - newPosBottomScreen2;
                if (res > 833) {
                    currentPosBottomScreen2 -= maxScreenLegnthScreen2;
                    fwdScrollScreen2((newPosBottomScreen2 - currentPosBottomScreen2) / maxScreenLegnthScreen2);
                } else {
                    rwdScrollScreen2(res / maxScreenLegnthScreen2);
                }
            }

        }

        function fwdScrollTopScreen2(speed) {
            searchScrollerTopScreen2 = setInterval(function () {
                currentPosTopScreen2 += searchSpeedScreen2 * speed;
                if (currentPosTopScreen2 < newPosTopScreen2) {
                    tv_screen_2_slider_top.css('background-position', currentPosTopScreen2 + 'px 0');
                } else {
                    tv_screen_2_slider_top.css('background-position', newPosTopScreen2 + 'px 0');
                    clearInterval(searchScrollerTopScreen2)
                    addShadow();
                    addText();
                }
            }, 1);
        }

        function rwdScrollTopScreen2(speed) {
            searchScrollerTopScreen2 = setInterval(function () {
                currentPosTopScreen2 -= searchSpeedScreen2 * speed;;
                if (currentPosTopScreen2 > newPosTopScreen2) {
                    tv_screen_2_slider_top.css('background-position', currentPosTopScreen2 + 'px 0');
                } else {
                    tv_screen_2_slider_top.css('background-position', newPosTopScreen2 + 'px 0');
                    clearInterval(searchScrollerTopScreen2)
                    addShadow();
                    addText();
                }
            }, 1);
        }

        function fwdScrollScreen2(speed) {
            searchScrollerBottomScreen2 = setInterval(function () {
                currentPosBottomScreen2 += searchSpeedScreen2 * speed;;
                if (currentPosBottomScreen2 < newPosBottomScreen2) {
                    tv_screen_2_slider_bottom.css('background-position', currentPosBottomScreen2 + 'px 0');
                } else {
                    tv_screen_2_slider_bottom.css('background-position', newPosBottomScreen2 + 'px 0');
                    clearInterval(searchScrollerBottomScreen2);
                }
            }, 1);
        }

        function rwdScrollScreen2(speed) {
            searchScrollerBottomScreen2 = setInterval(function () {
                currentPosBottomScreen2 -= searchSpeedScreen2 * speed;;
                if (currentPosBottomScreen2 > newPosBottomScreen2) {
                    tv_screen_2_slider_bottom.css('background-position', currentPosBottomScreen2 + 'px 0');
                } else {
                    tv_screen_2_slider_bottom.css('background-position', newPosBottomScreen2 + 'px 0');
                    clearInterval(searchScrollerBottomScreen2);
                }
            }, 1);
        }

    });
});

