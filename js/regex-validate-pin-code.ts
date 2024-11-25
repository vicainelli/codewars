export function validatePin(pin: string): boolean {
  return /^\d{4}(\d{2})?$/.test(pin);
}