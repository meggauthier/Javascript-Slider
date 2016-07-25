window.onload = function () {
		var slider = document.getElementsByClassName('slider')[0], //finds a css element who's element is "slider"
		title = document.getElementsByClassName('title')[0],
		images = slider.getElementsByTagName('img'), 			  //here we are calling all of the elements within the variable we named "slider." in this case the images. 
		counter = 0,												 //this begins the images, beginning with 0. so if i wanted the third image to show first, I would name it 2
		nextBtn = slider.getElementsByClassName('next')[0],		 //nextBtn is a variable that references the button who's class is next. 
		prevBtn = slider.getElementsByClassName('prev')[0];		 //prevBtn  is a variable that references the button who's class is prev. //element is any html tag.
		

	function showImage (index) {									//declares a funtion called show image that allows for 1 parameter to be passed into it and that p. is called "index"
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <images.length; i += 1) {			   //for loop creates a variable that says where to begin counting and loops through however many images you have(length)
			images[i].className = 'hideImage';				  //hiding the images because we are applying the class hideimage to each image (see the css its says display:none) 
		}
		
		//images[0].className = "showImage";
		//images[1].className = "hideImage";
		//images[2].className = "hideImage";
		
		
		//add the showImage className to the img element you want
		images[index].className = 'showImage';				  //this reveals the image from the array that we called out of index (whatever I named it) index reps the number of 
		
		title.innerHTML = images[index].alt;
	}	
	
	function nextImg () {
		//counter cariable gets teh current img selected
		//if we have the last im, we switch back to the fist one again
		
		if (counter < images.length -1) {
			counter += 1;	// counter = counter + 1 and this means that if i have 3 images in an array & the unit we are on is less than than 0, it will increment to the next number.
		}
		else {
			counter = 0;
		}
		showImage(counter);
	}
	
	function prevImg () {
		//counter variable gets the current img selected
		//if we have the last im, we switch back to the fist one again
		
		if (counter >0) {
			counter -= 1;
		}
		else {
			counter = images.length -1;
		}
		showImage(counter);
	}
	
	//give the buttons an onclick event
	nextBtn.onclick = nextImg;
	prevBtn.onclick = prevImg;
	
	//says for the nextImg method to be called automatially every 10000 milliseconds)
	window.setInterval(nextImg, 10000);
	
	//start the slider
	showImage(counter);
};