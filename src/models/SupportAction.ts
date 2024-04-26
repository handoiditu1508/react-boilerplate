type SupportAction = {
  id: number;
  text: string;
  idleIcon?: JSX.Element;
  activeIcon?: JSX.Element;
  disabled?: boolean;
  bottomDivider?: boolean;
  secondaryText?: string;
  actionHandler?: () => void;
};

export default SupportAction;
