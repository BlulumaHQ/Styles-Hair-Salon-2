import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PreviewContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  version: "a" | "b";
  isInternalPage: boolean;
}

const PreviewContext = createContext<PreviewContextType | null>(null);

export const usePreview = () => {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error("usePreview must be inside PreviewProvider");
  return ctx;
};

const detectVersion = (): "a" | "b" => {
  const host = window.location.hostname;
  if (host.includes("-preview-b")) return "b";
  return "a";
};

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const version = detectVersion();
  const isInternalPage = location.pathname !== "/";

  // Auto-open popup 1s after navigating to any internal page
  useEffect(() => {
    if (!isInternalPage) {
      setIsPopupOpen(false);
      return;
    }
    const timer = setTimeout(() => setIsPopupOpen(true), 1000);
    return () => clearTimeout(timer);
  }, [isInternalPage, location.pathname]);

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  return (
    <PreviewContext.Provider value={{ isPopupOpen, openPopup, closePopup, version, isInternalPage }}>
      {children}
    </PreviewContext.Provider>
  );
};
