import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, OnInit } from '@angular/core';
import { Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-popcorn1',
  templateUrl: './popcorn1.component.html',
  styleUrls: ['./popcorn1.component.scss']
})
export class Popcorn1Component implements OnInit {

  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }
  cup$ = this.gltfLoaderService.load('assets/popcorn_bucket_1/scene.gltf ');
  ngOnInit(): void {
  }
  cupLoaded(object: Object3D) {
  
  /*  console.log(object)
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
    camera.position.setY(6);

  }
}
