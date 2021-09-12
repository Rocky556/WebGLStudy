#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
  vec2 coord=(gl_FragCoord.xy/u_resolution);
  vec3 color=vec3(0.);
  
  float angle=atan(-coord.y+.25,coord.x-.5)*.1;
  float len=length(coord-vec2(.5,.25));
  
  color.r+=sin(len*40.+angle*40.+u_time);
  color.g+=cos(len*30.+angle*60.-u_time);
  color.b+=sin(len*50.+angle*50.+3.);
  
  // color.r+=sin(len*50.+angle*40.+u_time);
  
  gl_FragColor=vec4(color,1.);
}