var num = document.getElementById("num");
			var numRangeValue = document.getElementById("numRangeValue");
			var range = document.getElementById("range");
			var rangeRangeValue = document.getElementById("rangeRangeValue");
			var repeatLength = "1.5";
			var text = document.getElementById("text");
			var nonsense = document.getElementById("nonsense");
			function numRange() {
				if(numRangeValue.value <= 0.99999999999999 || numRangeValue.value >= 10.000000000000001) {
					numRangeValue.value = "1";
					num.innerText = "1"
				} else {
					num.innerText = numRangeValue.value
				}
			}
			function rangeRange() {
				if(rangeRangeValue.value == 0) {
					rangeRangeValue.value = "1";
					range.innerText = "0.1"
				} else {
					repeatLength = rangeRangeValue.value / 10
					range.innerText = repeatLength
				}
			}
			function generate() {
				var message = text.value.split(" ")
				var newMessage;
				for(let j = 0; j < numRangeValue.value; j ++) {
				for(let i = 0; i < message.length * (repeatLength / 2); i += 0.5) {
					if(newMessage == undefined) {
						newMessage = message[Math.floor(Math.random() * message.length)] + " ";
					}
					newMessage += message[Math.floor(Math.random() * message.length)] + " ";
					nonsense.innerHTML = newMessage;
				}
				newMessage += `\n\n`
				}
			}