export class PitchDetectionResult {
    constructor() {
        this.pitch = -1;
        this.probability = -1;
        this.pitched = false;
    }
}

export function pitchToMidiNote(pitch) {
    if (pitch < 20.0) {
        return { valid: false, note: 0, cents: 0 };
    }

    const inverseLog2 = 1.0 / Math.log10(2);
    const fNote = (12.0 * Math.log10(pitch / 55.0) * inverseLog2) + 33.0;
    const note = Math.round(fNote);
    const cents = Math.round((fNote - note) * 100);

    return { valid: true, note: note, cents: cents };
}