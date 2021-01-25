var start = new Date().getTime();
		
		var end = new Date().getTime();
		
		var timeTaken = (end - start) / 1000;
		
		var bestTime = 0;
		
		var total = 0;
		
		var timeArray = [];

		var count = 0;
		
		function yourTime() {
		
			end = new Date().getTime();
			
			timeTaken = (end - start) / 1000;
			
			document.getElementById("yourTime").innerHTML = timeTaken + "s"
		}
		
		function yourBestTime() {
		
			if (timeTaken < bestTime || bestTime == 0) {
			
				bestTime = timeTaken
				
				document.getElementById("bestTime").innerHTML = bestTime + "s"
			
			}else {}
		
		}
		
		function yourAverageTime() {
		
			var newTime = timeArray.push(timeTaken);

    		var totalTime = timeArray.reduce (function(previous, current) {

    			return current += previous;

    		})

			var avgTime = totalTime / timeArray.length;

 			document.getElementById("avgTime").innerHTML = avgTime.toFixed(3) + "s";

		}
		
		
		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
			return color;
		}
		
		function makeShapeAppear(){
		
			var top = Math.random() * 200;
			
			var left = Math.random() * 200;
			
			var width = (Math.random() * 50) + 50;
			
			if (Math.random() > 0.5) {
			
				document.getElementById("shape").style.borderRadius = Math.random() * 50 + "%";
			
			}else{}
			
			document.getElementById("shape").style.backgroundColor = getRandomColor();
			
			document.getElementById("shape").style.width = width + "px";
			
			document.getElementById("shape").style.height = width + "px";
			
			document.getElementById("shape").style.top = top + "px";
			
			document.getElementById("shape").style.left = left + "px";
			
			document.getElementById("shape").style.display = "block";
			
			start = new Date().getTime();
		
		}
		
		function appearAfterDelay() {
		
			setTimeout(makeShapeAppear, Math.random()* 2000);
		
		}
		
		appearAfterDelay();
		
		document.getElementById("shape").onclick = function() {
			
			document.getElementById("shape").style.display = "none";
			
			yourTime();
			
			yourBestTime();
			
			yourAverageTime();
			
			appearAfterDelay();
		
		}
