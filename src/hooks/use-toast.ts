// hooks/use-toast.ts
import { useState, useCallback } from "react";

// Custom toast hook to provide toast notifications
export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toast = useCallback((message: string) => {
    setToastMessage(message);

    // Automatically hide the toast after 5 seconds
    setTimeout(() => setToastMessage(null), 5000);
  }, []);

  return { toast, toastMessage };
};
