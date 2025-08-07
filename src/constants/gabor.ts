type GABOR_PROJECT_IMAGE_SOURCE_KEYS = "process" | "write" | "burn";

export type GABOR_PROJECT_DATA_TYPES = {
  title: string;
  source: GABOR_PROJECT_IMAGE_SOURCE_VALUES;
}[];

export type GABOR_PROJECT_IMAGE_POSITION = {
  x: number;
  y: number;
};

export type GABOR_PROJECT_IMAGE_SOURCE_VALUES = Array<{
  src: string;
  alt: string;
  position: GABOR_PROJECT_IMAGE_POSITION;
}>;

export type GABOR_PROJECT_IMAGE_SOURCE_TYPES = {
  [key in GABOR_PROJECT_IMAGE_SOURCE_KEYS]: GABOR_PROJECT_IMAGE_SOURCE_VALUES;
};

export const GABOR_PROJECT_IMAGE_SOURCE: GABOR_PROJECT_IMAGE_SOURCE_TYPES = {
  write: [
    {
      src: "/gabor/write-1.gif",
      alt: "Write 1",
      position: {
        x: -140,
        y: 20,
      },
    },
    {
      src: "/gabor/write-2.gif",
      alt: "Write 2",
      position: {
        x: 0,
        y: -110,
      },
    },
    {
      src: "/gabor/write-3.jpg",
      alt: "Write 3",
      position: {
        x: 160,
        y: 10,
      },
    },
  ],
  process: [
    {
      src: "/gabor/process-1.jpg",
      alt: "Process 1",
      position: {
        x: -160,
        y: 30,
      },
    },
    {
      src: "/gabor/process-2.gif",
      alt: "Process 2",
      position: {
        x: 10,
        y: -80,
      },
    },
    {
      src: "/gabor/process-3.jpg",
      alt: "Process 3",
      position: {
        x: 180,
        y: 0,
      },
    },
  ],
  burn: [
    {
      src: "/gabor/burn-1.jpg",
      alt: "Burn 1",
      position: {
        x: -120,
        y: 40,
      },
    },
    {
      src: "/gabor/burn-2.jpg",
      alt: "Burn 2",
      position: {
        x: 10,
        y: -60,
      },
    },
    {
      src: "/gabor/burn-3.jpg",
      alt: "Burn 3",
      position: {
        x: 160,
        y: 20,
      },
    },
  ],
};
