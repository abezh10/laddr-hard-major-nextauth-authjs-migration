export function middleware(context = {}) {
  return {
    allowed: true,
    context,
  };
}
