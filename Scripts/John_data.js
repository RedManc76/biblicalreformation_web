
document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){
        
        var quote_open_prayer = $('#quote_open_prayer');
        var quote_watch = $('#quote_watch');
        var quote_read = $('#quote_read');
        var quote_meditate = $('#quote_meditate');
        var quote_further = $('#quote_further');
        var quote_close_prayer = $('#quote_close_prayer');
        var session_button = $('.sessionButton')
        var drawer_button = $('.drawer-button')
        var intro_video = $('#intro_video')
        var intro = $('.intro')
        var sessions = $('.accordian_container')
        var session_title = $('#session_title')
        var session_video_title = $('.session_video_title')

        var session_mode = 0

        // Add text to the selected element
        
        function change_session(session){
            intro.hide();
            if (window.screen.width >= 768) {
                sessions.css('display', 'flex');
            } else {
                sessions.css('display', 'block');
            }
            intro_video.attr('src', '');
            unfocus_button(session_mode);
            session_mode = session;
            session_title.text("Session " + session + " Workflow");
            change_session_video(video_src_array[session])
            session_video_title.text(video_title_array[session]);
            quote_open_prayer.html(open_prayer_array[session]);
            getEsvText(read_array[session]).then(result => quote_read.text(result));
            quote_watch.html(watch_array[session]);
            quote_meditate.html(meditate_array[session]);
            quote_further.html(further_array[session]);
            quote_close_prayer.html(close_prayer_array[session]);

            
            $('.video_chapter').on('click', async function() {
                var buttonText = $(this).text().trim();
                console.log(buttonText);
        
                setTimeout(async function() {
                    try {
                        const lite_youtube = document.querySelectorAll('lite-youtube');
                        const lite_youtube_player = lite_youtube[1];         
                        if (lite_youtube_player) {
                            const player = await lite_youtube_player.getYTPlayer();
                            player.seekTo(getTimeInSeconds(buttonText)); // Jump to 60 seconds
                        } else {
                            console.error('Lite YouTube players not found.');
                        }
                    } catch (error) {
                        console.error('Error accessing Lite YouTube player:', error);
                    }
                }, 100);

            });
            
        }

        session_button.click(function() {
            change_session($(this).data('session'));
        });
        
        drawer_button.on('click', function() {
            focus_button(session_mode)
        });

        function focus_button(session){
            $('.sessionButton[data-session="' + session + '"]').css({
                'box-shadow': '0 0.5em 0.5em -0.4em var(--hover)',
                'transform': 'translateY(-0.25em)',
                'opacity': '0.8',
                'color': '#e5ff60'
            });
        }

        function unfocus_button(session){
            $('.sessionButton[data-session="' + session + '"]').css({
                'box-shadow': 'none',
                'transform': 'translateY(0em)',
                'opacity': '1',
                'color': '#ffa260'
            });                
        }

        function getEsvText(passage) {
            const params = new URLSearchParams({
                q: passage,
                'include-headings': false,
                'include-footnotes': false,
                'include-verse-numbers': true,
                'include-short-copyright': true,
                'include-passage-references': true
            });
        
            const headers = new Headers({
                'Authorization': `Token ${'ee78fa7f093ae48f039244b30c9100a02e73f142'}`
            });
        
            const url = new URL('https://api.esv.org/v3/passage/text/');
            url.search = params;
        
            return fetch(url, { headers })
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const passages = data.passages;
                return passages[0] ? passages[0].trim() : 'Error: Passage not found';
            })
            .catch(error => {
                console.error('Error:', error);
                return 'Error: An error occurred while fetching data.';
            });
        }

        function change_session_video(video){
            // Find the existing lite-youtube element within the center_video_container div
            var existingLiteYouTube = $('.right_video_container lite-youtube');

            var mainVieo = $('.center_video_container lite-youtube');
            mainVieo[0].pauseVideo()

            // Check if the existing element is found
            if (existingLiteYouTube.length > 0) {
                // Remove the existing lite-youtube element
                existingLiteYouTube.remove();
        
                // Create a new lite-youtube element with the new videoid
                var newLiteYouTube = $('<lite-youtube videoid="'+ video + '" playlabel="Introduction to John Commentary" js-api></lite-youtube>');
        
                // Append the new lite-youtube element to the center_video_container div
                $('.right_video_container').append(newLiteYouTube);
            }
        }

        function getTimeInSeconds(full_string) {
            // Split the time string into minutes and seconds
            var indexOfTime = full_string.lastIndexOf('-');
            var time_string = full_string.substr(indexOfTime + 1).trim();
            var timeParts = time_string.split(':');
    
            if (timeParts.length !== 2) {
                // Invalid time format
                console.error('Invalid time format. Expected "m:ss".');
                return 0;
            }
    
            // Extract minutes and seconds
            var minutes = parseInt(timeParts[0], 10);
            var seconds = parseInt(timeParts[1], 10);
    
            if (isNaN(minutes) || isNaN(seconds)) {
                // Invalid numeric values
                console.error('Invalid numeric values for minutes or seconds.');
                return 0;
            }
    
            // Calculate total seconds
            var totalSeconds = minutes * 60 + seconds;
            return totalSeconds;
        }

    });
    
});    

document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){
        
        create_session_1(1);
        create_session_2(2);
        create_session_3(3);
        create_session_4(4);
        create_session_5(5);
        create_session_6(6);
        create_session_7(7);
        create_session_8(8);
        create_session_9(9);
        create_session_10(10);
        create_session_11(11);
        create_session_12(12);
        create_session_13(13);
        create_session_14(14);
        create_session_15(15);
        create_session_16(16);
        create_session_17(17);
        create_session_18(18);
        create_session_19(19);

        function add_main_video(index, text){video_src_array[index] = text;}
        function add_video_title(index, text){video_title_array[index] = text;}
        function add_reading(index, text){read_array[index] = text;}
        function add_open_prayer(index, text){open_prayer_array[index] = open_prayer_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_watch_title(index, text){watch_array[index] = watch_array[index] + "<h2 class='title'>" + text + "</h2>";}
        function add_watch_topic(index, text){watch_array[index] = watch_array[index] + "<div><button class='video_chapter'>" + text + "</button></div>";}
        function add_watch_term(index, text){watch_array[index] = watch_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_meditate_question(index, text){meditate_array[index] = meditate_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_close_prayer(index, text){close_prayer_array[index] = close_prayer_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_further_title(index, text){further_array[index] = further_array[index] + "<h2 class='title'>" + text + "</h2>";}
        function add_further_link(index, link, text){further_array[index] = further_array[index] + "<a href='" + link + "' target='_blank'><h2 class='link'>" + text + "</h2></a>";}
        function add_close_prayer_link(index, link_desktop, link_mobile, text){
            if (window.screen.width >= 768) {
                close_prayer_array[index] = close_prayer_array[index] + "<a href='" + link_desktop + "'><h2 class='link'>" + text + "</h2></a>";
            } else {
                close_prayer_array[index] = close_prayer_array[index] + "<a href='" + link_mobile + "'><h2 class='link'>" + text + "</h2></a>";
            }
        }

        // video edited, data complete, grammar checked
        function create_session_1(index){

            add_main_video(index, "_BkuzPZlnrk");
            add_video_title(index, "The Word");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, as I begin this study to learn who you are and what you have done, please assist me in comprehending everything I read and hear. Please show yourself to me and make your love for me evident. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Introducing the Word - 0:25");
            add_watch_topic(index, "Beyond Expectations - 2:23");
            add_watch_topic(index, "The Unique God - 4:48");
            add_watch_topic(index, "The knowable God - 7:00");
            add_watch_topic(index, "Biblical Authenticity - 9:45");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Monotheism: a religion or belief that claims that God is one being; simply put, there is only one God.");
            add_watch_term(index, "Godhead: a term used to describe God in his essential being, one nature but in three persons.");

            add_meditate_question(index, "1. Think about how intricate, complex, and truly massive this universe that we live in is.");
            add_meditate_question(index, "2. Spend a few moments imagining what sort of being would have the power and skill to design and create it.");
            add_meditate_question(index, "3. Now spend a few moments to consider that this awesome being has a desire to know you and to reveal himself to you.");

            add_close_prayer(index, "Thank you, God, for creating me and for wanting to know me. Im not even sure if this is all real, but if it is and you want to know me, please make yourself known to me. Help me understand all I've heard and keep me safe until next time. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=0G2S5ziDcO0','Trinity Explained');
            add_further_link(index, 'https://www.youtube.com/watch?v=XRwupHsCUBg','Sermon - In the beginning was the Word');
            add_further_link(index, 'https://www.youtube.com/watch?v=Doi8JxJOtgE&t=683s','Biblical Authenticity')

        }
        // video edited, data complete, grammar checked
        function create_session_2(index){

            add_main_video(index, "U-2QceNd1xo");
            add_video_title(index, "Light of the world");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, thank you for all you taught me about the Word in our last session. Please help me to see and understand more about the Word and what it all means for me. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The creator - 0:25");
            add_watch_topic(index, "The creation - 2:43");
            add_watch_topic(index, "The Life - 4:25");
            add_watch_topic(index, "The Light - 5:46");
            add_watch_topic(index, "The menssenger - 8:09");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Prophecy: the foretelling of a future event before it has happened.");
            add_watch_term(index, "The Word: The Word is God, one of the three divine persons of the Trinity who would take on human nature as Jesus Christ.");

            add_meditate_question(index, "1. Has it occurred to you that, as God has created you, he owns you and therefore has a right to know what you have done with the life he granted you? Is this a cause for concern?");
            add_meditate_question(index, "2. Every human being worships something. It's the one thing you love first and foremost, the primary motivation for your life. Do you worship God or something else?");
            add_meditate_question(index, "3. Why is it that people who have everything this world can offer are the most dissatisfied and empty?");
            add_meditate_question(index, "4. Have you considered the fact that your life is borrowed and that only God has life in himself? What are the implications of this for you?");
            add_meditate_question(index, "5. Watch some of the videos in the further study section about the immense odds that the prophecies of the coming Word would be filfilled. Whats if anything is keeping you believing the evidence?");
            add_meditate_question(index, "6. Why is it that God gave over 300 recorded prophecies of the Word's coming and Mohammed, Buddha, Confucius, etc. received none?");

            add_close_prayer(index, "Thank you, God, for making a way for the darkness that has infected humanity through our sin to be erradicated. Help me to understand what I have read today, and I ask that you come and eliminate the darkness that has control of my life. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=x3V42MW3EjE','Worship creation not the creator');
            add_further_link(index, 'https://www.youtube.com/watch?v=pn69quaqWO8','Worship of God');
            add_further_link(index, 'https://www.youtube.com/watch?v=x1GgGyV8ZQc&t=188s','Hopeless Without Christ');
            add_further_link(index, 'https://www.youtube.com/watch?v=NWaLb_-MOxI','The light of the world');
            add_further_link(index, 'https://www.youtube.com/watch?v=2WDOOt4qZL0','Impossible odds');
            add_further_link(index, 'https://www.youtube.com/watch?v=3gr4kn2tf_k','Odds of 48 prophecies being fulfilled');

        }
        // video edited, data complete, grammar checked
        function create_session_3(index){

            add_main_video(index, "Ob4VtG43m5k");
            add_video_title(index, "The plan of salvation");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, thank you for inspiring me to continue my studies. Please let me learn more about you and myself today. Help me believe what your word says and assess my own life in light of it.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The 'True' Light - 0:25");
            add_watch_topic(index, "The bad news - 4:35");
            add_watch_topic(index, "Rejected - 7:30");
            add_watch_topic(index, "The new birth - 10:35");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Sin: lawlessness, i.e., the violation of God's moral law.");

            add_meditate_question(index, "1. Have you asked yourself, Who am I? And why am I here? If someone had the answer, would you want to know?");
            add_meditate_question(index, "2. Have you considered that there is a darkness inside of you that drives you to do what you know to be wrong? If there was a light that could overcome this darkness, would you seek it?");
            add_meditate_question(index, "3. What would compel God to come into his own creation to rescue you?");
            add_meditate_question(index, "4. Is it possible you have been suppressing the knowledge you have of God without knowing it?");
            add_meditate_question(index, "5. Consider how ungrateful it was for God's people to reject him, though he came to save them.");
            add_meditate_question(index, "6. If God is the only one who can transform your heart, would you ask him to do this for you? Why?");

            add_close_prayer(index, "Thank you, God, for your kindness in sending your Son into this world to seek and save the lost. Sorry that I have rejected you like many people have before. Help me to understand the love and kindness you have shown me, and may your light overcome the darkness in my life. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=YECNi781OIA','Supression of truth');
            add_further_link(index, 'https://www.youtube.com/watch?v=QNDQMUjk-8A','We all sin');
            add_further_link(index, 'https://www.youtube.com/watch?v=cufnp5qn_Vs','Sermon - Fall of Man');
            add_further_link(index, 'https://www.youtube.com/watch?v=3sNzzd1_77A','Born Again');

        }
        // video edited, data complete, grammar checked
        function create_session_4(index){

            add_main_video(index, "x8H9gIEq3f8");
            add_video_title(index, "The Word became flesh");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, Thank you for the desire you have given me to continue to seek you out. There have been some hard things to understand, so I ask for your help today as I read, watch, and meditate on your word. Help me to look beyond the intellectual questions and see the heart of love you have for me and your creation. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Word became flesh - 0:25");
            add_watch_topic(index, "Person of Jesus Christ - 4:05");
            add_watch_topic(index, "The Son - 6:27");
            add_watch_topic(index, "Law and Grace - 10:35");
            add_watch_topic(index, "God with us - 15:30");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Godhead: a term used to describe God in his essential being, one nature but in three persons.");
            add_watch_term(index, "Hell: the eternal destiny of those who continue in their rebellion against God.");
            add_watch_term(index, "Law: God's moral code by which he expects us to order our lives.");
            add_watch_term(index, "Grace: to be granted forgiveness and reconciliation that we do not deserve and to escape the punishment we do.");
            add_watch_term(index, "Gospel: the good news. The proclaimation of what God has done to rescue guilty sinners from judgement and redeem them for himself.");

            add_meditate_question(index, "1. Does the seemingly impossible nature of what God has done drive you away from God, or does it draw you to him? Is your response correct?");
            add_meditate_question(index, "2. If someone goes to extreme lengths to help us, what does it say about how much they love us?");
            add_meditate_question(index, "3. How important do you think it is that the life of Jesus is not recorded centuries after the event but by eyewitnesses of his life? Why do you think God did it this way?");
            add_meditate_question(index, "4. The Bible tells us that God redeemed us not with silver and gold but by giving his most treasured possession, his Son. Would we do that for a friend, nevermind someone who rejects you?");
            add_meditate_question(index, "5. A cancer cure is meaningless to you if you do not have the disease. Likewise, the salvation offered through the death of God's son is irrelevant to you if you do not recognise you need it. Do you recognise your need?");
            add_meditate_question(index, "6. Human beings are made to treasure relationships above all other things. If God desires a relationship with us, is this not what we would expect?");
            add_meditate_question(index, "7. Think of some celebrated person who you consider highly. Imagine if they went to great lengths to be your friend. How much more special do we consider it to be that the eternal God, from his exalted position, seeks friendship with us at a great cost?");

            add_close_prayer(index, "Thank you, God, that you would send your only Son so that I might escape the punishment that I deserve. I can't imagine what love you must have for me to do that, but I want to know more about it. Please help me to understand what I have learned today, not just interlectually, but to know in my heart that I am a sinner and that you have made a way in which I can be received back by you. Keep these things in my mind until I believe them, and keep me safe until next time. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=zET15MB2VuI','Sermon - Why the God man');
            add_further_link(index, 'https://www.youtube.com/watch?v=S8q61DP_XQ4','Who is Jesus?');
            add_further_link(index, 'https://www.youtube.com/watch?v=EB-t4FsxS8s','Eye Witness');
            add_further_link(index, 'https://www.youtube.com/watch?v=cWVyCfha4LU','Son of God, Son of Man');
            add_further_link(index, 'https://www.youtube.com/watch?v=gXBvfY2-C2U','Only Begotten Son');
        }
        // video edited, data complete, grammar checked *** link to first steps needs adding
        function create_session_5(index){

            add_main_video(index, "BStOz0ccZ3Y");
            add_video_title(index, "The Lamb of God");
            add_reading(index, "John 1:19-34");

            add_open_prayer(index, "Almighty God. I am here with you again, as I want to know more about who you are. Please help me to concentrate, understand the video, and participate seriously with the meditation questions today. Give me a desire to continue my studies in John's Gospel. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Enemy - 0:25");
            add_watch_topic(index, "Behold the lamb - 2:23");
            add_watch_topic(index, "Types and Shadows - 5:24");
            add_watch_topic(index, "Abraham and Isaac - 6:35");
            add_watch_topic(index, "Passover - 11:15");
            add_watch_topic(index, "The Holy Spirit - 14:36");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Pharisee: religious and political elite around the time of Jesus.");
            add_watch_term(index, "Types and Shadows: an Old Testament picture that points to Jesus Christ.");
            add_watch_term(index, "Passover: a feast to celebrate God's deliverance of his people from Egypt, foreshadowing the blood of Jesus Christ that was shed on the cross to cover the sins of his people.");
            add_watch_term(index, "Holy Spirit: the third person of God. The Father, the Son, and the Holy Spirit.");

            add_meditate_question(index, "1. Do you think you're a good person? What did Jesus have to say about those who believed that they were good?");
            add_meditate_question(index, "2. Why is it that the people who hated Jesus were religious and self-righteous instead of prostitutes and criminals?");
            add_meditate_question(index, "3. God uses types and shadows to help us enter into a greater appreciation of what he did for us. Imagine being Abraham, walking up that mountain, thinking you would have to sacrifice your only child. Unimaginable? But God knew one day he would have to sacrifice his own Son so that you could be rescued from your sin. Think about that, love.");
            add_meditate_question(index, "4. We've just shared two pictures from the Old Testament that point towards Jesus Christ. If God has gone through great pains to do this time and time again over 1,500 years, how important do you think Jesus Christ must be?");
            add_meditate_question(index, "5. Consider what other religions offer in terms of changes to outward behaviour. Now consider what Christianity offers: transformation from inside out, freedom from the power of sin, and being set free to love God from a changed heart with new desires. Is this something you desire?");

            add_close_prayer(index, "Almighty God, thank you for sending your Son as a sacrifice for sin, so that anyone who trusts in you may recieve forgiveness of sin. Thank you that this was done for us at a great cost to yoursef. I can not even image what it would be like to give my Son up to save another person, especially those that rejected you. I want to know more of this love, help me to see it.");
            add_close_prayer(index, "There is a genuine promise from God that anone who trusts in Jesus Christ receives forgiveness for sin and the transforming power of his Holy Spirit to dwell in them. If this is something you would like from God ask him to help you to make the first steps and keep studying John");
            add_close_prayer_link(index, '../../Desktop Pages/Seek/seeking_d.html', '../../Mobile Pages/Seek/seeking.html', "click here more");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/playlist?list=PLZ3iRMLYFlHsHyvMtfgOgSPU6zEnCvxUO','Playlist - Types and Shadows');
            add_further_link(index, 'https://www.youtube.com/watch?v=QhqBVIDmbPg','Abraham and Isaac');
            add_further_link(index, 'https://www.youtube.com/watch?v=tbwylmj26SU','Passover');
            add_further_link(index, 'https://www.youtube.com/watch?v=28HVFJttJiQ','The Holy Spirit');

        }
        // video edited, data complete, grammar checked
        function create_session_6(index){

            add_main_video(index, "TxHl278YFXg");
            add_video_title(index, "The Disciples");
            add_reading(index, "John 1:35-51");

            add_open_prayer(index, "Almighty God. As I watch this next video, I ask for your help to learn more about Jesus. Help me to believe what I learn, and help me to trust you. Amen.");
            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Twelve - 0:25");
            add_watch_topic(index, "The Scriptures - 1:52");
            add_watch_topic(index, "Qualifications - 5:00");
            add_watch_topic(index, "Invitation - 8:09");
            add_watch_topic(index, "Son of Man - 10:53");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Martyr: someone who is killed because of what they believe, not someone who kills themselves and others because of what they believe.");
            add_watch_term(index, "Pride: to think yourself worthy of God.");
            add_watch_term(index, "Humility: to recognise we are not worthy of God's kindness but of his judgement, and to lay our lives down at his feet.");
            add_watch_term(index, "Mediator: someone who stands between a holy God and sinful men and brings reconciliation.");

            add_meditate_question(index, "1. Why would the eyewitnesses of Jesus death and resurrection, who before Jesus resurrection ran away as Jesus was being arrested, suddenly claim to have seen Jesus resurrected when they gained nothing from it other than imprisonment, beatings, and horrible deaths, unless they had personally seen Jesus raised?");
            add_meditate_question(index, "2. If the Bible were historically inaccurate or logically inconsistent, it would not have stood unscathed by interlectual scrutiny for the last two millenia. They may not believe it or like what it says, but there is no evidence that the Bible is untrue. Does this encourage you to believe the Bible?");
            add_meditate_question(index, "3. Does it encourage you to come to Jesus because he loves those whom the world rejects?");
            add_meditate_question(index, "4. Are you proud? Do you consider yourself worthy of God? Does it seem wrong to you that God sees no one worthy of Him and that He comes to those who are not worthy? Are you willing to humble yourself and bow the knee?");
            add_meditate_question(index, "5. Even if you are sceptical, are you willing to come and see Jesus through the testimony of millions of Christians who have had their lives transformed? Not joined a religion that only transforms our outward behaviour but a supernatural power of God transforming from the inside?");
            add_meditate_question(index, "6. To paraphrase C.S. Lewis, ‘If I find in myself a desire for a monarchy without equal or end, like and yet unlike every earthly dynasty, is it unreasonable to assume I was made to be a subject of such a kingdom?’, we want to be in a world and a country where justice reigns and our leaders are trustworthy and rule us kindly; do you think God gave us this idea because one day he will be that king?");

            add_close_prayer(index, "Thank you, God, that you do not see the world the way we do. You are not impressed by powerful and wealthy people. You seek the lowly, hurt, and down trodden and make something glorious with their lives. Help me to humble myself before you and to submit myself to your kingly rule over my life. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=5jqzAjI-5Kc','Death of Apostles');
            add_further_link(index, 'https://www.youtube.com/watch?v=VIfI0QVlolE','Can we trust the Gospels');
            add_further_link(index, 'https://www.youtube.com/watch?v=WF9QhrH9cI4','Is the Bible reliable');
            add_further_link(index, 'https://www.youtube.com/watch?v=gjhbhqrbAS8&t=595s','I serve a King');
            add_further_link(index, 'https://www.youtube.com/watch?v=E8jY6wJ0gwQ','The cost of not following');
        }
        // video edited, data complete, grammar checked
        function create_session_7(index){
            add_main_video(index, "TzKFo1lwrg0");
            add_video_title(index, "First Miracle");
            add_reading(index, "John 2:1-12");

            add_open_prayer(index, "Almighty God, as I move into chapter two, I want to thank you for all you have taught me in chapter one. Help me to continue digesting all that I have learned and open my eyes to see more of your truth in this next chapter. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Miracles - 0:25");
            add_watch_topic(index, "Signs - 2:01");
            add_watch_topic(index, "Authority - 4:57");
            add_watch_topic(index, "Interpretation - 9:38");
            add_watch_topic(index, "Invitation - 14:47");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Signs - miracles of Jesus that pointed to who he said he was.");

            add_meditate_question(index, "1. Why do you think people reject the miracles Jesus performed? Do they have good reason to do so, unless they first deny the existence of God?");
            add_meditate_question(index, "2. Do you think God would have allowed Jesus to perform miracles if he was lying about who he was?");
            add_meditate_question(index, "3. As it stands, what is your relationship with Jesus? A righteous and saving relationship with Jesus is our complete surrender to him.");
            add_meditate_question(index, "4. Does Christianity seem boring, stuffy, and dull to you? It is likely that you don't know Jesus as your saviour yet.");
            add_meditate_question(index, "5. If you feel in your heart that this world is not right, you would be right to feel that, but do you believe that there is a world coming that is perfect?");

            add_close_prayer(index, "Thank you, God, for Jesus Christ and the love that he has for men and women. I am sorry that my view of him is weak and small. Help me to see how wonderful he is as I continue this study. Give me a heart to love him and the ability to surrender everything to him. Thank you that there is a new world coming where all that is broken in this world will be gone. Help me to trust in Jesus so that I will be there with him. Amen");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=y3VSIWHZtOI','A case for miracles');
            add_further_link(index, 'https://www.youtube.com/watch?v=jpvfmjRUJl0','Why so few miracles today?');
            add_further_link(index, 'https://www.youtube.com/watch?v=5JQOBMi4QS8','It will cost you everything');
            add_further_link(index, 'https://www.youtube.com/watch?v=cRmWSB1c6L8','How to read the Bible');
            add_further_link(index, 'https://www.youtube.com/watch?v=5cC-1rkVvQA','Difficult Bible passages');
            add_further_link(index, 'https://www.youtube.com/watch?v=B4mOyNIF5MQ','Can I trust my interpretation?');
            add_further_link(index, 'https://www.youtube.com/watch?v=UEd0nUAjwy4','The new creation');

        }
        // video edited, data complete, grammar checked
        function create_session_8(index){
            add_main_video(index, "0fwWk9GSVP8");
            add_video_title(index, "Cleansing the Temple");
            add_reading(index, "John 2:13-25");

            add_open_prayer(index, "Alimighty God, please give me a clear mind and heart to receive the truth today. Help me not to rely on my own understanding of what is true and false, right and wrong, and give me a right-thinking mind and a right-feeling heart, according to your will. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Temple - 0:25");
            add_watch_topic(index, "The Sacrifice - 3:23");
            add_watch_topic(index, "Pigeons - 5:59");
            add_watch_topic(index, "Righteous Anger - 7:52");
            add_watch_topic(index, "New Temple - 12:09");
            add_watch_topic(index, "Deceiving Heart - 15:14");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Mercy Seat: It is a seat that sits on top of the Ark of the Covenant, which represents the place where God would receive the sacrifices for sin and administer forgiveness.");
            add_watch_term(index, "Temple: The centre of Jewish worship, it represented the presence of God amongst his people.");
            add_watch_term(index, "Holiness: more than just righteousness or goodness; it is to be set apart and made fit for something or someone.");
            add_watch_term(index, "Penal Substitution: The view that Jesus Christ was punished in our place for our sins and through which God's wrath againast us was taken by Christ and we thereby escape it.");

            add_meditate_question(index, "1. How amazing is it that the infinite God desires to have a relationship with us, his creatures? God desires to be in that relationship with you; how does that make you feel?");
            add_meditate_question(index, "2. How terrible must our sins be if it took the death of God's own son to remove our guilt? What love must God have for us that he would be willing to do that so he could draw near to us?");
            add_meditate_question(index, "3. Salvation is not about what we have or do but about what God has done through his son, Jesus Christ. What is holding you back from coming to him?");
            add_meditate_question(index, "4. God is angry with sin and with those who continue in their sin. What do you think about this?");
            add_meditate_question(index, "5. If God is just, he must administer perfect justice and therefore punish sin. If we refuse to accept the substitution of Jesus Christ on our behalf, how can we escape God's wrath?");
            add_meditate_question(index, "6. What must God the Father have gone through to pour out his wrath on his son? How much must the Father and the Son love us?");
            add_meditate_question(index, "7. What did the temple represent? How much better is Jesus than the temple?");
            add_meditate_question(index, "8. If our hearts can deceive us so that we don't even know we are deceived, how can we know what is true? If God could give you a new heart that knows the truth and loves him, would you take it?");

            add_close_prayer(index, "Almighty God, thank you for sending your son to be a substitute for my sin. Help me to see just how much it cost you to do so and how much you must love me to have done this for me. If my heart has been deceived, please help me to know the truth. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=_OsJoVZIILs','Why was the curtain torn');
            add_further_link(index, 'https://www.youtube.com/watch?v=aaTotHAYGNg','Sermon - Curtain Torn');
            add_further_link(index, 'https://www.youtube.com/watch?v=9Ty4TVoSts4','Blood sacrifices');
            add_further_link(index, 'https://www.youtube.com/watch?v=LLsWFKZo5Nw&t','Penal Substitution');
            add_further_link(index, 'https://www.youtube.com/watch?v=QZjQe8QkV7w','How the cross works');
            add_further_link(index, 'https://www.youtube.com/watch?v=la0SkKC091s','Objections to Penal Substitution');
            add_further_link(index, 'https://www.youtube.com/watch?v=Q_rEZWjIEQk','Sermon - Christ our substitute');
            add_further_link(index, 'https://www.youtube.com/watch?v=K3gNWO-Au1g','Jesus is the new temple');
        }
        // video edited, data complete, grammar checked
        function create_session_9(index){
            add_main_video(index, "MtmIQ4YpyXY");
            add_video_title(index, "You must be born again");
            add_reading(index, "John 3:1-15");

            add_open_prayer(index, "Almighty God, I come again to learn from your word. Please give me the spiritual insight that I need to understand it, and not just understand it, but to have my life changed and transformed by your Holy Spirit. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The big question - 0:25");
            add_watch_topic(index, "Seek and Find - 1:28");
            add_watch_topic(index, "Supernatural Book - 3:48");
            add_watch_topic(index, "Born Again - 8:52");
            add_watch_topic(index, "What can I do? - 11:27");
            add_watch_topic(index, "The Serpent - 13:07");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Supernatural: some force or being that exists outside of the natural universe and is not subject to the laws of nature.");
            add_watch_term(index, "Means of salvation: those natural processes which God uses to impart spiritual life into a human being");

            add_meditate_question(index, "1. What questions are most important to you today? Will they matter on your deathbed?");
            add_meditate_question(index, "2. Do you find Jesus Christ compelling? Why? Would you be willing to come to Jesus even if I meant being an outcast from friends and family?");
            add_meditate_question(index, "3. Why would God give us a book that we need his help to understand? Why do men and women want to be self-reliant?");
            add_meditate_question(index, "4. Do you feel the effects of a spiritual birth in your life? Based on what has been taught, what would that look like? Do you want it?");
            add_meditate_question(index, "5. What are the means that God uses to save people?");
            add_meditate_question(index, "6. Does it comfort you to know that everyone who asks will receive, and everyone who seeks will find God and his salvation? What does it encourage you to do?");
            add_meditate_question(index, "7. Jesus, who never sinned, became sin for us so that we might receive forgiveness for our sins. What is the right response to such a kind and loving act?");

            add_close_prayer(index, "Almighty God, thank you for everything you have done to make a way of salvation open to me. Please help me to continue to ask, seek, and knock until you do that work that only you can do so that I might be born again. Thank you. Amen");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=Tye19ZjLnHk&t=279s','God Speaks!');
            add_further_link(index, 'https://www.youtube.com/watch?v=0lvGW5tw-wA','Find gold in the Bible');
            add_further_link(index, 'https://www.youtube.com/watch?v=UGttCRpA56E','Sermon - You must be born again');
            add_further_link(index, 'https://www.youtube.com/watch?v=9nlvj9nNVCA','Am I born again?');
            add_further_link(index, 'https://www.youtube.com/watch?v=YHZaoOP-DuI','Am i saved?');
            add_further_link(index, 'https://www.youtube.com/watch?v=Q5aFfp4-pfA','Excerpt - Serpent lifted up');
            add_further_link(index, 'https://www.youtube.com/watch?v=5KJPjpVI7xs','Sermon - Serpent lifted up');
        }

        function create_session_10(index){
            add_main_video(index, "2pS_zIfwIpg");
            add_video_title(index, "God so loved the world");
            add_reading(index, "John 3:16-21");

            add_open_prayer(index, "Almighty God, Thank you for what I have learned so far. Please continue to make yourself known to me and grant me the heart to love you in the same way that you love me. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "God's Love - 0:25");
            add_watch_topic(index, "The Son - 1:53");
            add_watch_topic(index, "Salvation or Condemnation? - 4:48");
            add_watch_topic(index, "Condemned already - 6:51");
            add_watch_topic(index, "Hope in Christ - 9:25");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Just: Someone who always gives a law breaks their correct sentence.");

            add_meditate_question(index, "1. What can you understand about the love of God towards you from knowing that he sent his son that you might be saved?");
            add_meditate_question(index, "2. Do you feel that you deserve God's condemnation? Would it be fair for God to punish you?");
            add_meditate_question(index, "3. What does it say about God's character that he would rather save men and women than condemn them? Especially when he took the condemnation himself?");
            add_meditate_question(index, "4. If we refuse the salvation that has been purchased, what else can be left but the condemnation we deserve?");
            add_meditate_question(index, "5. Is it a good thing for a judge to let a vile criminal escape justice? Should we not expect God to be just?");
            add_meditate_question(index, "6. Does it concern you that if we refuse Jesus, God gives us over to the power of our sin so that it is hard to leave it and be saved? How dangerous is sin?");

            add_close_prayer(index, "Almighty God, thank you that you loved the world so much that you gave what was most precious to you. I doubt I could give the person I loved most in this world to save a friend, nevermind my enemy. Help me to see the beauty of what you have done for me, and help me to love you back. Amen.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=rhLr0gaASns','Sermon - God so love the world');
            add_further_link(index, 'https://www.youtube.com/watch?v=QEXsi0uzhjI','The Son of God');
            add_further_link(index, 'https://www.youtube.com/watch?v=djdEsZzEuRk','God sent his Son Part 1');
            add_further_link(index, 'https://www.youtube.com/watch?v=uRsRl0vGKhI','God sent his Son Part 2');
            add_further_link(index, 'https://www.youtube.com/watch?v=vU2xTTUPdlw','Justice of God');
            add_further_link(index, 'https://www.youtube.com/watch?v=GHpYeERpZf8','Just and the justifier');
            add_further_link(index, 'https://www.youtube.com/watch?v=IsMRIHWqQVw','God the just');
            add_further_link(index, 'https://www.youtube.com/watch?v=NWaLb_-MOxI','Light of the World');
            add_further_link(index, 'https://www.youtube.com/watch?v=5QqMQNPy2LU','Sermon - Death and Hell');
            
        }

        function create_session_11(index){
            add_main_video(index, "Hk46ws01GmQ");
            add_video_title(index, "Supremecy of Jesus Christ");
            add_reading(index, "John 3:22-36");
    
            add_open_prayer(index, "We would encourage you to continue to pray what is on your heart. Remember, God wants honesty, so our prayer needs to be real. Remember that you don't have to use special words or terms; simply speak to God as you would speak to someone else you respect. <br> In this session, we will look again at how unique Jesus is, so this could be something you might ask him to reveal to you.");
    
            add_watch_title(index, "Topics");
            add_watch_topic(index, "Voice in the wilderness - 0:25");
            add_watch_topic(index, "Purpose and Reason - 2:48");
            add_watch_topic(index, "Unworthy - 5:03");
            add_watch_topic(index, "Wedding Banquet - 7:28");
            add_watch_topic(index, "Voice of the Son - 10:18");
            add_watch_topic(index, "Trust and Obey - 11:56");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Baptism: a ritual where a person is submerged in water, which has spiritual significance.");
            add_watch_term(index, "Christ: means the annointed one, speaking of Jesus, God's own son in human flesh.");
    
            add_meditate_question(index, "1. Do you instinctively feel that your life has a purpose? Why do we try to find purpose for our lives in who we are and what we do?");
            add_meditate_question(index, "2. Have you thought that you might be created for a purpose and if so what would that purpose be?");
            add_meditate_question(index, "3. Why did the greatest of the prophets in the Bible say he was not worthy to untie Jesus's sandels?");
            add_meditate_question(index, "4. How wrong would it be for the best man to steal the show at a wedding? How much more is it for a created being to promote themselves instead of their creator, for whom they were made?");
            add_meditate_question(index, "5. If it is important to listen to God's word through the prophets, how much more important should we listen to his son?");
            add_meditate_question(index, "6. What does it mean to trust Jesus?");
    
            add_close_prayer(index, "A good way to end in prayer is to thank God and ask him to help you understand and apply what you have learned<br><br>It would be good to thank God for not only sending prophets but actually sending his son and that he might help you to believe and be saved");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=s2XZv8LRHzc','John the Baptist');
            add_further_link(index, 'https://www.youtube.com/watch?v=PLMIg1It0QQ','Enjoying God');
            add_further_link(index, 'https://www.youtube.com/watch?v=AvATLgcM9gA','Enjoying and Glorfiying');
            add_further_link(index, 'https://www.youtube.com/watch?v=pMzqA4XNxtw','Evolution Problems');
            add_further_link(index, 'https://www.youtube.com/watch?v=VrIvwPConv0','Problems with Atheism');
            add_further_link(index, 'https://www.youtube.com/watch?v=ZUS9LoalUu4','Freedom from the Self-Focused Life');
            add_further_link(index, 'https://www.youtube.com/watch?v=eW7qqn8D4pE','Sermon - The Glory of God Through Man');
            add_further_link(index, 'https://www.youtube.com/watch?v=XMKstKGPmjA','Sermon - Do you want to hear God speak?');
            add_further_link(index, 'https://www.youtube.com/watch?v=xuXO82T7Kpo','What is faith?');
        }
        
        function create_session_12(index){
            add_main_video(index, "81fwwDEWx_o");
            add_video_title(index, "Women at the Well part 1");
            add_reading(index, "John 4:1-45");
    
            add_open_prayer(index, "As you learn to pray, it is always good to start our prayers by acknowledging who God is. You have learned a fair bit about this over the last eleven sessions. Why don't you start today by acknowledging who God is and asking him to reveal more of himself?<br>In this session, we are going to look at the kindness of Jesus and how he can sympathise with our weaknesses. Also, we will start to look at what true worship is.");
    
            add_watch_title(index, "Topics");
            add_watch_topic(index, "Meeting at the well - 0:25");
            add_watch_topic(index, "God who sympathizes - 3:09");
            add_watch_topic(index, "Living Water - 5:39");
            add_watch_topic(index, "An immoral women - 8:38");
            add_watch_topic(index, "True worship - 11:01");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Holy Spirit: third person of the Godhead, God is one but subsists in three distinct person, Father, Son (Jesus) and Holy Spirit.");
            add_watch_term(index, "Living Water: the gift of the Holy Spirit.");
            add_watch_term(index, "Born Again: God granting Spiritual life and giving new desires and longings.");
    
            add_meditate_question(index, "1. Why is it that the Bible is archaeologically and historically accurate where other religious texts aren't?");
            add_meditate_question(index, "2. God doesn't look at people in the same way the world does. He's not impressed with the rich and powerful but seeks out the lowly and downtrodden. How does this make you feel?");
            add_meditate_question(index, "3. As Jesus became a man and suffered in the same way we do, do you feel like he understands your trials and suffering? Does this encourage you to come to him?");
            add_meditate_question(index, "4. Think about all the gifts that God gives those who come to his Son: escape from judgement, eternal life, joys of heaven, forgiveness of sins, peace with God, adoption into his family, and many more. Could there be a better gift than God coming and living within us as a friend, helper, encourager, guide, and sustainer? Do you not desire this gift? Is it worth keeping hold of your sin and missing out on this gift?");
            add_meditate_question(index, "5. Do you feel that something is missing—that peace and satisfaction that the world cannot grant? Do you believe that this can be found in Jesus Christ?");
            add_meditate_question(index, "6. Do you think you're beyond God's salvation? What does this account teach us about this?");
            add_meditate_question(index, "7. Do you think that religion is just going through religious duties? If this seems pointless, you would be right.");
            add_meditate_question(index, "8. A relationship based on just doing things for each other is a shallow one; a relationship should be based on love for the other person. How much more should this apply to our relationship with God?");
    
            add_close_prayer(index, "If we truly get to grips with the kindness of God towards us and his ability to truly understand our problems from the perspective of one who has suffered along with us, it will change our lives. Ask God to reveal this more clearly, and thank him for what he has done.");
    
            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/@ExpeditionBible','Biblical Historicity');
            add_further_link(index, 'https://www.youtube.com/watch?v=Vq2KAlCR14Q','God providence');
            add_further_link(index, 'https://www.youtube.com/watch?v=tnu7mCsZ8Kw','God Ordains Whatsoever Comes to Pass');
            add_further_link(index, 'https://www.youtube.com/watch?v=24r4OwDIW2Y','Does God Control All Things');
            add_further_link(index, 'https://www.youtube.com/watch?v=M2VJelWl_Fs','God Can Sympathize');
            add_further_link(index, 'https://www.youtube.com/watch?v=Mc4B7dS9a88','Helps us in our weakness');
            add_further_link(index, 'https://www.youtube.com/watch?v=kDxYyXKUUv0','Sermon - Who is the Holy Spirit');
            add_further_link(index, 'https://www.youtube.com/watch?v=RCPozrJSBwg','Want the Spirit?');
            add_further_link(index, 'https://www.youtube.com/watch?v=J2sd7RrpccQ','He chooses the weak');
            add_further_link(index, 'https://www.youtube.com/watch?v=OaDTHqPuwb8','Worship in Spirit and truth');
            add_further_link(index, 'https://www.youtube.com/watch?v=Dy8ZEA4TGbk','Sermon - Worship in Spirit and truth');
        }   

        function create_session_13(index){
            add_main_video(index, "sUJX8ZvSKuE");
            add_video_title(index, "Women at the Well part 2");
            add_reading(index, "John 4:1-45");

            add_open_prayer(index, "Start by acknowledging God's goodness and thanking him for what he has already done. Then ask him for help understanding what you are about to learn. <br> In this session, we are going to look at the extent of the kingdom, the dangers of sin, and the task that God has for your life.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Messiah - 0:25");
            add_watch_topic(index, "Expanding Kingdom - 3:35");
            add_watch_topic(index, "Spiritual Cancer - 6:29");
            add_watch_topic(index, "Will of the Father - 7:50");
            add_watch_topic(index, "Harvest of Souls - 10:25");
            add_watch_topic(index, "See for yourself - 12:40");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Jews are the people of God, naturally descended from Abraham, Isaac, and Jacob.");
            add_watch_term(index, "Gentiles: none of the Jewish people, i.e., the rest of the world.");
            add_watch_term(index, "Self Righteousness: thinking that oneself is good and pleasing to God in and of themselves");

            add_meditate_question(index, "1. Jesus crossed cultural boundaries to bring the good news of salvation to them. Are there any boundaries that exist that would keep you from Jesus? If so, do you think they are a problem for Jesus?");
            add_meditate_question(index, "2. God hates self-righteousness and self-righteous religion, thinking that God is for us because of anything we are or have done. If anyone is considered right before God, it is based entirely on what Jesus has done for them. Do you think you are good enough for God? If so, this attitude needs to go before you can come to him.");
            add_meditate_question(index, "3. Have you thought that sin is a spiritual cancer and far more dangerous?");
            add_meditate_question(index, "4. Doing his Father's will brought Jesus the most joy, and we were created to find our greatest joy in obeying God. This is the Father's will for your life: that you will trust his son and live for him. What is stopping you from coming to him and experiencing this joy?");
            add_meditate_question(index, "5. God doesn't just want to save you; he wants to use you to save others. Would this not be the greatest thing you could give your life to?");

            add_close_prayer(index, "Ask God to help you see the joy of a relationship with him. Ask him to help you see the dangers of sin and the cure that Jesus purchased on the cross. If you desire it, ask him to grant you the cure and the ability to trust in him. Finish by thanking him for making salvation possible.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=TzPsa35Uhn4','Is Jesus the messiah');
            add_further_link(index, 'https://www.youtube.com/watch?v=O11Br4lr3Qw','The Mystery of the Messiah');
            add_further_link(index, 'https://www.youtube.com/watch?v=DgTTLDuL9TY','Sermon - Prophet, Priest, and King');
            add_further_link(index, 'https://www.youtube.com/watch?v=EQJlGFBXyx8','Salvation for all');
            add_further_link(index, 'https://www.youtube.com/watch?v=0xP0K2GkBn4','Sermon - A Blow to Self Righteousness');
            add_further_link(index, 'https://www.youtube.com/watch?v=dZEX3Jsg1sY','Saved From Self Righteousness');
            add_further_link(index, 'https://www.youtube.com/watch?v=N1QL-4oEx34','Saved from spirtual cancer');
            add_further_link(index, 'https://www.youtube.com/watch?v=0w6fD8fyASo','Joy in God');
        }

        function create_session_14(index){
            add_main_video(index, "HrU3BAvQrps");
            add_video_title(index, "Second Sign");
            add_reading(index, "John 4:46-54");

            add_open_prayer(index, "Again, start by acknowledging God's goodness and thanking him for what he has already done. Then ask him for help understanding what you are about to learn. <br> In this session, we are going to look at the proper way of interpreting difficult bible passages, God being in control, and Jesus power over death.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Compassion? - 0:25");
            add_watch_topic(index, "Interpretation - 2:04");
            add_watch_topic(index, "On his throne - 5:18");
            add_watch_topic(index, "Priorities - 7:18");
            add_watch_topic(index, "Exemplary belief - 10:54");
            add_watch_topic(index, "Death must flee - 12:33");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Hermeneutics:  the theory and methodology of interpretation");

            add_meditate_question(index, "1. What should we do if we come across difficult biblical passages?");
            add_meditate_question(index, "2. Is it more likely that we or God are to blame when we come across things in scripture that we disagree with?");
            add_meditate_question(index, "3. What is more important than the death of a child? What about where a person will spend eternity?");
            add_meditate_question(index, "4. How does it make you feel that God isn't running around heaven trying to solve one problem after another?");
            add_meditate_question(index, "5. God sits on his throne, never flustered or surprised, and everything he plans will come to fruition. Could you trust such a God with your life?");
            add_meditate_question(index, "6. Without witnessing Jesus' miracles firsthand, can you trust his word when he says, 'All who come to me will be saved'?");
            add_meditate_question(index, "7. Is there something in your life that you believe is too difficult for Jesus? Is this going to put you off approaching him? Has this story changed your mind?");

            add_close_prayer(index, "Ask God to help you correctly interpret scripture, especially when the passage appears difficult to understand. Ask him to show you how powerful he is and how he has everything under control. Ask him to help you trust him.Ask him to remove anything in your life that prevents you from trusting in him and receiving salvation. ");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=-Wvt8LTAdaw','Basic heurmenutics');
            add_further_link(index, 'https://www.youtube.com/watch?v=L2_4TWZBc54','Sermon : How Should We Interpret the Bible?');
            add_further_link(index, 'https://www.youtube.com/watch?v=9e8_CClvTXY','Sermon : Interpreting the Bible');
            add_further_link(index, 'https://www.thegospelcoalition.org/essay/interpreting-scripture-a-general-introduction/','Aritcle Bible Interpretation');
            add_further_link(index, 'https://www.youtube.com/watch?v=y8xBngE-vbY','Sermon : Our Sovereign God');
            add_further_link(index, 'https://www.youtube.com/watch?v=VygpRDmesJA','Sermon : Christ is Sufficient for All Your Crises');
        }

        function create_session_15(index){
            add_main_video(index, "zUMScsCpLJI");
            add_video_title(index, "The ungrateful beggar");
            add_reading(index, "John 5:1-18");

            add_open_prayer(index, "Continue to thank God for what he has and is doing in your life, particularly in regards to your relationship with him. Ask him for help understanding what you are about to learn. <br> In this session, we will see Jesus's compassion, learn about the Sabbath, see how false religion keeps us away from God, and receive a warning against rejection of Jesus and ingratitude.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Pool of Bethesda - 0:25");
            add_watch_topic(index, "Singled out - 2:20");
            add_watch_topic(index, "The Sabbath - 5:14");
            add_watch_topic(index, "Self Righteousness - 9:39");
            add_watch_topic(index, "Ingratitude - 13:05");
            add_watch_topic(index, "The warning - 15:13");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Sabbath: instituted by God as a day of rest for his people");

            add_meditate_question(index, "1. We've thought about it before, but it's worth remembering that Jesus suffered just like us, so he might be a better friend and comforter in your hour of need. Is it comforting to know that God truly cares?");
            add_meditate_question(index, "2. Do you really feel the destructive power of sin? Do you think you can solve the problem yourself, or is it not a problem at all?");
            add_meditate_question(index, "3. Do you believe that by watching this video, God has chosen you to hear the good news of His redeeming love? Will you not approach him on that basis?");
            add_meditate_question(index, "4. Is it not gracious of God to give us rest from our physical labours? How much more significant is it that God, through his Son, has given us rest from our spiritual attempts to restore our relationship with him? ");
            add_meditate_question(index, "5. Why do people use religion to make peace with God when Jesus Christ has already done so?");
            add_meditate_question(index, "6. How thankful are we to God? Do we reflect on everything he has accomplished and give him the praise and thanks he deserves? He gives us everything good in life and has made it possible for us to escape death and hell. ");
            add_meditate_question(index, "7. What kind of ingratitude is demonstrated when we reject God's Son, who paid a terrible price to save us? Can you understand how serious this sin is?");
            add_meditate_question(index, "8. Why did God warn the man? What was the consequence of not heeding this warning? Will there be consequences for us if we ignore God's warnings?");

            add_close_prayer(index, "Thank God for his compassion and for choosing you to hear his offer of salvation. Ask that he keep you from false religion and self-righteousness. Ask him to help you take his warning seriously and to give you a grateful and thankful heart.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=V4uAEDPztmk','Compassion of Jesus');
            add_further_link(index, 'https://www.youtube.com/watch?v=5YYVAdVpWvc','Sermon : The Inescapable Corruption of Sin');
            add_further_link(index, 'https://www.youtube.com/watch?v=14-kR4TvyLs','Sermon : Damning power of false religion');
            add_further_link(index, 'https://www.youtube.com/watch?v=Aq674KVVhyg',"Sermon : God's Electing Love");
            add_further_link(index, 'https://www.youtube.com/watch?v=wj69iufhzhw',"Sabbath explained");
            add_further_link(index, 'https://www.youtube.com/watch?v=3-8bODKmo_E',"Goal of creation");
            add_further_link(index, 'https://www.youtube.com/watch?v=WVpTf2HBz1A','Sermon : understanding the Sabbath');
            add_further_link(index, 'https://www.youtube.com/watch?v=dZEX3Jsg1sY','Saved From Self Righteousness');
            add_further_link(index, 'https://www.youtube.com/watch?v=1FIGuLp8L-s','All of us are ungrateful');
            add_further_link(index, 'https://www.youtube.com/watch?v=U5HCcgoGUw4','What does the Bible say about ingratitude');
            add_further_link(index, 'https://www.youtube.com/watch?v=FmaYSxu1oVE',"Do not scoff at God's warning");

            
        }

        function create_session_16(index){
            add_main_video(index, "LVVjizc1_-c");
            add_video_title(index, "Son of the Father");
            add_reading(index, "John 5:1-29");

            add_open_prayer(index, "It would be well to thank God you are still here and watching these videos. If you have come to know his love and kindness over these sessions, now would be a good time to thank him again for this. <br> In this session, we will look at Jesus claim to be God and why this is important. Also, we will look at the resurrection of the dead and the purpose for which you were created.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Son of the Father - 0:25");
            add_watch_topic(index, "Image and Honour - 4:04");
            add_watch_topic(index, "Undeniable Claim - 6:22");
            add_watch_topic(index, "Spiritual life - 9:24");
            add_watch_topic(index, "Restoration - 12:27");
            add_watch_topic(index, "The Fathers love - 15:32");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Blasphemy: making a claim that you are God when your just a man");

            add_meditate_question(index, "1. If the people Jesus spoke to in his day knew he was claiming to be God, what evidence do we have today to suggest that he wasn't? ");
            add_meditate_question(index, "2. Jesus claimed to be God, which is undeniable. Was he a liar who falsely claimed to be God, a madman who believed he was God but wasn't, or was he telling the truth and was God?");
            add_meditate_question(index, "3. If you believe Jesus was who he claimed to be, then everything else he said must be true. What will you do about his claim that, unless you come to him, you will perish in Hell?");
            add_meditate_question(index, "4. You can receive eternal life today, which will carry you through death and keep you free from the upcoming judgement. What's keeping you from receiving it?");
            add_meditate_question(index, "5. We are all sinners and criminals under God's law, and there will come a day when you will be found guilty and cast into Hell for all eternity. Your primary need today is to avoid that judgement. The life that is found in Jesus Christ is able to do that for you; will you not have it?");
            add_meditate_question(index, "6. There will be a great resurrection of all who have ever lived, some to eternal damnation and some to eternal life. Life and death are before you today; which will you choose?");
            add_meditate_question(index, "7. It is difficult for us to accept that we exist for the benefit of another rather than for ourselves. Our goal is not ourselves, but Jesus Christ. Many people can't bear it and would rather go to Hell than live on that basis, but even there, they will exist solely for his glory. How about you?");

            add_close_prayer(index, "Thank God for life and what he has done to rescue us from hell. Thank him for the new resurrection life that awaits those who trust in him. If you've still not come to him and trusted him for salvation, ask him to help you do that.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=aTToBMda3VE','Understanding the Trinity');
            add_further_link(index, 'https://www.youtube.com/playlist?list=PLxaDcwyjYomyL3-dlgZ1qqjeo7vJaKBT7','Playlist - Indepth look at the Trinity');
            add_further_link(index, 'https://www.youtube.com/watch?v=wpTpc8H0XHw','Sermon - Startling Claim');
            add_further_link(index, 'https://www.youtube.com/watch?v=hklLnO47APs','Liar, Lunatic or Lord');
            add_further_link(index, 'https://www.youtube.com/watch?v=Sq98kwep_a4','Sermon - Liar, Lunatic, or Lord?');
            add_further_link(index, 'https://www.youtube.com/watch?v=QxKRH-9IRCg','Sermon - The Truth About Death');
            add_further_link(index, 'https://www.youtube.com/watch?v=Bmr2j-H0O4M','Sermon - From Death to Life');
            add_further_link(index, 'https://www.youtube.com/watch?v=Ai4AHSsdNp0','The Hope of the Resurrection');
            add_further_link(index, 'https://www.youtube.com/watch?v=gs5VzPK8rw0','Heaven and the New Earth');
            add_further_link(index, 'https://www.youtube.com/watch?v=GCXgMpy_WKc','Why God Created Us');
            add_further_link(index, 'https://www.youtube.com/watch?v=S-LRBZKGhe0','What Is God’s Glory?');
        }
        
        function create_session_17(index){
            add_main_video(index, "MOhADAYg080");
            add_video_title(index, "Fourfold witness");
            add_reading(index, "John 5:30-47");

            add_open_prayer(index, "In this session, we'll look at more evidence that Jesus is who he claims. Ask God for an open mind so that you can evaluate the evidence on its own merits rather than rejecting it because of preconceived notions about who Jesus is. ");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Fourfold Witness - 0:25");
            add_watch_topic(index, "Witness One - 2:38");
            add_watch_topic(index, "Witness Two - 5:15");
            add_watch_topic(index, "Witness Three - 8:25");
            add_watch_topic(index, "Rejected - 10:28");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Scripture: Holy writings, The Bible.");

            add_meditate_question(index, "1. Why do you believe God gave us so much evidence to support Jesus' claim to be God?");
            add_meditate_question(index, "2. Why are Jesus' claims to be God superior to those made by others?");
            add_meditate_question(index, "3. How much worse would it be to reject Jesus with so much evidence compared to those who had less?");
            add_meditate_question(index, "4. Do you think people reject Jesus based on preconceived notions or evidence? How about you?");
            add_meditate_question(index, "5. Why didn't even Jesus' critics deny his miracles?");
            add_meditate_question(index, "6. If Jesus was a liar, why would God use powerful miracles to authenticate his ministry?");
            add_meditate_question(index, "7. Have you ever read the Bible to find Jesus Christ? What is preventing you from starting today?");
            add_meditate_question(index, "8. Is a relationship based solely on what we can get from someone a love relationship? Would you expect the eternal God to be treated this way?");
            add_meditate_question(index, "9. Are you willing to have God even if it means giving up everything else?");

            add_close_prayer(index, "Thank God for all of the evidence he has provided for us to evaluate Jesus' claims, and if you haven't come to Jesus yet, ask God to show you what is keeping you from him. Request that he remove any obstacles that are preventing you from connecting with him. ");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=iKU3ZcTc38s','Sermon - Deity of Christ, P1');
            add_further_link(index, 'https://www.youtube.com/watch?v=IjhS5h0dTgw','Sermon - Deity of Christ, P2');
            add_further_link(index, 'https://www.youtube.com/watch?v=zwgpAmMezYI','Sermon - Ministry of John Baptist');
            add_further_link(index, 'https://www.youtube.com/watch?v=y3VSIWHZtOI','The Case for Miracles');
            add_further_link(index, 'https://www.youtube.com/watch?v=ev4FoslmUj8','Are Miracles Possible?');
            add_further_link(index, 'https://www.youtube.com/watch?v=WWlpQauXiTU&list=PLZ3iRMLYFlHsHyvMtfgOgSPU6zEnCvxUO','Playlist - Jesus in Old Testament');
            add_further_link(index, 'https://www.youtube.com/watch?v=qBviSLOhp1w','The will of the Father');
        }

        function create_session_18(index){
            add_main_video(index, "aX-fy6dth_M");
            add_video_title(index, "The God Man");
            add_reading(index, "John 6:1-21");

            add_open_prayer(index, "In this session, we will see some more miracles that Jesus performed, pointing to who he is. Ask God to help you see who Jesus is and what his miracles say about him. Ask him to give you an open mind and to think beyond the rationalism and scepticism in today's world.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Mystery - 0:25");
            add_watch_topic(index, "Incarnate Son - 2:00");
            add_watch_topic(index, "Implausible - 4:36");
            add_watch_topic(index, "Water walker - 7:47");
            add_watch_topic(index, "Fear now - 9:43");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Eternally begotten: the reationship of God the Son to God the Father");
            add_watch_term(index, "Precede: The relationship between God the Spiriit and the Father and the Son");

            add_meditate_question(index, "1. Does the fact that God, in his fullness, is beyond our understanding make you more or less likely to trust in him? Why?");
            add_meditate_question(index, "2. Do you think it is possible for an all-powerful God to dwell in a human being? Why?");
            add_meditate_question(index, "3. Do you think that the God of the Bible is the product of the human imagination? Why?");
            add_meditate_question(index, "4. Does the mystery of God cause you to seek him more?");
            add_meditate_question(index, "5. Does an easily comprehensible God make it more or less likely to be the true God?");
            add_meditate_question(index, "6. Why do you think people deny Jesus's miracles?");
            add_meditate_question(index, "7. Knowing Jesus is the most wonderful thing a human being can experience, what would you be willing to give up for it?");
            add_meditate_question(index, "8. Do you fear God? Why? Should you fear God?");

            add_close_prayer(index, "Thank God that he became a man and used his power to save and rescue lost sinners. Ask God to give you a godly fear that will cause you to run to him for safety. Ask God to give you a heart that is willing to pay whatever cost to get Jesus.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=wX7Eb-llxbE&t=835s','That Christ Was ‘Begotten, Not Made’?');
            add_further_link(index, 'https://www.youtube.com/watch?v=bsT6D-i6C_s','The MYstery of the Incarnation');
            add_further_link(index, 'https://www.youtube.com/watch?v=xkBbAXXDZEo','The Two Natures of Christ');
            add_further_link(index, 'https://www.youtube.com/watch?v=kUTp7jwk-2M',"What about those who don't believe in miracles?");
            add_further_link(index, 'https://www.youtube.com/watch?v=lE6sDPPQ7WA&list=PLC900F8EEB62AE426',"Miracles: Keener's Reflections");
            add_further_link(index, 'https://www.youtube.com/watch?v=1Bjh3MKFv8s','How Much Is Jesus Really Worth to You?');
            add_further_link(index, 'https://www.youtube.com/watch?v=m8Qby8TKLME','How Do You Fear God?');
            add_further_link(index, 'https://www.youtube.com/watch?v=7ilEyczPr4A','Sermon : The Second Coming: Wrath and Rescue');
        }

        function create_session_19(index){
            add_main_video(index, "--rYLXvwJHU");
            add_video_title(index, "The bread of life");
            add_reading(index, "John 6:16-59");

            add_open_prayer(index, "In this session, we will see the primary purpose in Jesus feeding the five thousand and that spiritual nourishment is more important than physically. Your greatest need is not your wants and needs in this life but the one to come. Ask God to change your perspective and to see what is of upmost importance.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Wrong Motives - 0:25");
            add_watch_topic(index, "Time and Eternity - 2:08");
            add_watch_topic(index, "Not by works - 4:09");
            add_watch_topic(index, "Spiritual food - 5:45");
            add_watch_topic(index, "Bread of life - 8:39");

            add_meditate_question(index, "1. What is your main priority in life? Is it a natural concern, something that matters only for this life, or an eternal concern?");
            add_meditate_question(index, "2. If God could grant you one thing, what would it be?");
            add_meditate_question(index, "3. How much of your time is spent working for things in this world, and how much time is spent working for those things in the next?");
            add_meditate_question(index, "4. Why do people think so much about this life that lasts only a few decades and think very little about the next life that lasts forever?");
            add_meditate_question(index, "5. Why do most religions have a work-based salvation, i.e., you have to do something to earn salvation? What does Jesus say?");
            add_meditate_question(index, "6. What did Jesus mean when he said, 'I am the bread of life'?");
            add_meditate_question(index, "7. Are you spiritually hungry? If you're unsure, will you not ask God to show you?");
            add_meditate_question(index, "8. If you were hungry and someone offered you bread, you would take it. Jesus offers you bread to spiritually nourish you; will you not receive it?");
            add_meditate_question(index, "9. Do you come to Jesus for what he can do for you or who he is?");

            add_close_prayer(index, "Thank God for providing everything you need for abundant living in this life and, more importantly, in the next. Ask God to give you the bread of heaven, Jesus Christ, and to give you spiritual eyes to see his beauty and a heart to love him.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=q8wLTsmFAUk','Excerpt : Do not love the world');
            add_further_link(index, 'https://www.youtube.com/watch?v=pwv6qot7MZ4','Sermon : Do not love the world');
            add_further_link(index, 'https://www.youtube.com/watch?v=6FVvCcPUmhM','The World Crucified to Me and I to the World');
            add_further_link(index, 'https://www.youtube.com/watch?v=1zTjZwkN2UY','Why is salvation by works the predominantly held viewpoint?');
            add_further_link(index, 'https://www.youtube.com/watch?v=abVAUELTmz8','Sermon : Saved by Grace');
            add_further_link(index, 'https://www.youtube.com/watch?v=hfYsvcmzNM8','The Bread of Life: Knowing Christ');
            add_further_link(index, 'https://www.youtube.com/watch?v=YLZvJXmP7fo','What did Jesus mean when He said, “I am the Bread of Life”');
            add_further_link(index, 'https://www.youtube.com/watch?v=vR4g6_TkKD4','Jesus Satisfies All Your Thirsts');
            add_further_link(index, 'https://www.youtube.com/watch?v=YNFBQrzVRJk','Are You Satisfied With What Jesus Christ Has Done?');    
        }

        function create_session_20(index){
            add_main_video(index, "");
            add_video_title(index, "");
            add_reading(index, "");

            //add more to open prayer 
            add_open_prayer(index, "You should be comfortable with prayer by now, so there is no need for prompting. Prayer is such an important part of the Christian life, and so we encourage you to develop your own prayer habit and style. From this point forward, we will summarise the lesson from each session to give you some direction on what to pray for.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");

            add_meditate_question(index, "1. ");
            add_meditate_question(index, "2. ");
            add_meditate_question(index, "3. ");
            add_meditate_question(index, "4. ");
            add_meditate_question(index, "5. ");
            add_meditate_question(index, "6. ");
            add_meditate_question(index, "7. ");
            add_meditate_question(index, "8. ");
            add_meditate_question(index, "9. ");
            add_meditate_question(index, "10. ");

            //add more to close prayer 
            add_close_prayer(index, "From now on, we will suggest a few things to thank and ask God for, but please begin to develop your own list of thanks and requests from each session.");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
        }

        
        function create_session_(index){
            add_main_video(index, "");
            add_video_title(index, "");
            add_reading(index, "");

            add_open_prayer(index, "");

            add_watch_title(index, "Topics");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");
            add_watch_term(index, ": ");

            add_meditate_question(index, "1. ");
            add_meditate_question(index, "2. ");
            add_meditate_question(index, "3. ");
            add_meditate_question(index, "4. ");
            add_meditate_question(index, "5. ");
            add_meditate_question(index, "6. ");
            add_meditate_question(index, "7. ");
            add_meditate_question(index, "8. ");
            add_meditate_question(index, "9. ");
            add_meditate_question(index, "10. ");

            add_close_prayer(index, "");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
            add_further_link(index, '','');
        }

    });


});  

var open_prayer_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var watch_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var meditate_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var close_prayer_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var further_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var video_src_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var video_title_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var read_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
