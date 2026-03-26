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

/**
 * Detect version from hostname: *-preview-b.* → "b", otherwise "a"
 */
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

  // Auto-open popup on internal pages
  useEffect(() => {
    if (isInternalPage) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [isInternalPage, location.pathname]);

  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <PreviewContext.Provider value={{ isPopupOpen, openPopup, closePopup, version, isInternalPage }}>
      {children}
    </PreviewContext.Provider>
  );
};
