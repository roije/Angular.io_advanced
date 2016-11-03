/**
 * Created by roije on 03/11/2016.
 */
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'awesome'})

/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform{

  transform(phrase: string): any {
    return phrase ? 'Awesome ' + phrase : '';
  }

}
