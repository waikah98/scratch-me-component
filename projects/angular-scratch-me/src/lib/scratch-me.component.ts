import {
  ChangeDetectorRef,
  Component, ElementRef, HostListener,
  Inject, OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DialogData} from "../model/dialog-data-model";

@Component({
  selector: 'lib-scratch-me',
  templateUrl: './scratch-me.component.html',
  styleUrls: ['./scratch-me.component.scss']
})
export class ScratchMeComponent implements OnInit, OnDestroy {
  urlMap: SafeResourceUrl | undefined;

  // @ts-ignore
  private listener: () => void;

  constructor(
    private _mdr: MatDialogRef<ScratchMeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl("public-flutter/index.html");
  }

  ngOnDestroy() {
    this.listener();
  }

  loadIframe(target: any) {
    console.log('load finished');
    (target as HTMLElement).dispatchEvent(new Event('finishLoad', { bubbles: true }))
  }

  @HostListener('finishLoad')
  loadCustomEvent() {
    if (this.elementRef.nativeElement.querySelector("iframe").contentDocument.body.querySelector("#inputValue")) {
      // Set value into flutter web app
      this.elementRef.nativeElement.querySelector("iframe").contentDocument.body.querySelector("#inputValue").value = this.data.description

      // Value set angular app to flutter web app
      console.log("The input value from setting: ", this.elementRef.nativeElement.querySelector("iframe")?.contentDocument.body.querySelector("#inputValue").value)
    }
  }

  CloseDialog() {
    this.listener = this.renderer.listen("document", "click", event => {
      // Value from flutter web app
      console.log("Total prize get: RM", this.elementRef.nativeElement.querySelector("iframe")?.contentDocument.body.querySelector("#getValue").value)
    });

    this._mdr.close({
      data: {
        modelClose: true,
      },
    });
  }
}
