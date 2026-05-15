import type { CSSProperties } from "react";

export const imgHeader: CSSProperties = {
  width: "100%",
  borderRadius: 12,
  objectFit: "cover",
};

export const title: CSSProperties = {
  margin: 0,
  marginTop: 8,
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: 36,
  lineHeight: "32px",
  fontWeight: 600,
  color: "rgb(108, 92, 231)",
};

export const text: CSSProperties = {
  fontFamily: "'Inter', Arial, sans-serif",
  fontSize: 16,
  lineHeight: "24px",
  color: "rgb(46, 46, 46)",
};

export const activity: CSSProperties = {
  fontFamily: "'Inter', Arial, sans-serif",
  fontSize: 20,
  lineHeight: "0",
  fontWeight: 700,
  color: "rgb(46, 46, 46)",
};

export const info: CSSProperties = {
  fontFamily: "'Inter', Arial, sans-serif",
  margin: 0,
  fontSize: "14px",
  color: "rgb(46, 46, 46)",
};

export const addInfo: CSSProperties = {
  fontFamily: "'Inter', Arial, sans-serif",
  fontSize: 12,
  color: "rgb(46, 46, 46)",
};

export const button: CSSProperties = {
  marginTop: 0,
  borderRadius: 10,
  backgroundColor: "rgb(242, 183, 5)",
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 12,
  paddingBottom: 12,
  fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 600,
  color: "rgb(46, 46, 46)",
};

export const sportImg: Record<string, string> = {
  Football: "football.png",
  Rugby: "rugby.png",
  Basketball: "basketball.png",
  Handball: "handball.png",
  Volleyball: "volleyball.png",
  Running: "running.png",
  Natation: "natation.png",
  Cyclisme: "cyclisme.png",
  VTT: "VTT.png",
  Tennis: "tennis.png",
  "Tennis-de-table": "tennis_de_table.png",
  Badminton: "badminton.png",
  Squash: "squash.png",
  Padel: "padel.png",
  Bowling: "bowling.png",
  Fléchettes: "flechettes.png",
  Pétanque: "petanque.png",
  Karting: "karting.png",
  Canoë: "canoe.png",
  Surf: "surf.png",
  Ski: "ski.png",
  Snowboard: "snowboard.png",
  Patinage: "patinage.png",
  Escalade: "escalade.png",
  Randonnée: "randonee.png",
  Skateboard: "skateboard.png",
};
