#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
  vec2 coord=(gl_FragCoord.xy/u_resolution.xy);
  float color=0.;
  
  color+=sin(coord.x*50.+cos(u_time+coord.y*10.+sin(coord.x*50.+u_time*2.)))*2.;
  color+=cos(coord.x*20.+sin(u_time+coord.y*10.+cos(coord.x*50.+u_time*2.)))*2.;
  color+=sin(coord.x*30.+cos(u_time+coord.y*10.+sin(coord.x*50.+u_time*2.)))*2.;
  color+=cos(coord.x*10.+sin(u_time+coord.y*10.+cos(coord.x*50.+u_time*2.)))*2.;
  
  gl_FragColor=vec4(vec3(color+coord.y,color+coord.x,color),1.);
}