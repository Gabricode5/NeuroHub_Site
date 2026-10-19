// Mise en forme minimale des textes éditoriaux de data/content.ts :
// **gras** → <strong>, *italique* → <em>. Le reste est échappé (pas de HTML brut).
const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const rich = (text: string) =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
