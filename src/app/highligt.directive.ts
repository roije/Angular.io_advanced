/**
 * Created by roije on 03/11/2016.
 */
import { Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
  selector: '[highlight]'
})

/** Highlight the attached element in gold */

export class HighlightDirective{

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#34495e');
    renderer.setElementStyle(el.nativeElement, 'color', '#f39c12');
    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`)
  }
}
