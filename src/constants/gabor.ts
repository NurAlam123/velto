type GABOR_PROJECT_SOURCE_KEYS = "process" | "write" | "burn";

export type GABOR_PROJECT_SOURCE_VALUES = Array<{
  src: string;
  alt: string;
}>;

export type GABOR_PROJECT_SOURCE_TYPES = {
  [key in GABOR_PROJECT_SOURCE_KEYS]: GABOR_PROJECT_SOURCE_VALUES;
};

export const GABOR_PROJECT_SOURCE: GABOR_PROJECT_SOURCE_TYPES = {
  write: [
    {
      src: "/gabor/write-1.gif",
      alt: "Write 1",
    },
    {
      src: "/gabor/write-2.gif",
      alt: "Write 2",
    },
    {
      src: "/gabor/write-3.jpg",
      alt: "Write 3",
    },
  ],
  process: [
    {
      src: "/gabor/process-1.gif",
      alt: "Process 1",
    },
    {
      src: "/gabor/process-2.jpg",
      alt: "Process 2",
    },
    {
      src: "/gabor/process-3.jpg",
      alt: "Process 3",
    },
  ],
  burn: [
    {
      src: "/gabor/burn-1.jpg",
      alt: "Burn 1",
    },
    {
      src: "/gabor/burn-2.jpg",
      alt: "Burn 2",
    },
    {
      src: "/gabor/burn-3.jpg",
      alt: "Burn 3",
    },
  ],
};
