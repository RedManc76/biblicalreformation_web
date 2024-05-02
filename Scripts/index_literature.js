var currentPosTopScreen1 = 0;
var newPosTopScreen1 = 0;
var currentPosBottomScreen1 = 0;
var newPosBottomScreen1 = 0;
var widthScreen1 = 0;
var maxScreenLegnthScreen1 = 0;

var startedScreen1 = true;

const ignoreDelayScreen1 = 200;
const actualScreenLengthScreen1 = 1920;
const tractWidthScreen1 = 128;
const searchSpeedScreen1 = 30;
const scrollSpeedTopScreen1 = .3;
const scrollSpeedBottomScreen1 = .1;
const textDisplaySpeedScreen1 = 100;

const boxShadowDepthScreen1 = 180;

var leftShadowPositionScreen1 = 0;
var rightShadowPositionScreen1 = 0;

var mainScrollerTopScreen1;
var mainScrollerBottomScreen1;
var waitTimerScreen1;
var textTimerScreen1;
var searchScrollerTopScreen1;
var searchScrollerBottomScreen1;

var backgroundTextScreen1 = "";

const QuranTopPosScreen1 = 58;
const ConscienceTopPosScreen1 = 185;
const GraceTopPosScreen1 = 314;
const FearTopPosScreen1 = 442;
const ManhoodTopPosScreen1 = 568;
const ImmoralityTopPosScreen1 = 696;
const GodsNameTopPosScreen1 = 827;
const GoodTopPosScreen1 = 955;
const IdentityTopPosScreen1 = 1085;
const BornAgainTopPosScreen1 = 1215;
const LoveTopPosScreen1 = 1341;
const DeathTopPosScreen1 = 1470;
const AbortionTopPosScreen1 = 1598;
const BereavementTopPosScreen1 = 1726;
const MentalHealthTopPosScreen1 = 1854;

const BereavementBottomPosScreen1 = 57;
const ConscienceBottomPosScreen1 = 184;
const LoveBottomPosScreen1 = 316;
const GraceBottomPosScreen1 = 444;
const AbortionBottomPosScreen1 = 571;
const GoodBottomPosScreen1 = 698;
const FearBottomPosScreen1 = 828;
const QuranBottomPosScreen1 = 955;
const GodsNameBottomPosScreen1 = 1083;
const BornAgainBottomPosScreen1 = 1213;
const ManhoodBottomPosScreen1 = 1341;
const MentalHealthBottomPosScreen1 = 1466;
const DeathBottomPosScreen1 = 1599;
const IdentityBottomPosScreen1 = 1726;
const ImmoralityBottomPosScreen1 = 1854;

const MentalHealthText = "Struggling with your mental health, depression, anxiety, suicidal thoughts? There is help.";
const IdentityText = "Why is identity so important? and who am I?";
const AbortionText = "Abortion kills a baby and leaves devastation in it's wake, healing can be found but only from God.";
const PornographyText = "Pornography is deadly and will surely lead to Hell but you don't have the strength to give it up.";
const DeathText = "As certain as we are born, we will die. Are you ready?";
const GodsNameText = "Many different religions profess to know God's Name but what is it?";
const GraceText = "Amazing grace, how sweet the sound that saved a wretch like me.";
const FearText = "Fear is natural but who has the power to save you from what you fear?";
const MasculinityText = "Why are Jordan Peterson and Andrew Tate so popular? because men are desperately looking for role models.";
const LoveText = "What is real love? And where can I find it? Society doesn't have the answers. ";
const BornAgainText = "Religion and good works are incapable of producing the life that God requires";
const QuranText = "What is God's final revelation, The Bible or Quran";
const GoodText = "Are you good enough for heaven? You'll be shocked.";
const BereavementText = "Struggling with bereavement, There is one who can help.";
const ConscienceText = "There is only one solution for a troubled conscience, go to the one who can wash it clean";

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {

        var tv_screen_1 = $("#tv_screen_1");
        var topScreen1 = $('#tv_screen_1_top');
        var bottomScreen1 = $('#tv_screen_1_bottom');

        tv_screen_1.click(function () {
            if ($(window).width() > 767) {
                var posxScreen1 = event.pageX - tv_screen_1.offset().left;
                var offsetYScreen1 = event.pageY
                var bottomOffsetScreen1 = bottomScreen1.offset().top;
                if (offsetYScreen1 > bottomOffsetScreen1) {
                    offsetScreen1 = currentPosBottomScreen1 - (posxScreen1 * 1.2);
                    if (currentPosBottomScreen1 > actualScreenLengthScreen1) {
                        offsetScreen1 = offsetScreen1 - actualScreenLengthScreen1
                    }
                    if (offsetScreen1 < 0) {
                        offsetScreen1 = offsetScreen1 + actualScreenLengthScreen1;
                    }
                    selectTractBottomScreen1(offsetScreen1);
                } else {
                    offsetScreen1 = currentPosTopScreen1 - (posxScreen1 * 1.2);
                    if (currentPosTopScreen1 > actualScreenLengthScreen1) {
                        offsetScreen1 = offsetScreen1 - actualScreenLengthScreen1
                    }
                    if (offsetScreen1 < 0) {
                        offsetScreen1 = offsetScreen1 + actualScreenLengthScreen1;
                    }
                    selectTractTopScreen1(offsetScreen1);
                }
            }
        });

        function selectTractTopScreen1(pos) {
            pos = pos - (tractWidthScreen1 / 2);

            if (pos < QuranTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/quran_d.html";
            } else if (pos < ConscienceTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/conscience_d.html";
            } else if (pos < GraceTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/grace_d.html";
            } else if (pos < FearTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/fear_d.html";
            } else if (pos < ManhoodTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/masculinity_d.html";
            } else if (pos < ImmoralityTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/immorality_d.html";
            } else if (pos < GodsNameTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/gods name_d.html";
            } else if (pos < GoodTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/good_d.html";
            } else if (pos < IdentityTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/identity_d.html";
            } else if (pos < BornAgainTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/born again_d.html";
            } else if (pos < LoveTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/love_d.html";
            } else if (pos < DeathTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/death_d.html";
            } else if (pos < AbortionTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/abortion_d.html";
            } else if (pos < BereavementTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/bereavement_d.html";
            } else if (pos < MentalHealthTopPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/mental health_d.html";
            }
        }

        function selectTractBottomScreen1(pos) {
            pos = pos - (tractWidthScreen1 / 2);
            if (pos < BereavementBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/bereavement_d.html";
            } else if (pos < ConscienceBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/conscience_d.html";
            } else if (pos < LoveBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/love_d.html";
            } else if (pos < GraceBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/grace_d.html";
            } else if (pos < AbortionBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/abortion_d.html";
            } else if (pos < GoodBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/good_d.html";
            } else if (pos < FearBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/fear_d.html";
            } else if (pos < QuranBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/quran_d.html";
            } else if (pos < GodsNameBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/gods name_d.html";
            } else if (pos < BornAgainBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/born again_d.html";
            } else if (pos < ManhoodBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/masculinity_d.html";
            } else if (pos < MentalHealthBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/mental health_d.html";
            } else if (pos < DeathBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/death_d.html";
            } else if (pos < IdentityBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/identity_d.html";
            } else if (pos < ImmoralityBottomPosScreen1) {
                window.location.href = "Desktop%20Pages/Literature/immorality_d.html";
            }
        }

        widthScreen1 = $('#tv_screen_1_top').width();
        tv_screen_1_slider_bottom = $('#tv_screen_1_slider_bottom')
        tv_screen_1_slider_top = $('#tv_screen_1_slider_top')
        maxScreenLegnthScreen1 = widthScreen1 + actualScreenLengthScreen1;
        restart();
        removeShadow();

        $('#Bereavement').click(function () {
            window.location.href = "Desktop%20Pages/Literature/bereavement_d.html";
        });

        $('#Conscience').click(function () {
            window.location.href = "Desktop%20Pages/Literature/bereavement_d.html";
        });

        $('#MentalHealth').click(function () {
            window.location.href = "Desktop%20Pages/Literature/mental health_d.html";
        });

        $('#Identity').click(function () {
            window.location.href = "Desktop%20Pages/Literature/identity_d.html";
        });

        $('#Abortion').click(function () {
            window.location.href = "Desktop%20Pages/Literature/abortion_d.html";
        });

        $('#Pornography').click(function () {
            window.location.href = "Desktop%20Pages/Literature/immorality_d.html";
        });

        $('#Death').click(function () {
            window.location.href = "Desktop%20Pages/Literature/death_d.html";
        });

        $('#GodsName').click(function () {
            window.location.href = "Desktop%20Pages/Literature/gods name_d.html";
        });

        $('#Grace').click(function () {
            window.location.href = "Desktop%20Pages/Literature/grace_d.html";
        });

        $('#Fear').click(function () {
            window.location.href = "Desktop%20Pages/Literature/fear_d.html";
        });

        $('#Masculinity').click(function () {
            window.location.href = "Desktop%20Pages/Literature/masculinity_d.html";
        });

        $('#Love').click(function () {
            window.location.href = "Desktop%20Pages/Literature/love_d.html";
        });

        $('#BornAgain').click(function () {
            window.location.href = "Desktop%20Pages/Literature/born again_d.html";
        });

        $('#Quran').click(function () {
            window.location.href = "Desktop%20Pages/Literature/quran_d.html";
        });

        $('#Good').click(function () {
            window.location.href = "Desktop%20Pages/Literature/good_d.html";
        });

        $('#Bereavement').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = BereavementTopPosScreen1;
                newPosBottomScreen1 = BereavementBottomPosScreen1;
                backgroundTextScreen1 = BereavementText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Conscience').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = ConscienceTopPosScreen1;
                newPosBottomScreen1 = ConscienceBottomPosScreen1;
                backgroundTextScreen1 = ConscienceText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#MentalHealth').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = MentalHealthTopPosScreen1;
                newPosBottomScreen1 = MentalHealthBottomPosScreen1;
                backgroundTextScreen1 = MentalHealthText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Identity').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = IdentityTopPosScreen1;
                newPosBottomScreen1 = IdentityBottomPosScreen1;
                backgroundTextScreen1 = IdentityText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Abortion').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = AbortionTopPosScreen1;
                newPosBottomScreen1 = AbortionBottomPosScreen1;
                backgroundTextScreen1 = AbortionText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Pornography').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = ImmoralityTopPosScreen1;
                newPosBottomScreen1 = ImmoralityBottomPosScreen1;
                backgroundTextScreen1 = PornographyText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Death').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = DeathTopPosScreen1;
                newPosBottomScreen1 = DeathBottomPosScreen1;
                backgroundTextScreen1 = DeathText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#GodsName').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = GodsNameTopPosScreen1;
                newPosBottomScreen1 = GodsNameBottomPosScreen1;
                backgroundTextScreen1 = GodsNameText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Grace').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = GraceTopPosScreen1;
                newPosBottomScreen1 = GraceBottomPosScreen1;
                backgroundTextScreen1 = GraceText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Fear').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = FearTopPosScreen1;
                newPosBottomScreen1 = FearBottomPosScreen1;
                backgroundTextScreen1 = FearText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Masculinity').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = ManhoodTopPosScreen1;
                newPosBottomScreen1 = ManhoodBottomPosScreen1;
                backgroundTextScreen1 = MasculinityText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Love').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = LoveTopPosScreen1;
                newPosBottomScreen1 = LoveBottomPosScreen1;
                backgroundTextScreen1 = LoveText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#BornAgain').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = BornAgainTopPosScreen1;
                newPosBottomScreen1 = BornAgainBottomPosScreen1;
                backgroundTextScreen1 = BornAgainText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Quran').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = QuranTopPosScreen1;
                newPosBottomScreen1 = QuranBottomPosScreen1;
                backgroundTextScreen1 = QuranText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        $('#Good').hover(function () {
            waitTimerScreen1 = setTimeout(function () {
                newPosTopScreen1 = GoodTopPosScreen1;
                newPosBottomScreen1 = GoodBottomPosScreen1;
                backgroundTextScreen1 = GoodText;
                startedScreen1 = true;
                stopScrollScreen1()
            }, ignoreDelayScreen1);
        }, function () {
            restart();
        });

        function restart() {
            if (startedScreen1) {
                currentPosTopScreen1 = newPosTopScreen1;
                currentPosBottomScreen1 = newPosBottomScreen1;
                startedScreen1 = false;
            }
            clearInterval(mainScrollerTopScreen1);
            clearInterval(mainScrollerBottomScreen1);
            clearTimeout(waitTimerScreen1);
            clearTimeout(textTimerScreen1);
            clearInterval(searchScrollerTopScreen1);
            clearInterval(searchScrollerBottomScreen1);
            removeShadow()
            startScrollScreen1();
        }

        function addText() {
            var textPadding = $('#tv_screen_1_top').width() / 7;
            $("#tv_screen_1_text").css('padding-left', textPadding);
            $("#tv_screen_1_text").css('padding-right', textPadding);
            tv_screen_1_slider_bottom.css('transition', 'opacity 1s ease');
            tv_screen_1_slider_bottom.css('opacity', '0');
            textTimerScreen1 = setTimeout(function () {
                $("#tv_screen_1_text").show();
                $("#tv_screen_1_text").html(backgroundTextScreen1);
            }, textDisplaySpeedScreen1);
        }

        function addShadow() {
            CalcShadowDim();
            tv_screen_1_slider_top.css('transition', 'box-shadow 1s ease');
            tv_screen_1_slider_top.css('box-shadow', 'inset ' + leftShadowPositionScreen1 + 'px 0px 100px rgba(0,0,0,1), inset ' + rightShadowPositionScreen1 + 'px 0px 100px rgba(0,0,0,1)')

        }

        function removeShadow() {
            -              CalcShadowDim();
            $("#tv_screen_1_text").hide();
            tv_screen_1_slider_top.css('transition', 'box-shadow 1s ease');
            tv_screen_1_slider_top.css('box-shadow', 'inset ' + leftShadowPositionScreen1 + 'px 0px 100px rgba(0,0,0,0), inset ' + rightShadowPositionScreen1 + 'px 0px 100px rgba(0,0,0,0)')

            tv_screen_1_slider_bottom.css('transition', 'opacity 1s ease');
            tv_screen_1_slider_bottom.css('opacity', '1');
        }

        function CalcShadowDim() {
            if ($('#tv_screen_1_top').width() < 450) {
                leftShadowPositionScreen1 = boxShadowDepthScreen1 - ((480 - $('#tv_screen_1_top').width()));
            } else {
                leftShadowPositionScreen1 = boxShadowDepthScreen1;
            }
            rightShadowPositionScreen1 = -12000 + $('#tv_screen_1_top').width() - leftShadowPositionScreen1;
        }

        function startScrollScreen1() {

            mainScrollerTopScreen1 = setInterval(function () {
                if (currentPosTopScreen1 > (maxScreenLegnthScreen1 - 1)) {
                    currentPosTopScreen1 = currentPosTopScreen1 - maxScreenLegnthScreen1;
                } else {
                    currentPosTopScreen1 += scrollSpeedTopScreen1;
                }
                tv_screen_1_slider_top.css('background-position', currentPosTopScreen1 + 'px 0');
            }, 10);

            mainScrollerBottomScreen1 = setInterval(function () {
                if (currentPosBottomScreen1 < 1) {
                    currentPosBottomScreen1 = currentPosBottomScreen1 + maxScreenLegnthScreen1;
                } else {
                    currentPosBottomScreen1 -= scrollSpeedBottomScreen1;
                }
                tv_screen_1_slider_bottom.css('background-position', currentPosBottomScreen1 + 'px 0');
            }, 10);

        }

        function stopScrollScreen1() {
            clearInterval(mainScrollerTopScreen1);
            clearInterval(mainScrollerBottomScreen1);
            widthScreen1 = $('#tv_screen_1_top').width();
            maxScreenLegnthScreen1 = actualScreenLengthScreen1 + widthScreen1;
            newPosTopScreen1 = newPosTopScreen1 + widthScreen1 / 2;
            newPosBottomScreen1 = newPosBottomScreen1 + widthScreen1 / 2;
            search();
        }

        function search() {

            if (currentPosTopScreen1 < newPosTopScreen1) {
                res = newPosTopScreen1 - currentPosTopScreen1;
                if (res > 833) {
                    currentPosTopScreen1 += maxScreenLegnthScreen1;
                    rwdScrollTopScreen1((currentPosTopScreen1 - newPosTopScreen1) / maxScreenLegnthScreen1);
                } else {
                    fwdScrollTopScreen1(res / maxScreenLegnthScreen1);
                }
            } else {
                res = currentPosTopScreen1 - newPosTopScreen1;
                if (res > 833) {
                    currentPosTopScreen1 -= maxScreenLegnthScreen1;
                    fwdScrollTopScreen1((newPosTopScreen1 - currentPosTopScreen1) / maxScreenLegnthScreen1);
                } else {
                    rwdScrollTopScreen1(res / maxScreenLegnthScreen1);
                }
            }

            if (currentPosBottomScreen1 < newPosBottomScreen1) {
                res = newPosBottomScreen1 - currentPosBottomScreen1;
                if (res > 833) {
                    currentPosBottomScreen1 += maxScreenLegnthScreen1;
                    rwdScrollScreen1((currentPosBottomScreen1 - newPosBottomScreen1) / maxScreenLegnthScreen1);
                } else {
                    fwdScrollScreen1(res / maxScreenLegnthScreen1);
                }
            } else {
                res = currentPosBottomScreen1 - newPosBottomScreen1;
                if (res > 833) {
                    currentPosBottomScreen1 -= maxScreenLegnthScreen1;
                    fwdScrollScreen1((newPosBottomScreen1 - currentPosBottomScreen1) / maxScreenLegnthScreen1);
                } else {
                    rwdScrollScreen1(res / maxScreenLegnthScreen1);
                }
            }

        }

        function fwdScrollTopScreen1(speed) {
            searchScrollerTopScreen1 = setInterval(function () {
                currentPosTopScreen1 += searchSpeedScreen1 * speed;
                if (currentPosTopScreen1 < newPosTopScreen1) {
                    tv_screen_1_slider_top.css('background-position', currentPosTopScreen1 + 'px 0');
                } else {
                    tv_screen_1_slider_top.css('background-position', newPosTopScreen1 + 'px 0');
                    clearInterval(searchScrollerTopScreen1)
                    addShadow();
                    addText();
                }
            }, 1);
        }

        function rwdScrollTopScreen1(speed) {
            searchScrollerTopScreen1 = setInterval(function () {
                currentPosTopScreen1 -= searchSpeedScreen1 * speed;;
                if (currentPosTopScreen1 > newPosTopScreen1) {
                    tv_screen_1_slider_top.css('background-position', currentPosTopScreen1 + 'px 0');
                } else {
                    tv_screen_1_slider_top.css('background-position', newPosTopScreen1 + 'px 0');
                    clearInterval(searchScrollerTopScreen1)
                    addShadow();
                    addText();
                }
            }, 1);
        }

        function fwdScrollScreen1(speed) {
            searchScrollerBottomScreen1 = setInterval(function () {
                currentPosBottomScreen1 += searchSpeedScreen1 * speed;;
                if (currentPosBottomScreen1 < newPosBottomScreen1) {
                    tv_screen_1_slider_bottom.css('background-position', currentPosBottomScreen1 + 'px 0');
                } else {
                    tv_screen_1_slider_bottom.css('background-position', newPosBottomScreen1 + 'px 0');
                    clearInterval(searchScrollerBottomScreen1);
                }
            }, 1);
        }

        function rwdScrollScreen1(speed) {
            searchScrollerBottomScreen1 = setInterval(function () {
                currentPosBottomScreen1 -= searchSpeedScreen1 * speed;;
                if (currentPosBottomScreen1 > newPosBottomScreen1) {
                    tv_screen_1_slider_bottom.css('background-position', currentPosBottomScreen1 + 'px 0');
                } else {
                    tv_screen_1_slider_bottom.css('background-position', newPosBottomScreen1 + 'px 0');
                    clearInterval(searchScrollerBottomScreen1);
                }
            }, 1);
        }

    });

});