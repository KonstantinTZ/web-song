import { PitchDetectionResult } from "./PitchDetectionResult.js";
import { Grid } from "./Grid.js";

export class Renderer {
    #canvas;
    #ctx;
    #maxPitches = 100; // Максимальное количество значений для отображения
    #pitches = new Array(this.#maxPitches).fill(null); // Массив для хранения значений pitch, инициализируем null; // Массив для хранения значений pitch
    #grid;
    

    constructor(canvas) {
        if (!canvas) throw ("Render hasn't got canvas!");

        this.#canvas = canvas;

        this.noteHistory = [];
        
        //this.#grid = new Grid(canvas, 21, 108); // от A0 до C8
        this.#grid = new Grid(canvas, 40, 69); // от E2 до A4

        this.#ctx = canvas.getContext('2d');
        //this.#ctx.lineWidth = 3;
        this.#ctx.fillStyle = "#c7ecee";
    }

    addNote(midiNote) {
        this.noteHistory.unshift(midiNote);
        if (this.noteHistory.length > 50) this.noteHistory.pop();
        
    }

    // addPitch(newPitch) {
    //     if (!newPitch) throw ("no pitch came to renderer");

    //     if (newPitch.pitch == -1) return;

    //     console.log(`new pitch added to render: ${newPitch.pitch}`);

    //     // // Вставка нового значения pitch в середину массива
    //     // const middleIndex = Math.floor(this.#maxPitches / 2);
    //     // this.#pitches.splice(middleIndex, 0, newPitch.pitch); // Вставляем в середину
    //     // if (this.#pitches.length > this.#maxPitches) this.#pitches.pop(); // Удаляем последний элемент, если массив переполнен

    //     // // Добавление нового значения pitch
    //     this.#pitches.push(newPitch.pitch);
    //     // // Удаление старого значения, если массив переполнен
    //     if (this.#pitches.length > this.#maxPitches) {
    //         this.#pitches.shift();
    //     }
    //     //this.#drawPitchCurve();
    // }

    #drawPitchCurve() {
        //console.log(`Rendering || pitches ${this.#getPitchCount()}`)
       // this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height); // Очистка холста
        this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height); // Очистка холста
        this.#ctx.beginPath();
        this.#ctx.strokeStyle = 'navy';

        // 2 refactor
        const minPitch = 60; // Например, C2
        const maxPitch = 2048; // Примерно C7
        //

        let previousWasNull = true; // Флаг для отслеживания null значений

        this.#pitches.forEach((pitch, index) => {
            if (pitch === null)
                {
                    previousWasNull = true;
                    return;
                } 
                    

            const x = (index / this.#maxPitches) * this.#canvas.width;
            const y = this.#canvas.height - (Math.log(pitch / minPitch) / Math.log(maxPitch / minPitch) * this.#canvas.height);

            // Рисование линии к точке
            if (previousWasNull) {
                this.#ctx.moveTo(x, y);
                previousWasNull = false;
            } else {
                this.#ctx.lineTo(x, y);
            }
        });

        this.#ctx.stroke(); // Завершение рисования
    }

    updateAnimation() {
        //console.log("Rendering");
        // Сдвигаем все значения влево
        try {
            this.#pitches.pop(); // Удаление  элемента массива
            //this.#drawPitchCurve();
            this.#grid.draw(this.noteHistory);
        }
        catch (error)
        {
            console.error("animation error:", error);
        }
        //requestAnimationFrame(this.updateAnimation.bind(this)); // Планирование следующего обновления
    }

    #getPitchCount() {
        let counter;
        for (let i = 0; i < this.#pitches.length; i++) {
            if (this.#pitches[i] != -1) {
                counter++;
            }
        }
        return counter;
    }

}

// function DrawPitch(pitchResult) {
//     console.log('pitchResult: ${pitchResult}')
// }

// function DrawCircle(xPos, yPos, radius) {
//     // Draw the detected pitch
//     context.beginPath();
//     context.arc(xPos + radius, yPos - radius, radius, 0, 2 * Math.PI, false); // A circle on the right side of the canvas
//     context.fillStyle = 'red'; // Pitch color
//     context.fill();
// }