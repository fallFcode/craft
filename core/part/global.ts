export const ffmpegGlobal = {
  hideBanner: {
    label: "Hide Banner",
    flag: "hide_banner",
    boolean: false,
    mode: "boolean",
    isImportant: false,
  },
  logLevel: {
    label: "Log Level",
    flag: "log_level",
    boolean: false,
    mode: "boolean",
    isImportant: false,
  },
  y: {
    label: "Overwrite Output Files",
    flag: "y",
    boolean: false,
    mode: "boolean",
    isImportant: false,
  },
  stats: {
    label: "Show Stats",
    flag: "stats",
    boolean: false,
    mode: "boolean",
    isImportant: false,
  },
  threads: {
    label: "Number of Threads",
    flag: "threads",
    input: 0,
    mode: "number",
    isImportant: false,
  },
};
