import renderer from './renderer';
import camera from './camera';
import scene from './scene';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import neptune from './neptune';
import dom from './dom';

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(neptune);

function tick() {
  renderer.render(scene, camera);

  requestAnimationFrame(tick);

  controls.update();
}

tick();

dom();

console.log('hallo world');
