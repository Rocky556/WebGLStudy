#ifdef GL_ES
precision mediump float;
#endif

// u_resolution:画布尺寸
// gl_FragCoord:表示当前片元着色器处理的候选片元窗口相对坐标信息，是一个 vec4 类型的变量 (x, y, z, 1/w)，其中 x, y 是当前片元的窗口坐标

uniform vec2 u_resolution;

float circleshape(vec2 position,float radius){
  return step(radius,length(position-vec2(0.5)));
}

void main(){
  vec2 position = gl_FragCoord.xy / u_resolution;
  // vec2 position = gl_FragCoord.xy-vec2(200.0,200.0);

  vec3 color=vec3(0.0);

  float circle = circleshape(position,0.2);

  color = vec3(circle);

  gl_FragColor=vec4(color,1.0);
}