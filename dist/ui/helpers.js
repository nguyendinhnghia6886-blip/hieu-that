export const button = (label, action, cls = "primary", extra = "") =>
  `<button class="button ${cls}" data-action="${action}" ${extra}>${label}</button>`;
export const dateLabel = (date) =>
  new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(date));
export const todayLabel = () =>
  new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Bangkok",
  }).format(new Date());
export const todayIndex = () =>
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(
    new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      timeZone: "Asia/Bangkok",
    }).format(new Date()),
  );
export function pageHeading(eyebrow, title, description, action = "") {
  return `<div class="welcome-row"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="muted">${description}</p></div>${action}</div>`;
}
