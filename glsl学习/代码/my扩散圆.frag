#ifdef GL_ES
precision mediump float;
#endif

// u_resolution:画布尺寸
// gl_FragCoord:表示当前片元着色器处理的候选片元窗口相对坐标信息，是一个 vec4 类型的变量 (x, y, z, 1/w)，其中 x, y 是当前片元的窗口坐标

uniform vec2 u_resolution;
const float PI=3.1415926535;
uniform float u_time;

float circleshape(vec2 position,float[8]radius){
  float angle=atan(position.x/position.y);
  float slice=PI*2./8.;
  
  for(int i=-2;i<=2;i++){
    if(floor(angle/slice)==float(i)&&position.y>=0.){
      return step(cos(u_time)/(float(i)+3.)/2.+radius[i+2],length(position));
    }
    if(floor(angle/slice)==float(i)&&position.y<=0.){
      return step(cos(u_time)/(float(i)+7.)/2.+radius[i+6],length(position));
    }
  }
  
}

void main(){
  vec2 position=gl_FragCoord.xy/u_resolution;
  // vec2 position = gl_FragCoord.xy-vec2(200.0,200.0);
  
  vec3 color=vec3(0.);
  float radius[8];
  radius[0]=.2;
  radius[1]=.2;
  radius[2]=.2;
  radius[3]=.2;
  radius[4]=.2;
  radius[5]=.2;
  radius[6]=.2;
  radius[7]=.2;
  
  // radius[0]=.05;
  // radius[1]=.1;
  // radius[2]=.15;
  // radius[3]=.2;
  // radius[4]=.25;
  // radius[5]=.3;
  // radius[6]=.35;
  // radius[7]=.4;
  
  vec2 translate=vec2(-.5,-.5);
  position+=translate;
  
  float circle=circleshape(position,radius);
  
  color=vec3(1.-circle,0.,0.);
  
  gl_FragColor=vec4(color,1.);
}