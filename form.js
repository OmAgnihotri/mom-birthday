class Form{
    constructor(){
      this.title("haPPY birthdaY MOM");
      this.button1=createButton("1");
      this.button2=createButton("2");
      this.button=createButton("back");
      this.button3=createButton("3");  
      this.button4=createButton("4");  
    }
    display(){
        

this.button1.position(200,100);
this.button2.position(200,200);
this.button3.position(200,300);
this.button4.position(200,400);
this.button1.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button.position(20,20);
});
this.button.mousePressed(()=>{
    this.button1.display();
    this.button2.display();
    this.button3.display();
    this.button4.display();

})
    }
}
