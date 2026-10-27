// Keep source identity separate from editable question text.
export async function questionImportKey(kind, question) {
  const id = String(question.id || "").trim();
  const encoded = encodeURIComponent(id);
  if (id && /^[A-Za-z0-9_.:%-]{1,180}$/.test(encoded))
    return `${kind}:${encoded}`;
  const value =
    id ||
    JSON.stringify([
      question.type,
      question.prompt,
      question.options || [],
      question.answer ?? null,
      question.explanation || "",
      question.topic || "",
    ]);
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return `${kind}:${Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("")}`;
}

export function findImportedQuestion(rows, key, question) {
  return rows.find(
    (row) =>
      row.source_key === key ||
      (!row.source_key &&
        question.id &&
        row.content?.id === question.id &&
        row.content.type === question.type &&
        row.content.prompt === question.prompt &&
        JSON.stringify(row.content.options || []) ===
          JSON.stringify(question.options || [])),
  );
}
