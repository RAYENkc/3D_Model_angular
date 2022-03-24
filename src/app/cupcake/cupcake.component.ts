import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cupcake',
  templateUrl: './cupcake.component.html',
  styleUrls: ['./cupcake.component.scss']
})
export class CupcakeComponent implements OnInit {
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

  cup$ = this.gltfLoaderService.load('assets/free_to_download_handpainted_stylized_cupcake/scene.gltf');
  cupLoaded(object: Object3D) {
  
  /*  console.log(object)
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
    camera.zoom = 14.5; camera.position.setY(10);
  
  }
  
  
  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
  
    }
  }
  

}
