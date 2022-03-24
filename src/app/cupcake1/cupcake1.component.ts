import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cupcake1',
  templateUrl: './cupcake1.component.html',
  styleUrls: ['./cupcake1.component.scss']
})
export class Cupcake1Component implements OnInit {
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';
  cupMaterial: MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }
  ngOnInit(): void {
  }

  cup$ = this.gltfLoaderService.load('assets/no12_-_cake_cupcake/scene.gltf');

  cupLoaded(object: Object3D) {
  
    /*console.log(object)
    console.log(object.children[0].children[0].children[0].children[0].children[0])*/
  
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('layer1icing|sprinkle|Dupli|_sprinkle_0 ')).material;
    this.applyColorToMaterial(this.#color);
  }
  
  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 10.5; 
    camera.position.setY(15); 
    camera.position.setX(8);
  
  }
  
  
  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
  
    }
  }
  

}
