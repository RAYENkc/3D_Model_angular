import { Component, Input, OnInit } from '@angular/core';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera, AlphaFormat, TextureLoader } from 'three';


@Component({
  selector: 'app-product-tow',
  templateUrl: './product-tow.component.html',
  styleUrls: ['./product-tow.component.scss']
})
export class ProductTowComponent implements OnInit {
  
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';
  cupMaterial: MeshStandardMaterial | undefined;
  constructor(private gltfLoaderService: NgtGLTFLoaderService) { }
//assets/cupcake/scene.gltf mazal
//assets/cake_for_sketchfabday/scene.gltf  camera.zoom = 40.5; c bon
//assets/cake/scene.gltf ma7abitch ti5dim c bon 
//assets/cupcake_cake_skanned_6/scene.gltf kbira c bon
//assets/day_3_cake/scene.gltf camera.zoom = 5.5; camera.position.setY(10); camera.position.setX(350); name_lotani = Cylinder001_Farfor_0 ; name_crem = Cylinder004_Main_cake_0; name_frais = Line007_klybnichka_0; name_choclata= Plane001_chocolate_0
//assets/double_chocolate_cake_with_sprinkles/scene.gltf   camera.zoom = 4.5; camera.position.setY(10); name_pipite_chocola = layer1icing|sprinkle|Dupli|_sprinkle_0 ; name_crem = Cylinder001_whippedcream_0; name-cake = layer1_cake_0; name-chingom = cherry_cherry_0
//assets/free_to_download_handpainted_stylized_cupcake/scene.gltf   camera.zoom = 14.5; camera.position.setY(10); no modification
//assets/no12_-_cake_cupcake/scene.gltf camera.zoom = 10.5; camera.position.setY(15); camera.position.setX(8); name_emplage= Object_4; name_cake=Object_6; name-pipiter= Object_8
//assets/soda_can/scene.gltf  camera.zoom = 50.5; camera.position.setY(700); camera.position.setX(250); name-color= pCylinder10_lambert1_0
//assets/mug_1/scene.gltf  camera.zoom = 30.5; camera.position.setY(4); 
//assets/popcorn_bucket/scene.gltf camera.zoom = 30.5; camera.position.setY(6); ma7abich yitbadel
//assets/popcorn_bucket_1/scene.gltf  camera.zoom = 30.5; camera.position.setY(6); ma7abich yitbadel
//assets/valentines_chocolate_box/scene.gltf ma7abitch ti5dim
//assets/a_gift_box/scene.gltf  camera.zoom = 2.5; camera.position.setY(900); name_box=Cube_Body_0 name_gorbita = Cylinder_Material_0
//assets/bucket_hat/scene.gltf  camera.zoom = 5.5; camera.position.setY(3); ma7abitch timchi
//assets/cat_mug/scene.gltf camera.zoom = 5.5; camera.position.setY(10); ma7abich yitbadel

cup$ = this.gltfLoaderService.load('assets/cat_mug/scene.gltf');

cupLoaded(object: Object3D) {
  
 /* console.log(object)
  console.log(object.children[0].children[0].children[0].children[0].children[0])
  console.log(object.children[0].children[0].children[0].children[1].children[0])
  console.log(object.children[0].children[0].children[0].children[2].children[0])*/
  this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('steam')).material;
  this.applyColorToMaterial(this.#color);
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
    camera.position.setY(10);
    //camera.position.setX(50);

  }


  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      console.log(this.cupMaterial)
   
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));

    }
  }

}
