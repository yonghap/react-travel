// src/data/tickets.ts

export interface Ticket {
  city: string;
  code: string;
  startDate: string;
  endDate: string;
  fewDate: number;
  startNation: string;
  depNation: string;
  transport: "plane" | "train" | "bus" | "ship";
}

export const tickets: Ticket[] = [
  {
    city: "Tokyo",
    code: "JP",
    startDate: "2025.05.01",
    endDate: "2025.05.07",
    fewDate: 7,
    startNation: "KR",
    depNation: "JP",
    transport: "plane",
  },
  {
    city: "New York",
    code: "US",
    startDate: "2025.06.10",
    endDate: "2025.06.20",
    fewDate: 10,
    startNation: "KR",
    depNation: "US",
    transport: "plane",
  },
  {
    city: "Paris",
    code: "FR",
    startDate: "2025.07.05",
    endDate: "2025.07.12",
    fewDate: 7,
    startNation: "KR",
    depNation: "FR",
    transport: "plane",
  },
  {
    city: "Sydney",
    code: "AU",
    startDate: "2025.08.01",
    endDate: "2025.08.15",
    fewDate: 14,
    startNation: "KR",
    depNation: "AU",
    transport: "plane",
  },
  {
    city: "Bangkok",
    code: "TH",
    startDate: "2025.09.10",
    endDate: "2025.09.14",
    fewDate: 4,
    startNation: "KR",
    depNation: "TH",
    transport: "plane",
  },
  {
    city: "London",
    code: "GB",
    startDate: "2025.10.01",
    endDate: "2025.10.09",
    fewDate: 8,
    startNation: "KR",
    depNation: "GB",
    transport: "plane",
  },
  {
    city: "Los Angeles",
    code: "US",
    startDate: "2025.11.20",
    endDate: "2025.11.27",
    fewDate: 7,
    startNation: "KR",
    depNation: "US",
    transport: "plane",
  },
  {
    city: "Berlin",
    code: "DE",
    startDate: "2025.12.05",
    endDate: "2025.12.12",
    fewDate: 7,
    startNation: "KR",
    depNation: "DE",
    transport: "plane",
  },
  {
    city: "Singapore",
    code: "SG",
    startDate: "2026.01.15",
    endDate: "2026.01.20",
    fewDate: 5,
    startNation: "KR",
    depNation: "SG",
    transport: "plane",
  },
  {
    city: "Dubai",
    code: "AE",
    startDate: "2026.02.01",
    endDate: "2026.02.07",
    fewDate: 6,
    startNation: "KR",
    depNation: "AE",
    transport: "plane",
  },
];
