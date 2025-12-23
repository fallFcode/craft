type method = "input" | "output" | "video_filter";

const arrDump = [
  { name: "input", command: "-i", set: "Nama.mp4" },
  { name:"Frame rate",command: "-filter:v" },
  { name: "output", set: "output.mp4" },
];

const result = arrDump.flatMap((obj) =>
  obj.command ? [obj.command, obj.set] : [obj.set]
);

console.log(result);
