import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
 
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

  texture: any;
  canvas: any;
  #color = '';
  #colorcake= '';
  #colorfrais= '';
  #colorfont = '';
  cupMaterial: MeshStandardMaterial | undefined;
  cupMaterialfont: MeshStandardMaterial | undefined;
  cupMaterielcake : MeshStandardMaterial | undefined;
  cupMaterielfrais : MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  //assets/cupcake/scene.gltf
  cup$ = this.gltfLoaderService.load('assets/day_3_cake/scene.gltf');
  cupLoaded(object: Object3D) {
    
    console.log(object)
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Cylinder001_Farfor_0')).material;
    this.applyColorToMaterial(this.#color);

    this.cupMaterialfont = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Cylinder004_Main_cake_0')).material;
    this.applyColorfontToMaterial(this.#colorfont);

    this.cupMaterielcake = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Line007_klybnichka_0')).material;
    this.applyColorcakeToMaterial(this.#colorcake);

    this.cupMaterielfrais = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Plane001_chocolate_0')).material;
    this.applyColorfraisToMaterial(this.#colorfrais);

    
  }
 

  ngOnInit(): void {
  }
  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 5.5; 
    camera.position.setY(50); 
    camera.position.setX(250);
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
