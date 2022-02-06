import { WebGLRenderer } from 'three';
import base from './base';

const { size } = base;

const renderer = new WebGLRenderer({
  canvas: document.querySelector('canvas'),
});
renderer.setSize(size.width, size.height - 400);

export default renderer;
