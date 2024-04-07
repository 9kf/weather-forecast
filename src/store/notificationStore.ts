import { create } from "zustand";
import { devtools } from "zustand/middleware";

const HIDE_NOTIFICATION_DELAY = 3000;

export interface NotificationState {
  type: "success" | "error";
  isShowing: boolean;
  message: string;
}

export interface NotificationActions {
  show: (options: Omit<NotificationState, "isShowing">) => void;
  hide: () => void;
}

const initialNotificationState: NotificationState = {
  type: "success",
  isShowing: false,
  message: "",
};

export const useNotificationStore = create<
  NotificationState & NotificationActions
>()(
  devtools((set) => ({
    ...initialNotificationState,
    show: (options) =>
      set((state) => {
        setTimeout(() => {
          state.hide();
        }, HIDE_NOTIFICATION_DELAY);

        return { ...state, ...options, isShowing: true };
      }),
    hide: () => set(() => ({ ...initialNotificationState })),
  }))
);
