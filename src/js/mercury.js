import { Mesh, MeshBasicMaterial, TextureLoader } from 'three';
import planets from './planets';
import map from '../maps/mercury.jpg';

const textureLoader = new TextureLoader();

const material = new MeshBasicMaterial({
  map: textureLoader.load(map),
});

const planet = new Mesh(planets.geometry, material);

export default planet;
