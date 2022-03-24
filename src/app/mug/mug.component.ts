import { Component, OnInit } from '@angular/core';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Object3D, PerspectiveCamera } from 'three';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';

@Component({
  selector: 'app-mug',
  templateUrl: './mug.component.html',
  styleUrls: ['./mug.component.scss']
})
export class MugComponent implements OnInit {

  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }
  cup$ = this.gltfLoaderService.load('assets/mug_1/scene.gltf');
  ngOnInit(): void {
  }
  cupLoaded(object: Object3D) {
  
 /*   console.log(object)
    console.log(object.children[0].children[0].children[0].children[0].children[0])
    console.log(object.children[0].children[0].children[0].children[1].children[0])
    console.log(object.children[0].children[0].children[0].children[2].children[0])*/
   
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 30.5; 
    camera.position.setY(4); 
    //camera.position.setX(50);

  }


}
