class Tool {
    constructor(kind, power) {
      this.kind = kind;
      this.power = power;    
    }
    
    plugOrNot() {
      if (this.power>=100) {      
        return false;
      } else {      
        return true;
      }
    }
  }
  
  class ToolType extends Tool {
      constructor(kind, power, isWireless){
        super(kind, power);
        this.isWireless = isWireless || false;
      }
      whatToDo() {
        let authToPlug = super.plugOrNot();
        if (authToPlug && !(this.isWireless)) {
          console.log('Keep It Plugged');
        } else if (!(authToPlug) && !(this.isWireless)) {
          console.log('Unplug It Immediately!!!!');
        } else if (this.isWireless) {
          console.log('Impossible To Plug');  
        }
      }
    }
  
  
  const drill = new ToolType ('drill', 250);  
  console.log(drill, drill.whatToDo());
  
  const screwDriver = new ToolType ('screwdriver', 50, true);  
  console.log(screwDriver, screwDriver.whatToDo());
  
  const miniSaw = new ToolType ('miniSaw', 50);  
  console.log(miniSaw, miniSaw.whatToDo());