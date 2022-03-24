import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cake4',
  templateUrl: './cake4.component.html',
  styleUrls: ['./cake4.component.scss']
})
export class Cake4Component implements OnInit {

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

  cup$ = this.gltfLoaderService.load('assets/cupcake/scene.gltf ');

  cupLoaded(object: Object3D) {
  
  /*  console.log(object)
    console.log(object.children[0].children[0].children[0].children[0].children[0])
    console.log(object.children[0].children[0].children[0].children[1].children[0])
    console.log(object.children[0].children[0].children[0].children[2].children[0])*/
  
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_4')).material;
    this.applyColorToMaterial(this.#color);
  }
  
  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 3,5; 
    camera.position.setY(5); 
   // camera.position.setX(300);
    //camera.position.setZ(400);
    
  }
  
  
  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
  
    }
  }
}
