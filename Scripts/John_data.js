
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
            sessions.css('display', 'block');
            intro_video.attr('src', '');
            unfocus_button(session_mode);
            session_mode = session;
            session_title.text("Session " + session + " Workflow");
            change_session_video(video_src_array[session])
            session_video_title.text(video_title_array[session]);
            quote_open_prayer.html(open_prayer_array[session]);
            //getEsvText(read_array[session]).then(result => quote_read.text(result));
            quote_watch.html(watch_array[session]);
            quote_meditate.html(meditate_array[session]);
            quote_further.html(further_array[session]);
            quote_close_prayer.html(close_prayer_array[session]);
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
            document.getElementById('session_video').reset(video);
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

        function add_main_video(index, text){video_src_array[index] = text;}
        function add_video_title(index, text){video_title_array[index] = text;}
        function add_reading(index, text){read_array[index] = text;}
        function add_open_prayer(index, text){open_prayer_array[index] = open_prayer_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_watch_title(index, text){watch_array[index] = watch_array[index] + "<h2 class='title'>" + text + "</h2>";}
        function add_watch_topic(index, text){watch_array[index] = watch_array[index] + "<h2 class='subtitle'>" + text + "</h2>";}
        function add_watch_term(index, text){watch_array[index] = watch_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_meditate_question(index, text){meditate_array[index] = meditate_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_close_prayer(index, text){close_prayer_array[index] = close_prayer_array[index] + "<h2 class='quote'>" + text + "</h2>";}
        function add_close_prayer_link(index, link, text){close_prayer_array[index] = close_prayer_array[index] + "<a href='" + link + "'><h2 class='link'>" + text + "</h2></a>";}
        function add_further_title(index, text){further_array[index] = further_array[index] + "<h2 class='title'>" + text + "</h2>";}
        function add_further_link(index, link, text){further_array[index] = further_array[index] + "<a href='" + link + "'><h2 class='link'>" + text + "</h2></a>";}

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

        // video edited, data complete, grammar checked
        function create_session_1(index){

            add_main_video(index, "gx-T3cYDLOQ");
            add_video_title(index, "The Word");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, as I begin this study to learn who you are and what you have done, please assist me in comprehending everything I read and hear. Please show yourself to me and make your love for me evident. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Introducing the Word - 0:25");
            add_watch_topic(index, "Beyond Expectations - 2:19");
            add_watch_topic(index, "The Unique God - 5:23");
            add_watch_topic(index, "The knowable God - 8:22");
            add_watch_topic(index, "Biblical Authenticity - 11:28");
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
            add_further_link(index, 'https://www.youtube.com/watch?v=Doi8JxJOtgE&t=683s','Biblical Authenticity');
        }
        //redo video
        function create_session_2(index){

            add_main_video(index, "");
            add_video_title(index, "Light of the world");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "");

            add_watch_title(index, "Topics");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_topic(index, " - ");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, " - ");
            add_watch_term(index, " - ");
            add_watch_term(index, " - ");
            add_watch_term(index, " - ");
            add_watch_term(index, " - ");

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
        // video edited, data complete, grammar checked
        function create_session_3(index){

            add_main_video(index, "373W6xpofxY");
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

            add_main_video(index, "-eTeBP-cV3A");
            add_video_title(index, "The Word became flesh");
            add_reading(index, "John 1:1-18");

            add_open_prayer(index, "Almighty God, Thank you for the desire you have given me to continue to seek you out. There have been some hard things to understand, so I ask for your help today as I read, watch, and meditate on your word. Help me to look beyond the intellectual questions and see the heart of love you have for me and your creation. Amen.");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Word became flesh - 0:25");
            add_watch_topic(index, "Person of Jesus Christ - 5:15");
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

            add_main_video(index, "cuAzLd0IxLY");
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
            add_close_prayer_link(index, '#',"click here more");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/playlist?list=PLZ3iRMLYFlHsHyvMtfgOgSPU6zEnCvxUO','Playlist - Types and Shadows');
            add_further_link(index, 'https://www.youtube.com/watch?v=QhqBVIDmbPg','Abraham and Isaac');
            add_further_link(index, 'https://www.youtube.com/watch?v=tbwylmj26SU','Passover');
            add_further_link(index, 'https://www.youtube.com/watch?v=28HVFJttJiQ','The Holy Spirit');

        }
        // video edited, data complete, grammar checked
        function create_session_6(index){

            add_main_video(index, "_rx0rkBa4iY");
            add_video_title(index, "The Disciples");
            add_reading(index, "John 1:35-51");

            add_open_prayer(index, "Have a go at praying yourself. After all, it's just speaking to God, telling him how you feel, and requesting what you need. If you don't feel comfortable yet, follow the prayer below<br>Almighty God. As I watch this next video, I ask for your help to learn more about Jesus. Help me to believe what I learn, and help me to trust you. Amen.");
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
        // video edited
        function create_session_7(index){
            add_main_video(index, "GrNhOOGNjac");
            add_video_title(index, "First Miracle");
            add_reading(index, "John 2:1-12");

            add_open_prayer(index, "");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "Miracles - 0:25");
            add_watch_topic(index, "Signs - 2:01");
            add_watch_topic(index, "Authority - 4:57");
            add_watch_topic(index, "Interpretation - 9:38");
            add_watch_topic(index, "Invitation - 14:47");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Signs - miracles of Jesus that pointed to who he said he was.");

            add_meditate_question(index, "1. Why do you think people reject the miracles Jesus performed? Do they have good reason to do so, unless they first deny the existance of God?");
            add_meditate_question(index, "2. Do you think God would have allowed Jesus to perfom miracles if he was lying about who he was?");
            add_meditate_question(index, "3. As it stands what is your relationship with Jesus? A right and saving relationship with Jesus is our complete surrender to him.");
            add_meditate_question(index, "4. Does Christianity seem boring, stuffy, and dull to you? It is likely that you don't know Jesus as your saviour yet.");
            add_meditate_question(index, "5. If you feel in your heart that this world is not right? Your right to feel that but do you believe that there is a world coming that is perfect?");

            add_close_prayer(index, "Thank you God for Jesus Chirst and the love that he has for men and women. I am sorry that my view of him is weak and small. Help me to see how wonderful he is as I continue this study. Give me a heart to love him and the ablility to surerender every thing to him. Thank you that there is a new world coming where all that is borken in this world will be gone, help me to trust in Jesus so that I will be there with him. Amen");

            add_further_title(index, 'Links to Further Study');
            add_further_link(index, 'https://www.youtube.com/watch?v=y3VSIWHZtOI','Case for miracles');
            add_further_link(index, 'https://www.youtube.com/watch?v=jpvfmjRUJl0','Why so few miracles today?');
            add_further_link(index, 'https://www.youtube.com/watch?v=5JQOBMi4QS8','It will cost you everything');
            add_further_link(index, 'https://www.youtube.com/watch?v=cRmWSB1c6L8','How to read the Bible');
            add_further_link(index, 'https://www.youtube.com/watch?v=5cC-1rkVvQA','Difficult Bible passages');
            add_further_link(index, 'https://www.youtube.com/watch?v=B4mOyNIF5MQ','Can I trust my interpritation');
            add_further_link(index, 'https://www.youtube.com/watch?v=UEd0nUAjwy4','The new creation');

        }
        //video recorded needs editing
        function create_session_8(index){
            add_main_video(index, "");
            add_video_title(index, "Cleansing the Temple");
            add_reading(index, "John 2:13-25");

            add_open_prayer(index, "");

            add_watch_title(index, "Topics");
            add_watch_topic(index, "The Temple - 0:25");
            add_watch_topic(index, "The Sacrifice - 3:23");
            add_watch_topic(index, "Pigeons - 5:59");
            add_watch_topic(index, "Righteous Anger - ");
            add_watch_topic(index, "New Temple - ");
            add_watch_topic(index, " - ");
            add_watch_title(index, "Biblical Terms");
            add_watch_term(index, "Mercy Seat - ");
            add_watch_term(index, "Temple - ");
            add_watch_term(index, "Holiness - ");
            add_watch_term(index, " - ");
            add_watch_term(index, " - ");

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
            add_further_link(index, '','Temple and Jesus');
            add_further_link(index, '','Temple Types and shadows');
            add_further_link(index, 'https://www.youtube.com/watch?v=_OsJoVZIILs','Why was the curtain torn');
            add_further_link(index, 'https://www.youtube.com/watch?v=aaTotHAYGNg','Sermon - Curtain Torn');
            add_further_link(index, 'https://www.youtube.com/watch?v=9Ty4TVoSts4','Blood sacrifices');
            add_further_link(index, 'https://www.youtube.com/watch?v=9Ty4TVoSts4','Animal sacrifice');
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
