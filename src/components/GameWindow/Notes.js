const Notes = Object.freeze({
    C0: 12,         // C in octave 0
    CSharp0: 13,    // C# in octave 0
    D0: 14,         // D in octave 0
    DSharp0: 15,    // D# in octave 0
    E0: 16,         // E in octave 0
    F0: 17,         // F in octave 0
    FSharp0: 18,    // F# in octave 0
    G0: 19,         // G in octave 0
    GSharp0: 20,    // G# in octave 0
    A0: 21,         // A in octave 0
    ASharp0: 22,     // A# in octave 0, usually the lowest key on an 88-key keyboard

    B0: 23, /// B in octave 0. 

    ///  C in octave 1. 
    C1: 24,
    ///  C# in octave 1. 
    CSharp1: 25,
    ///  D in octave 1. 
    D1: 26,
    ///  D# in octave 1. 
    DSharp1: 27,
    ///  E in octave 1. 
    E1: 28,
    ///  F in octave 1. 
    F1: 29,
    ///  F# in octave 1. 
    FSharp1: 30,
    ///  G in octave 1. 
    G1: 31,
    ///  G# in octave 1. 
    GSharp1: 32,
    ///  A in octave 1. 
    A1: 33,
    ///  A# in octave 1. 
    ASharp1: 34,
    ///  B in octave 1. 
    B1: 35,

    ///  C in octave 2. 
    C2: 36,
    ///  C# in octave 2. 
    CSharp2: 37,
    ///  D in octave 2. 
    D2: 38,
    ///  D# in octave 2. 
    DSharp2: 39,
    ///  E in octave 2. 
    E2: 40,
    ///  F in octave 2. 
    F2: 41,
    ///  F# in octave 2. 
    FSharp2: 42,
    ///  G in octave 2. 
    G2: 43,
    ///  G# in octave 2. 
    GSharp2: 44,
    ///  A in octave 2. 
    A2: 45,
    ///  A# in octave 2. 
    ASharp2: 46,
    ///  B in octave 2. 
    B2: 47,

    ///  C in octave 3. 
    C3: 48,
    ///  C# in octave 3. 
    CSharp3: 49,
    ///  D in octave 3. 
    D3: 50,
    ///  D# in octave 3. 
    DSharp3: 51,
    ///  E in octave 3. 
    E3: 52,
    ///  F in octave 3. 
    F3: 53,
    ///  F# in octave 3. 
    FSharp3: 54,
    ///  G in octave 3. 
    G3: 55,
    ///  G# in octave 3. 
    GSharp3: 56,
    ///  A in octave 3. 
    A3: 57,
    ///  A# in octave 3. 
    ASharp3: 58,
    ///  B in octave 3. 
    B3: 59,

    ///  C in octave 4, also known as Middle C. 
    C4: 60,
    ///  C# in octave 4. 
    CSharp4: 61,
    ///  D in octave 4. 
    D4: 62,
    ///  D# in octave 4. 
    DSharp4: 63,
    ///  E in octave 4. 
    E4: 64,
    ///  F in octave 4. 
    F4: 65,
    ///  F# in octave 4. 
    FSharp4: 66,
    ///  G in octave 4. 
    G4: 67,
    ///  G# in octave 4. 
    GSharp4: 68,
    ///  A in octave 4. 
    A4: 69,
    ///  A# in octave 4. 
    ASharp4: 70,
    ///  B in octave 4. 
    B4: 71,

    ///  C in octave 5. 
    C5: 72,
    ///  C# in octave 5. 
    CSharp5: 73,
    ///  D in octave 5. 
    D5: 74,
    ///  D# in octave 5. 
    DSharp5: 75,
    ///  E in octave 5. 
    E5: 76,
    ///  F in octave 5. 
    F5: 77,
    ///  F# in octave 5. 
    FSharp5: 78,
    ///  G in octave 5. 
    G5: 79,
    ///  G# in octave 5. 
    GSharp5: 80,
    ///  A in octave 5. 
    A5: 81,
    ///  A# in octave 5. 
    ASharp5: 82,
    ///  B in octave 5. 
    B5: 83,
});

export function getNoteByValue(value) {
    for (const [key, val] of Object.entries(Notes)) {
      if (val === value) {
        return key;
      }
    }
    return null; // Если значение не найдено
  }


