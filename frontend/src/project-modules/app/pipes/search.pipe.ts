import { Pipe, PipeTransform } from '@angular/core';
import { JokeModel } from "@app/models";

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(jokes: JokeModel[], searchString: string): JokeModel[] {
        if (searchString) {
            return jokes.filter(joke => {
                return joke.setup.toLowerCase().indexOf(searchString.toLowerCase()) > -1 || joke.punchline.toLowerCase().indexOf(searchString.toLowerCase()) > -1 || joke.type.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
            });
        } else {
            return jokes;
        }
    }
} 