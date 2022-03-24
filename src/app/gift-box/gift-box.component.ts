import { Component, Input, OnInit } from '@angular/core';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrls: ['./gift-box.component.scss']
})
export class GiftBoxComponent implements OnInit {

  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  @Input() 
  set colorfont(value: string) {
    this.#colorfont = value;
    this.applyColorfontToMaterial(value);
  }

  texture: any;
  canvas: any;
  #color = '';
  #colorfont = '';
  cupMaterial: MeshStandardMaterial | undefined;
  cupMaterialfont: MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }

  ngOnInit(): void {
  }
  cup$ = this.gltfLoaderService.load('assets/a_gift_box/scene.gltf ');
  cupLoaded(object: Object3D) {
    
    console.log(object)
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Cube_Body_0')).material;
    this.applyColorToMaterial(this.#color);
    this.cupMaterialfont = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Cylinder_Material_0')).material;
    this.applyColorfontToMaterial(this.#colorfont);
    
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 2.5;
    camera.position.setY(900);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
 
    }
  }

  applyColorfontToMaterial(colorfont: string) {
 
    if (this.cupMaterialfont) {
      this.cupMaterialfont.color.setHex(parseInt(colorfont.substring(1), 16));
      
    }
  }
}
