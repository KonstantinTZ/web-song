export class Grid {
    constructor(canvas, minMidi, maxMidi) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.minMidi = minMidi;
        this.maxMidi = maxMidi;
    }

    draw(noteHistory) {
        this.clearCanvas();
        this.drawGrid();
        this.drawNotes(noteHistory);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGrid() { 
        console.log(`minMidi: ${this.minMidi}, maxMidi: ${this.maxMidi}`);

        const totalKeys = this.maxMidi - this.minMidi + 1; // = midiRange
        const keyHeight = this.canvas.height / totalKeys;
        const octaveHeight = keyHeight * 12; // высота одной октавы

        for (let i = 0; i < totalKeys; i++) {
            const midiNote = this.minMidi + i;            
            const y = this.canvas.height - (i + 1) * keyHeight;
            this.ctx.beginPath();
            this.ctx.rect(0, y, this.canvas.width, keyHeight);
            this.ctx.fillStyle = this.isBlackKey(midiNote) ? '#ccc' : '#fff';
            this.ctx.fill();

            //Рисуем тонкие разделительные линии
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#000';
            this.ctx.stroke();
            
            console.log(`midiNote: ${midiNote}, NoteName: ${this.getNoteName(midiNote)}`);
            // Добавляем текст с названием ноты
            if (!this.isBlackKey(midiNote)) {
                const octave = Math.floor((midiNote - 12) / 12);
                const note = this.getNoteName(midiNote);
                if (note === 'C') {
                    this.ctx.fillStyle = '#000';
                    this.ctx.font = '12px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText(`${note}${octave}`, 5, y + keyHeight - 5);
                }
            }
        }
    }

    isBlackKey(midiNote) {
        const scalePosition = (midiNote) % 12;
        return [1, 3, 6, 8, 10].includes(scalePosition);
    }

    getNoteName(midi) {
        const scalePosition = (midi - 12) % 12;
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        return noteNames[scalePosition];
    }

    drawNotes(noteHistory) {
        const midiRange = this.maxMidi - this.minMidi + 1;
        const center = this.canvas.height / 2;

        let previousWasNull = true; // Флаг для отслеживания null значений
        this.ctx.beginPath();

        noteHistory.forEach((note, index) => {
            if (note === null) {
                previousWasNull = true;
                return;
            }

            const midiIndex = note.midiNote - this.minMidi + 0.5 + (note.midiCents / 100);
            const x = (1 - index / noteHistory.length) * (this.canvas.width / 2); // Смещение для создания эффекта движения
            const y = (1 - midiIndex / midiRange) * this.canvas.height;
            // Рисование линии к точке
            if (previousWasNull) {
                this.ctx.moveTo(x, y);
                previousWasNull = false;
            } else {
                this.ctx.lineTo(x, y);
            }
            //this.ctx.beginPath();
            //this.ctx.arc(x, center, 5, 0, 2 * Math.PI);
            //this.ctx.fill();
        });
        this.ctx.stroke(); // Завершение рисования

    }    
}
