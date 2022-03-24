import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-cake1',
  templateUrl: './cake1.component.html',
  styleUrls: ['./cake1.component.scss']
})
export class Cake1Component implements OnInit {
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

  cup$ = this.gltfLoaderService.load('assets/double_chocolate_cake_with_sprinkles/scene.gltf ');

cupLoaded(object: Object3D) {
  
 /* console.log(object)
  console.log(object.children[0].children[0].children[0].children[0].children[0])*/

  this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('layer1icing|sprinkle|Dupli|_sprinkle_0')).material;
  this.applyColorToMaterial(this.#color);

  this.cupMaterialfont = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Cylinder001_whippedcream_0')).material;
  this.applyColorfontToMaterial(this.#colorfont);

  this.cupMaterielcake = <MeshStandardMaterial>(<Mesh>object.getObjectByName('layer1_cake_0')).material;
    this.applyColorcakeToMaterial(this.#colorcake);

    this.cupMaterielfrais = <MeshStandardMaterial>(<Mesh>object.getObjectByName('cherry_cherry_0')).material;
    this.applyColorfraisToMaterial(this.#colorfrais);

}

controlsReady(controls: NgtSobaOrbitControls) {
  const orbitControls = controls.controls;
  orbitControls.enableZoom = false;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 2;
  const camera = orbitControls.object as PerspectiveCamera;
  camera.zoom = 4.5;
  camera.position.setY(10);

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
