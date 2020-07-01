import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCesium]",
})
export class CesiumDirective {
  constructor(private _el: ElementRef) {}

  ngOnInit() {
    Cesium.Ion.defaultAccessToken = "<my-token>"
      
    const viewer = new Cesium.Viewer(this._el.nativeElement);
  }
}
