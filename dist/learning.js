// Điểm nhập ổn định cho bài học và quy tắc đánh giá.
export { lessons } from "./content/lessons.js";
export { questionBank } from "./content/questions.js";
export { probes } from "./content/probes.js";
export {
  transferQuestion,
  transferBank,
  getTransferQuestion,
} from "./content/transfer.js";
export {
  getProbe,
  getVerificationProbe,
  getMisconceptionText,
  summarizeEvidence,
} from "./learning/evidence.js";
