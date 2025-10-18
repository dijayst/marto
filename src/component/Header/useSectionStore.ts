import { create } from "zustand";
import { IconType } from "react-icons";

interface SectionState {
  title: string;
  subtitle: string;
  description: string;
  icon: IconType | null;
  setSection: (title: string, subtitle: string, description: string, icon: IconType) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  title: "Our Work",
  subtitle: "what we do.",
  description: "",
  icon: null,
  setSection: (title, subtitle, description, icon) =>
    set({ title, subtitle, description, icon }),
}));
