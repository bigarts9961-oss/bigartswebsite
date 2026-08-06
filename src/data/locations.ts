export type Location = {
  id: string;
  name: string;
  address: string | null;
  addressNote?: string;
  mapsQuery: string | null;
  embedUrl?: string;
  days: string;
  hours: string;
  sundayHours?: string;
  schedule: { day: string; time: string; dayIndex: number }[];
};

const WEEKDAY_TIME = '6:30 AM - 11:30 AM';
const SUNDAY_TIME = '8:00 AM - 12:00 PM';
const CLOSED = 'Closed';

const mapsLink = (q: string) => `https://maps.google.com/?q=${encodeURIComponent(q)}`;
const mapsEmbed = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export const locations: Location[] = [
  {
    id: 'chatsworth',
    name: 'Chatsworth',
    address: '21534 Devonshire St H, Chatsworth, CA 91311',
    mapsQuery: mapsLink('21534 Devonshire St H, Chatsworth, CA 91311'),
    embedUrl: mapsEmbed('21534 Devonshire St H, Chatsworth, CA 91311'),
    days: 'Tue - Sun',
    hours: '7:00 AM - 3:00 PM',
    sundayHours: SUNDAY_TIME,
    schedule: [
      { day: 'Sunday', time: SUNDAY_TIME, dayIndex: 0 },
      { day: 'Monday', time: CLOSED, dayIndex: 1 },
      { day: 'Tuesday', time: '7:00 AM - 3:00 PM', dayIndex: 2 },
      { day: 'Wednesday', time: '7:00 AM - 3:00 PM', dayIndex: 3 },
      { day: 'Thursday', time: '7:00 AM - 3:00 PM', dayIndex: 4 },
      { day: 'Friday', time: '7:00 AM - 3:00 PM', dayIndex: 5 },
      { day: 'Saturday', time: '7:00 AM - 3:00 PM', dayIndex: 6 },
    ],
  },
  {
    id: 'mission-hills',
    name: 'Mission Hills',
    address: '15305 Devonshire St, Mission Hills, CA 91345',
    mapsQuery: mapsLink('15305 Devonshire St, Mission Hills, CA 91345'),
    embedUrl: mapsEmbed('15305 Devonshire St, Mission Hills, CA 91345'),

    days: 'Tue - Sun',
    hours: WEEKDAY_TIME,
    sundayHours: SUNDAY_TIME,
    schedule: [
      { day: 'Sunday', time: SUNDAY_TIME, dayIndex: 0 },
      { day: 'Monday', time: CLOSED, dayIndex: 1 },
      { day: 'Tuesday', time: WEEKDAY_TIME, dayIndex: 2 },
      { day: 'Wednesday', time: WEEKDAY_TIME, dayIndex: 3 },
      { day: 'Thursday', time: WEEKDAY_TIME, dayIndex: 4 },
      { day: 'Friday', time: WEEKDAY_TIME, dayIndex: 5 },
      { day: 'Saturday', time: WEEKDAY_TIME, dayIndex: 6 },
    ],
  },
  {
    id: 'sylmar',
    name: 'Sylmar',
    address: '12683 Glenoaks Blvd, Sylmar, CA 91342',
    mapsQuery: mapsLink('12683 Glenoaks Blvd, Sylmar, CA 91342'),
    embedUrl: mapsEmbed('12683 Glenoaks Blvd, Sylmar, CA 91342'),

    days: 'Wed - Sun',
    hours: WEEKDAY_TIME,
    sundayHours: SUNDAY_TIME,
    schedule: [
      { day: 'Sunday', time: SUNDAY_TIME, dayIndex: 0 },
      { day: 'Monday', time: CLOSED, dayIndex: 1 },
      { day: 'Tuesday', time: CLOSED, dayIndex: 2 },
      { day: 'Wednesday', time: WEEKDAY_TIME, dayIndex: 3 },
      { day: 'Thursday', time: WEEKDAY_TIME, dayIndex: 4 },
      { day: 'Friday', time: WEEKDAY_TIME, dayIndex: 5 },
      { day: 'Saturday', time: WEEKDAY_TIME, dayIndex: 6 },
    ],
  },
];
