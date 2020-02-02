import { Pipe, PipeTransform } from '@angular/core';
import { JokeModel } from "@app/models";

@Pipe({ name: 'random4Jokes' })
export class Random4JokesPipe implements PipeTransform {
    transform(jokes: JokeModel[]): JokeModel[] {
        const random4Indexes = this.getRandom4Indexes();
        const random4Jokes = jokes.filter((joke, index) => random4Indexes.includes(index));
        return random4Jokes;
    }

    private getRandom4Indexes() {
        const random4Indexes = [];
        while (true) {
            const randomIndex = Math.floor(Math.random() * 10);
            if (random4Indexes.includes(randomIndex)) {
                continue;
            } else {
                random4Indexes.push(randomIndex);
                if (random4Indexes.length === 4) {
                    break;
                }
            }
        }
        return random4Indexes;
    }
} 