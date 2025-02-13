declare global {
  type SetTimeout = ReturnType<typeof setTimeout> | null;
  type SetInterval = ReturnType<typeof setInterval> | null;
}

export {}
