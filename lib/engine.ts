
type method = "input" | "output" | "video_filter"
type input = 
//bitrate_audio

class Core {
    private arrInput:input[] = [];
    private arrMethod:method[]

    constructor(arrInput: method[]) {
        this.arrInput = arrInput;
    }
    
    // Getter methods
    public getArrInput(): string[] {
        return this.arrInput;
    }

}

// Child class inheriting from Vehicle
class Car extends Core {
    

    constructor(arrInput: method[]) {
        super(arrInput);
    }

    public startEngine(): void {
        console.log("Car engine started with a purr!");
    }

    public honk(): void {
        console.log("Beep beep!");
    }
}

// Usage example
const myCar = new Car(["input"]);
myCar.startEngine();
myCar.honk();


//ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -c:a aac -strict experimental output.mp4