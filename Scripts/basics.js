function scrollToText(itemNumber) {
    
    //remove header and replace with stick header when first button is pressed
    if (itemNumber == 1 && !window.matchMedia('(max-width: 768px)').matches){
        var navbar = document.getElementById('navbar');
        var placeholder = document.querySelector('.header-placeholder');
        var header = document.querySelector('.mainhead');
        const headerHeight = header.offsetHeight;
        header.style.transform = `translateY(-${headerHeight}px)`;
        navbar.style.transform = `translateY(-${headerHeight}px)`;
        navbar.style.zIndex = '10000';
    }

    var item = document.querySelector(`#item_${itemNumber}`);
    var basics_container = document.querySelector('.basics_container');
    basics_container.style.transition = 'transform 3s ease-in-out';
    //basics_container.style.transition = 'transform .7s ease-in-out';

    distance_x = get_new_x(item)
    distance_y = get_new_y(item)

    var scrollX = distance_x + currentX;
    var scrollY = distance_y + currentY;

    var translateX = scrollX;
    var translateY = scrollY;

    currentX = scrollX;
    currentY = scrollY;

    var jump_scale = .9 - ((Math.abs(distance_x) + Math.abs(distance_y)) / 15000);
    var jump_line_size = 9 - ((Math.abs(distance_x) + Math.abs(distance_y)) / 1500);

    basics_container.style.transform = `translate(${translateX}px, ${translateY}px)`;

    document.querySelectorAll('.line_all').forEach(function(element) {
        element.style.opacity = '0';
    });
    document.querySelectorAll('.line_to_' + itemNumber).forEach(function(element) {
        element.style.opacity = '0.1';
    });
    document.querySelectorAll('.line_all').forEach(function(element) {
        element.style.strokeWidth = jump_line_size + 'px';
    });


    document.querySelectorAll('.item_container').forEach(function(element) {
        element.style.transform = 'scale(' + jump_scale + ')';
    });
    document.querySelectorAll('.item_' + itemNumber).forEach(function(element) {
        element.style.opacity = '1';
    });

    setTimeout(function() {
        document.querySelectorAll('.item_container').forEach(function(element) {
            element.style.transform = 'scale(1)';
        });
        document.querySelectorAll('.line_all').forEach(function(element) {
            element.style.strokeWidth = '10px';
        });
        document.querySelectorAll('.line_from_' + itemNumber).forEach(function(element) {
            element.style.opacity = '1';
        });
    }, 1500);

}

function get_new_x(item) {
    var itemPosition = item.getBoundingClientRect();
    var itemWidth = item.getBoundingClientRect().width;
    return -itemPosition.left - (itemWidth / 2) + (window.innerWidth / 2);
}

function get_new_y(item) {
    var itemPosition = item.getBoundingClientRect();
    var itemHeight = item.getBoundingClientRect().height;
    return -itemPosition.top - (itemHeight / 2) + (window.innerHeight / 2);
}

document.addEventListener("DOMContentLoaded", function() {
    var basics_container = document.querySelector('.basics_container');

    basics_container.innerHTML = generateHTML();

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'line');
    svg.setAttribute('width', '3500');
    svg.setAttribute('height', '30000');
    
    var athiesm_button = document.getElementById("athiesm_button");
    var resources_button = document.getElementById("resources_button");

    athiesm_button.addEventListener("click", function() {
        if (window.screen.width >= 768) {
            window.location.href = '../../Desktop Pages/Religion/athiesm_d.html';
        } else {
            window.location.href = '../../Mobile Pages/Religion/athiesm.html';
        }
    });

    resources_button.addEventListener("click", function() {
        if (window.screen.width >= 768) {
            window.location.href = '../../Desktop Pages/Discipleship/seeking_d.html';
        } else {
            window.location.href = '../../Mobile Pages/Discipleship/seeking.html';
        }
    });

    for (var i = 0; i < dataArray.length; i++) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        var item = dataArray[i];

        var item_container = document.getElementById('item_' + i);
        var item_container_width = item_container.clientWidth;
        var item_container_height = item_container.clientHeight;

        if (item.option_1 != ''){
            var item_container = document.getElementById('item_' + item.option_1);
            var next_item_container_width = item_container.clientWidth;
            var next_item_container_height = item_container.clientHeight;
            var next_item = dataArray[item.option_1];
            if(item.option_2 != ''){
                x1 = item.pos_x+(item_container_width/3);
            }else{
                x1 = item.pos_x+(item_container_width/2); 
            }
            y1 = item.pos_y+item_container_height-50;
            x2 = next_item.pos_x+(next_item_container_width/2);
            y2 = next_item.pos_y+(next_item_container_height/2);

            
            x1 = item.pos_x+(item_container_width/2);
            y1 = item.pos_y+(item_container_height/2);

            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('class', 'line_from_'+i+' line_to_'+item.option_1+' line_all');
            svg.appendChild(line);
        }

        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        if (item.option_2 != ''){
            var item_container = document.getElementById('item_' + item.option_1);
            var next_item_container_width = item_container.clientWidth;
            var next_item_container_height = item_container.clientHeight;
            var next_item = dataArray[item.option_2];
            x1 = item.pos_x+((item_container_width/3)*2);
            y1 = item.pos_y+item_container_height-50;
            x2 = next_item.pos_x+(next_item_container_width/2);
            y2 = next_item.pos_y+(next_item_container_height/2);


            x1 = item.pos_x+(item_container_width/2);
            y1 = item.pos_y+(item_container_height/2);


            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('class', 'line_from_'+i+' line_to_'+item.option_2+' line_all');
            svg.appendChild(line);
        }
    
    }

    basics_container.appendChild(svg);

    var item = document.querySelector(`#item_0`);

    currentX = get_new_x(item);
    currentY = get_new_y(item);
    basics_container.style.transform = `translate(${currentX}px, ${currentY}px)`;
      
    function generateHTML() {
        var html = '';
        var css = '<style>';
        
        for (var i = 0; i < dataArray.length; i++) {
            var item = dataArray[i];

            html += '<div class="item_container" id="item_' + i + '">';
            if (item.text != "") html += '<h1 class="text' + i + '">' + item.text + '</h1>';
            html += '<div class="basics_button_container">';
            if (item.link != "") html += '<a class="basics_button" id="' + item.link + '" title="' + item.link_text + '">' + item.link_text + '</a>';
            if (item.button_1 != "") html += '<button class="basics_button" onclick="scrollToText(' + item.option_1 + ')">' + item.button_1 + '</button>';
            if (item.button_2 != "") html += '<button class="basics_button" onclick="scrollToText(' + item.option_2 + ')">' + item.button_2 + '</button>';
            html += '</div>';
            html += '</div>';
            
            css += '#item_' + i + ' { top: ' + item.pos_y + 'px; left: ' + item.pos_x + 'px; }';
        }
        css += '</style>';
        return css + html;
    }

})
