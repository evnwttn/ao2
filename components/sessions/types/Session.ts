import { Track } from "./Track";

export interface Session {
  title: string;
  author: string;
  tracks: Track[];
  parameters: string[];
  id: any;
  user: string;
}
