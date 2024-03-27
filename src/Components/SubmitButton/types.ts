export type SubmitButtonProps = {
  caption: string;
  disabled?: boolean;
  color: "submit" | "dismiss";
  onClick: () => void;
};
