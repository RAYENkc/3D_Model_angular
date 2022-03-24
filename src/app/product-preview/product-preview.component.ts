import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera, AlphaFormat, TextureLoader } from 'three';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  
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
  
  texmgr = new THREE.TextureLoader();
 
 
  #img = new TextureLoader().load("assets/Brick_Wall_017_normal.jpg")

 

  cupMaterial: MeshStandardMaterial | undefined;
  cupMaterialfont: MeshStandardMaterial | undefined;
  cupMaterielImg : MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  //assets/cupcake/scene.gltf
  cup$ = this.gltfLoaderService.load('assets/cup.glb');

  cupLoaded(object: Object3D) {
    
    console.log(object)
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
 
    this.texture =this.texmgr.load("assets/Brick_Wall_017_normal.jpg", function(texture) {
      console.log("TEXTURE LOADED", texture)
      texture.anisotropy = 16
      var material = new THREE.MeshPhongMaterial( { map: texture, opacity:1, transparent: true} );

     });
    /*this.cupMaterial.map = this.#img
    this.cupMaterial.map.mapping = 200
    console.log(this.cupMaterial.map)
    console.log(this.cupMaterial.map.mipmaps)*/
    //this.applyColorToMaterial(this.#color);
    this.cupMaterialfont = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_3')).material;
    this.applyColorfontToMaterial(this.#colorfont);
    
  }
 

  
  ngOnInit() {
 
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 2;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 4.5;
    camera.position.setY(4);
    camera.position.setZ(4);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
 
    
    
     /*this.cupMaterial.map = this.#texmgr.load("assets/Brick_Wall_017_normal.jpg")
     this.cupMaterial.normalMap = this.#img
     this.cupMaterial.displacementMap = this.#img
     this.cupMaterial.displacementScale =  0.08 
     this.cupMaterial.roughness = 1*/
     
     
      // = this.#img
      
    }
  }

  applyColorfontToMaterial(colorfont: string) {
 
    if (this.cupMaterialfont) {
      this.cupMaterialfont.color.setHex(parseInt(colorfont.substring(1), 16));
      
    }
  }
}
