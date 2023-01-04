import { palette } from "../../styles";

// export interface TrackParams {
//   parameter: string;
//   colour: any;
//   comment: string;
// }

// interface Track {
//   title: string;
//   parameters: TrackParams[];
// }

// interface Session {
//   sessionTitle: string;
//   author: string;
//   tracks: Track[];
//   parameters: string[];
//   id: any;
//   user: string;
// }

// export const defaultSession: Session[] = [
//   {
//     sessionTitle: "the dark side of the moon",
//     author: "pink floyd",
//     id: "default",
//     user: "default",
//     tracks: [
//       {
//         title: "speak to me",
//         parameters: [
//           { parameter: "vocals", colour: "transparent", comment: "" },
//           { parameter: "guitar", colour: "transparent", comment: "" },
//           { parameter: "bass", colour: "transparent", comment: "" },
//           {
//             parameter: "percussion",
//             colour: palette.aoBlue,
//             comment: "",
//           },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: "transparent",
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoYellow, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "breathe (in the air)",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoGrey, comment: "" },
//           { parameter: "guitar", colour: palette.aoYellow, comment: "" },
//           { parameter: "bass", colour: palette.aoYellow, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: "transparent",
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoGrey, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "on the run",
//         parameters: [
//           { parameter: "vocals", colour: "transparent", comment: "nope" },
//           { parameter: "guitar", colour: palette.aoGrey, comment: "" },
//           { parameter: "bass", colour: palette.aoYellow, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoYellow, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoBlue,
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoYellow, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "time",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoYellow, comment: "" },
//           { parameter: "guitar", colour: palette.aoYellow, comment: "" },
//           { parameter: "bass", colour: palette.aoBlue, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoYellow,
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoYellow, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "the great gig in the sky",
//         parameters: [
//           { parameter: "vocals", colour: "transparent", comment: "" },
//           { parameter: "guitar", colour: palette.aoYellow, comment: "" },
//           { parameter: "bass", colour: palette.aoBlue, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoYellow, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: "transparent",
//             comment: "",
//           },
//           {
//             parameter: "guest vocals",
//             colour: palette.aoBlue,
//             comment: "i believe the lyrics are `wow` ",
//           },
//           { parameter: "fx", colour: "transparent", comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "money",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoGrey, comment: "" },
//           { parameter: "guitar", colour: palette.aoYellow, comment: "" },
//           {
//             parameter: "bass",
//             colour: palette.aoYellow,
//             comment: "dun daaa badum dun dun daaa dun",
//           },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoGrey,
//             comment: "sax bruh",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoBlue, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "us and them",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoYellow, comment: "" },
//           { parameter: "guitar", colour: palette.aoGrey, comment: "" },
//           { parameter: "bass", colour: palette.aoYellow, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoYellow,
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoYellow, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "any colour you like",
//         parameters: [
//           {
//             parameter: "vocals",
//             colour: palette.aoBlue,
//             comment: "i mean technically...",
//           },
//           { parameter: "guitar", colour: palette.aoGrey, comment: "" },
//           { parameter: "bass", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "percussion",
//             colour: palette.aoYellow,
//             comment: "need to retrack this",
//           },
//           { parameter: "keys", colour: palette.aoBlue, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: "transparent",
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoYellow, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "brain damage",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoGrey, comment: "" },
//           { parameter: "guitar", colour: palette.aoYellow, comment: "" },
//           { parameter: "bass", colour: palette.aoYellow, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoYellow,
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoBlue, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           { parameter: "done", colour: palette.aoGrey, comment: "" },
//         ],
//       },
//       {
//         title: "eclipse",
//         parameters: [
//           { parameter: "vocals", colour: palette.aoBlue, comment: "" },
//           { parameter: "guitar", colour: palette.aoGrey, comment: "" },
//           { parameter: "bass", colour: palette.aoBlue, comment: "" },
//           { parameter: "percussion", colour: palette.aoBlue, comment: "" },
//           { parameter: "keys", colour: palette.aoYellow, comment: "" },
//           {
//             parameter: "session musicians",
//             colour: palette.aoGrey,
//             comment: "",
//           },
//           { parameter: "guest vocals", colour: "transparent", comment: "" },
//           { parameter: "fx", colour: palette.aoGrey, comment: "" },
//           { parameter: "mix", colour: palette.aoGrey, comment: "" },
//           { parameter: "master", colour: palette.aoGrey, comment: "" },
//           {
//             parameter: "done",
//             colour: palette.aoGrey,
//             comment: "",
//           },
//         ],
//       },
//     ],
//     parameters: [
//       "title",
//       "vocals",
//       "guitar",
//       "bass",
//       "percussion",
//       "keys",
//       "session musicians",
//       "guest vocals",
//       "fx",
//       "mix",
//       "master",
//       "done",
//     ],
//   },
// ];
