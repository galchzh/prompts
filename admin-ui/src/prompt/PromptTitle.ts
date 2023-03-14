import { Prompt as TPrompt } from "../api/prompt/Prompt";

export const PROMPT_TITLE_FIELD = "name";

export const PromptTitle = (record: TPrompt): string => {
  return record.name || String(record.id);
};
