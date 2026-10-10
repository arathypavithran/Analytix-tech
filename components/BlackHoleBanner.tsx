"use client";

import { useEffect, useRef } from "react";
import "./BlackHoleBanner.css";

interface BlackHoleBannerProps {
  className?: string;
  showOverlay?: boolean;
}

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 r = rot(0.37);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = r * p * 2.05;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / u_resolution.y;
  
  // Symmetrically centered coordinates behind the hero banner
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

  // Smooth interactive mouse fluid displacement
  vec2 mouseOffset = (u_mouse / u_resolution - 0.5) * vec2(aspect, 1.0);
  p -= mouseOffset * 0.07;
  
  float r = length(p);
  float angle = atan(p.y, p.x);

  // Swirl frame-dragging (smooth flow through center, no singularity pinching)
  float swirl = 2.4 / (r + 0.32);
  float t = u_time * 0.32;
  
  // Sea tide rolling and swelling motion
  float tide = sin(t * 0.7) * 0.08 + cos(t * 0.35) * 0.05;
  float twistedAngle = angle + swirl - t * 0.75;
  
  vec2 swirlCoord = vec2(cos(twistedAngle), sin(twistedAngle)) * (r + tide);
  
  vec2 q = swirlCoord * 2.2;
  float f1 = fbm(q + vec2(-t * 0.4, t * 0.2));
  float f2 = fbm(q * 1.8 + vec2(f1 * 1.5 - t * 0.3, f1 * 1.5 + t * 0.15));
  float flow = mix(f1, f2, 0.55);

  float wave = sin(twistedAngle * 3.0 + r * 6.0 - t * 1.2) * 0.5 + 0.5;
  flow = mix(flow, wave, 0.35);

  // Edge vignette
  float edgeFade = 1.0 - smoothstep(0.70, 1.45, r);

  // Deep cosmic & oceanic blue-white color palette
  vec3 deepSpace = vec3(0.015, 0.022, 0.065);
  vec3 oceanicNavy = vec3(0.03, 0.12, 0.38);
  vec3 electricCyan = vec3(0.06, 0.72, 0.98);
  vec3 cosmicViolet = vec3(0.56, 0.34, 0.98);
  vec3 whiteCrest = vec3(0.94, 0.98, 1.0);

  vec3 col = mix(deepSpace, oceanicNavy, smoothstep(0.08, 0.42, flow));
  col = mix(col, electricCyan, smoothstep(0.38, 0.72, flow));
  col = mix(col, cosmicViolet, smoothstep(0.66, 0.88, flow) * (0.55 + 0.45 * sin(twistedAngle + t)));
  col = mix(col, whiteCrest, smoothstep(0.78, 0.96, flow) * 0.92);

  // Soft luminous energy in the vortex center (continuous flow with NO dark circle cutout)
  float centerEnergy = exp(-r * 2.8) * 0.45;
  col += vec3(0.05, 0.75, 0.98) * centerEnergy;
  col += vec3(0.55, 0.35, 1.0) * centerEnergy * 0.6;

  // Subtle starlight motes that twinkle with tidal flow
  float starDust = pow(noise(p * 24.0 + vec2(t * 0.08, -t * 0.04)), 12.0) * 0.5;
  col += vec3(0.85, 0.95, 1.0) * starDust * (1.0 - smoothstep(0.3, 1.2, r));

  // Edge vignette
  col *= edgeFade;

  float alpha = clamp(length(col) * 1.1 + centerEnergy * 0.3, 0.0, 0.85);

  gl_FragColor = vec4(col, alpha);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function BlackHoleBanner({
  className = "",
  showOverlay = true,
}: BlackHoleBannerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;

    // Initialize WebGL context (silently fall back if unavailable)
    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext("webgl", {
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        }) ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    } catch {
      return;
    }

    if (!gl) return;

    // Compile shaders
    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertShader || !fragShader) {
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const aPositionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");

    let animationFrameId: number | null = null;
    let isVisible = true;
    let startTime = performance.now();

    // Mouse coordinates for interactive fluid wave distortion
    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      targetMouseX = (e.clientX - rect.left) * dpr;
      targetMouseY = (rect.height - (e.clientY - rect.top)) * dpr;
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    function updateSize() {
      if (!canvas || !gl) return;
      const rect = canvas.getBoundingClientRect();
      // Cap devicePixelRatio at 1.5 for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      if (uResLoc) {
        gl.uniform2f(uResLoc, canvas.width, canvas.height);
      }
      if (curMouseX === 0 && curMouseY === 0) {
        targetMouseX = width * 0.5;
        targetMouseY = height * 0.5;
        curMouseX = targetMouseX;
        curMouseY = targetMouseY;
      }
    }

    function renderFrame(time: number) {
      if (!gl) return;
      if (uTimeLoc) {
        gl.uniform1f(uTimeLoc, time);
      }
      if (uMouseLoc) {
        gl.uniform2f(uMouseLoc, curMouseX, curMouseY);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function loop(currentTime: number) {
      if (!isVisible || isReducedMotion) {
        animationFrameId = null;
        return;
      }
      // Smooth lerp mouse tracking
      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;

      const elapsed = (currentTime - startTime) * 0.001;
      renderFrame(elapsed);
      animationFrameId = requestAnimationFrame(loop);
    }

    updateSize();

    if (isReducedMotion) {
      // Respect prefers-reduced-motion: render single static frame, no loop
      renderFrame(1.5);
    } else {
      animationFrameId = requestAnimationFrame(loop);
    }

    // ResizeObserver for responsive resizing on mobile and desktop
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
      if (isReducedMotion) {
        renderFrame(1.5);
      }
    });
    resizeObserver.observe(canvas);

    // IntersectionObserver to pause loop when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !isReducedMotion && animationFrameId === null) {
            animationFrameId = requestAnimationFrame(loop);
          }
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Listen to prefers-reduced-motion changes
    const onMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        renderFrame(1.5);
      } else if (isVisible && animationFrameId === null) {
        startTime = performance.now();
        animationFrameId = requestAnimationFrame(loop);
      }
    };
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", onMotionChange);
    } else {
      motionQuery.addListener(onMotionChange);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", onMotionChange);
      } else {
        motionQuery.removeListener(onMotionChange);
      }
      if (gl) {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`black-hole-canvas ${className}`}
        aria-hidden="true"
      />
      {showOverlay && (
        <div className="black-hole-overlay" aria-hidden="true" />
      )}
    </>
  );
}
