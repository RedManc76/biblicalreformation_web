

document.addEventListener("DOMContentLoaded", function(event){

    const nextButton = document.getElementById('next_button');
    const prevButton = document.getElementById('prev_button');
    const linkList = document.getElementById('linkList');
    const listItems = linkList.getElementsByTagName('h3');
    
    const short_video = document.getElementById('short_video');
    const short_image = document.getElementById('short_image');
        
    const head1 = document.getElementById('head1');
    const head2 = document.getElementById('head2');
    const head3 = document.getElementById('head3');
    const head4 = document.getElementById('head4');
    const head5 = document.getElementById('head5');
    const head6 = document.getElementById('head6');
    const head7 = document.getElementById('head7');
    const head8 = document.getElementById('head8');
    const head9 = document.getElementById('head9');
    
    let currentIndex = 0;

    let videoNameArray = [
        "Who can be against us",
        "The Covernant",
        "Temporal Judgements",
        "Son of David",
        "Salvation guarentee",
        "Romans 8:31-38",
        "No condemnation",
        "My debt cancelled",
        "Made for more",
        "Love of God",
        "Justified",
        "Judgement seat",
        "Freedom in Christ",
        "Death defeated",
        "Captive by sin",
        "Blood of Christ",
        "Birmingham is dark"];

    let videoFileArray = [
        "g-8Ki9hkDc0",
        "rg7I-fY8CXE",
        "ds2Ujk_Nf5c",
        "miI8nbs1AzE",
        "REDvBm83KfE",
        "GO2L2K0r8Es",
        "bQfy8Ysgg-w",
        "fPK3dg1hZYk",
        "qci20oJdQBg",
        "PsivAMvnKRo",
        "exH1UDwtzZU",
        "tec-O-yw62M",
        "kXsdrt9aJMc",
        "y5L-tV6pbow",
        "NKdmGBt3wAk",
        "T_z33HDbm2k",
        "aI6WgL0OXa4"];
        
    let imageFileArray = [
        "../../Images/street/Who can be against you.jpg",
        "../../Images/street/The Covernant.jpg",
        "../../Images/street/Temporal Judgements.jpg",
        "../../Images/street/Son of David.jpg",
        "../../Images/street/Salvation guaranteed.jpg",
        "../../Images/street/Rom8v31-38.jpg",
        "../../Images/street/No condemnation.jpg",
        "../../Images/street/My debt cancelled.jpg",
        "../../Images/street/Made for more.jpg",
        "../../Images/street/Love of God.jpg",
        "../../Images/street/Justified.jpg",
        "../../Images/street/Judgement seat.jpg",
        "../../Images/street/Freedom in Christ.jpg",
        "../../Images/street/Death defeated.jpg",
        "../../Images/street/Captive by sin.jpg",
        "../../Images/street/Blood of Christ.jpg",
        "../../Images/street/Birmingham Is Dark.jpg"
        ];            
            
        
    function updateCurrentIndex(direction) {
        currentIndex += direction;
        if (currentIndex >= videoNameArray.length) {
            currentIndex = (videoNameArray.length - currentIndex);;
        } else if (currentIndex < 1) {
            currentIndex = (videoNameArray.length + currentIndex);
        }
        updateHeadings();
        displayImage();
        loadVideo();
    }

    function updateHeadings() {
        let divor = videoNameArray.length
        head1.innerHTML = videoNameArray[(currentIndex + 0) % divor];
        head2.innerHTML = videoNameArray[(currentIndex + 1) % divor];
        head3.innerHTML = videoNameArray[(currentIndex + 2) % divor];
        head4.innerHTML = videoNameArray[(currentIndex + 3) % divor];
        head5.innerHTML = videoNameArray[(currentIndex + 4) % divor];
        head6.innerHTML = videoNameArray[(currentIndex + 5) % divor];
        head7.innerHTML = videoNameArray[(currentIndex + 6) % divor];
        head8.innerHTML = videoNameArray[(currentIndex + 7) % divor];
        head9.innerHTML = videoNameArray[(currentIndex + 8) % divor];
    }
    
    head1.addEventListener('click', () => {updateCurrentIndex(-4);});
    head2.addEventListener('click', () => {updateCurrentIndex(-3);});
    head3.addEventListener('click', () => {updateCurrentIndex(-2);});
    head4.addEventListener('click', () => {updateCurrentIndex(-1);});
    head6.addEventListener('click', () => {updateCurrentIndex(1);});
    head7.addEventListener('click', () => {updateCurrentIndex(2);});
    head8.addEventListener('click', () => {updateCurrentIndex(3);});
    head9.addEventListener('click', () => {updateCurrentIndex(4);});
    
    // Event listener for prev button
    prevButton.addEventListener('click', () => {
        updateCurrentIndex(-1);});

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        updateCurrentIndex(1);
    });

    // Initial setting for the middle heading color
    updateHeadings();
    
    function displayImage() {
        let divor = videoNameArray.length;
        short_video.style.display = "none"
        short_image.style.display = "block"
        short_image.src = imageFileArray[(currentIndex + 4) % divor];
    }
    
    short_image.onclick = function(e) {
        playVideo()
    }
    
    function loadVideo() {
        document.getElementById('short_video').reset('short_video', videoFileArray[(currentIndex + 4) % videoNameArray.length]);
    }

    async function playVideo() {
        short_video.style.display = "block"
        short_image.style.display = "none"
        const player = await short_video.getYTPlayer();
    }

});
