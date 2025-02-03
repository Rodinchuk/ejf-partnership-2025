// src/components/ui/toast.ts
import * as React from "react";

export type ToastActionElement = React.ReactNode;

export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Toast = ({ id, title, description, action, open, onOpenChange }: ToastProps) => {
  return (
    <div id={id} className={`toast ${open ? "open" : "closed"}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};
