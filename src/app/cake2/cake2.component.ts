import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cake2',
  templateUrl: './cake2.component.html',
  styleUrls: ['./cake2.component.scss']
})
export class Cake2Component implements OnInit {

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

  @Input() 
  set colorcake(value: string) {
    this.#colorcake = value;
    this.applyColorcakeToMaterial(value);
  }

  @Input() 
  set colorfrais(value: string) {
    this.#colorfrais = value;
    this.applyColorfraisToMaterial(value);
  }

  #color = '';
  #colorfont = '';
  #colorcake= '';
  #colorfrais= '';

  cupMaterial: MeshStandardMaterial | undefined;
  cupMaterialfont: MeshStandardMaterial | undefined
  cupMaterielcake : MeshStandardMaterial | undefined;
  cupMaterielfrais : MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }
  ngOnInit(): void {
  }

  cup$ = this.gltfLoaderService.load('assets/cake/scene.gltf');

  cupLoaded(object: Object3D) {
  /*  console.log("objectobjectobjectobjectobject")
    console.log(object)
    console.log(object.children[0].children[0].children[0].children[0].children[0])
    console.log(object.children[0].children[0].children[0].children[40].children[0])
 */

    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('base_stand_0')).material;
    this.applyColorToMaterial(this.#color);
    this.cupMaterialfont = <MeshStandardMaterial>(<Mesh>object.getObjectByName('first_first_0')).material;
   this.applyColorfontToMaterial(this.#colorfont);

  this.cupMaterielcake = <MeshStandardMaterial>(<Mesh>object.getObjectByName('second_second_0')).material;
    this.applyColorcakeToMaterial(this.#colorcake);

    this.cupMaterielfrais = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Sphere_mala_1_0')).material;
    this.applyColorfraisToMaterial(this.#colorfrais);
  }
  
  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 2; 
    camera.position.setY(50); 
    camera.position.setX(300);
    camera.position.setZ(400);
    
    
  
  }
  
  
  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
  
    }
  }

  applyColorfontToMaterial(colorfont: string) {
 
    if (this.cupMaterialfont) {
      console.log("rayennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
      this.cupMaterialfont.color.setHex(parseInt(colorfont.substring(1), 16));
      
    }
  }
  applyColorcakeToMaterial(colorfont: string) {
   
    if (this.cupMaterielcake) {
      this.cupMaterielcake.color.setHex(parseInt(colorfont.substring(1), 16));
      
    }
  }
  
  applyColorfraisToMaterial(colorfrais: string) {
   
    if (this.cupMaterielfrais ) {
      this.cupMaterielfrais.color.setHex(parseInt(colorfrais.substring(1), 16));
      
    }
  }
  

}
