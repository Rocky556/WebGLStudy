#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rectshape(vec2 position,vec2 size){
  position=position-(vec2(.5)-size/2.);
  if(size[0]>position[0]&&size[1]>position[1]&&position[0]>0.&&position[1]>0.){
    return 0.;
  }
  else{
    return 1.;
  }
}

mat2 rotate(float angle){
  return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
  vec2 coord=gl_FragCoord.xy/u_resolution;
  vec3 color=vec3(0.);
  
  coord-=vec2(.5);
  coord=rotate(.8)*coord;
  coord+=vec2(.5);
  
  color+=vec3(rectshape(coord,vec2(.3,.3)));
  
  gl_FragColor=vec4(color,1.);
}