function Tool() {
    this.description = 'Electric Tool',    
    this.plugOrNot = function() {
      if (this.power>=100) {      
        return false;
      } else {      
        return true;
      }
    },
    this.output = function () {
      console.log('This is an ' + this.description + ' ' + 'called ' + this.kind.toUpperCase())
    }
}

function ToolType(kind, power, isWireless) {
  this.kind = kind,
  this.power = power,
  this.isWireless = isWireless || false
}

ToolType.prototype = new Tool();

ToolType.prototype.whatToDo = function () {
      let authToPlug = this.plugOrNot();
      if (authToPlug && !(this.isWireless)) {
         console.log('Keep It Plugged');
       } else if (!(authToPlug) && !(this.isWireless)) {
         console.log('Unplug It Immediately!!!!');
       } else if (this.isWireless) {
         console.log('Use It Unplugged');  
       }
    }


const drill = new ToolType ('drill', 250);  
console.log(drill.output(), drill.whatToDo());

const screwDriver = new ToolType ('screwdriver', 50, true);  
console.log(screwDriver.output(), screwDriver.whatToDo());

const miniSaw = new ToolType ('miniSaw', 50);  
console.log(miniSaw.output(), miniSaw.whatToDo());