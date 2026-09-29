const CUSTOMER_SESSION_KEY = "legaldhara.customer-session";
export const CUSTOMER_AUTH_CHANGED_EVENT = "legaldhara-auth-changed";

export const hasCustomerSessionHint = (): boolean =>
  typeof window !== "undefined" && window.localStorage.getItem(CUSTOMER_SESSION_KEY) === "1";

export const setCustomerSessionHint = (isAuthenticated: boolean): void => {
  if (typeof window === "undefined") return;
  if (isAuthenticated) window.localStorage.setItem(CUSTOMER_SESSION_KEY, "1");
  else window.localStorage.removeItem(CUSTOMER_SESSION_KEY);
  window.dispatchEvent(new Event(CUSTOMER_AUTH_CHANGED_EVENT));
};
