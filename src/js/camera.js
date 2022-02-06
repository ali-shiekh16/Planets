import { PerspectiveCamera } from 'three';
import base from './base';

const { size } = base;

const camera = new PerspectiveCamera(
  75,
  size.width / (size.height - 400),
  0.1,
  1000
);

camera.position.setZ(30);

export default camera;
