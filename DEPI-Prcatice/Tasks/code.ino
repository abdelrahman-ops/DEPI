// PINS FOR MOTORS
#define IN1 6 // RED GD
#define IN2 9 // BROWN HIGH
#define IN3 10
#define IN4 11

// PINS FOR IRs
#define IR_RIGHT 2
#define IR_LEFT  3

//SPEED
#define speed 180

void setup(){
  Serial.begin(9600);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN4, OUTPUT);
    pinMode(IR_RIGHT, INPUT);
    pinMode(IR_LEFT, INPUT);
}



void stopMotors(){
  analogWrite(IN1, 0);
  analogWrite(IN2, 0);
  analogWrite(IN3, 0);
  analogWrite(IN4, 0);
  delay(500);
}
void moveForward(){
  analogWrite(IN1, speed);
  analogWrite(IN2, 0);
  analogWrite(IN3, speed);
  analogWrite(IN4, 0);
}
void turnRight(){
  analogWrite(IN1, speed);
  analogWrite(IN2, 0);
  analogWrite(IN3, 0);
  analogWrite(IN4, 0);
}
void turnLeft(){
  analogWrite(IN1, 0);
  analogWrite(IN2, 0);
  analogWrite(IN3, speed);
  analogWrite(IN4, 0);
}




void loop(){
  bool IR_R = digitalRead(IR_RIGHT);
  bool IR_L = digitalRead(IR_LEFT);
  Serial.println(IR_R);
  Serial.println(IR_L);

  if(!IR_L  && !IR_R ){
    moveForward();
      Serial.println("F");

  }
   if(IR_L == 1 && IR_R == 1){
stopMotors();
  Serial.println("S");

  }
   if(IR_L == 0 && IR_R == 1){
    turnRight();
      Serial.println("R");

  }
   if(IR_L == 1 && IR_R == 0){
    turnLeft();
  Serial.println("L");

  }
}
