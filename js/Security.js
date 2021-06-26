class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("").attribute("placeholder", "Answer 1");
        this.access2 = createInput("").attribute("placeholder", "Answer 2");
        this.access3 = createInput("").attribute("placeholder", "Answer 3");

        this.button1 = createButton('Check');
        this.button2 = createButton('Check');
        this.button3 = createButton('Check');

        this.reset = createButton('Reset');
    }

    display(){

        // Add code to make the buttons function as expected

        if(score === 0){
        this.access1.position(100,90);
        this.access2.position(700,190);
        this.access3.position(100,290);

        this.access1.style('background', 'white');
        this.access1.style('background', 'white');
        this.access1.style('background', 'white');

        this.button1.position(100,120);
        this.button2.position(700,220);
        this.button3.position(100,320);

        this.button1.style('background', 'lightgrey');
        this.button1.style('background', 'lightgrey');
        this.button1.style('background', 'lightgrey');

        this.reset.position(10000,10000);
        this.reset.style('background', 'green');

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
              this.button1.hide();
              this.access1.hide();
              score++;
            }
        })

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
              this.button2.hide();
              this.access2.hide();
              score++;
            }
        })

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
              this.button3.hide();
              this.access3.hide();
              score++;
            }
        })
    }

        if(score === 3){
          this.reset.position(500,250);
        }

        this.reset.mousePressed(() => {
          score = 0;
          this.button1.show();
          this.access1.show();
          this.button2.show();
          this.access2.show();
          this.button3.show();
          this.access3.show();

          this.access1 = createInput("").attribute("placeholder", "Answer 1");
          this.access2 = createInput("").attribute("placeholder", "Answer 2");
          this.access3 = createInput("").attribute("placeholder", "Answer 3");
        })
    }
}