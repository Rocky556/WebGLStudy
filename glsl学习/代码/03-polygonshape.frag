#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.1415926535;

uniform vec2 u_resolution;

float polygonshape(vec2 position,float radius,float sides){
  position=position*2.-1.;
  float angle=atan(position.x,position.y);// 极坐标
  float slice=PI*2./sides;
  
  //return step(radius,cos(floor(.5+angle/slice)*slice-angle)*length(position)); // 周期函数
  return step(radius,cos(floor(angle/slice)*slice+slice/2.-angle)*length(position)); // 周期函数
}

void main(){
  vec2 position=gl_FragCoord.xy/u_resolution;
  
  vec3 color=vec3(0.);
  
  float polygon=polygonshape(position,.3,6.);
  
  color=vec3(polygon);
  
  gl_FragColor=vec4(color,1.);
}